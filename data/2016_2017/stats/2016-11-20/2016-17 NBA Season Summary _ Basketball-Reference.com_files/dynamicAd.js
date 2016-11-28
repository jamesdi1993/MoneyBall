// This version of the dynamicAd builder is current as of Feb 6.
// There are two spots for products to be hard-coded into this file (loadFallBackProducts),
// for cases where the visitor has products in their history that are no longer in the
// product catalogue (allowing them to bypass the recommender)

var DynamicAd = {
  init: function(data, options, el, wrapper_el, template) {
    var base = this;

    base.$elem = $(el);
    base.wrapper_el = wrapper_el;
    base.options = $.extend({}, base.defaultOptions(), options);
    base.data = data;

    base.isRunning = true;
    base.override = false;
    base.currentIteration = 0;
    base.e = encodeURIComponent;
    if (data["products"].length < 1) { base.loadFallbackProducts() };
    base.numProducts = data["products"].length;
    base.loadEllipses(data["products"], base.options.ellipsesContainer);
    base.populateContainer(data, template);
    base.attachHandlers(base.options.click_element, base.options.base_click, base.options.use_click_parent);
    base.startCarousel();
  },

  loadFallbackProducts: function() {
    var base = this;
    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };

    // REPLACE THESE FALLBACKS WITH A CLIENT-SPECIFIC LIST (ASK DATA-SCIENCE FOR THE BEST PRODUCTS)
    for(var item = 0; item < fallbackProducts.length; item++){
      base.data.products.push(fallbackProducts[item]);
    }
    base.data.products = shuffle(base.data.products).slice(0,3);
  },

  startCarousel: function() {
    var base = this;
    var defaultCarouselOptions = {
      slideWidth: base.options.width / base.options.minSlides,
      number_slides_visible: base.options.minSlides,
      infiniteLoop: true,
      pager: false,
      controls: false,
      auto: true,
      onSlideBefore: base.onSlideBeforeCallback,
      onSlideAfter: base.onSlideAfterCallback,
      baseDynamicAd: base
    };
    if ((base.numProducts/base.options.maxSlides) <= 1) {
      defaultCarouselOptions["auto"] = false;
      defaultCarouselOptions["autoStart"] = false;
      base.hideControls();
    }
    base.carousel = base.$elem.bxSlider($.extend({}, defaultCarouselOptions, base.options));
    var curr_prods = base.currentProducts();
    for ( var i = 0 ; i < curr_prods.length ; i++ ) {
      base.lazyLoad(curr_prods[i]);
      curr_prods[i]["auto_display_captured"] = true;
      base.registerEvent("#prod-" + curr_prods[i].sku, "display");
    }
  },

  lazyLoad: function(prod) {
    if (!prod["auto_display_captured"]) {
      var $elem = $("#prod-" + prod.sku + ":not(.bx-clone)");
      var $lazy = $elem.find("img.lazy");
      $lazy.attr("src", prod.image_url).removeClass("lazy");
      $elem = $("#prod-" + prod.sku + ".bx-clone");
      $lazy = $elem.find("img.lazy");
      $lazy.attr("src", prod.image_url).removeClass("lazy");
    }
  },

  populateContainer: function(data, template) {
    var base = this;
    var products = data["products"];
    for (var i = 0; i < products.length; i++) {
      var content = template;
      //if they're not sending sale end-date, assume all sale-prices are OK
      if (!products[i].sale_price_end_date) {
        products[i].sale_price_end_date = new Date().getTime() + 1000;
      };
      var salePriceVisibility = "hidden";
      var oldPriceStatus = "";
      var priceBoxVisibility = 'none';
      var lowestPrice = products[i]["price"]; //set to regular price for now, we'll update if sale price is valid + lower
      var currentTime = (new Date().getTime())/1000;
      if (products[0]["sale_price"]
        && parseFloat(products[0]["sale_price"]) > 0
        && parseFloat(products[0]["sale_price"]) < parseFloat(products[0]["price"])) {
          // de-hide element that contains sale-price
          salePriceVisibility = "visible";
          // use this to add class to original price that has strikethrough, etc.
          oldPriceStatus = "old-";
          // unset priceBoxVisibility='none'
          priceBoxVisibility = '';
          // set lowestPrice to this valid sale_price
          lowestPrice = products[i]["sale_price"];
        };
        // decimalize_prices, if that option is set
        this.populatePriceInfo(products[i]);

        // Macro substitution
        products[i]["auto_display_captured"] = false;
        data["click_prefix"] = data["click_prefix"] || "";
        data["click_suffix"] = data["click_suffix"] || "";
        products[i]["chango_link"] = data["click_prefix"] + base.e(products[i].link) + data["click_suffix"];
        // stripped_title = products[i].title.replace("Mexx ", "");
        stripped_title = products[i].title;

        if (typeof customPriceDisplay != 'undefined' && customPriceDisplay["condition"] == true){
          if(isNaN(parseFloat(products[i].sale_price)) || parseFloat(products[i].sale_price) <= 0 || parseFloat(products[i].sale_price) >= parseFloat(products[i].price)){
            products[i].sale_price = customPriceDisplay["priceSymbol"] + products[i].price;
            products[i].price = '';
          }else{
            products[i].sale_price = customPriceDisplay["priceSymbol"] + products[i].sale_price;
            products[i].price = customPriceDisplay["priceSymbol"] + products[i].price; 
          }
        }

        // hide description if it includes ugly garbage like underscores
        description_visibility = !!products[i].desc.match('_') ? "hidden" : "visible"
        content = content.replace(/%%interaction_url%%/g, data.interaction_url)
        .replace(/%%catid%%/g, products[i].category)
        .replace(/%%sku%%/g, products[i].sku)
        .replace(/%%title%%/g, stripped_title)

        .replace(/%%desc%%/g, products[i].desc)
        .replace(/%%desc_visibility%%/g, description_visibility)

        .replace(/%%image%%/g, products[i].image_url)
        .replace(/%%link%%/g, products[i].chango_link)

        .replace(/%%price%%/g, products[i].price)
        .replace(/%%sale_price%%/g, products[i].sale_price)

        .replace(/%%price_dollars%%/g, products[i].price.split(".")[0])
        .replace(/%%price_cents%%/g, products[i].price.split(".")[1])

        .replace(/%%sale_price_dollars%%/g, products[i].sale_price.split(".")[0])
        .replace(/%%sale_price_cents%%/g, products[i].sale_price.split(".")[1])

        .replace(/%%sale_price_visibility%%/g, salePriceVisibility)
        .replace(/%%old_price%%/g, oldPriceStatus)
        .replace(/%%priceBoxVisibility%%/g, priceBoxVisibility)

        .replace(/%%lowest_price%%/g, lowestPrice)
        .replace(/%%lowest_price_dollars%%/g, lowestPrice.split(".")[0])
        .replace(/%%lowest_price_cents%%/g, lowestPrice.split(".")[1])
        .replace(/%%brand%%/g, products[i].brand);
        var title_visibility = 'visible';
        if (stripped_title.length <= 7) {
          content = content
          .replace(/%%short_title%%/g, stripped_title)
          .replace(/%%title_visibility%%/g, title_visibility);
        } else {
          title_visibility = 'hidden';
          content = content
          .replace(/%%short_title%%/g, "")
          .replace(/%%title_visibility%%/g, title_visibility);
        };
        base.$elem.append(content);
      }
    },

    populatePriceInfo: function(product) {
      var base = this;
      //product.sale_price_end_date = new Date().getTime() //They're not sending sale end-date
      if (base.options.decimalizePrices) {
        var decimalRegex = /\d*\./
        if (!product.price.toString().match(decimalRegex)) {
          product.price = product.price + ".00"
        }
        if (!product.sale_price.toString().match(decimalRegex)) {
          product.sale_price = product.sale_price + ".00"
        }
      }
    },

    attachHandlers: function(click_element, base_click, use_click_parent) {
      var base = this;
      $("body").on("click", click_element, function(click_element) {
        var clicked = click_element.currentTarget;
        if (!! use_click_parent) {
          clicked = click_element.currentTarget.parentNode
        }
        base.registerEvent("#" + clicked.id, "click");
        window.open(decodeURIComponent(clicked.getAttribute("data-href")))
      });
      $("body").on("click", base_click, function() {
        window.open(base.data.click_prefix + base.data.landing_url)
      })
    },

    hideControls: function() {
      $('#next').hide();
      $('#previous').hide();
    },

    loadEllipses: function(products, ellipsesContainer) {
      var base = this;
      if (base.options.useImageEllipses) {
        var ellipsesOpen = '<div class="recommendation-wrapper"><div class="recommendation-image">'
        var ellipsesClose = '</div></div>'
      } else {
        var ellipsesOpen = '<div class="dot"></div>'
        var ellipsesClose = '</div>'
      }
      for (var i = 0; i < products.length; i++) {
        var ellipsis = ellipsesOpen;
        if (base.options.useImageEllipses) { ellipsis += '<img src="' + products[i].image_url + '">' }
        ellipsis += ellipsesClose;
        $("."+ellipsesContainer).append(ellipsis)
      };
      if (base.options.useImageEllipses) {
        $("."+ellipsesContainer).children().first().children().addClass('active');
        $("."+ellipsesContainer).children().first().children().children().first().addClass('active');
      } else {
        $("."+ellipsesContainer).children().first().addClass('active');
      };
    },

    onSlideBeforeCallback: function(slideElement, oldIndex, newIndex) {
      curr_prods = this.baseDynamicAd.currentProducts();
      for ( var i = 0 ; i < curr_prods.length ; i++ ) {
        this.baseDynamicAd.lazyLoad(curr_prods[i]);
      }
    },

    onSlideAfterCallback: function(slideElement, oldIndex, newIndex) {
      var base = this;
      curr_prods = this.baseDynamicAd.currentProducts();
      for ( var i = 0 ; i < curr_prods.length ; i++ ) {
        if (!curr_prods[i]["auto_display_captured"] || this.baseDynamicAd.override) {
          curr_prods[i]["auto_display_captured"] = true;
          this.baseDynamicAd.registerEvent("#prod-" + curr_prods[i].sku, "display");
        }
      }
      if (this.baseDynamicAd.override) {
        this.baseDynamicAd.override = false;
      }
      // because this is a callback for bxSlider, 'this' refers to the bxSlider obj
      if (this.baseDynamicAd.$elem.getCurrentSlide() + 1 >= (this.baseDynamicAd.$elem.getSlideCount() / curr_prods.length)) {
        this.baseDynamicAd.currentIteration++;
        if (this.baseDynamicAd.currentIteration >= this.baseDynamicAd.options.maxIterations) {
          this.baseDynamicAd.$elem.stopAuto();
          this.baseDynamicAd.isRunning = false;
        }
      }
      this.baseDynamicAd.cycleEllipses(this.ellipsesContainer);
    },

    currentProducts: function() {
      if (this.data.products.length > 0) {
        var curr_prods = [];
        for (var i = 0 ; i < this.options.maxSlides ; i++ ) {
          var index = (this.options.maxSlides * this.$elem.getCurrentSlide()) + i;
          curr_prods.push(this.data.products[index % this.data.products.length]);
        }
        return curr_prods;
      }
    },

    registerEvent: function(el, event) {
      var elem = $(el);
      var interactionUrl = elem.data('interaction-url').replace(/%%interaction_event%%/g, event);
      (new Image).src = interactionUrl;
    },

    nextItem: function() {
      var base = this;
      base.override = true;
      base.$elem.goToNextSlide();
      var curr_prods = base.currentProducts();
      base.registerEvent("#prod-" + curr_prods[0].sku, 'next');
    },

    prevItem: function() {
      var base = this;
      base.override = true;
      base.$elem.goToPrevSlide();
      var curr_prods = base.currentProducts();
      base.registerEvent("#prod-" + curr_prods[curr_prods.length - 1].sku, 'previous');
    },

    pause: function() {
      var base = this;
      base.$elem.stopAuto();
    },

    resume: function() {
      var base = this;
      if (base.isRunning) {
        base.$elem.startAuto();
      }
    },

    cycleCarousel: function(element, fwd_if_true) {
      var base = this;
      $(element).click(function() {
        !! fwd_if_true ? base.nextItem() : base.prevItem()
      }).hover(function() {
        base.pause()
      }, function() {
        base.resume()
      })
    },

    cycleEllipses: function(ellipsesContainer) {
      var base = this;
      var ellipsesDivs = $("." + ellipsesContainer).children();
      if (base.options.useImageEllipses) {
        $("."+ellipsesContainer).children().children().removeClass('active');
        $("."+ellipsesContainer).children().children().children().removeClass('active');
        ellipsesDivs.get(base.$elem.getCurrentSlide()).firstChild.className += " active";
        ellipsesDivs.get(base.$elem.getCurrentSlide()).firstChild.firstChild.className += " active";
      } else {
        ellipsesDivs.removeClass("active");
        if(ellipsesDivs.get(base.$elem.getCurrentSlide()) != undefined){
          ellipsesDivs.get(base.$elem.getCurrentSlide()).className += " active";
        }
      };
    },

    clickEllipses: function(element) {
      var base = this;
      var ellipses_divs = $("." + element + " div");
      ellipses_divs.click(function() {
        if (base.options.useImageEllipses) {
          base.$elem.goToSlide(ellipses_divs.children().children().index(this.firstChild));
        } else {
          base.$elem.goToSlide(ellipses_divs.index(this));
        };
      }).hover(function() {
        base.pause()
      }, function() {
        base.resume()
      });
    },

    defaultOptions: function(element) {
      if (typeof carouselOptions != 'undefined'){
         return(carouselOptions)
      }else{
         return({
              maxIterations: 2,
              maxSlides: 1,
              height: 200, // px
              width: 280,
              // auto: true, //this doesn't go anywhere
              minSlides: 1,
              speed: 500,
              autoHover: true,
              pause: 2000, // num milliseconds to pause on each frame
              base_click: ".logo",
              click_element: ".prod-page",
              use_click_parent: false,
              ellipsesContainer: "ellipses",
              useImageEllipses: false,
              decimalizePrices: false,
            })
      }
    },
   
  };