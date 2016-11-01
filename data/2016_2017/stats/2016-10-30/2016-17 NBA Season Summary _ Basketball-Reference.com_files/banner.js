function startAd(){
    //Set Positions
    TweenLite.set([copy1, copy2], {left:"-=400px"});
    TweenLite.set([shadow_dollar, shadow_three, shadow_four, shadow_nine, shadow_zero, price], {opacity:0});
    TweenLite.set([shadow_dollar, shadow_three, shadow_four, shadow_nine, shadow_zero], {scaleX:0, left:"-=10px", transformOrigin:"right 0"});
    TweenLite.set([price], {scale:.6});
    TweenLite.set([price_shadow], {scale:.9});
    TweenLite.set(shine, {left:-112, opacity:.7});

var adContainer = document.getElementById("container");


    TweenMax.defaultOverwrite = "false";
    document.getElementById("banner").style.visibility = "visible";

    initAnimations();
    listeners();

function listeners(){
    container.addEventListener('mouseenter', ctaOver, false);
    container.addEventListener('mouseleave', ctaOut, false);
}

function ctaOver(){
    TweenLite.to(shine, .45, {left:112, ease:Sine.easeIn});
}

function ctaOut(){
    TweenLite.to(shine, 0, {left:-112, ease:Sine.easeIn});
}


}

// Animations

function initAnimations(){
    var sequence = new TimelineMax({onUpdate:duration});
    sequence
        .to(copy1, .5, {left:"+=400px", ease:Power4.easeOut}, "+=.1")
        .to(copy2, .5, {left:"+=400px", ease:Power4.easeOut}, "+=.5")

        .add("price_fading", "-=.5")
        .to(price, 1, {scale: 1, z: 0.1, rotationZ: 0.01, force3D:true, ease:Sine.easeOut}, "price_fading+=.0")
        .to(price, .5, {opacity: 1, ease:Sine.easeInOut}, "price_fading+=.2")

        .to(price_shadow, 1, {scale:1, ease:Sine.easeInOut}, "price_fading+=.2")
        .to([shadow_dollar, shadow_three, shadow_four, shadow_nine, shadow_zero], 1, {scaleX:1, left:"+=10px", ease:Sine.easeInOut}, "price_fading+=.1")
        .to([shadow_dollar, shadow_three, shadow_four, shadow_nine, shadow_zero], 1, {opacity:1, ease:Sine.easeInOut}, "price_fading+=.25")

        .to(shine, .45, {left:120, ease:Sine.easeIn},"+=.2")
        .set(shine,  {left:-120, ease:Sine.easeIn})

    function duration(){
        console.clear();
        console.log("Total Time: "+sequence.totalTime().toFixed(2)+" seconds");
    }

}

//
