(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./flare.png?1476379539222", id:"flare"},
		{src:"./img_phone_01_lrg.png?1476379539222", id:"img_phone_01_lrg"},
		{src:"./img_phone_02_lrg.png?1476379539222", id:"img_phone_02_lrg"},
		{src:"./img_phone_03_lrg.png?1476379539222", id:"img_phone_03_lrg"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.flare = function() {
	this.initialize(img.flare);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,151);


(lib.img_phone_01_lrg = function() {
	this.initialize(img.img_phone_01_lrg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,467);


(lib.img_phone_02_lrg = function() {
	this.initialize(img.img_phone_02_lrg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,376);


(lib.img_phone_03_lrg = function() {
	this.initialize(img.img_phone_03_lrg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,376);


(lib.y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBnIAAhVIhOh4IBUAAIAfA9IAgg9IBSAAIhTB4IAABVg");
	this.shape.setTransform(0,0,1.356,1.356);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-14.1,31.3,28.2);


(lib.white_vignette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00A6F1","rgba(0,166,241,0)"],[0,1],0,0,0,0,0,358.9).s().p("Eg43AHBIAAuCMBxuAAAIAAOCg");
	this.shape.setTransform(214,-80);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,728,90);


(lib.vingette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0.1,0,0,0.1,0,373.8).s().p("Eg43AHBIAAuCMBxuAAAIAAOCg");
	this.shape.setTransform(214,-80);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,728,90);


(lib.unfocused = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#0074A7","rgba(0,116,167,0)"],[0.486,1],0,0,0,0,0,46.7).s().p("AlIFIQiIiIAAjAQAAi/CIiJQCJiIC/AAQDAAACICIQCICJAAC/QAADAiICIQiICIjAAAQi/AAiJiIg");
	this.shape.setTransform(46.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,93);


(lib.txt5b = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAaIgFgEIgFgEIAGgFQADAEAEACQAEACADAAQAGAAADgCIACgDIABgEIgBgEIgCgDQgEgCgHgCQgGgBgEgBIgDgEQgCgDAAgDQAAgEACgDQABgDADgCIAGgDIAGgBQAGAAAEACIAFADIAEAFIgHAEQgCgDgDgCQgDgCgFAAQgCAAgEACIgCACIgCAEQABAEADACQACACAGABIAIADIAGABIAEAFIABAFQgBAFgBADQgCADgDACIgGADIgIABQgGgBgEgBg");
	this.shape.setTransform(95.6,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAaQgFgCgEgEQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEQADgEAFgCQAGgCADAAQAHAAAFACIAIAGQADADACAFQABAFAAAGIAAACIgrAAQAAAEACADIAEAHIAGAEQAEABACAAQAEAAAHgCQAEgDACgEIAGAFIgFAFQgCACgDABIgHACIgGABQgEAAgFgCgAASgDQAAgEgBgDQgBgDgDgCIgFgEIgIgBIgFABIgGAEQgDACgBAEQgCADAAADIAjAAIAAAAg");
	this.shape_1.setTransform(89.7,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAcIAAgdIAAgIQgBgDgCgCQgBgDgDgCIgHgBIgEABIgGAFQgCACgBAEQgCAEAAAEIAAAcIgIAAIAAgpIAAgMIAHAAIABAKIAAAAIADgFIAFgDIAFgCIAEgCQAFAAAEACQAEACACADQADADABAEIABAJIAAAgg");
	this.shape_2.setTransform(83,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAaQgFgCgEgEQgEgEgDgFQgBgFAAgGQAAgFABgFQADgFAEgEQAEgEAFgCQAGgCAEAAQAGAAAFACQAFACAEAEQAFAEABAFQACAFAAAFQAAAGgCAFQgBAFgFAEQgEAEgFACQgFACgGAAQgEAAgGgCgAgHgTQgDACgEADIgDAHQgCAEAAADQAAAEACAEIADAHQAEADADACQAEABADAAQAEAAAEgBQAEgCADgDQADgDABgEIABgIIgBgHQgBgEgDgDQgDgDgEgCQgEgBgEAAQgDAAgEABg");
	this.shape_3.setTransform(76.1,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAsIAAgfIgBgIIgCgFIgEgDIgIgBIgEABIgFADQgCACgCAEQgBAEAAAGIAAAcIgIAAIAAhWIAIAAIAAAqIAAAAIADgFIAEgCIAGgCIADgCQAFAAAEACQAEACADADQADADABACQABAEAAAFIAAAig");
	this.shape_4.setTransform(69.2,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAqIAAhRIAIAAIAAAKIAAAAIAEgFIAFgDIAGgCIAEgCQAGAAAGADQAFACADAEQAEAEACAFQACAFAAAHQAAAFgCAGQgCADgEAEQgDADgFADQgGACgGAAIgEgBIgGgCIgFgDIgEgEIAAAAIAAAlgAgIggQgEACgCADQgDACgCAFQgBADAAAGQAAAEABAEQACADADACQACADAEACQAFABADAAQAEAAADgBQAEgCADgEQADgBABgDQABgEAAgEQAAgGgBgDQgBgFgDgCQgDgDgEgCQgDgBgEgBQgDABgFABg");
	this.shape_5.setTransform(62.3,33.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAgIgDgEIgBgIIAAggIgMAAIAAgGIAMAAIAAgQIAFAAIAAAQIAQAAIAAAGIgQAAIAAAeQAAAGADACQACACAEAAQADAAADgCIABAHIgJACQgHgBgBgCg");
	this.shape_6.setTransform(56.5,31.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAcIAAgpIgBgMIAIAAIAAAKIABAAQACgGADgCIAEgCIAGgCIAFABIgBAHIgGAAIgFABIgEAEIgDAGIgBAIIAAAcg");
	this.shape_7.setTransform(53.1,32);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAbIgHgDIgEgFQgCgDAAgEIABgGIACgEQADgCAGgCQAHgCASgBIAAgBIgBgHIgDgEIgFgDIgGAAIgHABQgEACgDADIgFgFQAEgEAFgCQAGgCAFAAQAEAAAEABQAEABADADQADACABAEQACAEAAAFIAAAWIABAMIgHAAIgBgJIAAAAIgEAFIgFADIgFACIgEAAIgGgBgAgFACQgEABgCACQgDADAAADIABAFIADADQAEADAFAAQACAAAEgCIAFgEIADgGQACgDAAgDIAAgEIgDAAQgMAAgFACg");
	this.shape_8.setTransform(47.3,32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhAcIAAgdIgBgIQgBgDgCgCIgDgFIgHgBQgEABgEABQgDACgBADIgDAGIgBAHIAAAcIgFAAIAAgfIgBgHIgCgFQgBgDgDgBIgHgBIgGABIgEAFQgDACgBAEQgCAEAAAEIAAAcIgIAAIAAgpIAAgMIAHAAIABAKIAAAAQACgGAFgCIAGgCIAFgCQAFAAAEADIAFADIABAGIAEgFIADgDIAGgCIAGgCQAFAAAEACQAEACADADQACADABAEQACAEAAAFIAAAgg");
	this.shape_9.setTransform(39.2,32);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAaIgFgEIgEgEIAFgFQADAEAEACQAEACADAAQAGAAADgCIACgDIABgEIgBgEIgCgDQgEgCgGgCQgHgBgEgBIgEgEQgBgDAAgDQAAgEABgDQACgDADgCIAGgDIAGgBQAFAAAFACIAFADIADAFIgGAEQgBgDgEgCQgDgCgFAAQgCAAgEACIgCACIgBAEQAAAEADACQADACAEABIAJADIAGABIADAFIABAFQAAAFgCADQgBADgDACIgGADIgIABQgHgBgDgBg");
	this.shape_10.setTransform(31.4,32.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAcIAAgdIAAgIQgBgDgCgCQgBgDgDgCIgHgBIgEABIgGAFQgCACgBAEQgCAEAAAEIAAAcIgIAAIAAgpIAAgMIAHAAIABAKIAAAAIADgFIAFgDIAFgCIAEgCQAFAAAEACQAEACACADQADADABAEIABAJIAAAgg");
	this.shape_11.setTransform(22.6,32);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAaQgGgCgEgEQgDgEgDgFQgCgFAAgGQAAgFACgFQADgFADgEQAEgEAGgCQAFgCAFAAQAGAAAFACQAFACAFAEQADAEACAFQADAFAAAFQAAAGgDAFQgCAFgDAEQgFAEgFACQgFACgGAAQgFAAgFgCgAgHgTQgDACgDADIgFAHQgBAEAAADQAAAEABAEIAFAHQADADADACQAEABADAAQAEAAAEgBQAEgCACgDQADgDACgEIABgIIgBgHQgCgEgDgDQgCgDgEgCQgEgBgEAAQgDAAgEABg");
	this.shape_12.setTransform(15.7,32.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAbIAAgGIAfgoIgdAAIAAgHIAnAAIAAAGIgeAoIAgAAIAAAHg");
	this.shape_13.setTransform(9.6,32.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAoIAAg1IAGAAIAAA1gAgDgeQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIADgBIADABQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgDACIgDgCg");
	this.shape_14.setTransform(5.6,30.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAcIAAgpIgBgMIAHAAIABAKIAAAAQADgGADgCIAEgCIAGgCIAFABIgBAHIgGAAIgFABIgEAEIgDAGIgCAIIAAAcg");
	this.shape_15.setTransform(2.5,32);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIAaQgFgCgEgEQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEQADgEAFgCQAGgCADAAQAHAAAFACIAIAGQADADACAFQABAFAAAGIAAACIgrAAQAAAEACADIAEAHIAGAEQAEABACAAQAEAAAHgCQAEgDACgEIAGAFIgFAFQgCACgDABIgHACIgGABQgEAAgFgCgAASgDQAAgEgBgDQgBgDgDgCIgFgEIgIgBIgFABIgGAEQgDACgBAEQgCADAAADIAjAAIAAAAg");
	this.shape_16.setTransform(-3.4,32.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDApIgfhRIAJAAIAZBGIAAAAIAahGIAJAAIgfBRg");
	this.shape_17.setTransform(-10.4,30.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCAsIAAhWIAGAAIAABWg");
	this.shape_18.setTransform(-18.3,30.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAsIAAhWIAGAAIAABWg");
	this.shape_19.setTransform(-21.2,30.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAbIgHgDIgEgFQgCgDAAgEIABgGIACgEQADgCAGgCQAHgCASgBIAAgBIgBgHIgDgEIgFgDIgGAAIgHABQgEACgDADIgFgFQAEgEAFgCQAGgCAFAAQAEAAAEABQAEABADADQADACABAEQACAEAAAFIAAAWIABAMIgHAAIgBgJIAAAAIgEAFIgFADIgFACIgEAAIgGgBgAgFACQgEABgCACQgDADAAADIABAFIADADQAEADAFAAQACAAAEgCIAFgEIADgGQACgDAAgDIAAgEIgDAAQgMAAgFACg");
	this.shape_20.setTransform(-25.9,32.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPAcIAAgdIAAgIQgBgDgCgCQgBgDgDgCIgHgBIgEABIgGAFQgCACgBAEQgCAEAAAEIAAAcIgIAAIAAgpIAAgMIAHAAIABAKIAAAAIADgFIAFgDIAFgCIAEgCQAFAAAEACQAEACACADQADADABAEIABAJIAAAgg");
	this.shape_21.setTransform(78.8,20.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAaQgGgCgDgEQgEgEgDgFQgCgFAAgGQAAgFACgFQADgFAEgEQADgEAGgCQAGgCAEAAQAGAAAFACQAGACAEAEQADAEACAFQACAFABAFQgBAGgCAFQgCAFgDAEQgEAEgGACQgFACgGAAQgEAAgGgCgAgHgTQgDACgDADIgFAHQgBAEAAADQAAAEABAEIAFAHQADADADACQAEABADAAQAEAAAEgBQAEgCACgDQADgDACgEIABgIIgBgHQgCgEgDgDQgCgDgEgCQgEgBgEAAQgDAAgEABg");
	this.shape_22.setTransform(71.9,20.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAAgIgDgEIgBgIIAAggIgMAAIAAgGIAMAAIAAgQIAFAAIAAAQIAQAAIAAAGIgQAAIAAAeQAAAGADACQACACAEAAQADAAADgCIABAHIgJACQgHgBgBgCg");
	this.shape_23.setTransform(63.5,19.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAPAcIAAgdIAAgIQgBgDgCgCQgBgDgDgCIgHgBIgEABIgGAFQgCACgBAEQgCAEAAAEIAAAcIgIAAIAAgpIAAgMIAHAAIABAKIAAAAIADgFIAFgDIAFgCIAEgCQAFAAAEACQAEACACADQADADABAEIABAJIAAAgg");
	this.shape_24.setTransform(58.4,20.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIAaQgFgCgEgEQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEQADgEAFgCQAGgCADAAQAHAAAFACIAIAGQADADACAFQABAFAAAGIAAACIgrAAQAAAEACADIAEAHIAGAEQAEABACAAQAEAAAHgCQAEgDACgEIAGAFIgFAFQgCACgDABIgHACIgGABQgEAAgFgCgAASgDQAAgEgBgDQgBgDgDgCIgFgEIgIgBIgFABIgGAEQgDACgBAEQgCADAAADIAjAAIAAAAg");
	this.shape_25.setTransform(51.7,20.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAhAcIAAgdIgBgIQgBgDgCgCIgDgFIgHgBQgEABgEABQgDACgBADIgDAGIgBAHIAAAcIgFAAIAAgfIgBgHIgCgFQgBgDgDgBIgHgBIgGABIgEAFQgDACgBAEQgCAEAAAEIAAAcIgIAAIAAgpIAAgMIAHAAIABAKIAAAAQACgGAFgCIAGgCIAFgCQAFAAAEADIAFADIABAGIAEgFIADgDIAGgCIAGgCQAFAAAEACQAEACACADQADADABAEQACAEAAAFIAAAgg");
	this.shape_26.setTransform(43.2,20.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAaQgFgCgEgEQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEQADgEAFgCQAGgCADAAQAHAAAFACIAIAGQADADACAFQABAFAAAGIAAACIgrAAQAAAEACADIAEAHIAGAEQAEABACAAQAEAAAHgCQAEgDACgEIAGAFIgFAFQgCACgDABIgHACIgGABQgEAAgFgCgAASgDQAAgEgBgDQgBgDgDgCIgFgEIgIgBIgFABIgGAEQgDACgBAEQgCADAAADIAjAAIAAAAg");
	this.shape_27.setTransform(34.8,20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIAaQgFgCgEgEQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEQADgEAFgCQAGgCADAAQAHAAAFACIAIAGQADADACAFQABAFAAAGIAAACIgrAAQAAAEACADIAEAHIAGAEQAEABACAAQAEAAAHgCQAEgDACgEIAGAFIgFAFQgCACgDABIgHACIgGABQgEAAgFgCgAASgDQAAgEgBgDQgBgDgDgCIgFgEIgIgBIgFABIgGAEQgDACgBAEQgCADAAADIAjAAIAAAAg");
	this.shape_28.setTransform(28.1,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAcIAAgpIgBgMIAHAAIABAKIAAAAQADgGADgCIAEgCIAGgCIAFABIgBAHIgGAAIgFABIgEAEIgDAGIgCAIIAAAcg");
	this.shape_29.setTransform(23.2,20.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHApIgHgDIgHgDIgFgEIAGgGQADAEAGADIAGACIAFAAQAEAAAFgBQAEgCACgDQACgCACgEIABgJIAAgKIgEAFIgFACIgGADIgFABQgFAAgGgDQgEgCgFgDQgDgEgCgDQgCgFAAgGQAAgGACgFQACgGADgDQAFgEAEgCQAGgDAFAAIAFACIAGACIAFADIAEAFIAAgKIAIAAIAAA0QAAAFgBAFQgBAFgEAEQgFAFgEABIgHADIgGABIgHgBgAgHggQgDACgDADQgDACgBAFIgCAIQAAAEACADQABAFADAAQADADADACQAEABADABQAFgBAEgBQAEgCACgCQADgBACgEQABgEAAgEIgBgIQgCgFgDgCQgDgDgDgCQgEgBgFgBQgDABgEABg");
	this.shape_30.setTransform(16.8,21.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAbIgHgDIgEgFQgCgDAAgEIABgGIACgEQADgCAGgCQAHgCASgBIAAgBIgBgHIgDgEIgFgDIgGAAIgHABQgEACgDADIgFgFQAEgEAFgCQAGgCAFAAQAEAAAEABQAEABADADQADACABAEQACAEAAAFIAAAWIABAMIgHAAIgBgJIAAAAIgEAFIgFADIgFACIgEAAIgGgBgAgFACQgEABgCACQgDADAAADIABAFIADADQAEADAFAAQACAAAEgCIAFgEIADgGQACgDAAgDIAAgEIgDAAQgMAAgFACg");
	this.shape_31.setTransform(10,20.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHApIgHgDIgHgDIgFgEIAGgGQADAEAGADIAFACIAGAAQAFAAAEgBQADgCADgDQACgCACgEIABgJIAAgKIgEAFIgFACIgGADIgFABQgFAAgFgDQgGgCgDgDQgEgEgCgDQgCgFAAgGQAAgGACgFQACgGAEgDQADgEAGgCQAFgDAFAAIAFACIAGACIAFADIAEAFIAAgKIAIAAIAAA0QAAAFgBAFQgCAFgDAEQgFAFgEABIgGADIgHABIgHgBgAgHggQgEACgCADQgDACgBAFIgBAIQAAAEABADQABAFADAAQACADAEACQAEABADABQAFgBAEgBQADgCADgCQADgBABgEQACgEAAgEIgCgIQgBgFgDgCQgDgDgDgCQgEgBgFgBQgDABgEABg");
	this.shape_32.setTransform(0.4,21.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAPAcIAAgdIAAgIQgBgDgCgCQgBgDgDgCIgHgBIgEABIgGAFQgCACgBAEQgCAEAAAEIAAAcIgIAAIAAgpIAAgMIAHAAIABAKIAAAAIADgFIAFgDIAFgCIAEgCQAFAAAEACQAEACACADQADADABAEIABAJIAAAgg");
	this.shape_33.setTransform(-6.5,20.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgDAoIAAg1IAGAAIAAA1gAgDgeQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIADgBIADABQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgDACIgDgCg");
	this.shape_34.setTransform(-11.3,19.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDAsIAAhWIAGAAIAABWg");
	this.shape_35.setTransform(-14.2,18.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAsIAAhWIAHAAIAABWg");
	this.shape_36.setTransform(-17.1,18.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAoIAAg1IAGAAIAAA1gAgCgeQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIACgBIAEABQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgEACIgCgCg");
	this.shape_37.setTransform(-20,19.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEArIgGgCIgFgDIgEgEIAAAAIAAAJIgIAAIAAhWIAIAAIAAArIAAAAIAEgFIAFgDIAGgCIAEgBQAGAAAGACQAEACAFAEQADADACAEQACAFAAAHQAAAFgCAGQgCAFgDAEQgFAEgEACQgGACgGAAIgEgBgAgIgDQgDACgDABIgEAHQgCAEAAAFQAAAEACAEIAEAHQADADADACQAFABADAAQAEAAAEgBQAEgCADgDQACgDABgEIABgIIgBgJIgDgHQgDgBgEgCQgEgBgEAAQgDAAgFABg");
	this.shape_38.setTransform(-25,18.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAAAgIgDgEIgBgIIAAggIgMAAIAAgGIAMAAIAAgQIAFAAIAAAQIAQAAIAAAGIgQAAIAAAeQAAAGADACQACACAEAAQADAAADgCIABAHIgJACQgHgBgBgCg");
	this.shape_39.setTransform(51.9,7.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAPAbIAAgbIAAgIQgBgEgCgDQgBgCgDgBIgHgBIgEABIgGADQgCADgBAEQgCAFAAADIAAAbIgIAAIAAgoIAAgMIAHAAIABAJIAAAAIADgEIAFgEIAFgCIAEAAQAFgBAEACQAEACACADQADADABAEIABAJIAAAfg");
	this.shape_40.setTransform(46.8,8.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIAaQgFgCgEgEQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEQADgEAFgCQAGgCADAAQAHAAAFACIAIAGQADADACAFQABAFAAAGIAAACIgrAAQAAAEACADIAEAHIAGAEQAEABACAAQAEAAAHgCQAEgDACgEIAGAFIgFAFQgCACgDABIgHACIgGABQgEAAgFgCgAASgDQAAgEgBgDQgBgDgDgCIgFgEIgIgBIgFABIgGAEQgDACgBAEQgCADAAADIAjAAIAAAAg");
	this.shape_41.setTransform(40.1,8.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAhAbIAAgbIgBgIQAAgEgDgDIgDgDIgHgBQgFAAgDABQgCABgCADIgDAHIgBAHIAAAbIgGAAIAAgdIAAgHIgCgGQgCgDgCAAIgHgBIgGABIgEADQgDADgBAEQgBAFAAADIAAAbIgJAAIAAgoIAAgMIAIAAIAAAJIABAAQABgFAGgDIAEgCIAGAAQAGgBADADIAEAEIACAFIADgFIAFgEIAFgCIAGAAQAFgBAEACQAEACADADQACADABAEQACAEAAAFIAAAfg");
	this.shape_42.setTransform(31.7,8.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgCArIAAhWIAGAAIAABWg");
	this.shape_43.setTransform(25.1,7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgCArIAAhWIAGAAIAABWg");
	this.shape_44.setTransform(22.2,7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAbIgHgDIgEgFQgCgDAAgEIABgGIACgEQADgCAGgCQAHgCASgBIAAgBIgBgHIgDgEIgFgDIgGAAIgHABQgEACgDADIgFgFQAEgEAFgCQAGgCAFAAQAEAAAEABQAEABADADQADACABAEQACAEAAAFIAAAWIABAMIgHAAIgBgJIAAAAIgEAFIgFADIgFACIgEAAIgGgBgAgFACQgEABgCACQgDADAAADIABAFIADADQAEADAFAAQACAAAEgCIAFgEIADgGQACgDAAgDIAAgEIgDAAQgMAAgFACg");
	this.shape_45.setTransform(17.5,8.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAAAgIgDgEIgBgIIAAggIgMAAIAAgGIAMAAIAAgQIAFAAIAAAQIAQAAIAAAGIgQAAIAAAeQAAAGADACQACACAEAAQADAAADgCIABAHIgJACQgHgBgBgCg");
	this.shape_46.setTransform(12.6,7.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgKAaIgFgEIgEgEIAFgFQADAEAEACQAEACADAAQAFAAAEgCIACgDIACgEIgCgEIgDgDQgDgCgGgCQgHgBgDgBIgFgEQgBgDAAgDQAAgEABgDQACgDADgCIAGgDIAFgBQAHAAAEACIAFADIADAFIgFAEQgCgDgEgCQgEgCgEAAQgDAAgDACIgDACIAAAEQAAAEACACQADACAFABIAJADIAGABIADAFIABAFQAAAFgCADQgBADgDACIgGADIgIABQgGgBgEgBg");
	this.shape_47.setTransform(8.2,8.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAPAbIAAgbIAAgIQgBgEgCgDQgBgCgDgBIgHgBIgEABIgGADQgCADgBAEQgCAFAAADIAAAbIgIAAIAAgoIAAgMIAHAAIABAJIAAAAIADgEIAFgEIAFgCIAEAAQAFgBAEACQAEACACADQADADABAEIABAJIAAAfg");
	this.shape_48.setTransform(2.3,8.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDAoIAAg0IAGAAIAAA0gAgDgdQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIADgCIADACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABIgDABIgDgBg");
	this.shape_49.setTransform(-2.5,7.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAPArIAAgdIgBgIIgCgGIgEgCIgIgBIgEABIgFACQgCACgCAEQgBAFAAAFIAAAbIgIAAIAAhWIAIAAIAAArIAAAAIADgEIAEgEIAGgCIADAAQAFgBAEACQAEACADADQADADABACQABAEAAAFIAAAhg");
	this.shape_50.setTransform(-10.2,7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAAAgIgDgEIgBgIIAAggIgMAAIAAgGIAMAAIAAgQIAFAAIAAAQIAQAAIAAAGIgQAAIAAAeQAAAGADACQACACAEAAQADAAADgCIABAHIgJACQgHgBgBgCg");
	this.shape_51.setTransform(-15.6,7.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgCAoIAAg0IAGAAIAAA0gAgCgdQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIACgCIAEACQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABIgEABIgCgBg");
	this.shape_52.setTransform(-18.8,7.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAOAbIgOgqIAAAAIgNAqIgJAAIgRg1IAJAAIAMArIABAAIAPgrIAFAAIAPArIAAAAIAOgrIAIAAIgRA1g");
	this.shape_53.setTransform(-24.5,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-1.6,130.5,41);


(lib.txt5a = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0A6IAAhyIApAAQAJAAANACIAMAFIAKAFIAIAIQAEAEADAGQAGALAAAPQAAAOgGALIgHAKIgIAIIgKAHIgLAEQgMADgKABgAgZAhIANAAQAHAAAGgBQAGgCAGgEQAFgEADgHQADgGAAgJQAAgIgDgHQgDgGgFgFQgGgDgGgCQgFgBgIAAIgNAAg");
	this.shape.setTransform(172.5,48.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOA6IgXguIgJAAIAAAuIgcAAIAAhyIAsAAQAHAAAIABQAIACAGAEQAGAEAEAHQAEAHAAAKQAAAGgCAEQgBAFgEAEQgGAHgLADIAeAygAgTgHIAOAAIAFgBIAGgCIAFgDQACgEAAgEQAAgEgCgDQgBgCgDgBIgGgDIgFAAIgPAAg");
	this.shape_1.setTransform(161,48.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeA6IgJgYIgrAAIgIAYIgeAAIAwhyIAZAAIAxBygAAOANIgOgnIgOAnIAcAAg");
	this.shape_2.setTransform(149.1,48.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPA4IgKgFQgFgDgEgFQgJgHgEgMIgEgLQgBgHAAgGQAAgFABgHIAEgMIAFgKIAIgJQAIgIAMgEIAMgDIALgBIAMABIAMADQAMAEAHAIIgTAUQgEgGgGgCQgHgDgGAAQgIAAgEADQgGADgEAEQgFAFgCAHQgDAGAAAGQAAAHADAHQACAGAFAFQAEAFAGACQAEADAHAAQAIAAAHgDQAGgDAEgGIATASIgIAJIgLAGQgLAEgPAAQgLAAgMgEg");
	this.shape_3.setTransform(138,48.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNA6IAAhaIggAAIAAgYIBbAAIAAAYIghAAIAABag");
	this.shape_4.setTransform(123.6,48.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglA6IAAhyIBLAAIAAAYIgvAAIAAAXIArAAIAAAWIgrAAIAAAtg");
	this.shape_5.setTransform(114.2,48.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMA6IAAhyIAaAAIAAByg");
	this.shape_6.setTransform(106.9,48.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPA4QgLgEgJgJQgIgHgFgMIgDgLQgCgHAAgGQAAgFACgHIADgMIAGgKIAHgJQAJgIALgEIAMgDIALgBQAOAAAMADIAKAGIAJAGIgSAUQgEgEgHgDQgGgEgJAAQgHAAgEADQgHACgEAFQgFAGgCAGQgDAHAAAGQAAAIACAGQADAHAEAEQAFAFAGADQAFADAIAAIAKgBIAIgCIAAgVIgWAAIAAgVIAwAAIAAA7QgJAFgLADQgMACgNAAQgMAAgMgEg");
	this.shape_7.setTransform(97.8,48.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAhQgGgCgFgGQgGgEgDgHQgDgHAAgHQAAgGADgHQADgHAGgFQAFgFAGgCQAHgEAGAAQAIAAAGAEQAHACAFAFQAFAFADAHQADAHAAAGQAAAHgDAHQgDAHgFAEQgFAGgHACQgGADgIAAQgGAAgHgDgAgLgcQgFADgFAEQgEAFgDAFQgCAGAAAFQAAAGACAGQADAFAEAFQAFAEAFADQAGACAFAAQAHAAAFgCQAGgDAEgEQAEgFADgFQACgGAAgGQAAgFgCgGQgDgFgEgFQgEgEgGgDQgFgCgHAAQgFAAgGACgAAGAUIgGgPIgCAAIAAAPIgPAAIAAgpIASAAIAGABIAHABIAFAFQABADAAAEQAAAHgHADIAJARgAgCgDIADAAIADgBQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgDgBIgDAAg");
	this.shape_8.setTransform(82.8,46.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNA6IAAgyIgshAIAiAAIAXArIAZgrIAgAAIgsBAIAAAyg");
	this.shape_9.setTransform(72.4,48.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUA3IgIgDIgHgGQgGgGgEgIQgDgJAAgLIAAhGIAbAAIAABEQABAFABAEQABAFADACQACAEAFACQADACAFAAQAFAAAFgCQADgCAEgEQACgDABgEIABgJIAAhEIAcAAIAABGQAAALgDAJQgEAIgGAGQgHAGgJADQgJAEgLAAQgLAAgJgEg");
	this.shape_10.setTransform(60.9,48.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsA6IAAhyIAsAAQAHgBAHACQAHACAGADQAGADADAGIADAGIABAIQAAAKgFAGQgGAGgIADIAAABQAFABAEAAQAEACAEADIAFAJQACAEAAAGQAAAJgEAHQgEAGgGAEQgGAEgIACQgIACgJAAgAgRAjIAQAAIAFgBIAGgCIAFgEQACgCAAgFQAAgHgGgDQgFgDgHAAIgQAAgAgRgKIAPAAQAGAAAEgDQAFgEAAgGQAAgFgFgDQgEgDgHAAIgOAAg");
	this.shape_11.setTransform(49.7,48.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNA6IAAhaIggAAIAAgYIBbAAIAAAYIghAAIAABag");
	this.shape_12.setTransform(35.6,48.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMA8IgMgEQgLgFgIgHIATgTQAEAFAHAEQAHAEAGAAIAFgCIAFgCIADgDQACgDAAgEQAAgDgCgCIgFgEIgHgDIgIgEIgLgEQgGgDgEgCQgEgDgDgGQgCgFAAgIQAAgKAEgGQAEgIAGgEQAHgEAIgCQAIgCAGAAQAGAAAOADQAKAEAIAHIgSATQgEgFgFgDQgGgCgGAAIgFAAQgBABgDABIgDAEQgCACAAADIABAFIAEAEIAEADIAHACIAMAEQAHADAFADQAFACADAGQAEAGAAAJQAAAKgEAHQgDAHgHAFQgGAFgIACQgIADgHgBIgMAAg");
	this.shape_13.setTransform(25.8,48.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnA6IAAhyIBMAAIAAAXIgxAAIAAAWIAuAAIAAAUIguAAIAAAYIA0AAIAAAZg");
	this.shape_14.setTransform(16.2,48.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgsA6IAAhyIAsAAQAHgBAHACQAHACAGADQAGADADAGIADAGIABAIQAAAKgFAGQgGAGgIADIAAABQAFABAEAAQAEACAEADIAFAJQACAEAAAGQAAAJgEAHQgEAGgGAEQgGAEgIACQgIACgJAAgAgRAjIAQAAIAFgBIAGgCIAFgEQACgCAAgFQAAgHgGgDQgFgDgHAAIgQAAgAgRgKIAPAAQAGAAAEgDQAFgEAAgGQAAgFgFgDQgEgDgHAAIgOAAg");
	this.shape_15.setTransform(6.1,48.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEBXIAAgPQgSgCgJgDQgNgEgKgKIALgLIAKgKIAGAFIAIAFIAIACIAHABIAAgjIgRgFQgIgDgGgDQgGgFgDgGQgEgHAAgKQAAgKAEgIQAEgHAHgGQAGgGAIgDQAIgCAIgBIAAgNIAMAAIAAANQAMABAMADIALAFQAGACAEAFIgTAVQgFgFgHgDQgHgDgHABIAAAgIAQAFQAIADAHAFQAGADAFAHQAEAHAAALQAAALgEAJQgEAHgGAGQgHAFgIADQgJADgIAAIAAAPgAAJAtQAGAAAEgEQAEgEAAgHQAAgHgEgEQgEgDgGgCgAgNgqQgEAEAAAGQAAAGADAEQAEADAHACIAAgdQgGAAgEAEg");
	this.shape_16.setTransform(104.9,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxCIQgVgMgNgVQgHgKgFgMIgIgZQgGgbAAgdQAAgdAGgbIAIgZQAFgMAHgKQAGgKAJgIQAJgIAKgFQAVgNAcAAQAeAAAVANQAKAFAIAIQAJAIAHAKQANAUAGAbQAGAbAAAdQAAAdgGAbQgGAbgNAUQgOAVgUAMQgVAMgeAAQgcAAgVgMgAgUhRQgIAKgFANQgEAOgCAQIgBAcIABAcQACAQAEAOQAFAOAIAJQAJAKALAAQANAAAIgKQAIgJAFgOQAEgOACgQIABgcIgBgcQgCgQgEgOQgFgNgIgKQgIgJgNAAQgLAAgJAJg");
	this.shape_17.setTransform(167.9,23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgxCIQgVgMgNgVQgHgKgFgMIgIgZQgGgbAAgdQAAgdAGgbIAIgZQAFgMAHgKQAGgKAJgIQAJgIAKgFQAVgNAcAAQAeAAAVANQAKAFAIAIQAJAIAHAKQANAUAGAbQAGAbAAAdQAAAdgGAbQgGAbgNAUQgOAVgUAMQgVAMgeAAQgcAAgVgMgAgUhRQgIAKgFANQgEAOgCAQIgBAcIABAcQACAQAEAOQAFAOAIAJQAJAKALAAQANAAAIgKQAIgJAFgOQAEgOACgQIABgcIgBgcQgCgQgEgOQgFgNgIgKQgIgJgNAAQgLAAgJAJg");
	this.shape_18.setTransform(143,23.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAKCMIAAjNIgzApIgigvIBahEIA9AAIAAEXg");
	this.shape_19.setTransform(120.4,23.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhgCMIAAkXIC6AAIAAA5Ih5AAIAAA1IByAAIAAA1IhyAAIAAA6ICAAAIAAA6g");
	this.shape_20.setTransform(85.2,24.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhgCMIAAkXIC6AAIAAA5Ih5AAIAAA1IByAAIAAA1IhyAAIAAA6ICAAAIAAA6g");
	this.shape_21.setTransform(61.2,24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAjCMIg7hvIgXAAIAABvIhCAAIAAkXIBqAAQATAAATAFQATAEAQAKQAPAJAJARQAJAQAAAYQAAAOgDAMQgEAMgIAKQgQARgbAJIBJB4gAgvgSIAgAAIAPgCQAIgBAIgEQAHgEAEgGQAFgHAAgLQAAgKgEgGQgEgGgHgDQgHgEgHgBIgOgBIgkAAg");
	this.shape_22.setTransform(36.7,24.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhbCMIAAkXIC3AAIAAA6Ih0AAIAAA6IBrAAIAAA2IhrAAIAABtg");
	this.shape_23.setTransform(11.7,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-3.7,184,65.7);


(lib.txt_gifting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8DCFDF").s().p("Ag6BKQgegdAAgtQAAgrAegeQAdgeArAAQAuAAAaAaIgOAOQgVgXgkAAQgkAAgXAaQgWAZAAAjQAAAkAWAYQAXAaAkAAQAhAAAUgNIAAg8IguAAIAAgQIBCAAIAABYQggATgqAAQgrAAgdgeg");
	this.shape.setTransform(58.3,0,1.233,1.233);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8DCFDF").s().p("AA3BjIhyiqIAAAAIAACqIgVAAIAAjFIAaAAIByCoIABAAIAAioIATAAIAADFg");
	this.shape_1.setTransform(32.1,0,1.233,1.233);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8DCFDF").s().p("AgJBjIAAjFIATAAIAADFg");
	this.shape_2.setTransform(14.4,0,1.233,1.233);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8DCFDF").s().p("AgJBjIAAizIhCAAIAAgSICXAAIAAASIhCAAIAACzg");
	this.shape_3.setTransform(-2.1,0,1.233,1.233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8DCFDF").s().p("Ag6BjIAAjFIB1AAIAAASIhhAAIAABFIBaAAIAAAQIhaAAIAABeg");
	this.shape_4.setTransform(-24.3,0,1.233,1.233);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8DCFDF").s().p("AgJBjIAAjFIATAAIAADFg");
	this.shape_5.setTransform(-39.5,0,1.233,1.233);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8DCFDF").s().p("Ag6BKQgdgdgBgtQABgrAdgeQAegeAqAAQAtAAAbAaIgOAOQgWgXgjAAQgjAAgYAaQgWAZAAAjQAAAkAWAYQAYAaAjAAQAhAAAUgNIAAg8IguAAIAAgQIBDAAIAABYQgiATgpAAQgrAAgdgeg");
	this.shape_6.setTransform(-58.1,0,1.233,1.233);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-12.8,138.4,25.8);


(lib.txt_03b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLB4IAAjZIhRAAIAAgWIC5AAIAAAWIhRAAIAADZg");
	this.shape.setTransform(76.6,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHB4IAAjvICPAAIAAAWIh2AAIAABTIBtAAIAAAUIhtAAIAAByg");
	this.shape_1.setTransform(58.7,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLB4IAAjvIAXAAIAADvg");
	this.shape_2.setTransform(44.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHB8QgMgDgMgFQgLgEgLgHQgJgGgJgJQgIgIgHgKQgGgKgFgLQgEgMgDgNQgCgMAAgOQAAgMACgNQADgMAEgMQAGgLAGgLQAGgKAJgIQAQgRAYgKQALgEAMgDQALgCANAAQAPAAAMACQANACALAFQAWAIAPAQIgRARIgPgMIgPgJQgSgHgWAAQgWAAgRAIQgUAJgNAOQgMAPgHATQgHATAAATQAAAVAHATQAHATAMAOQANAPAUAIQARAJAWAAQAUgBARgEQARgFALgGIAAhJIg5AAIAAgUIBRAAIAABrQgUALgXAHQgWAFgZAAQgNAAgLgCg");
	this.shape_3.setTransform(26.7,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhmB4IAAjvIBQAAQAPAAAcAHQAXAIASAPQAJAIAHAJQAIAKAFALQAMAXAAAcQAAAOgDAOQgDANgGALQgFALgIAKQgHAJgJAIQgSAPgXAHQgcAIgPAAgAhNBiIAwAAQAcAAASgIIASgKQAJgGAGgHQANgNAHgSQAHgSAAgSQAAgRgHgSIgIgRIgMgPQgGgGgJgGIgSgKQgKgEgKgCQgMgCgOAAIgwAAg");
	this.shape_4.setTransform(-5.7,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYB8QgNgDgMgFQgLgEgKgHQgJgGgJgJQgIgIgHgKQgHgKgEgLQgKgYAAgbQAAgMACgNQACgMAGgMQAEgLAHgLQAHgKAIgIQAQgRAXgKQAMgEANgDQAMgCAMAAQANAAANACQAMADALAEQAXAKARARQARARAKAXQAEAMACAMQADANAAAMQAAAOgDAMQgCANgEAMQgGALgGAKQgHAKgIAIQgJAJgJAGQgKAHgMAEQgLAFgMADQgNACgNAAQgMAAgMgCgAgohfQgTAJgMAOQgNAPgIATQgGAaAAAMQACAbAEANQAIATANAOQAMAPATAIQASAJAWAAQAWAAATgJQASgIAOgPQAMgOAHgTQAHgTAAgVQAAgTgHgTQgHgTgMgPQgOgOgSgJQgTgIgWAAQgWAAgSAIg");
	this.shape_5.setTransform(-33.1,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZB8QgMgDgLgFQgMgEgKgHQgKgGgIgJQgJgIgGgKQgGgKgGgLQgJgYAAgbQAAgMACgNQADgMAEgMQAGgLAGgLQAGgKAJgIQAQgRAYgKQALgEAMgDQANgCAMAAQANAAAMACQANADALAEQAXAKARARQARARAJAXQAFAMADAMQACANAAAMQAAAOgCAMQgDANgFAMQgEALgHAKQgHAKgIAIQgIAJgLAGQgJAHgMAEQgLAFgNADQgMACgNAAQgMAAgNgCgAgohfQgSAJgOAOQgNAPgGATQgHAaAAAMQACAbAFANQAGATANAOQAOAPASAIQASAJAWAAQAXAAASgJQATgIAMgPQAOgOAGgTQAHgTAAgVQAAgTgHgTQgGgTgOgPQgMgOgTgJQgSgIgXAAQgWAAgSAIg");
	this.shape_6.setTransform(-61.5,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGB8QgNgDgMgFQgLgEgKgHQgKgGgIgJQgJgIgHgKQgGgKgEgLQgFgMgDgNQgCgMAAgOQAAgMACgNQADgMAFgMQAEgLAHgLQAHgKAIgIQARgRAWgKQAMgEANgDQAKgCAOAAQAOAAANACQAMACALAFQAVAIAPAQIgQARIgPgMIgQgJQgQgHgXAAQgVAAgTAIQgSAJgNAOQgNAPgHATQgHATAAATQAAAVAHATQAHATANAOQANAPASAIQATAJAVAAQAUgBARgEQARgFALgGIAAhJIg4AAIAAgUIBQAAIAABrQgTALgYAHQgWAFgYAAQgOAAgKgCg");
	this.shape_7.setTransform(-89.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.9,-24.3,191.9,50.5);


(lib.txt_03a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABYB4IgbhAIh6AAIgbBAIgaAAIBojvIAWAAIBnDvgAA0AiIg0h+Ig0B+IBoAAg");
	this.shape.setTransform(88.5,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDB4IAAjvIAZAAIAADZIBuAAIAAAWg");
	this.shape_1.setTransform(63.3,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDB4IAAjvIAZAAIAADZIBuAAIAAAWg");
	this.shape_2.setTransform(46.5,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABYB4IgbhAIh6AAIgbBAIgaAAIBojvIAWAAIBnDvgAA0AiIg0h+Ig0B+IBoAAg");
	this.shape_3.setTransform(25.1,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYB8QgNgDgLgFQgMgEgKgHQgJgGgJgJQgJgIgGgKQgGgKgFgLQgKgYAAgbQAAgMADgNQABgMAGgMQAFgLAGgLQAGgKAJgIQAQgRAYgKQALgEANgDQAMgCAMAAQANAAAMACQANADALAEQAYAKAQARQARARAJAXQAFAMACAMQADANAAAMQAAAOgDAMQgCANgFAMQgFALgGAKQgGAKgJAIQgJAJgKAGQgJAHgMAEQgLAFgNADQgMACgNAAQgMAAgMgCgAgohfQgTAJgNAOQgMAPgIATQgGAaAAAMQACAbAEANQAIATAMAOQANAPATAIQATAJAVAAQAWAAATgJQATgIANgPQANgOAHgTQAGgTAAgVQAAgTgGgTQgHgTgNgPQgNgOgTgJQgTgIgWAAQgVAAgTAIg");
	this.shape_4.setTransform(-8.1,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLB4IAAjZIhRAAIAAgWIC5AAIAAAWIhRAAIAADZg");
	this.shape_5.setTransform(-30.7,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-25.2,144.6,50.5);


(lib.txt_02c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVB8QgLgCgKgFQgKgEgJgHQgIgHgGgJIAUgPQAJAMAOAKQAOAIASAAQAIAAAJgDQAKgDAHgFQAIgGAFgJQAFgJAAgLQAAgNgFgJQgFgIgIgFQgIgGgLgEIgUgHIgYgHQgLgEgJgIQgJgIgGgLQgGgLAAgRQABgRAGgNQAIgMALgIQALgJANgDQAOgEAMAAQAYAAASAJQAQAIAKAMIgUAQQgIgLgMgHQgNgGgQAAQgHAAgJADQgKADgIAFQgHAGgEAIQgFAIAAAMQAAALAFAIQAEAIAHAFQAIAFAJAEIASAHIAZAIQANADAJAHQAKAIAHAMQAGAMABARQAAATgIANQgHANgKAIQgLAJgPAEQgOAEgMAAQgLAAgKgCg");
	this.shape.setTransform(2.1,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABCB4IiKjNIAAAAIAADNIgYAAIAAjvIAeAAICKDLIABAAIAAjLIAYAAIAADvg");
	this.shape_1.setTransform(-19.7,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABYB4IgbhAIh6AAIgaBAIgbAAIBojvIAWAAIBnDvgAA0AiIg0h+Ig0B+IBoAAg");
	this.shape_2.setTransform(-44.1,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDB4IAAjvIAZAAIAADZIBuAAIAAAWg");
	this.shape_3.setTransform(-62.8,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJB4IAAjvIBEAAQAQAAAPAEQAPAEALAIQAKAIAGAMQAGAMAAAQQAAARgGAMQgGAMgLAIQgKAGgPAEQgQAEgQAAIgrAAIAABwgAgxgLIAqAAQAbAAAPgLQAOgLAAgWQAAgLgDgIQgEgIgIgGQgPgKgaAAIgqAAg");
	this.shape_4.setTransform(-81.4,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-25.2,107.6,50.5);


(lib.txt_02b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLB4IAAjvICTAAIAAAWIh7AAIAABSIBzAAIAAAUIhzAAIAABdIB/AAIAAAWg");
	this.shape.setTransform(-36.9,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABBB4IAAhyIiBAAIAAByIgYAAIAAjvIAYAAIAABoICBAAIAAhoIAZAAIAADvg");
	this.shape_1.setTransform(-59.5,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLB4IAAjZIhRAAIAAgWIC4AAIAAAWIhRAAIAADZg");
	this.shape_2.setTransform(-80.8,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-25.2,66.6,50.5);


(lib.txt_02a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDB4IAAjvIAZAAIAADZIBuAAIAAAWg");
	this.shape.setTransform(-51.1,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDB4IAAjvIAZAAIAADZIBuAAIAAAWg");
	this.shape_1.setTransform(-67.9,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABYB4IgbhAIh6AAIgbBAIgaAAIBojvIAWAAIBnDvgAA0AiIg0h+Ig0B+IBoAAg");
	this.shape_2.setTransform(-89.3,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-25.2,61.1,50.5);


(lib.txt_01c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVB8QgLgCgKgFQgKgEgIgHQgJgHgGgJIAUgPQAJAMAOAKQAOAIASAAQAIAAAJgDQAKgDAHgFQAIgGAFgJQAFgJAAgLQAAgNgFgJQgFgIgIgFQgIgGgLgEIgUgHIgYgHQgLgEgJgIQgJgIgGgLQgGgLABgRQAAgRAGgNQAIgMALgIQALgJANgDQAOgEALAAQAZAAASAJQAQAIAKAMIgUAQQgIgLgMgHQgNgGgRAAQgHAAgJADQgJADgIAFQgGAGgFAIQgFAIAAAMQAAALAFAIQAEAIAHAFQAIAFAJAEIARAHIAaAIQANADAJAHQAKAIAHAMQAGAMABARQAAATgIANQgGANgLAIQgLAJgPAEQgOAEgMAAQgKAAgLgCg");
	this.shape.setTransform(-2.3,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLB4IAAjvICTAAIAAAWIh7AAIAABSIBzAAIAAAUIhzAAIAABdIB/AAIAAAWg");
	this.shape_1.setTransform(-20.4,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMB4IhbjvIAaAAIBNDPIAAAAIBOjPIAaAAIhcDvg");
	this.shape_2.setTransform(-41.3,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABYB4IgahAIh7AAIgaBAIgbAAIBojvIAWAAIBnDvgAA0AiIg0h+Ig0B+IBoAAg");
	this.shape_3.setTransform(-62.3,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHB4IAAjvICPAAIAAAWIh3AAIAABTIBvAAIAAAUIhvAAIAAByg");
	this.shape_4.setTransform(-80.5,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.9,-25.2,102.1,50.5);


(lib.txt_01b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLB4IAAjvICTAAIAAAWIh7AAIAABSIBzAAIAAAUIhzAAIAABdIB/AAIAAAWg");
	this.shape.setTransform(-35.1,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABBB4IAAhyIiBAAIAAByIgYAAIAAjvIAYAAIAABoICBAAIAAhoIAZAAIAADvg");
	this.shape_1.setTransform(-57.7,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLB4IAAjZIhRAAIAAgWIC4AAIAAAWIhRAAIAADZg");
	this.shape_2.setTransform(-79,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.7,-25.2,66.6,50.5);


(lib.txt_01a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDB4IAAjvIAZAAIAADZIBuAAIAAAWg");
	this.shape.setTransform(-51.1,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDB4IAAjvIAZAAIAADZIBuAAIAAAWg");
	this.shape_1.setTransform(-67.9,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABYB4IgbhAIh6AAIgbBAIgaAAIBojvIAWAAIBnDvgAA0AiIg0h+Ig0B+IBoAAg");
	this.shape_2.setTransform(-89.3,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-25.2,61.1,50.5);


(lib.shipping_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF029").s().p("AAAArIgKgcIgEgEIgcgJQgBgBAAAAQgBAAAAAAQAAAAAAgBQAAAAgBAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABgBIAZgJIAAAAIADgBIAEgDIABgDIAAAAIAJgZQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAJAZIAAAAIABADIAEADIAcAKQABABAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBABIgcAJIgEAEIgKAcQAAABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape.setTransform(0,0,0.896,0.896);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-4.1,8.3,8.3);


(lib.seal_xxl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353837").s().p("AAsB4IgshRIAAAAIguBRIhCAAIBOh8IhIhzIBDAAIAnBGIAAAAIAphGIBAAAIhHByIBPB9g");
	this.shape.setTransform(3.3,0,1.704,1.704);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353837").s().p("AAsB4IgshRIAAAAIgtBRIhDAAIBPh8IhJhzIBEAAIAmBGIAAAAIAphGIBAAAIhGByIBOB9g");
	this.shape_1.setTransform(-35.3,0,1.704,1.704);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353837").s().p("AhQB4IAAjvIA8AAIAAC9IBlAAIAAAyg");
	this.shape_2.setTransform(40.8,0,1.704,1.704);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-20.6,109.4,41.2);


(lib.seal_xl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353837").s().p("AAsB5IAAjwIA9AAIAAC8IBsAAIAAA0gAgzB5IgthSIgBAAIgvBSIhEAAIBQh9IhJhzIBFAAIAoBGIABAAIAphGIA/AAIhGByIBPB+g");
	this.shape.setTransform(0,0,1.704,1.704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-20.6,72.8,41.3);


(lib.seal_S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353837").s().p("AhIBoQgdgVgBgoIA9AAQADAjAqAAQAQAAALgGQAMgGgBgOQABgNgOgGQgJgEgcgIQgpgJgSgMQgcgQABgiQAAglAcgUQAZgSApAAQApAAAZASQAbAUACAlIg6AAQgFgdghAAQgPAAgKAGQgJAGAAAKQAAAMAOAHQAJAEAdAGQAqAKASANQAaARAAAjQAAAkgcAWQgbAUgsAAQgvABgdgWg");
	this.shape.setTransform(0,0,1.704,1.704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-21.5,35.3,43);


(lib.seal_M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353837").s().p("ABFB5IABipIAAAAIguCpIgwAAIguipIAAAAIABCpIg2AAIAAjwIBQAAIAeBqIANA1IAAAAIArifIBRAAIAADwg");
	this.shape.setTransform(0,0,1.704,1.704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-20.6,42.5,41.3);


(lib.seal_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353837").s().p("AhSB5IAAjwIA7AAIAAC8IBqAAIAAA0g");
	this.shape.setTransform(0,0,1.704,1.704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-20.6,28.6,41.3);


(lib.seal_bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B0DDEF").s().p("AkcEdQh3h2AAinQAAimB3h2QB2h3CmAAQCnAAB2B3QB3B2AACmQAACnh3B2Qh2B3inAAQimAAh2h3g");
	this.shape.setTransform(0,0,1.704,1.704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.9,-68.9,137.9,137.8);


(lib.phone_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F3E9").s().p("ApkREMAAAgiHITJAAMAAAAiHg");
	this.shape.setTransform(0,0,1.722,1.719);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.7,-187.7,211.5,375.5);


(lib.o = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRBPQghgfAAgwQAAgxAhgeQAggdAxAAQAyAAAgAdQAhAeAAAxQAAAwghAfQghAegxAAQgwAAghgegAgdggQgLAMAAAUQAAASALAOQAMANARAAQARAAALgNQAMgOAAgSQAAgUgMgMQgLgMgRAAQgRAAgMAMg");
	this.shape.setTransform(0,0,1.356,1.356);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-14.9,31.4,29.8);


(lib.new_tree_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHEnQgDgDAAgFIAAjLIhPBPQgEADgEAAQgFAAgEgDQgDgEAAgFQAAgEADgEIBghfIAAgpIhPBPQgEADgEAAQgFAAgEgDQgDgEAAgFQAAgEADgEIBghdIAAgpIhPBNQgEADgEAAQgFAAgEgDQgDgEAAgEQAAgFADgCIBghfIAAgpIhPBPQgEADgEAAQgFAAgEgDQgDgEAAgEQAAgFADgEIBghfIAAgpIhPBPQgEADgEAAQgFAAgEgDQgDgEAAgEIAAgCQAAgEADgEIBghfIAAgqQAAgFADgDQADgDAEAAQAEAAADADQAEADAAAFIAAAqIBfBfQAEAEAAAFQAAAFgEAEQgDADgFAAQgFAAgDgDIhPhPIAAApIBfBfQAEAEAAAFQAAAEgEAEQgDADgFAAQgFAAgDgDIhPhPIAAApIBfBfQAEACAAAFQAAAEgEAEQgDADgFAAQgFAAgDgDIhPhNIAAApIBfBdQAEAEAAAFQAAAEgEAEQgDADgFAAQgFAAgDgDIhPhPIAAApIBfBfQAEAEAAAFQAAAEgEAEQgDADgFAAQgFAAgDgDIhPhPIAADLQAAAFgEADQgDADgEAAQgEAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-29.9,22.1,59.8);


(lib.new_tree_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9BD2E5").s().p("AgGFvQgEgDAAgFIAAldIhPBPQgDADgFAAQgEAAgEgDQgEgEAAgEQAAgFAEgEIBfhdIAAgpIhPBNQgDADgFAAQgEAAgEgDQgEgDAAgFQAAgFAEgCIBfheIAAgqIhPBPQgDAEgFAAQgEAAgEgEQgEgDAAgFQAAgFAEgDIBfhfIAAgpIhPBOQgDAEgFAAQgEAAgEgEQgEgDAAgFQAAgFAEgDIBfhfIAAgpIhPBPQgDADgFAAQgEAAgEgDQgEgEAAgEIAAgCQAAgEAEgEIBfhfIAAgpQAAgFAEgDQACgEAEAAQAEAAAEAEQADADAAAFIAAApIBfBfQADAEABAFQgBAFgDAEQgEADgEAAQgFAAgDgDIhPhPIAAApIBfBfQADAEABAEQgBAFgDADQgEAEgEAAQgFAAgDgEIhPhOIAAApIBfBfQADADABAFQgBAFgDADQgEAEgEAAQgFAAgDgEIhPhPIAAAqIBfBeQADACABAFQgBAEgDAEQgEADgEAAQgFAAgDgDIhPhNIAAApIBfBdQADAEABAFQgBAEgDAEQgEADgEAAQgFAAgDgDIhPhPIAAFdQAAAFgDADQgEAEgEAAQgEAAgCgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-37.1,22,74.3);


(lib.sun1_ray2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,235,207,0)"],[0.149,1],0,0,0,0,0,60.1).s().p("AmhGiQitiugBj0QABjzCtiuQCuitDzgBQD0ABCuCtQCuCuAADzQAAD0iuCuQiuCuj0AAQjzAAiuiug");
	this.shape.setTransform(59.2,59.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.4,118.4);


(lib.sun1_hex1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0FFFE").s().p("ABqF8Im/h7IgDgCIAAgDIgXnOIABgDIADgCIGxikIADAAIADACIEiFqIABADIAAADIj/GDIgDACIgBAAIgCAAg");
	this.shape.setTransform(36.3,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,73.6,76.2);


(lib.logo_BestBuy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAHAxIg/gGIAIhbIA2AFQAzAEgDAaQgBANgRACIAAABQAWAIgBAQQgBAOgQAFQgJADgNAAIgLAAgAgKAZIAFAAIALAAQAHgBAAgFQABgIgSgBIgFgBgAgHgIIAEAAQANABABgHQAAgEgFgCIgIgBIgEgBg");
	this.shape.setTransform(-13,-6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgdAuIAFg+IgagCIADgfIBiAJIgDAeIgagDIgGA+g");
	this.shape_1.setTransform(18.4,-3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgEAvQgcgDgVgKIAQgZIADABQAPAKAOACQAKAAAAgFQABgEgJgCIgJgCQgigIACgSQABgQATgIQARgHAUACQAWABATAKIgPAXQgMgIgPgBQgKgBAAAFQgBADAKACIAKADQAjAIgCAUQgCAPgSAIQgNAFgRAAIgIAAg");
	this.shape_2.setTransform(7.7,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgvAqIAIhbIBXAHIgCAaIgpgDIgBAJIAlACIgCAXIgkgDIgBAJIApADIgCAag");
	this.shape_3.setTransform(-2.2,-5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAHAxIg/gGIAIhbIA1AFQA0AEgDAaQAAAHgFAEQgFADgJABIAAABQAXAIgBAQQgBAOgQAFQgJADgNAAIgLAAgAgKAZIAFAAIALAAQAHgBAAgFQABgIgSgBIgFgBgAgHgIIAEAAQANABABgHQAAgEgFgCIgJgBIgDgBg");
	this.shape_4.setTransform(-12,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgEAxQg7gGAEgnIAFg1IAtAEIgEAyQgBAHACADQACAEAIABQAGABADgEQACgDABgHIAEgyIAuAEIgFA2QgBATgRAJQgNAHgSAAIgKgBg");
	this.shape_5.setTransform(0.2,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgdAuIADgoIgpg3IA2AEIAMAaIABAAIAEgIIALgPIA1AFIgxAvIgEAog");
	this.shape_6.setTransform(12.9,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AABAEIgBgEIgBAAIAAAEIgBAAIABgHIABAAQABABABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIABAEgAAAAAIAAAAIACAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAAAg");
	this.shape_7.setTransform(20.5,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AikCNIgBgBIhahnIALh/IBrhVIGJAjIgcE7gAjvhWIgKB4IBXBlIGBAiIAbkwImBghgAjagDQgHgBgEgFQgFgFAAgGIAAgBQABgHAFgEQAFgFAGAAIACAAQAGABAFAFQAEAEAAAHIAAABQAAAHgFAFQgFAEgHAAgAjggdQgDADgBAFIAAABQAAAEADADQADADAEABIABAAQAKAAABgKIAAgBQAAgKgKgBIgBAAQgEAAgDACg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEEF35").s().p("AikCKIhYhmIALh8IBphTIGFAiIgbE1gAjigfQgEAEgBAGQAAAGAEAEQADAEAGABQAGABAEgEQAFgEAAgGQABgFgEgFQgEgEgFgBIgCAAQgFAAgEADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-17.6,51.4,35.2);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ACAA+QgQgRgBgbQABgYAQgRQASgSAbAAQAbAAASASQARARAAAYQAAAagRASQgSASgbAAQgbAAgSgSgACagFQgGAHgBAQQABARAGAJQAHAKAMAAQAMAAAHgKQAHgJAAgRQAAgQgHgHQgHgKgMAAQgMAAgHAKgAjgA+QgRgRAAgbQAAgYARgRQAQgSAaAAQAYAAAPAOQAVATgBAlIhTAAQADAZAYAAQAPAAAGgMIAiAAQgDAPgRAMQgPALgUgBQgcAAgRgRgAjOAFIAvAAQgBgIgGgHQgGgFgKgBQgUABgEAUgAE9BNIAAhGQAAgSgSAAQgKgBgFAIQgGAEAAAMIAABBIgjAAIAAhzIAiAAIAAAQIABAAQANgTAWAAQASAAALAMQALAMAAARIAABNgAALBNIAAgbIA2g7IAAgBIg2AAIAAgcIBhAAIAAAcIg2A6IAAABIA4AAIAAAcgAggBNIAAhzIAhAAIAABzgAhyBNIAAhzIAhAAIAAATIABAAQAMgTATAAIAHAAIAAAfIAAAAQgRgCgKAIQgKAGAAASIAAA2gAk4BNIgohzIAlAAIAWBJIAAAAIAXhJIAkAAIgpBzgAgggvIAAggIAhAAIAAAgg");
	this.shape.setTransform(-4.7,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB212E").s().p("AgTA6Igbg6IASAAIAQAjIAqhcIARAAIg0Bzg");
	this.shape_1.setTransform(35.3,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-8.9,80.2,17.8);


(lib.l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBnIAAjNIBEAAIAACSIBFAAIAAA7g");
	this.shape.setTransform(0,0,1.356,1.356);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-14.1,18.9,28.2);


(lib.img_phone_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_phone_03_lrg();
	this.instance.parent = this;
	this.instance.setTransform(-91.5,-188);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-188,183,376);


(lib.img_phone_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_phone_02_lrg();
	this.instance.parent = this;
	this.instance.setTransform(-92,-188);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-188,184,376);


(lib.i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBnIAAjNIBFAAIAADNg");
	this.shape.setTransform(0,0,1.356,1.356);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-14.1,9.6,28.2);


(lib.hill_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("As/D8IAAgBMjjBAAAIAAhEMA6MgC6MA3ogD7ITdFJMAmvAAHMA3bgDuIdZFzMAmdgBIMArmgEMIL1AyIPEC1MA62AAiMArmgEMIL0AyIAAFNg");
	this.shape.setTransform(1536.1,46.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,3072.2,106.7);


(lib.h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBnIAAhPIg3AAIAABPIhGAAIAAjNIBGAAIAABGIA3AAIAAhGIBGAAIAADNg");
	this.shape.setTransform(0,0,1.356,1.356);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-14.1,26.7,28.2);


(lib.focused = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#0074A7","rgba(0,116,167,0)"],[0.886,1],0,0,0,0,0,52.7).s().p("AlxFyQiaiaAAjYQAAjYCaiZQCZiaDYAAQDYAACaCaQCaCZAADYQAADYiaCaQiaCajYAAQjYAAiZiag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.4,-52.4,104.9,104.9);


(lib.flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.635],0.3,-206.8,0,0.5,27.2,380).s().p("Eg43AHBIAAuCMBxuAAAIAAOCg");
	this.shape.setTransform(214,-80);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,728,90);


(lib.flare_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flare();
	this.instance.parent = this;
	this.instance.setTransform(-125,-115,1.607,1.607);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-115,308.6,242.7);


(lib.detailsHitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003F69").s().p("AALAWIgLgZIgKAZIgMAAIATgsIAHAAIAUAsg");
	this.shape.setTransform(62.4,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003F69").s().p("AgGAVQgDgBgCgDIAEgEIADAEQACABACAAQACAAACgCQACgCAAgEIgBgEIgBgCIgEgDQgEgBgCgBIgCgEIgBgFIABgFIACgEIAEgCIADgBQAEAAADABIAEAEIgDAEIgDgDQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQgBAAgBADQgCACAAADQAAADABACIAEADQAEACADABIACADIABAFIgBAGIgDAFIgEACIgEABQgDAAgDgCg");
	this.shape_1.setTransform(56.1,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003F69").s().p("AgBAhIAAhBIADAAIAABBg");
	this.shape_2.setTransform(53.7,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003F69").s().p("AgCAfIAAgrIAFAAIAAArgAgCgWIgBgEIABgDIACgBIACABIACADQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABIgCABIgCgBg");
	this.shape_3.setTransform(51.7,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003F69").s().p("AgFAXIgEgDIgCgEIgBgGQAAgFACgDIAEgDIAGgCIAEAAIADAAIAAgCIAAgGIgCgDIgDgDIgCAAIgEABIgDAEIgDgEQACgDADgBIAFgCIAGABQACABACACIACAGIABAIIAAARIAAAJIgFAAIAAgIIgBAAIgBADIgCAEIgDACIgCAAIgEAAgAgDABIgCAEIgBAEIAAAFIACACQABACADAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIADgEQACgDAAgHIAAgDIgDAAIgHABg");
	this.shape_4.setTransform(48.8,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003F69").s().p("AAAAcIAAgDIgCgDIAAgFIAAgbIgHAAIAAgFIAHAAIAAgNIADAAIAAANIAIAAIAAAFIgIAAIAAAZQAAAFABACQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAIADgBIAAAEIgFABIgEAAg");
	this.shape_5.setTransform(46,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003F69").s().p("AgEAWIgFgFQgCgDgBgFQgCgEAAgFQAAgEACgEIADgIIAFgFQADgBABAAQAEAAADABQADACABADIADAHIABAIIAAACIgXAAIABAHIACAFIADADQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQADAAADgCIADgFIAEADQgCAFgDABIgDACIgFABQgBAAgDgBgAAJgCIgBgGIgCgFIgCgDIgEgBIgCABIgDAEIgCAFIAAAFIAQAAIAAAAg");
	this.shape_6.setTransform(43,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003F69").s().p("AgRAfIAAg9IAOAAIADAAIAEACIAEACIAEAEIACAEIACAGIACAMIgCANIgCAGIgCAEIgEAEIgEACIgEACIgDAAgAgLAaIAIAAQADAAABgCQADgBADgEQACgDABgFQACgFAAgGQAAgFgCgFQgBgFgCgEQgCgDgEgBQgBgCgDAAIgIAAg");
	this.shape_7.setTransform(38.8,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003F69").s().p("AgEAWIgFgFIgDgIQgCgEAAgFQAAgEACgEIADgIIAFgFQADgBABAAQAEAAADABQADACABADIADAHIABAIIAAACIgXAAIABAHIACAFIADADQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQADAAADgCIADgFIAEADQgCAFgDABIgDACIgFABQgBAAgDgBgAAJgCIgBgGIgCgFIgCgDIgEgBIgCABIgDAEIgCAFIAAAFIAQAAIAAAAg");
	this.shape_8.setTransform(32.7,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003F69").s().p("AgEAWIgFgFIgDgIQgCgEAAgFQAAgEACgEIADgIIAFgFQADgBABAAQAEAAADABQADACABADIADAHIABAIIAAACIgXAAIABAHIACAFIADADQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQADAAADgCIADgFIAEADQgCAFgDABIgDACIgFABQgBAAgDgBgAAJgCIgBgGIgCgFIgCgDIgEgBIgCABIgDAEIgCAFIAAAFIAQAAIAAAAg");
	this.shape_9.setTransform(28.9,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003F69").s().p("AgDAgIgFgBQgEgCgDgDIAFgFQACADADACQADACACAAIADgBIADgDIACgEIABgEIgBgFIgCgEIgGgFIgEgCIgFgDIgCgEIgBgHQAAgFABgDQABgDACgCIAGgEIADgBQAFAAADABIAGAGIgDAEIgFgEIgFgBIgCABIgDABIgDAEIgBAFIABAGIADADQACADACABIAFACIAFADIAEAGIAAAGQAAAEgBAEQgBADgDACIgEAEIgGABIgDgBg");
	this.shape_10.setTransform(25,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.1,4.4,43.8,15);


(lib.detailscopy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494A4C").s().p("AgBADQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIACgBQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIACABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgCABIgBgBg");
	this.shape.setTransform(92.3,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494A4C").s().p("AgNAgIABgFIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIACgGIACgIIgNgsIAHAAIAHAkIAJgkIAGAAIgOA0IgBAGIgBADIgDADIgEABIgFgBg");
	this.shape_1.setTransform(89.7,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494A4C").s().p("AgIAVIgDgEQgCgDAAgJIAAgbIAGAAIAAAbIABAIIADADIADABIACgBQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAgBIACgEIAAgGIAAgYIAGAAIAAAgIABALIgGAAIAAgJIgBAAIgBAFIgCADIgEABIgCABQgDAAgDgBg");
	this.shape_2.setTransform(85.9,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#494A4C").s().p("AgPAfIAAg9IAOAAIAEAAIAFADIAEAEQACAEAAAEIgBAGIgCAEIgDADIgDACIADAAIAEACIADAFIABAHQAAAFgCADIgEAGIgFACIgFABgAgJAaIAJAAIADgBIADgCIADgEIABgFIgBgHIgDgEIgEgCIgCgBIgJAAgAgJgDIAIAAIACAAIADgCQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIABgFIgBgFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgDgCIgCAAIgIAAg");
	this.shape_3.setTransform(81.8,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#494A4C").s().p("AAAAcIgBgDIgBgEIAAgEIAAgcIgHAAIAAgEIAHAAIAAgNIADAAIAAANIAIAAIAAAEIgIAAIAAAaQAAAFACABQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAIADgBIAAAGIgFABIgEgBg");
	this.shape_4.setTransform(76.7,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#494A4C").s().p("AgGAVQgDgBgCgDIAEgEIADAEQACABACAAQACAAACgCQACgCAAgEIgBgEIgBgCIgEgDQgEgBgCgBIgCgEIgBgFIABgFIACgEIAEgCIADgBQAEAAADABIAEAEIgDAEIgDgDQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQgBAAgBADQgCACAAADQAAADABACIAEADQAEACADABIACADIABAFIgBAGIgDAFIgEACIgEABQgDAAgDgCg");
	this.shape_5.setTransform(74,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494A4C").s().p("AgEAWIgFgFIgDgIQgCgEAAgFQAAgEACgEIADgIIAFgFQADgBABAAQAEAAADABQADACABADIADAHIABAIIAAACIgXAAIABAHIACAFIADADQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQADAAADgCIADgFIAEADQgCAFgDABIgDACIgFABQgBAAgDgBgAAJgCIgBgGIgCgFIgCgDIgEgBIgCABIgDAEIgCAFIAAAFIAQAAIAAAAg");
	this.shape_6.setTransform(70.6,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494A4C").s().p("AgPAfIAAg9IAOAAIAEAAIAFADIAEAEQACAEAAAEIgBAGIgCAEIgDADIgDACIADAAIAEACIADAFIABAHQAAAFgCADIgEAGIgFACIgFABgAgJAaIAJAAIADgBIADgCIADgEIABgFIgBgHIgDgEIgEgCIgCgBIgJAAgAgJgDIAIAAIACAAIADgCQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIABgFIgBgFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgDgCIgCAAIgIAAg");
	this.shape_7.setTransform(66.7,21.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#494A4C").s().p("AgGAeIgFgEIgEgGIgBgJIACgJIADgGIALgbIAHAAIgMAbIAEgCIACgBIAGABIAFAEQACACABACQACAEAAAFQAAAFgCAEIgDAGIgFAEQgEACgDAAQgDAAgDgCgAgDgBIgDABIgDAFIgBAGIABAHIACAEIAEADIADACQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIAEgDIACgFIAAgGIAAgGIgCgFIgEgBIgEgBIgDABg");
	this.shape_8.setTransform(60.6,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#494A4C").s().p("AAEAfIAAg2IgKAJIgDgFIANgLIAGAAIAAA9g");
	this.shape_9.setTransform(56,21.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#494A4C").s().p("AgDAgIgEgDIgDgDIgCgEQgCgFgBgGIgBgLIABgKIADgKIACgFIADgDIAEgCIADgCIAFACIADACIADADIADAFIACAKIABAKIgBALIgCALIgDAEIgDADIgDADIgFABIgDgBgAgBgZIgDACIgEAHIgBAJIAAAHQAAALABAGIAEAHIADACIABABIADgBIADgCQACgDAAgEQACgGAAgLIAAgHIgCgJIgCgHIgDgCIgDgBIgBABg");
	this.shape_10.setTransform(52.2,21.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#494A4C").s().p("AgOAgIAAgGIAPgYIAFgHQACgFAAgDIAAgFIgCgEIgCgCIgEgBIgCAAIgDACIgCADIgBAFIgGgBIACgGIADgFIAFgDIAEgBQAEAAACABIAFAEIADAFIABAHIgBAFIgCAFIgGAJIgNAWIAWAAIAAAFg");
	this.shape_11.setTransform(47.9,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#494A4C").s().p("AgEAgIgFgBIgEgDIgEgEIgDgFIgCgGIgCgGIAAgHIACgNIACgFIADgFIAEgEIAEgDIAFgCIAEAAIAFAAIAEACIAFADIADAEIAEAFIACAFIACANIgBAHIgBAGIgCAGIgEAFIgDAEIgFADIgEABIgFABIgEgBgAgDgcIgFACIgDACIgDAEQgCAEgCAFQgBAGAAAFQAAAGABAFQACAGACAEIADADIADADIAFACIADAAIAEAAIAEgCIAEgDIACgDQADgEABgGQACgFAAgGQAAgFgCgGQgBgFgDgEIgCgEIgEgCIgEgCIgEAAIgDAAgAgDASIgFgEIgDgHIAAgHIAAgHIADgHIAFgEQACgBABAAQADAAACABQADABABADIgDAEIgCgDIgEgBIgBABIgCADIgCAFIAAAFIAAAFIACAFIACADIABABIAEgBIACgDIADAEIgDAEQgDACgDAAQgBAAgCgCg");
	this.shape_12.setTransform(43.1,21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#494A4C").s().p("AgBADQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIACgBQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIACABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgCABIgBgBg");
	this.shape_13.setTransform(37.5,24.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#494A4C").s().p("AgGAVQgDgBgCgDIAEgEIADAEQACABACAAQACAAACgCQACgCAAgEIgBgEIgBgCIgEgDQgEgBgCgBIgCgEIgBgFIABgFIACgEIAEgCIADgBQAEAAADABIAEAEIgDAEIgDgDQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQgBAAgBADQgCACAAADQAAADABACIAEADQAEACADABIACADIABAFIgBAGIgDAFIgEACIgEABQgDAAgDgCg");
	this.shape_14.setTransform(35,22.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#494A4C").s().p("AgCAiIAAhDIAEAAIAABDg");
	this.shape_15.setTransform(32.6,21.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#494A4C").s().p("AgBAfIAAgrIADAAIAAArgAgBgWIgBgEIABgDIABgBIACABIABADQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgCABIgBgBg");
	this.shape_16.setTransform(30.6,21.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#494A4C").s().p("AgFAWIgEgCIgCgEIgBgGQAAgEACgEIAEgDIAGgCIAEgBIADAAIAAgBIAAgGIgCgDIgDgCIgCgBIgEACIgDADIgDgEQACgDADgCIAFgBIAGABQACABACADIACAFIABAIIAAAQIAAAKIgFAAIAAgJIgBAAIgBAFIgCADIgDABIgCABIgEgBgAgDABIgCADIgBAGIAAADIACADQABACADABQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIADgEQACgDAAgIIAAgCIgDAAIgHABg");
	this.shape_17.setTransform(27.7,22.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#494A4C").s().p("AAAAcIgBgDIgBgEIgBgEIAAgcIgFAAIAAgEIAFAAIAAgNIAEAAIAAANIAIAAIAAAEIgIAAIAAAaQAAAFABABQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAIADgBIABAGIgGABIgEgBg");
	this.shape_18.setTransform(24.9,22.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#494A4C").s().p("AgEAWIgFgFIgDgIQgCgEAAgFQAAgEACgEIADgIIAFgFQADgBABAAQAEAAADABQADACABADIADAHIABAIIAAACIgXAAIABAHIACAFIADADQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQADAAADgCIADgFIAEADQgCAFgDABIgDACIgFABQgBAAgDgBgAAJgCIgBgGIgCgFIgCgDIgEgBIgCABIgDAEIgCAFIAAAFIAQAAIAAAAg");
	this.shape_19.setTransform(21.9,22.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#494A4C").s().p("AgGAgQgCgBgCgEIgDgHIgBgKIABgJIADgGIAEgFQADgBADAAIACAAIADACQADADABAEIAAgfIAGAAIAABCIgGAAIAAgIIAAAAQgBAEgCACIgDACIgDABQgDAAgDgCgAgCgFIgEAEIgBAEIgBAHIABAIIABAGIAEAEIACABIAEgBIADgEIABgGIABgIIgBgHIgBgEIgDgEQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgCABg");
	this.shape_20.setTransform(17.8,21.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#494A4C").s().p("AgHAXIAAggIAAgLIAGAAIAAAKIABgGIABgDQACgCAEAAIABAAIAAAFIgCAAIgDACIgDAEIAAAFIgBAFIAAAXg");
	this.shape_21.setTransform(13.3,22.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#494A4C").s().p("AgFAVQgDgBgCgDIgDgIQgBgEAAgFQAAgEABgEQABgFACgDIAFgFQADgBACAAQADAAADABIAFAFQACADABAFIABAIIgBAJQgBAEgCAEIgFAEQgDACgDAAQgCAAgDgCgAgDgQIgDAEIgBAGIgBAGIABAHIABAGIADADQABABAAAAQABAAAAAAQABABAAAAQAAAAAAAAIAEgCQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBABAAIABgGIABgHIgBgGIgBgGIgDgEIgEgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_22.setTransform(9.7,22.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#494A4C").s().p("AgDAiIAAgmIgGAAIAAgEIAGAAIAAgKIABgGIACgFIABgDIAGgBIADAAIgBAFIgCAAIgDABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBADgBAEIAAAKIAIAAIAAAEIgIAAIAAAmg");
	this.shape_23.setTransform(6.9,21.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#494A4C").s().p("AATAXIAAgcIgBgHIgCgDQgBAAAAgBQgBAAAAAAQAAAAgBAAQgBgBAAAAIgEACIgDADIgCAFIAAAGIAAAYIgEAAIAAgcQAAgEgCgDIgCgEIgDgBIgEACIgDADIgCAFIgBAGIAAAYIgFAAIAAggIgBgLIAGAAIAAAJIACgFIACgCIAEgDIAEAAIAEABIACACQABACABAFIAEgHIADgCIAFgBQADAAACABQADABABADIABAGIABAFIAAAcg");
	this.shape_24.setTransform(0.8,22.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#494A4C").s().p("AgFAVQgDgBgCgDIgDgIQgBgEAAgFQAAgEABgEIADgIIAFgFQADgBACAAQADAAADABIAFAFQACADABAFIABAIIgBAJQgBAEgCAEIgFAEQgDACgDAAQgCAAgDgCgAgDgQIgDAEIgBAGIgBAGIABAHIABAGIADADQABABAAAAQABAAAAAAQABABAAAAQAAAAAAAAIAEgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBABAAIABgGIABgHIgBgGIgBgGIgDgEIgEgBQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_25.setTransform(-4.4,22.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#494A4C").s().p("AgCAVQgDgBgCgDIgDgIIgBgJIABgIIADgIIAFgFQACgBACAAIAGABIAEADIgDAEIgDgCIgDgBQgBAAAAAAQgBAAgBAAQAAAAAAABQAAAAAAAAIgDAEIgBAGIgBAGIABAHIABAGIADADQAAABAAAAQAAAAAAAAQABABABAAQAAAAABAAIAEgBIADgDIACAFIgEADIgGABQgCAAgCgCg");
	this.shape_26.setTransform(-7.7,22.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#494A4C").s().p("AgBADQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIACgBQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIACABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgCABIgBgBg");
	this.shape_27.setTransform(-10.3,24.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#494A4C").s().p("AgNAgIABgFIADAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAIACgGIACgIIgNgsIAHAAIAHAkIAJgkIAGAAIgOA0IgBAGIgBADIgDADIgEABIgFgBg");
	this.shape_28.setTransform(-13,23.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#494A4C").s().p("AgHAVIgEgEQgBgDgBgJIAAgbIAGAAIAAAbIABAIIACADIAEABIACgBQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAgBIACgEIABgGIAAgYIAFAAIAAAgIABALIgGAAIAAgJIAAAAIgCAFIgDADIgDABIgCABQgDAAgCgBg");
	this.shape_29.setTransform(-16.7,22.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#494A4C").s().p("AgPAfIAAg9IAOAAIAEAAIAFADIAEAEQACAEAAAEIgBAGIgCAEIgDADIgDACIADAAIAEACIADAFIABAHQAAAFgCADIgEAGIgFACIgFABgAgJAaIAJAAIADgBIADgCIADgEIABgFIgBgHIgDgEIgEgCIgCgBIgJAAgAgJgDIAIAAIACAAIADgCQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIABgFIgBgFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgDgCIgCAAIgIAAg");
	this.shape_30.setTransform(-20.8,21.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#494A4C").s().p("AAAAcIAAgDIgCgEIAAgEIAAgcIgGAAIAAgEIAGAAIAAgNIADAAIAAANIAIAAIAAAEIgIAAIAAAaQAAAFABABQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAIADgBIAAAGIgFABIgEgBg");
	this.shape_31.setTransform(-24.3,22.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#494A4C").s().p("AgGAVQgDgBgCgDIAEgEIADAEQACABACAAQACAAACgCQACgCAAgEIgBgEIgBgCIgEgDQgEgBgCgBIgCgEIgBgFIABgFIACgEIAEgCIADgBQAEAAADABIAEAEIgDAEIgDgDQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQgBAAgBADQgCACAAADQAAADABACIAEADQAEACADABIACADIABAFIgBAGIgDAFIgEACIgEABQgDAAgDgCg");
	this.shape_32.setTransform(-27,22.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#494A4C").s().p("AgEAWIgFgFQgCgDgBgFQgCgEAAgFQAAgEACgEQABgFACgDIAFgFQADgBABAAQAEAAADABQADACABADIADAHIABAIIAAACIgXAAIABAHIACAFIADADQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQADAAADgCIADgFIAEADQgCAFgDABIgDACIgFABQgBAAgDgBgAAJgCIgBgGIgCgFIgCgDIgEgBIgCABIgDAEIgCAFIAAAFIAQAAIAAAAg");
	this.shape_33.setTransform(-30.4,22.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#494A4C").s().p("AgPAfIAAg9IAOAAIAEAAIAFADIAEAEQACAEAAAEIgBAGIgCAEIgDADIgDACIADAAIAEACIADAFIABAHQAAAFgCADIgEAGIgFACIgFABgAgJAaIAJAAIADgBIADgCIADgEIABgFIgBgHIgDgEIgEgCIgCgBIgJAAgAgJgDIAIAAIACAAIADgCQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIABgFIgBgFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgDgCIgCAAIgIAAg");
	this.shape_34.setTransform(-34.3,21.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#494A4C").s().p("AgEAWIgFgFIgDgIQgCgEAAgFQAAgEACgEIADgIIAFgFQADgBABAAQAEAAADABQADACABADIADAHIABAIIAAACIgXAAIABAHIACAFIADADQABABAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQADAAADgCIADgFIAEADQgCAFgDABIgDACIgFABQgBAAgDgBgAAJgCIgBgGIgCgFIgCgDIgEgBIgCABIgDAEIgCAFIAAAFIAQAAIAAAAg");
	this.shape_35.setTransform(-40.2,22.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#494A4C").s().p("AgEAWIgFgFIgDgIQgCgEAAgFQAAgEACgEIADgIIAFgFQADgBABAAQAEAAADABQADACABADIADAHIABAIIAAACIgXAAIABAHIACAFIADADQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQADAAADgCIADgFIAEADQgCAFgDABIgDACIgFABQgBAAgDgBgAAJgCIgBgGIgCgFIgCgDIgEgBIgCABIgDAEIgCAFIAAAFIAQAAIAAAAg");
	this.shape_36.setTransform(-44,22.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#494A4C").s().p("AgEAhIgDgCQgFgCgDgEIAEgEQADADADABQADACACAAIADgBIAEgCIACgEIABgEIgBgGIgDgDIgGgFIgFgCIgDgCIgEgGIgBgGQABgEABgEQABgDADgCIAEgDIAEgCQAFAAAEACIAGAEIgFAFIgEgEIgFgBIgCAAIgDACIgDAFIAAAEIAAAGIACADQADADACACIAGABIAEAEIADAEIACAHQAAAFgCADQgBADgDACIgFAEIgFABIgEAAg");
	this.shape_37.setTransform(-47.9,21.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#494A4C").s().p("AgBADQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIACgBQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIACABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgCABIgBgBg");
	this.shape_38.setTransform(-54.1,24.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#494A4C").s().p("AgGAeIgFgEIgEgGIgBgJIACgJIADgGIALgbIAHAAIgMAbIAEgCIACgBIAGABIAFAEQACACABACQACAEAAAFQAAAFgCAEIgDAGIgFAEQgEACgDAAQgDAAgDgCgAgDgBIgDABIgDAFIgBAGIABAHIACAEIAEADIADACQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIAEgDIACgFIAAgGIAAgGIgCgFIgEgBIgEgBIgDABg");
	this.shape_39.setTransform(-57.1,21.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#494A4C").s().p("AAEAfIAAg2IgKAJIgDgFIANgLIAGAAIAAA9g");
	this.shape_40.setTransform(-61.7,21.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#494A4C").s().p("AgJAiIAOhEIAFABIgOBEg");
	this.shape_41.setTransform(-64.5,21.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#494A4C").s().p("AgFAfIgEgCIgDgEIgDgEIAGgDQACAEACACQACACADAAIADgBIAEgDIABgFIABgGIAAgGIgCgFIgEgBIgDgBIgGABIgEABIAAgfIAYAAIAAAGIgTAAIAAATIAFgBIAHABIAEAEQADACABADIABAIIgBAJIgEAGQgCADgDABQgDACgDAAIgFgBg");
	this.shape_42.setTransform(-67.8,21.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#494A4C").s().p("AgJAiIAOhEIAFABIgOBEg");
	this.shape_43.setTransform(-71,21.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#494A4C").s().p("AAEAfIAAg2IgKAJIgDgFIANgLIAGAAIAAA9g");
	this.shape_44.setTransform(-74.6,21.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#494A4C").s().p("AAEAfIAAg2IgKAJIgDgFIANgLIAGAAIAAA9g");
	this.shape_45.setTransform(-78.8,21.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#494A4C").s().p("AgFACIAAgDIALAAIAAADg");
	this.shape_46.setTransform(-81.5,22.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#494A4C").s().p("AgGAeIgFgEIgEgGIgBgJIACgJIADgGIALgbIAHAAIgMAbIAEgCIACgBIAGABIAFAEQACACABACQACAEAAAFQAAAFgCAEIgDAGIgFAEQgEACgDAAQgDAAgDgCgAgDgBIgDABIgDAFIgBAGIABAHIACAEIAEADIADACQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIAEgDIACgFIAAgGIAAgGIgCgFIgEgBIgEgBIgDABg");
	this.shape_47.setTransform(-84.6,21.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#494A4C").s().p("AAEAfIAAg2IgKAJIgDgFIANgLIAGAAIAAA9g");
	this.shape_48.setTransform(-89.2,21.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#494A4C").s().p("AgJAiIAOhEIAFABIgOBEg");
	this.shape_49.setTransform(-92,21.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#494A4C").s().p("AgFAgIgEgDIgEgEIgCgFIAGgCQABAFACACQADACADAAIAEgBIAEgDIABgFIABgEIgBgGQAAgCgCgCIgFgDIgCgBIgCAAIAAgCIACAAIACgBIAEgDIACgDIAAgGIAAgDIgBgEIgEgDIgDgBQgCAAgCACQgCACgCADIgFgCIADgFIADgDIAEgBIADgCQADAAADACQACABACACIAEAGIABAFIgBAGIgCAEIgDAEIgEACIAEAAIAEAEIADAEIAAAGIgBAHIgDAGIgFAEQgDABgEABIgFgBg");
	this.shape_50.setTransform(-95.4,21.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#494A4C").s().p("AgOAgIAAgGIAQgYIAEgHQACgFAAgDIAAgFIgCgEIgCgCIgEgBIgCAAIgDACIgCADIgBAFIgGgBIACgGIADgFIAFgDIAEgBQADAAADABIAFAEIADAFIABAHIgBAFIgCAFIgHAJIgMAWIAVAAIAAAFg");
	this.shape_51.setTransform(-99.6,21.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#494A4C").s().p("AgJAiIAOhEIAFABIgOBEg");
	this.shape_52.setTransform(-102.7,21.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#494A4C").s().p("AgDAgIgEgDIgDgDIgCgEQgCgFgBgGIAAgLIAAgKIADgKIACgFIADgDIAEgCIADgCIAEACIAFACIACADIACAFIADAKIABAKIgBALIgDALIgCAEIgCADIgFADIgEABIgDgBgAgCgZIgCACIgDAHIgCAJIAAAHQAAALACAGIADAHIACACIACABIADgBIACgCQADgDABgEQABgGAAgLIAAgHIgBgJQgBgEgDgDIgCgCIgDgBIgCABg");
	this.shape_53.setTransform(-105.9,21.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#494A4C").s().p("AAEAfIAAg2IgKAJIgDgFIANgLIAGAAIAAA9g");
	this.shape_54.setTransform(-110.5,21.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#494A4C").s().p("AgGAgQgCgBgCgEIgDgHIgBgKIABgJIADgGIAEgFQADgBADAAIACAAIADACQADADABAEIAAgfIAGAAIAABCIgGAAIAAgIIAAAAQgBAEgCACIgEACIgCABQgDAAgDgCgAgCgFIgEAEIgBAEIgBAHIABAIIABAGIAEAEIACABIAEgBIADgEIABgGIABgIIgBgHIgBgEIgDgEQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgCABg");
	this.shape_55.setTransform(-116.1,21.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#494A4C").s().p("AgCAfIAAgrIAEAAIAAArgAgCgWIgBgEIABgDIACgBIACABIABADQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgCABIgCgBg");
	this.shape_56.setTransform(-119,21.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#494A4C").s().p("AgBAiIAAhDIADAAIAABDg");
	this.shape_57.setTransform(-120.9,21.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#494A4C").s().p("AgFAWIgEgCIgCgEIgBgGQAAgEACgEIAEgDIAGgCIAEgBIADAAIAAgBIAAgGIgCgDIgDgCIgCgBIgEACIgDADIgDgEQACgDADgCIAFgBIAGABQACABACADIACAFIABAIIAAAQIAAAKIgFAAIAAgJIgBAAIgBAFIgCADIgDABIgCABIgEgBgAgDABIgCADIgBAGIAAADIACADQABACADABQAAAAAAgBQAAAAAAAAQABAAAAAAQABgBAAAAIADgEQACgDAAgIIAAgCIgDAAIgHABg");
	this.shape_58.setTransform(-123.8,22.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#494A4C").s().p("AgCAWIgMgrIAHAAIAHAkIAAAAIAJgkIAGAAIgMArg");
	this.shape_59.setTransform(-127.2,22.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#494A4C").s().p("AgGAXIAAggIgBgLIAFAAIABAKIABgGIABgDQADgCADAAIABAAIAAAFIgCAAIgDACIgDAEIAAAFIgBAFIAAAXg");
	this.shape_60.setTransform(-131.4,22.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#494A4C").s().p("AgEAWIgFgFIgDgIQgCgEAAgFQAAgEACgEIADgIIAFgFQADgBABAAQAEAAADABQADACABADIADAHIABAIIAAACIgXAAIABAHIACAFIADADQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQADAAADgCIADgFIAEADQgCAFgDABIgDACIgFABQgBAAgDgBgAAJgCIgBgGIgCgFIgCgDIgEgBIgCABIgDAEIgCAFIAAAFIAQAAIAAAAg");
	this.shape_61.setTransform(-134.9,22.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#494A4C").s().p("AgDAiIAAgmIgGAAIAAgEIAGAAIAAgKIABgGIACgFIABgDIAGgBIADAAIgBAFIgCAAIgDABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBADgBAEIAAAKIAIAAIAAAEIgIAAIAAAmg");
	this.shape_62.setTransform(-137.7,21.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#494A4C").s().p("AgDAiIAAgmIgGAAIAAgEIAGAAIAAgKIAAgGIACgFIACgDIAFgBIAEAAIAAAFIgDAAIgDABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAQgCADABAEIAAAKIAIAAIAAAEIgIAAIAAAmg");
	this.shape_63.setTransform(-139.8,21.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#494A4C").s().p("AgDAhIgEgCIgEgEIgDgDIgEgLIgBgNIABgMIAEgLIADgEIADgCIAFgCIADgBIAFABIADACIAEACIADAEIAEALIABAMIgBANIgEALIgDADIgEAEIgDACIgFAAIgDAAgAgFgYQgDACgBAEIgDAJIgBAJIABAKIADAJQABAEADACQADADACgBQADABADgDQACgCACgEQACgDABgGIABgKIgBgJQgBgFgCgEQgCgEgCgCQgDgCgDAAQgCAAgDACg");
	this.shape_64.setTransform(-143.5,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.2,14.2,243.6,15);


(lib.detailsBG = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79D0E9").s().p("Eg43AEsIAApXMBxvAAAIAAJXg");
	this.shape.setTransform(364,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,60);


(lib.d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkBnIAAjNIBOAAQA1AAAgAVQAmAaAAA3QgBAygjAcQghAZgwAAgAggAsIAMAAQAyAAAAgsQAAgUgOgMQgNgLgUAAIgPAAg");
	this.shape.setTransform(0,0,1.356,1.356);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-14.1,27.4,28.2);


(lib.ctahover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A385D").s().p("AhEA3IAAhRIARAAIAAAIIABAAQAGgJAMAAQALAAAIAJQAHAIAAAKQAAAMgHAJQgHAJgNAAQgMAAgEgHIgBAAIAAAggAgvgIQgEAFABADQgBAHAEADQAEAFAGAAQAGAAADgFQAEgDAAgHQAAgDgEgFQgDgEgGAAQgGAAgEAEgAB/AXQgJgJAAgOQAAgLAJgIQAIgIANAAQAOAAAIAIQAKAIAAALQAAAOgKAJQgIAHgOABQgNgBgIgHgACLgIQgDAFAAADQAAAGADAEQAEAFAFAAQAHAAADgFQAEgDAAgHQAAgDgEgFQgDgEgHAAQgFAAgEAEgAiFAXQgKgJAAgOQAAgLAKgIQAJgIANAAQANAAAIAIQAKAIAAALQAAAOgKAJQgIAHgNABQgNgBgJgHgAh5gIQgEAFAAADQAAAHAEADQAEAFAGAAQAGAAADgFQAEgEAAgGQAAgDgEgFQgDgEgGAAQgGAAgEAEgAkZATIANgMQAGAIALAAQALAAAAgJQAAgEgFgCQgDgBgIgCQgVgHAAgQQAAgMAKgHQAJgGAMAAQAPAAALAKIgMANQgFgHgJAAQgLAAAAAIQAAAGALADQAMADAFAFQAJAFAAAJQAAANgKAHQgIAHgNAAQgUAAgKgMgAD0AcIgLggIgLAgIgTAAIgTg2IAUAAIAKAiIAKgiIASAAIALAiIABAAIAJgiIATAAIgTA2gABTAcIgggxIAAAxIgTAAIAAhNIAXAAIAfAyIABAAIgBgyIATAAIAABNgAisAcIAAgcQAAgLgIAAQgKAAAAALIAAAcIgTAAIAAhSIATAAIAAAkQAFgJALAAQALAAAFAIQAFAFgBAKIAAAgg");
	this.shape.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5DAE3").s().p("Al/B1IAAjpIL/AAIAADpg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-11.7,76.8,23.5);


(lib.btm_Y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghBhIAAhQIhKhxIBQAAIAcA6IAeg6IBNAAIhNBxIAABQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-9.7,21.7,19.5);


(lib.btm_S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBlIgVgGIgUgKIgRgLIAngsQAHAGAMAHQAMAGAMAAQAEAAAEgCQAEgCAAgFIgCgFIgEgEIgagKIgUgIQgHgEgIgHQgIgHgEgHQgEgJAAgOQAAgRAIgOQAHgMAMgIQALgIAPgEQAOgDANgBQAUABATAHQAVAIAOANIgoAqQgGgIgKgFQgKgEgIAAQgGAAgDACQgFADAAAEQAAAFAFACIAMAFIAXAIQAMAFAJAGQALAIAFAHQAGAKABAQQAAASgHANQgIANgLAIQgLAJgPAEQgPAFgMAAQgOAAgKgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-10.3,16.8,20.6);


(lib.btm_M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4BhIAChsIgBAAIglBsIgsAAIgkhsIgBAAIADBsIg+AAIAAjBIBWAAIAiBnIABAAIAfhnIBYAAIAADBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-9.7,24.2,19.5);


(lib.btm_E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBhIAAjBICEAAIAAA3IhGAAIAAARIBCAAIAAAwIhCAAIAAASIBLAAIAAA3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-9.7,13.9,19.5);


(lib.btm_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBhIAAjBIBIAAQAWAAAVAEQAWAFAPALQAQALAKATQAJARAAAdQAAAYgJATQgKATgPAMQgPALgUAHQgVAFgTAAgAgeAoIAMAAQAWABALgKQANgKAAgWQAAgSgNgLQgMgKgTAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-9.7,19,19.5);


(lib.btm_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnBhIgJgdIg8AAIgKAdIhGAAIBNjBIBEAAIBMDBgAgPATIAdAAIgOgvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-9.7,22.3,19.5);


(lib.bg_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A385D").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqBnIgLgeIhAAAIgKAeIhKAAIBSjNIBIAAIBRDNgAgQATIAgAAIgQgxg");
	this.shape.setTransform(0,0,1.356,1.356);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-14.1,32.1,28.2);


(lib._18gig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA2430").s().p("AgIA4QgTgWAAgiQAAgiAWgVQAQgUAgAAQAcAAARAOQAQANAFAYIgkAAQgEgVgZAAQgRAAgKANQgJANAAATQAAAUAJAOQALAMARAAQANAAAKgHQAHgIACgKIgcAAIAAgZIA9AAIAABNIgZAAIgCgSIgBAAQgNAVgdAAQgdAAgTgUgAiaBAQgRgMAAgVQAAgZAagJIAAgBQgUgKAAgTQAAgTAQgLQAOgLAaAAQAZAAAPALQAOAKAAATQAAATgTAKIAAABQAZAHAAAbQAAAWgRAMQgQAMgbAAQgbAAgSgMgAiAANQgHAGAAAKQAAAVAaAAQALAAAHgGQAHgGAAgJQAAgWgZAAQgLAAgIAGgAiDggQAAAIAGAFQAGAFAJAAQAWAAAAgSQAAgRgWAAQgVAAAAARgACLBJIAAiSIBHAAQAXAAALALQANAKAAASQAAAUgVAJIAAABQAbAEAAAdQAAAXgPAKQgPALgVAAgACvArIAgAAQAUAAAAgRQAAgSgUAAIggAAgACvgPIAeAAQASAAAAgOQAAgPgSAAIgeAAgAjmBJIAAhcIggAAIAAgYQAigBAFgdIAdAAIAACSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-7.6,52.7,15.4);


(lib._12gb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA2430").s().p("AgHAhQgLgNAAgUQAAgTAMgNQALgMARAAQAQABALAIQAJAHACAOIgUAAQgDgMgOAAQgLAAgFAIQgGAIAAAKQAAAMAGAHQAGAJAKgBQAIAAAFgEQAFgFABgGIgRAAIAAgNIAlAAIAAAsIgQAAIgBgLIAAAAQgHAMgSABQgSAAgJgMgABOArIAAhVIAqAAQANAAAHAGQAIAGAAALQAAALgNAGIAAAAQAQADAAAQQAAAMgJAHQgHAHgOAAgABjAaIATAAQAMAAAAgKQAAgLgMAAIgTAAgABjgIIARAAQALABAAgKQAAgIgKAAIgSAAgAhgArQABgRAPgNQAIgHARgKQAFgEAAgHQAAgLgLAAQgHAAgDAEQgCAEgBAJIgUAAQAAgPAGgHQAHgMAUAAQAQAAAIAIQAIAHAAAMQAAAPgOAIQgRAMgGAGIAlAAIAAASgAiEArIAAg1IgSAAIAAgPQAUgBADgQIARAAIAABVg");
	this.shape.setTransform(0,0,1.704,1.704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-7.6,51.7,15.4);


(lib._6gb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA2430").s().p("AghAhQgLgNAAgUQAAgTAMgNQANgMASAAQANABALAIQAKAHACAOIgVAAQgDgMgMAAQgKAAgGAIQgGAIAAAKQABAMAFAHQAGAJALgBQAFAAAFgEQAGgFAAgGIgQAAIAAgNIAkAAIAAAsIgPAAIgBgLIgBAAQgHAMgPABQgSAAgMgMgAh0AgQgJgLAAgVQAAgUAKgMQAJgLASAAQANAAAIAHQAIAFADALIgVAAQgDgIgIAAQgQAAgBAWQAIgJAMAAQANAAAJAJQAJAGAAAOQAAANgJAJQgKAIgPABQgSgBgKgMgAhjADQgFAFAAAGQAAAGAFAFQAEAEAGAAQAHAAAEgEQAEgFAAgGQAAgGgEgFQgEgDgHAAQgHAAgDADgAA2ArIAAhVIAqAAQAMAAAIAGQAIAHAAAKQAAAMgNAFIAAAAQAPADAAAQQAAANgIAGQgIAHgNAAgABLAaIATAAQAMAAAAgKQAAgLgMAAIgTAAgABLgIIARAAQALABAAgKQAAgIgLAAIgRAAg");
	this.shape.setTransform(0,0,1.704,1.704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-7.6,43.3,15.4);


(lib._3gb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA2430").s().p("Ag5A4QgTgVgBgjQAAggAWgXQATgUAfAAQA3AAAJAzIgkAAQgFgVgWAAQgRAAgKANQgJANAAATQAAAVAJANQAKANARAAQAMAAAJgHQAIgIACgLIgbAAIAAgYIA8AAIAABMIgZAAIgCgSQgOAVgaAAQggAAgSgUgAjFA/QgRgPAAgZIAiAAQACAaAaAAQAWAAgBgUQAAgTgYAAIgIAAIAAgYIAHAAQAXAAAAgRQAAgQgTAAQgWAAgCAWIghAAQAAgWAOgOQAQgNAbAAQAYAAAOALQAQALAAAUQAAAUgWAJQAaAGAAAbQAAAWgRANQgQALgZAAQgdAAgQgNgABbBJIAAiSIBHAAQAWAAANALQAMAKAAASQAAAUgUAJIAAABQAaAGAAAbQAAAXgPALQgNAKgXAAgAB/AsIAhAAQAUAAAAgRQAAgSgVAAIggAAgAB/gOIAfAAQAQAAAAgPQAAgPgQAAIgfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-7.6,43.1,15.4);


(lib._1gb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA2430").s().p("AguAhQgLgNAAgUQAAgTAMgNQAMgMASAAQAfABAFAdIgVAAQAAgMgOAAQgLAAgFAIQgGAIAAAKQAAAMAGAHQAGAJAKgBQAIAAAFgEQADgFABgGIgOAAIAAgNIAiAAIAAAsIgPAAIgCgLQgGAMgQABQgTAAgLgMgAAoArIAAhVIAqAAQANAAAHAGQAIAGAAALQAAALgMAGIAAAAQAPADAAAQQAAAMgJAHQgHAHgOAAgAA+AaIATAAQALAAAAgKQAAgLgMAAIgSAAgAA+gIIARAAQAKABAAgKQAAgIgKAAIgRAAgAheArIAAg1IgSAAIAAgPQATgBADgQIARAAIAABVg");
	this.shape.setTransform(0,0,1.704,1.704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-7.6,38.8,15.4);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_7 = new cjs.Graphics().p("AvaDLIAAkmIfiAAIAAEmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_graphics_7,x:103.3,y:20.4}).wait(25));

	// txt_03a
	this.instance = new lib.txt_03a("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.8,56.1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({y:28.5},10,cjs.Ease.get(1)).wait(15));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_14 = new cjs.Graphics().p("Av+FfIAAkdMAgpAAAIAAEdg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_1_graphics_14,x:106.7,y:35.2}).wait(18));

	// txt_03b
	this.instance_1 = new lib.txt_03b("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(105.3,30.4);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:56.4},10,cjs.Ease.get(1)).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_7 = new cjs.Graphics().p("AnIDPIAAkWIOWAAIAAEWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_graphics_7,x:46.2,y:20.8}).wait(23));

	// FlashAICB
	this.instance = new lib.txt_02a("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(104.6,54.1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({y:28.5},9,cjs.Ease.get(1)).wait(14));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_13 = new cjs.Graphics().p("AgJDOIAAkWIKtAAIAAEWg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_1_graphics_13,x:67.6,y:20.6}).wait(17));

	// FlashAICB
	this.instance_1 = new lib.txt_02b("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(157.6,0.7);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({y:28.7},9,cjs.Ease.get(1)).wait(8));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_20 = new cjs.Graphics().p("ACwDOIAAkWIQMAAIAAEWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_2_graphics_20,x:121.2,y:20.6}).wait(10));

	// FlashAICB
	this.instance_2 = new lib.txt_02c("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(229.9,0.7);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({y:28.7},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnQBtIAAkBIJnAAIAAEBg");
	mask.setTransform(-46.5,-15);

	// txt_01a
	this.instance = new lib.txt_01a("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.7,10.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-15.8},9,cjs.Ease.get(1)).wait(60).to({startPosition:0},0).to({y:-42.4},9,cjs.Ease.get(-1)).wait(4));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_6 = new cjs.Graphics().p("AlNBuIAAkCIKbAAIAAECg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:4.6,y:-15}).wait(76));

	// txt_01b
	this.instance_1 = new lib.txt_01b("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.6,-41.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:-15.5},9,cjs.Ease.get(1)).wait(54).to({x:-1,y:14.2},0).to({y:40.3},9,cjs.Ease.get(-1)).wait(4));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_12 = new cjs.Graphics().p("AkUBuIAAkCIPbAAIAAECg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_2_graphics_12,x:71.1,y:-15}).wait(70));

	// txt_01b
	this.instance_2 = new lib.txt_01c("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(133,-41.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({y:-15.5},9,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-14.5,60.6,10.6);


(lib.treeline_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_98 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(98).call(this.frame_98).wait(1));

	// new_tree_01
	this.instance = new lib.new_tree_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(183.9,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:178.6,y:7.9},0).wait(1).to({x:174.1,y:8},0).wait(1).to({x:170.2,y:8.1},0).wait(1).to({x:166.7},0).wait(1).to({x:163.5,y:8.2},0).wait(1).to({x:160.6},0).wait(1).to({x:158,y:8.3},0).wait(1).to({x:155.5},0).wait(1).to({x:153.2,y:8.4},0).wait(1).to({x:151.1},0).wait(1).to({x:149.1,y:8.5},0).wait(1).to({x:147.2},0).wait(1).to({x:145.4},0).wait(1).to({x:143.7,y:8.6},0).wait(1).to({x:142.1},0).wait(1).to({x:140.6},0).wait(1).to({x:139.1,y:8.7},0).wait(1).to({x:137.8},0).wait(1).to({x:136.5},0).wait(1).to({x:135.2},0).wait(1).to({x:134,y:8.8},0).wait(1).to({x:132.9},0).wait(1).to({x:131.8},0).wait(1).to({x:130.8},0).wait(1).to({x:129.8},0).wait(1).to({x:128.8,y:8.9},0).wait(1).to({x:127.9},0).wait(1).to({x:127},0).wait(1).to({x:126.1},0).wait(1).to({x:125.3},0).wait(1).to({x:124.5},0).wait(1).to({x:123.8,y:9},0).wait(1).to({x:123.1},0).wait(1).to({x:122.4},0).wait(1).to({x:121.7},0).wait(1).to({x:121.1},0).wait(1).to({x:120.5},0).wait(1).to({x:119.9},0).wait(1).to({x:119.3},0).wait(1).to({x:118.8,y:9.1},0).wait(1).to({x:118.2},0).wait(1).to({x:117.7},0).wait(1).to({x:117.2},0).wait(1).to({x:116.8},0).wait(1).to({x:116.3},0).wait(1).to({x:115.9},0).wait(1).to({x:115.5},0).wait(1).to({x:115.1},0).wait(1).to({x:114.7},0).wait(1).to({x:114.4},0).wait(1).to({x:114},0).wait(1).to({x:113.7,y:9.2},0).wait(1).to({x:113.4},0).wait(1).to({x:113.1},0).wait(1).to({x:112.8},0).wait(1).to({x:112.5},0).wait(1).to({x:112.2},0).wait(1).to({x:112},0).wait(1).to({x:111.7},0).wait(1).to({x:111.5},0).wait(1).to({x:111.3},0).wait(1).to({x:111.1},0).wait(1).to({x:110.9},0).wait(1).to({x:110.7},0).wait(1).to({x:110.5},0).wait(1).to({x:110.3},0).wait(1).to({x:110.2},0).wait(1).to({x:110},0).wait(1).to({x:109.9},0).wait(1).to({x:109.8},0).wait(1).to({x:109.6},0).wait(1).to({x:109.5},0).wait(1).to({x:109.4},0).wait(1).to({x:109.3},0).wait(1).to({x:109.2},0).wait(1).to({x:109.1},0).wait(1).to({startPosition:0},0).wait(1).to({x:109},0).wait(1).to({x:108.9},0).wait(1).to({startPosition:0},0).wait(1).to({x:108.8},0).wait(1).to({startPosition:0},0).wait(1).to({x:108.7},0).wait(1).to({startPosition:0},0).wait(1).to({x:108.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:108.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:9.3},0).wait(1));

	// new_tree_01
	this.instance_1 = new lib.new_tree_01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(177.7,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:175.4},0).wait(1).to({x:173.4},0).wait(1).to({x:171.7},0).wait(1).to({x:170.2},0).wait(1).to({x:168.8},0).wait(1).to({x:167.5},0).wait(1).to({x:166.4},0).wait(1).to({x:165.3},0).wait(1).to({x:164.3},0).wait(1).to({x:163.4},0).wait(1).to({x:162.5},0).wait(1).to({x:161.7},0).wait(1).to({x:160.9},0).wait(1).to({x:160.2},0).wait(1).to({x:159.5},0).wait(1).to({x:158.8},0).wait(1).to({x:158.2},0).wait(1).to({x:157.6},0).wait(1).to({x:157.1},0).wait(1).to({x:156.5},0).wait(1).to({x:156},0).wait(1).to({x:155.5},0).wait(1).to({x:155},0).wait(1).to({x:154.6},0).wait(1).to({x:154.1},0).wait(1).to({x:153.7},0).wait(1).to({x:153.3},0).wait(1).to({x:152.9},0).wait(1).to({x:152.6},0).wait(1).to({x:152.2},0).wait(1).to({x:151.9},0).wait(1).to({x:151.5},0).wait(1).to({x:151.2},0).wait(1).to({x:150.9},0).wait(1).to({x:150.6},0).wait(1).to({x:150.4},0).wait(1).to({x:150.1},0).wait(1).to({x:149.8},0).wait(1).to({x:149.6},0).wait(1).to({x:149.4},0).wait(1).to({x:149.1},0).wait(1).to({x:148.9},0).wait(1).to({x:148.7},0).wait(1).to({x:148.5},0).wait(1).to({x:148.3},0).wait(1).to({x:148.1},0).wait(1).to({x:147.9},0).wait(1).to({x:147.8},0).wait(1).to({x:147.6},0).wait(1).to({x:147.4},0).wait(1).to({x:147.3},0).wait(1).to({x:147.2},0).wait(1).to({x:147},0).wait(1).to({x:146.9},0).wait(1).to({x:146.8},0).wait(1).to({x:146.6},0).wait(1).to({x:146.5},0).wait(1).to({x:146.4},0).wait(1).to({x:146.3},0).wait(1).to({x:146.2},0).wait(1).to({x:146.1},0).wait(1).to({x:146},0).wait(1).to({x:145.9},0).wait(1).to({startPosition:0},0).wait(1).to({x:145.8},0).wait(1).to({x:145.7},0).wait(1).to({x:145.6},0).wait(1).to({startPosition:0},0).wait(1).to({x:145.5},0).wait(1).to({startPosition:0},0).wait(1).to({x:145.4},0).wait(1).to({x:145.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:145.2},0).wait(1).to({startPosition:0},0).wait(1).to({x:145.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:145},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:144.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.2,-29.3,32.7,88.2);


(lib.treeline_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// new_tree_01
	this.instance = new lib.new_tree_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-316,16.2,1.171,1.171,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:0.97,scaleY:0.97,x:-276.6,y:23.6},93).to({scaleX:0.13,scaleY:0.13,x:-18.5,y:56.1},22,cjs.Ease.get(-1)).wait(1));

	// new_tree_01
	this.instance_1 = new lib.new_tree_01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(282.2,-9.3,1.171,1.171);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.97,scaleY:0.97,x:235.9,y:-3.7},93).to({scaleX:0.13,scaleY:0.13,x:217.5,y:20.9},22,cjs.Ease.get(-1)).wait(1));

	// new_tree_02
	this.instance_2 = new lib.new_tree_02("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(256.4,-1.6,1.171,1.171);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.97,scaleY:0.97,x:220,y:2.7},93).to({regX:0.4,scaleX:0.13,scaleY:0.13,x:216.7,y:21.7},22,cjs.Ease.get(-1)).wait(1));

	// new_tree_01
	this.instance_3 = new lib.new_tree_01("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(232.5,-8.7,1.171,1.171);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.97,scaleY:0.97,x:182.7,y:-3.2},93).to({regX:0.4,scaleX:0.13,scaleY:0.13,x:214.7,y:21},22,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.8,-52.8,623.9,120.5);


(lib.treeline_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// new_tree_01
	this.instance = new lib.new_tree_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-213.6,20.1,0.726,0.726);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,scaleX:0.85,scaleY:0.85,x:-238.3,y:19.7},93).wait(1).to({regX:0,scaleX:0.85,scaleY:0.85,x:-238},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-237.3,y:19.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-235.8,y:20},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-233.7,y:20.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-230.5,y:20.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-225.9,y:21.3},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-219.6,y:22.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-210.4,y:23.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-196.5,y:25.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-172.7,y:28.4},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-127.1,y:34.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-84.5,y:40.2},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-62.5,y:43.2},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-49.3,y:44.9},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-40.4,y:46.1},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-34.3,y:46.9},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-29.9,y:47.5},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-26.7,y:47.9},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-24.6,y:48.2},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-23.2,y:48.4},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-22.5,y:48.5},0).wait(1).to({regX:0.6,regY:0.6,scaleX:0.09,scaleY:0.09,x:-22.2,y:48.6},0).wait(1));

	// new_tree_01
	this.instance_1 = new lib.new_tree_01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(259.6,16.2,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.98,scaleY:0.98,x:293.9,y:16.8},93).wait(1).to({scaleX:0.98,scaleY:0.98,x:293.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:293.7,y:16.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:293.3,y:17.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:292.8,y:17.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:292,y:17.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:290.8,y:18.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:289.2,y:19},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:286.9,y:20.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:283.4,y:21.7},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:277.5,y:24.5},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:266.1,y:29.8},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:255.4,y:34.8},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:249.9,y:37.4},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:246.6,y:38.9},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:244.4,y:40},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:242.9,y:40.7},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:241.8,y:41.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:241,y:41.6},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:240.4,y:41.8},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:240.1,y:42},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:239.9,y:42.1},0).wait(1).to({regY:0.5,scaleX:0.1,scaleY:0.1},0).wait(1));

	// new_tree_01
	this.instance_2 = new lib.new_tree_01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(233.7,9.5,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.98,scaleY:0.98,x:250,y:10.1},93).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:249.9,y:10.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:249.8,y:10.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:249.7,y:10.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:249.5,y:11},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:249.2,y:11.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:248.7,y:12.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:248.1,y:13.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:247.1,y:14.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:245.5,y:17.6},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:242.4,y:22.9},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:239.4,y:27.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:237.9,y:30.3},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:237,y:31.8},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:236.4,y:32.8},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:236,y:33.5},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:235.7,y:34},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:235.5,y:34.4},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:235.3,y:34.6},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:235.2,y:34.8},0).wait(1).to({scaleX:0.11,scaleY:0.11,y:34.9},0).wait(1).to({regX:1,scaleX:0.1,scaleY:0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.6,-21.5,490.4,91.5);


(lib.treeline_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// new_tree_01
	this.instance = new lib.new_tree_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.7,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09,x:111,y:9.5},56).wait(1).to({scaleX:1.09,scaleY:1.09,x:111.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:112.5,y:9.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:114.9,y:9.2},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:118.6,y:8.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:124.4,y:8.3},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:133.1,y:7.5},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:146.7,y:6.3},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:170,y:4.2},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:212.4,y:0.5},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:254.8,y:-3.3},0).wait(1).to({scaleX:2.49,scaleY:2.49,x:278.1,y:-5.4},0).wait(1).to({scaleX:2.6,scaleY:2.6,x:291.8,y:-6.6},0).wait(1).to({scaleX:2.68,scaleY:2.68,x:300.5,y:-7.4},0).wait(1).to({scaleX:2.72,scaleY:2.72,x:306.2,y:-7.9},0).wait(1).to({scaleX:2.76,scaleY:2.76,x:310,y:-8.2},0).wait(1).to({scaleX:2.77,scaleY:2.77,x:312.3,y:-8.4},0).wait(1).to({scaleX:2.78,scaleY:2.78,x:313.5,y:-8.5},0).wait(1).to({scaleX:2.79,scaleY:2.79,x:313.9},0).wait(1));

	// new_tree_02
	this.instance_1 = new lib.new_tree_02("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(127.9,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.09,scaleY:1.09,x:148.5,y:16.6},56).wait(1).to({scaleX:1.09,scaleY:1.09,x:149.1,y:16.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:151.1,y:16.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:154.9,y:16},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:161.2,y:15.4},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:170.7,y:14.6},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:185.1,y:13.3},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:207.8,y:11.2},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:246.4,y:7.7},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:316.7,y:1.3},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:387,y:-5},0).wait(1).to({scaleX:2.49,scaleY:2.49,x:425.7,y:-8.6},0).wait(1).to({scaleX:2.6,scaleY:2.6,x:448.3,y:-10.6},0).wait(1).to({scaleX:2.68,scaleY:2.68,x:462.7,y:-11.9},0).wait(1).to({scaleX:2.72,scaleY:2.72,x:472.3,y:-12.8},0).wait(1).to({scaleX:2.76,scaleY:2.76,x:478.5,y:-13.4},0).wait(1).to({scaleX:2.77,scaleY:2.77,x:482.3,y:-13.7},0).wait(1).to({scaleX:2.78,scaleY:2.78,x:484.3,y:-13.9},0).wait(1).to({scaleX:2.79,scaleY:2.79,x:485.1,y:-13.8},0).wait(1));

	// new_tree_01
	this.instance_2 = new lib.new_tree_01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(152.1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.09,scaleY:1.09,x:178.8,y:10.1},56).wait(1).to({scaleX:1.09,scaleY:1.09,x:179.6,y:10},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:182.5,y:9.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:187.9,y:9.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:196.7,y:8.7},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:210.1,y:7.7},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:230.5,y:6.2},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:262.5,y:3.7},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:317.1,y:-0.4},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:416.4,y:-7.8},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:515.7,y:-15.3},0).wait(1).to({scaleX:2.49,scaleY:2.49,x:570.3,y:-19.4},0).wait(1).to({scaleX:2.6,scaleY:2.6,x:602.2,y:-21.8},0).wait(1).to({scaleX:2.68,scaleY:2.68,x:622.6,y:-23.3},0).wait(1).to({scaleX:2.72,scaleY:2.72,x:636.1,y:-24.4},0).wait(1).to({scaleX:2.76,scaleY:2.76,x:644.9,y:-25},0).wait(1).to({scaleX:2.77,scaleY:2.77,x:650.3,y:-25.4},0).wait(1).to({scaleX:2.78,scaleY:2.78,x:653.1,y:-25.6},0).wait(1).to({scaleX:2.79,scaleY:2.79,x:654.2,y:-25.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-26.9,306,90.4);


(lib.plane2_shpere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// focused
	this.instance = new lib.focused();
	this.instance.parent = this;
	this.instance.setTransform(56.9,54.9,0.909,0.909);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-0.1,scaleX:1.09,scaleY:1.09,x:57.1,y:54.7,alpha:0},99,cjs.Ease.get(-1)).wait(1).to({regX:0,regY:0,scaleX:0.91,scaleY:0.91,x:56.9,y:54.9,alpha:0.301},99).wait(1));

	// unfocused
	this.instance_1 = new lib.unfocused();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57,54.9,0.963,0.963,0,0,0,46.6,46.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:46.5,scaleX:1.62,scaleY:1.62,x:56.9,alpha:0.301},99,cjs.Ease.get(-1)).wait(1).to({regX:46.6,scaleX:0.96,scaleY:0.96,x:57,alpha:0},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.2,7.2,95.4,95.4);


(lib.plane1_sphere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// focused
	this.instance = new lib.focused();
	this.instance.parent = this;
	this.instance.setTransform(281.1,-110.3,1.094,1.094,0,0,0,0.1,-0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:0.91,scaleY:0.91,x:280.9,y:-110.1,alpha:0.301},99).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.09,scaleY:1.09,x:281.1,y:-110.3,alpha:0},99).wait(1));

	// unfocused
	this.instance_1 = new lib.unfocused();
	this.instance_1.parent = this;
	this.instance_1.setTransform(280.9,-110.2,1.619,1.619,0,0,0,46.5,46.4);
	this.instance_1.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:46.6,scaleX:1.2,scaleY:1.2,x:281,alpha:0},99).wait(1).to({regX:46.5,scaleX:1.62,scaleY:1.62,x:280.9,alpha:0.441},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(205.6,-185.4,150.6,150.6);


(lib.sun01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// red big flare upper
	this.instance = new lib.sun1_hex1();
	this.instance.parent = this;
	this.instance.setTransform(103.4,59.5,0.78,0.78,15,0,0,36.3,37.6);
	this.instance.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:101.3,y:59.4},0).wait(1).to({x:95},0).wait(1).to({x:84.6},0).wait(1).to({x:70},0).wait(1).to({x:51.3},0).wait(1).to({x:28.4,y:59.5},0).wait(1).to({x:-17.2,y:59.4},0).wait(1).to({x:-37.3},0).wait(1).to({x:-49.6},0).wait(1).to({x:-57.7},0).wait(1).to({x:-63.1},0).wait(1).to({x:-66.5},0).wait(1).to({x:-68.5},0).wait(1).to({x:-69.4},0).wait(1).to({x:-69.6,y:59.5},0).wait(1));

	// mini white flare
	this.instance_1 = new lib.sun1_hex1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(184.5,83.9,0.409,0.409,55.6,0,0,36.2,37.6);
	this.instance_1.alpha = 0.289;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:36.3,scaleX:0.4,scaleY:0.4,rotation:54.3,x:180.1},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:50.6,x:166.9,y:83.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:44.3,x:144.9,y:83.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:35.6,x:114.2,y:82.7},0).wait(1).to({scaleX:0.21,scaleY:0.21,rotation:24.3,x:74.7,y:82},0).wait(1).to({regX:36.5,regY:38.1,scaleX:0.13,scaleY:0.13,rotation:10.6,x:26.4,y:81.2},0).wait(1).to({regX:36.3,regY:37.6,scaleX:0.26,scaleY:0.26,rotation:31.5,x:-56.4,y:82.3,alpha:0.238},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:40.7,x:-92.8,y:82.8,alpha:0.216},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:46.4,x:-115.2,y:83.2,alpha:0.202},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:50.1,x:-129.9,y:83.4,alpha:0.193},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:52.6,x:-139.5,y:83.6,alpha:0.187},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:54.1,x:-145.7,y:83.7,alpha:0.183},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:55,x:-149.3,alpha:0.181},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:55.5,x:-151,alpha:0.18},0).wait(1).to({regX:36.2,rotation:55.6,x:-151.5,y:83.9},0).wait(1));

	// yollow  mini flare
	this.instance_2 = new lib.sun1_hex1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(165.4,77.7,0.074,0.074,45,0,0,36.2,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:36.3,regY:37.6,scaleX:0.08,scaleY:0.08,rotation:43.8,x:161.4,y:77.8},0).wait(1).to({scaleX:0.08,scaleY:0.08,rotation:40,x:149.7},0).wait(1).to({scaleX:0.1,scaleY:0.1,rotation:33.8,x:130.1,y:77.9},0).wait(1).to({scaleX:0.11,scaleY:0.11,rotation:25,x:102.7,y:78.1},0).wait(1).to({scaleX:0.14,scaleY:0.14,rotation:13.8,x:67.5,y:78.4},0).wait(1).to({regY:37.8,scaleX:0.16,scaleY:0.16,rotation:0,x:24.4,y:78.7},0).wait(1).to({regY:37.6,scaleX:0.12,scaleY:0.12,rotation:20.9,x:-47.7,y:78.2,alpha:0.618},0).wait(1).to({scaleX:0.1,scaleY:0.1,rotation:30.2,x:-79.5,y:78,alpha:0.45},0).wait(1).to({scaleX:0.09,scaleY:0.09,rotation:35.8,x:-99,y:77.8,alpha:0.347},0).wait(1).to({scaleX:0.09,scaleY:0.09,rotation:39.5,x:-111.8,y:77.7,alpha:0.279},0).wait(1).to({scaleX:0.08,scaleY:0.08,rotation:42,x:-120.3,alpha:0.234},0).wait(1).to({scaleX:0.08,scaleY:0.08,rotation:43.6,x:-125.6,alpha:0.206},0).wait(1).to({scaleX:0.08,scaleY:0.08,rotation:44.5,x:-128.8,y:77.6,alpha:0.189},0).wait(1).to({scaleX:0.07,scaleY:0.07,rotation:44.9,x:-130.3,y:77.7,alpha:0.182},0).wait(1).to({regX:36.2,regY:37.1,rotation:45,x:-130.6,alpha:0.18},0).wait(1));

	// mini blue flare
	this.instance_3 = new lib.sun1_hex1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(278.4,110.2,0.345,0.345,30,0,0,36.1,37.7);
	this.instance_3.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:36.3,regY:37.6,scaleX:0.34,scaleY:0.34,rotation:29.2,x:271.5,y:110.4},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:26.7,x:250.8,y:110.9},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:22.5,x:216.4,y:111.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:16.7,x:168.2,y:113.2},0).wait(1).to({scaleX:0.2,scaleY:0.2,rotation:9.2,x:106.1,y:115},0).wait(1).to({regY:37.8,scaleX:0.14,scaleY:0.14,rotation:0,x:30.3,y:117.2},0).wait(1).to({regY:37.6,scaleX:0.23,scaleY:0.23,rotation:14,x:-98,y:113.9,alpha:0.297},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:20.1,x:-154.6,y:112.4,alpha:0.252},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:23.9,x:-189.3,y:111.6,alpha:0.224},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:26.4,x:-212.1,y:110.9,alpha:0.206},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:28,x:-227.2,y:110.6,alpha:0.194},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:29,x:-236.8,y:110.3,alpha:0.187},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:29.6,x:-242.3,y:110.2,alpha:0.182},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:29.9,x:-244.9,y:110.1,alpha:0.18},0).wait(1).to({regX:36.1,regY:37.7,scaleX:0.35,scaleY:0.35,rotation:30,x:-245.6,y:110.2},0).wait(1));

	// mini red flare
	this.instance_4 = new lib.sun1_hex1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(263.6,106.3,0.135,0.135,0,0,0,36.3,37.8);
	this.instance_4.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:37.6,x:257.1,y:106.5},0).wait(1).to({x:237.6,y:107.1},0).wait(1).to({x:205.1,y:108.1},0).wait(1).to({x:159.6,y:109.4},0).wait(1).to({x:101.1,y:111.2},0).wait(1).to({regY:37.8,x:29.6,y:113.3},0).wait(1).to({regY:37.6,x:-91.3,y:110,alpha:0.43},0).wait(1).to({x:-144.7,y:108.6,alpha:0.334},0).wait(1).to({x:-177.4,y:107.7,alpha:0.275},0).wait(1).to({x:-198.8,y:107.1,alpha:0.237},0).wait(1).to({x:-213,y:106.8,alpha:0.211},0).wait(1).to({x:-222.1,y:106.5,alpha:0.195},0).wait(1).to({x:-227.3,y:106.4,alpha:0.185},0).wait(1).to({x:-229.8,y:106.3,alpha:0.181},0).wait(1).to({regY:37.8,x:-230.4,alpha:0.18},0).wait(1));

	// big down flare
	this.instance_5 = new lib.sun1_hex1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(469.4,201.8,1.358,1.399,-45,0,0,36.3,37.6);
	this.instance_5.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:-43.3,x:457.7,y:201.7},0).wait(1).to({rotation:-38.3,x:422.7},0).wait(1).to({rotation:-30,x:364.4},0).wait(1).to({rotation:-18.3,x:282.8},0).wait(1).to({rotation:-3.3,x:177.8,y:201.6},0).wait(1).to({rotation:15,x:49.5},0).wait(1).to({x:-173.9,alpha:0.163},0).wait(1).to({x:-272.3,alpha:0.169},0).wait(1).to({x:-332.7,alpha:0.173},0).wait(1).to({x:-372.3,alpha:0.176},0).wait(1).to({x:-398.5,alpha:0.178},0).wait(1).to({x:-415.2,alpha:0.179},0).wait(1).to({x:-424.9},0).wait(1).to({x:-429.4,alpha:0.18},0).wait(1).to({x:-430.5},0).wait(1));

	// green flare
	this.instance_6 = new lib.sun1_hex1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(394.3,163.7,0.436,0.436,-105,0,0,36.4,37.6);
	this.instance_6.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:36.3,rotation:-103.3,x:384.2,y:164},0).wait(1).to({rotation:-98.3,x:353.8,y:164.8},0).wait(1).to({rotation:-90,x:303.3,y:166.2},0).wait(1).to({rotation:-78.3,x:232.5,y:168.1},0).wait(1).to({rotation:-63.3,x:141.5,y:170.6},0).wait(1).to({regX:36.4,rotation:-45,x:30.3,y:173.7},0).wait(1).to({regX:36.3,x:-151.2,y:169,alpha:0.163},0).wait(1).to({x:-231.2,y:167,alpha:0.169},0).wait(1).to({x:-280.2,y:165.7,alpha:0.173},0).wait(1).to({x:-312.4,y:164.9,alpha:0.176},0).wait(1).to({x:-333.7,y:164.4,alpha:0.178},0).wait(1).to({x:-347.3,y:164,alpha:0.179},0).wait(1).to({x:-355.2,y:163.8},0).wait(1).to({x:-358.8,y:163.7,alpha:0.18},0).wait(1).to({regX:36.4,x:-359.7},0).wait(1));

	// red left flare
	this.instance_7 = new lib.sun1_hex1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(424.4,71.4,1.824,1.824,15,0,0,36.3,37.6);
	this.instance_7.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({scaleX:1.8,scaleY:1.8,rotation:14.6,x:411.5,y:72.8},0).wait(1).to({scaleX:1.73,scaleY:1.73,rotation:13.3,x:372.6,y:76.8},0).wait(1).to({scaleX:1.62,scaleY:1.62,rotation:11.2,x:307.9,y:83.4},0).wait(1).to({scaleX:1.46,scaleY:1.46,rotation:8.3,x:217.3,y:92.8},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:4.6,x:100.8,y:104.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:-41.6,y:119.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,rotation:14,x:-195.6,y:97.1},0).wait(1).to({scaleX:1.55,scaleY:1.55,rotation:20.1,x:-263.5,y:87.2},0).wait(1).to({scaleX:1.66,scaleY:1.66,rotation:23.9,x:-305.1,y:81.2},0).wait(1).to({scaleX:1.73,scaleY:1.73,rotation:26.4,x:-332.5,y:77.3},0).wait(1).to({scaleX:1.77,scaleY:1.77,rotation:28,x:-350.6,y:74.6},0).wait(1).to({scaleX:1.8,scaleY:1.8,rotation:29,x:-362,y:73},0).wait(1).to({scaleX:1.82,scaleY:1.82,rotation:29.7,x:-368.7,y:72},0).wait(1).to({scaleX:1.82,scaleY:1.82,rotation:29.9,x:-371.8,y:71.5},0).wait(1).to({scaleX:1.82,scaleY:1.82,rotation:30,x:-372.6,y:71.4},0).wait(1));

	// Layer 14
	this.instance_8 = new lib.sun1_ray2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-20.5,-4,0.047,0.394,-60,0,0,59.8,59.1);
	this.instance_8.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:59.2,regY:59.2,rotation:-58.3,x:-19.6,y:-4.5},0).wait(1).to({rotation:-53.3,x:-16.7,y:-6.2},0).wait(1).to({rotation:-45,x:-12.1,y:-9.1},0).wait(1).to({rotation:-33.3,x:-5.7,y:-13.1},0).wait(1).to({rotation:-18.3,x:2.6,y:-18.2},0).wait(1).to({regX:59.1,regY:59.1,rotation:0,x:12.7,y:-24.6},0).wait(1).to({regX:59.2,regY:59.2,rotation:27.9,x:28.7,y:-15.9,alpha:0.361},0).wait(1).to({rotation:40.2,x:35.8,y:-12.2,alpha:0.292},0).wait(1).to({rotation:47.8,x:40.1,y:-9.8,alpha:0.249},0).wait(1).to({rotation:52.7,x:42.9,y:-8.3,alpha:0.221},0).wait(1).to({rotation:56,x:44.8,y:-7.3,alpha:0.202},0).wait(1).to({rotation:58.1,x:46,y:-6.7,alpha:0.191},0).wait(1).to({rotation:59.3,x:46.7,y:-6.4,alpha:0.184},0).wait(1).to({rotation:59.9,x:47,y:-6.2,alpha:0.18},0).wait(1).to({regX:59.3,regY:59.1,rotation:60,x:47.2},0).wait(1));

	// mini rays
	this.instance_9 = new lib.sun1_ray2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(54.2,34.9,0.008,0.327,0,120,119.9,50.9,59.2);
	this.instance_9.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:59.2,skewX:121.7,skewY:121.5,x:53.1,y:35.6},0).wait(1).to({skewX:126.7,skewY:126.5,x:50,y:37.6},0).wait(1).to({skewX:135,skewY:134.9,x:44.7,y:41.1},0).wait(1).to({skewX:146.7,skewY:146.6,x:37.4,y:45.8},0).wait(1).to({skewX:161.7,skewY:161.6,x:27.9,y:52},0).wait(1).to({regX:54.5,skewX:180,skewY:179.9,x:16.4,y:59.5},0).wait(1).to({regX:59.2,skewX:207.9,skewY:207.9,x:-2.3,y:49.9,alpha:0.361},0).wait(1).to({rotation:-139.8,skewX:360,skewY:360,x:-10.5,y:45.8,alpha:0.292},0).wait(1).to({rotation:-132.2,x:-15.7,y:43.2,alpha:0.249},0).wait(1).to({rotation:-127.3,x:-18.9,y:41.5,alpha:0.221},0).wait(1).to({rotation:-124,x:-21.2,y:40.4,alpha:0.202},0).wait(1).to({rotation:-121.9,x:-22.6,y:39.7,alpha:0.191},0).wait(1).to({rotation:-120.7,x:-23.4,y:39.3,alpha:0.184},0).wait(1).to({rotation:-120.1,x:-23.8,y:39.1,alpha:0.18},0).wait(1).to({regX:54.8,regY:59.1,rotation:-120,x:-23.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-18,584.5,292.9);


(lib.made = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btm_E();
	this.instance.parent = this;
	this.instance.setTransform(38,0);

	this.instance_1 = new lib.btm_D();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.7,0);

	this.instance_2 = new lib.btm_A();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.5,0);

	this.instance_3 = new lib.btm_M();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-32.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-9.7,89.8,19.5);


(lib.img_phone_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// seal_xxl
	this.instance = new lib.seal_xxl("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-54.5,0.1,0.1,0,0,0,0,-0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).to({regY:0,scaleX:1.55,scaleY:1.55,x:0,y:-54.4},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:0.1},4,cjs.Ease.get(1)).wait(9).to({startPosition:0},0).to({regY:-0.5,scaleX:0.1,scaleY:0.1,y:-54.5,alpha:0},6,cjs.Ease.get(-1)).wait(1));

	// seal_xl
	this.instance_1 = new lib.seal_xl("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-54.4,0.1,0.1,0,0,0,0,-0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({regY:0,scaleX:1.58,scaleY:1.58},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({regY:-0.5,scaleX:0.1,scaleY:0.1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(21));

	// seal_L
	this.instance_2 = new lib.seal_L("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-54.4,0.1,0.1,0,0,0,0,-0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({regY:0,scaleX:1.5,scaleY:1.5},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({regY:-0.5,scaleX:0.1,scaleY:0.1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(37));

	// seal_M
	this.instance_3 = new lib.seal_M("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-54.4,0.1,0.1,0,0,0,0,-0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.3,scaleY:1.3,x:-0.1,y:-54.5},4,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:-54.4},4,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({regY:-0.5,scaleX:0.1,scaleY:0.1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(53));

	// seal_S
	this.instance_4 = new lib.seal_S("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-54.4,0.1,0.1,0,0,0,0,-0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.1,scaleY:1.1,x:-0.1},4,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},4,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({regY:-0.5,scaleX:0.1,scaleY:0.1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(69));

	// seal_bubble
	this.instance_5 = new lib.seal_bubble("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-54.4,0.056,0.056,0,0,0,0,-0.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({regY:0,scaleX:1.1,scaleY:1.1},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(12).to({scaleX:1.1,scaleY:1.1},0).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(12).to({scaleX:1.1,scaleY:1.1},0).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(12).to({scaleX:1.2,scaleY:1.2},0).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(12).to({scaleX:1.35,scaleY:1.35},0).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(9).to({startPosition:0},0).to({regY:-0.5,scaleX:0.1,scaleY:0.1,alpha:0},6,cjs.Ease.get(-1)).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("AkKDmIAAinIIVAAIAACng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:0.1,y:23}).wait(88));

	// 1gb
	this.instance_6 = new lib._1gb("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,21.5);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).wait(1).to({y:21.6},0).wait(1).to({y:22.8},0).wait(1).to({y:26.3},0).wait(1).to({y:37.7},0).wait(12).to({startPosition:0},0).wait(1).to({y:37.8},0).wait(1).to({y:38.9},0).wait(1).to({y:42.1},0).wait(1).to({y:54},0).to({_off:true},1).wait(67));

	// 3gb
	this.instance_7 = new lib._3gb("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,21.5);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).wait(1).to({y:21.6},0).wait(1).to({y:22.8},0).wait(1).to({y:26.3},0).wait(1).to({y:37.7},0).wait(12).to({startPosition:0},0).wait(1).to({y:37.8},0).wait(1).to({y:38.9},0).wait(1).to({y:42.1},0).wait(1).to({y:54},0).to({_off:true},1).wait(51));

	// 6gb
	this.instance_8 = new lib._6gb("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,21.5);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).wait(1).to({y:21.6},0).wait(1).to({y:22.8},0).wait(1).to({y:26.3},0).wait(1).to({y:37.7},0).wait(12).to({startPosition:0},0).wait(1).to({y:37.8},0).wait(1).to({y:38.9},0).wait(1).to({y:42.1},0).wait(1).to({y:54},0).to({_off:true},1).wait(35));

	// 12gb
	this.instance_9 = new lib._12gb("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,21.5);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).wait(1).to({y:21.6},0).wait(1).to({y:22.8},0).wait(1).to({y:26.3},0).wait(1).to({y:37.7},0).wait(12).to({startPosition:0},0).wait(1).to({y:37.8},0).wait(1).to({y:38.9},0).wait(1).to({y:42.1},0).wait(1).to({y:54},0).to({_off:true},1).wait(19));

	// 18gig
	this.instance_10 = new lib._18gig("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,21.5);
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(76).to({_off:false},0).wait(1).to({y:21.6},0).wait(1).to({y:22.8},0).wait(1).to({y:26.3},0).wait(1).to({y:37.7},0).wait(13).to({startPosition:0},0).to({alpha:0},6).wait(1));

	// phone_screen
	this.instance_11 = new lib.phone_screen("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-0.8,2.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).to({alpha:1},7).wait(81).to({startPosition:0},0).to({alpha:0},6).wait(1));

	// img_phone_01_lrg.png
	this.instance_12 = new lib.img_phone_01_lrg();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-115,-233.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-233.5,230,467);


(lib.easy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btm_Y();
	this.instance.parent = this;
	this.instance.setTransform(29.8,0);

	this.instance_1 = new lib.btm_S();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.9,0);

	this.instance_2 = new lib.btm_A();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12.4,0);

	this.instance_3 = new lib.btm_E();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-33.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.6,-10.3,81.3,20.6);


(lib.detailsBox = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{hi:1,bye:7});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(1));

	// copy
	this.instance = new lib.detailscopy();
	this.instance.parent = this;
	this.instance.setTransform(150,46.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-26.5,regY:22.5,x:123.5,y:28.4,alpha:0.528},0).wait(1).to({y:13.6,alpha:0.72},0).wait(1).to({y:4.6,alpha:0.838},0).wait(1).to({y:-1.3,alpha:0.914},0).wait(1).to({y:-5.1,alpha:0.963},0).wait(1).to({y:-7.2,alpha:0.991},0).wait(1).to({regX:0,regY:0,x:150,y:-30.5,alpha:1},0).wait(1).to({regX:-26.5,regY:22.5,x:123.5,y:-7.6,alpha:0.996},0).wait(1).to({y:-6.1,alpha:0.976},0).wait(1).to({y:-2.7,alpha:0.931},0).wait(1).to({y:3.7,alpha:0.849},0).wait(1).to({y:14.5,alpha:0.708},0).wait(1).to({y:32.9,alpha:0.469},0).wait(1).to({regX:0,regY:0,x:150,y:46.5,alpha:0},0).wait(1));

	// bg
	this.instance_1 = new lib.detailsBG();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:364,regY:30,scaleY:0.62,x:364,y:9.7},0).wait(1).to({scaleY:0.49,y:2.3},0).wait(1).to({scaleY:0.4,y:-2.2},0).wait(1).to({scaleY:0.35,y:-5.1},0).wait(1).to({scaleY:0.31,y:-7},0).wait(1).to({scaleY:0.29,y:-8.1},0).wait(1).to({regX:0,regY:-0.2,scaleY:0.28,x:0,y:-17},0).wait(1).to({regX:364,regY:30,scaleY:0.29,x:364,y:-8.3},0).wait(1).to({scaleY:0.3,y:-7.8},0).wait(1).to({scaleY:0.32,y:-6.5},0).wait(1).to({scaleY:0.37,y:-4},0).wait(1).to({scaleY:0.45,y:0.4},0).wait(1).to({scaleY:0.6,y:8.4},0).wait(1).to({regX:0,regY:0,scaleY:1,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,75.7);


(lib.cta = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{end:11,"hi":1,"bye":7,"end":11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop("end");
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(5).call(this.frame_11).wait(1));

	// Hover
	this.instance = new lib.ctahover();
	this.instance.parent = this;
	this.instance.setTransform(38.4,11.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},5).to({alpha:0},5).wait(1));

	// Button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5DAE3").s().p("AALAcIgLghIgKAhIgSAAIgUg2IAUAAIAKAhIALghIAQAAIALAhIAAAAIAKghIASAAIgTA2g");
	this.shape.setTransform(61.7,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5DAE3").s().p("AgVAVQgJgIAAgNQAAgMAJgIQAJgIAMAAQANAAAIAIQAKAIAAAMQAAANgKAIQgJAIgMAAQgMAAgJgIgAgIgJQgEAFAAAEQAAAFAEAEQADAFAFAAQAGAAADgFQAEgEAAgFQAAgEgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_1.setTransform(53.3,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A5DAE3").s().p("AAOAnIgegyIAAAyIgTAAIAAhNIAWAAIAeAyIABAAIgBgyIATAAIAABNg");
	this.shape_2.setTransform(45.3,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A5DAE3").s().p("AgeAqIAAhRIASAAIAAAHIAAAAQAHgJAJAAQAMAAAIAJQAHAJAAAMQAAALgHAHQgIAJgMAAQgKAAgFgHIAAAAIAAAhgAgIgVQgEAEAAAGQAAAGAEAEQAEACAEAAQAGAAADgCQAEgEAAgGQAAgGgEgEQgDgFgGAAQgEAAgEAFg");
	this.shape_3.setTransform(34.5,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A5DAE3").s().p("AgUAVQgKgIAAgNQAAgMAKgIQAIgIAMAAQANAAAIAIQAKAIAAAMQAAANgKAIQgJAIgMAAQgMAAgIgIgAgIgJQgEAFAAAEQAAAFAEAEQADAFAFAAQAGAAADgFQAEgEAAgFQAAgEgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_4.setTransform(27.1,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A5DAE3").s().p("AAIAqIAAgeQAAgMgIAAQgHAAgBAMIAAAeIgSAAIAAhTIASAAIAAAkQAGgJAIAAQALABAGAHQAEAGAAAIIAAAig");
	this.shape_5.setTransform(20.1,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A5DAE3").s().p("AgdAeIANgNQAGAJAKAAQAKAAAAgJQAAgEgEgDQgDgCgIgCQgUgGAAgPQAAgMAKgHQAIgGALAAQAPAAALAKIgMAMQgGgGgIAAQgKAAAAAIQAAAGALADQALADAFAEQAJAEgBALQABANgKAHQgIAGgMAAQgTAAgKgLg");
	this.shape_6.setTransform(13.2,11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,59,100,0)").s().p("Al1BrIAAjVILqAAIAADVg");
	this.shape_7.setTransform(38.4,11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A5DAE3").s().p("Al/B1IAAjpIL+AAIAADpgAl1BrILqAAIAAjVIrqAAg");
	this.shape_8.setTransform(38.4,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.8,23.5);


(lib._2ndplane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// *Sphere_bokeh 3
	this.instance = new lib.plane2_shpere();
	this.instance.parent = this;
	this.instance.setTransform(629.9,-130.7,0.438,0.438,111.7,0,0,46.6,46.2);

	this.instance_1 = new lib.plane2_shpere();
	this.instance_1.parent = this;
	this.instance_1.setTransform(431.5,-104.5,0.438,0.438,111.7,0,0,46.6,46.2);

	this.instance_2 = new lib.plane2_shpere();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-167.1,43.7,0.438,0.438,111.7,0,0,46.6,46.2);

	this.instance_3 = new lib.plane2_shpere();
	this.instance_3.parent = this;
	this.instance_3.setTransform(186.4,-197.6,0.438,0.438,111.7,0,0,46.6,46.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// *Sphere_bokeh 3
	this.instance_4 = new lib.plane2_shpere();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-98.3,-242.1,0.421,0.421,75,0,0,46.7,46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// *Sphere_bokeh 3
	this.instance_5 = new lib.plane2_shpere();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-500.6,-219.7,0.601,0.601,45,0,0,46.4,46.1);

	this.instance_6 = new lib.plane2_shpere();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-272.3,-129.9,0.601,0.601,45,0,0,46.4,46.1);

	this.instance_7 = new lib.plane2_shpere();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-195.1,-258.6,0.601,0.601,45,0,0,46.4,46.1);

	this.instance_8 = new lib.plane2_shpere();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-53.9,-160,0.601,0.601,45,0,0,46.4,46.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// *Sphere_bokeh 3
	this.instance_9 = new lib.plane2_shpere();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-310.5,-245.1,0.53,0.53,-45,0,0,46.5,46.3);

	this.instance_10 = new lib.plane2_shpere();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-258.1,35.6,0.53,0.53,-45,0,0,46.5,46.3);

	this.instance_11 = new lib.plane2_shpere();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-12.3,-271.7,0.838,0.838,-45,0,0,46.5,46.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// *Sphere_bokeh 3
	this.instance_12 = new lib.plane2_shpere();
	this.instance_12.parent = this;
	this.instance_12.setTransform(13.8,-100.9,0.341,0.341,-75,0,0,46.4,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// *Sphere_bokeh 3
	this.instance_13 = new lib.plane2_shpere();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-512.5,-138.3,0.341,0.341,150,0,0,46.5,46.6);

	this.instance_14 = new lib.plane2_shpere();
	this.instance_14.parent = this;
	this.instance_14.setTransform(688.3,-318.8,0.341,0.341,150,0,0,46.5,46.6);

	this.instance_15 = new lib.plane2_shpere();
	this.instance_15.parent = this;
	this.instance_15.setTransform(320.3,-232.7,0.341,0.341,150,0,0,46.5,46.6);

	this.instance_16 = new lib.plane2_shpere();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-284.3,-48.5,0.341,0.341,150,0,0,46.5,46.6);

	this.instance_17 = new lib.plane2_shpere();
	this.instance_17.parent = this;
	this.instance_17.setTransform(75.2,-325.8,0.341,0.341,150,0,0,46.5,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// *Sphere_bokeh 3
	this.instance_18 = new lib.plane2_shpere();
	this.instance_18.parent = this;
	this.instance_18.setTransform(711.8,-158.1,0.734,0.734,105,0,0,46.5,46.6);

	this.instance_19 = new lib.plane2_shpere();
	this.instance_19.parent = this;
	this.instance_19.setTransform(746.6,-275.5,0.734,0.734,105,0,0,46.5,46.6);

	this.instance_20 = new lib.plane2_shpere();
	this.instance_20.parent = this;
	this.instance_20.setTransform(513.4,-131.9,0.734,0.734,105,0,0,46.5,46.6);

	this.instance_21 = new lib.plane2_shpere();
	this.instance_21.parent = this;
	this.instance_21.setTransform(378.6,-189.5,0.734,0.734,105,0,0,46.5,46.6);

	this.instance_22 = new lib.plane2_shpere();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-182.1,-77.9,0.734,0.734,105,0,0,46.5,46.6);

	this.instance_23 = new lib.plane2_shpere();
	this.instance_23.parent = this;
	this.instance_23.setTransform(133.5,-282.6,0.734,0.734,105,0,0,46.5,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(1));

	// *Sphere_bokeh 3
	this.instance_24 = new lib.plane2_shpere();
	this.instance_24.parent = this;
	this.instance_24.setTransform(640.2,-171.9,0.311,0.311,150,0,0,46.4,46.6);

	this.instance_25 = new lib.plane2_shpere();
	this.instance_25.parent = this;
	this.instance_25.setTransform(441.8,-145.7,0.311,0.311,150,0,0,46.4,46.6);

	this.instance_26 = new lib.plane2_shpere();
	this.instance_26.parent = this;
	this.instance_26.setTransform(196.7,-238.8,0.311,0.311,150,0,0,46.4,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).wait(1));

	// *Sphere_bokeh 3
	this.instance_27 = new lib.plane2_shpere();
	this.instance_27.parent = this;
	this.instance_27.setTransform(489.1,-314.4,1,1,0,0,0,56,56);

	this.instance_28 = new lib.plane2_shpere();
	this.instance_28.parent = this;
	this.instance_28.setTransform(203.5,-107.4,1,1,0,0,0,56,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27}]}).wait(1));

	// *Sphere_bokeh 3
	this.instance_29 = new lib.plane2_shpere();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-661.2,-246.3,0.421,0.421,75,0,0,46.6,46.2);

	this.instance_30 = new lib.plane2_shpere();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-473.7,-283.1,0.421,0.421,75,0,0,46.6,46.2);

	this.instance_31 = new lib.plane2_shpere();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-433,-156.5,0.421,0.421,75,0,0,46.6,46.2);

	this.instance_32 = new lib.plane2_shpere();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-245.5,-193.3,0.421,0.421,75,0,0,46.6,46.2);

	this.instance_33 = new lib.plane2_shpere();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-104.2,-94.7,0.421,0.421,75,0,0,46.6,46.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29}]}).wait(1));

	// *Sphere_bokeh 3
	this.instance_34 = new lib.plane2_shpere();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-584.3,-196.9,0.772,0.772,45,0,0,46.4,46.2);

	this.instance_35 = new lib.plane2_shpere();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-442.1,-268,0.772,0.772,45,0,0,46.4,46.2);

	this.instance_36 = new lib.plane2_shpere();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-356,-107.1,0.772,0.772,45,0,0,46.4,46.2);

	this.instance_37 = new lib.plane2_shpere();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-213.9,-178.2,0.772,0.772,45,0,0,46.4,46.2);

	this.instance_38 = new lib.plane2_shpere();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-66.3,-32.8,0.772,0.772,45,0,0,46.4,46.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34}]}).wait(1));

	// *Sphere_bokeh 3
	this.instance_39 = new lib.plane2_shpere();
	this.instance_39.parent = this;
	this.instance_39.setTransform(472.3,-216.6,0.85,0.85,-45,0,0,46.5,46.3);

	this.instance_40 = new lib.plane2_shpere();
	this.instance_40.parent = this;
	this.instance_40.setTransform(186.7,-9.6,0.85,0.85,-45,0,0,46.5,46.3);

	this.instance_41 = new lib.plane2_shpere();
	this.instance_41.parent = this;
	this.instance_41.setTransform(86.7,-63.5,0.85,0.85,-45,0,0,46.5,46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_41},{t:this.instance_40},{t:this.instance_39}]}).wait(1));

	// *Sphere_bokeh 3
	this.instance_42 = new lib.plane2_shpere();
	this.instance_42.parent = this;
	this.instance_42.setTransform(78.3,-13.8,0.341,0.341,-75,0,0,46.4,46.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1));

	// *Sphere_bokeh 3
	this.instance_43 = new lib.plane2_shpere();
	this.instance_43.parent = this;
	this.instance_43.setTransform(98.3,-115.6,0.341,0.341,150,0,0,46.5,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1));

	// *Sphere_bokeh 3
	this.instance_44 = new lib.plane2_shpere();
	this.instance_44.parent = this;
	this.instance_44.setTransform(592.1,-268.7,0.734,0.734,105,0,0,46.5,46.6);

	this.instance_45 = new lib.plane2_shpere();
	this.instance_45.parent = this;
	this.instance_45.setTransform(306.4,-61.6,0.734,0.734,105,0,0,46.5,46.6);

	this.instance_46 = new lib.plane2_shpere();
	this.instance_46.parent = this;
	this.instance_46.setTransform(61.3,-154.7,0.734,0.734,105,0,0,46.5,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46},{t:this.instance_45},{t:this.instance_44}]}).wait(1));

	// *Sphere_bokeh 3
	this.instance_47 = new lib.plane2_shpere();
	this.instance_47.parent = this;
	this.instance_47.setTransform(693,-221.3,0.37,0.37,150,0,0,46.2,47);

	this.instance_48 = new lib.plane2_shpere();
	this.instance_48.parent = this;
	this.instance_48.setTransform(325,-135.3,0.37,0.37,150,0,0,46.2,47);

	this.instance_49 = new lib.plane2_shpere();
	this.instance_49.parent = this;
	this.instance_49.setTransform(79.9,-228.4,0.37,0.37,150,0,0,46.2,47);

	this.instance_50 = new lib.plane2_shpere();
	this.instance_50.parent = this;
	this.instance_50.setTransform(102.4,5.4,0.37,0.37,150,0,0,46.2,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-688.2,-363.3,1469.9,436.9);


(lib._1stplaneB = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// plane1_sphere
	this.instance = new lib.plane1_sphere();
	this.instance.parent = this;
	this.instance.setTransform(-361.7,-183.9,0.39,0.39,128.5,0,0,46.2,46.4);

	this.instance_1 = new lib.plane1_sphere();
	this.instance_1.parent = this;
	this.instance_1.setTransform(877.8,-151.3,0.39,0.39,128.5,0,0,46.2,46.4);

	this.instance_2 = new lib.plane1_sphere();
	this.instance_2.parent = this;
	this.instance_2.setTransform(806.7,45.7,0.39,0.39,128.5,0,0,46.2,46.4);

	this.instance_3 = new lib.plane1_sphere();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-426.3,-247.8,0.39,0.39,128.5,0,0,46.2,46.4);

	this.instance_4 = new lib.plane1_sphere();
	this.instance_4.parent = this;
	this.instance_4.setTransform(331.2,63.5,0.39,0.39,128.5,0,0,46.2,46.4);

	this.instance_5 = new lib.plane1_sphere();
	this.instance_5.parent = this;
	this.instance_5.setTransform(635.8,-103.6,0.39,0.39,128.5,0,0,46.2,46.4);

	this.instance_6 = new lib.plane1_sphere();
	this.instance_6.parent = this;
	this.instance_6.setTransform(358.1,-7.3,0.39,0.39,128.5,0,0,46.2,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// plane1_sphere
	this.instance_7 = new lib.plane1_sphere();
	this.instance_7.parent = this;
	this.instance_7.setTransform(913.5,68.9,0.758,0.758,-150,0,0,46.4,46.8);

	this.instance_8 = new lib.plane1_sphere();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1.3,-189.2,0.758,0.758,-150,0,0,46.4,46.8);

	this.instance_9 = new lib.plane1_sphere();
	this.instance_9.parent = this;
	this.instance_9.setTransform(437.9,86.7,0.758,0.758,-150,0,0,46.4,46.8);

	this.instance_10 = new lib.plane1_sphere();
	this.instance_10.parent = this;
	this.instance_10.setTransform(336.8,-154.4,0.758,0.758,-150,0,0,46.4,46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// plane1_sphere
	this.instance_11 = new lib.plane1_sphere();
	this.instance_11.parent = this;
	this.instance_11.setTransform(156.8,-32.9,0.596,0.596,-95.5,0,0,46.6,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// plane1_sphere
	this.instance_12 = new lib.plane1_sphere();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-571.8,-336.6,0.501,0.501,111.7,0,0,46.9,46.4);

	this.instance_13 = new lib.plane1_sphere();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-481.4,-312.1,0.501,0.501,111.7,0,0,46.9,46.4);

	this.instance_14 = new lib.plane1_sphere();
	this.instance_14.parent = this;
	this.instance_14.setTransform(490.3,-192.4,0.501,0.501,111.7,0,0,46.9,46.4);

	this.instance_15 = new lib.plane1_sphere();
	this.instance_15.parent = this;
	this.instance_15.setTransform(580.7,-167.8,0.501,0.501,111.7,0,0,46.9,46.4);

	this.instance_16 = new lib.plane1_sphere();
	this.instance_16.parent = this;
	this.instance_16.setTransform(303,-71.5,0.501,0.501,111.7,0,0,46.9,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(1));

	// plane1_sphere
	this.instance_17 = new lib.plane1_sphere();
	this.instance_17.parent = this;
	this.instance_17.setTransform(190.4,54.3,0.611,0.611,-23,0,0,46.5,46.6);

	this.instance_18 = new lib.plane1_sphere();
	this.instance_18.parent = this;
	this.instance_18.setTransform(394.4,177.3,0.611,0.611,-23,0,0,46.5,46.6);

	this.instance_19 = new lib.plane1_sphere();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-52.8,99.3,0.611,0.611,-23,0,0,46.5,46.6);

	this.instance_20 = new lib.plane1_sphere();
	this.instance_20.parent = this;
	this.instance_20.setTransform(292.4,64,0.611,0.611,-23,0,0,46.5,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(1));

	// plane1_sphere
	this.instance_21 = new lib.plane1_sphere();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-213.8,46.3,0.493,0.493,-83,0,0,46.4,46.9);

	this.instance_22 = new lib.plane1_sphere();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-190.2,122.1,0.493,0.493,-83,0,0,46.4,46.9);

	this.instance_23 = new lib.plane1_sphere();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-79.7,106.5,0.493,0.493,-83,0,0,46.4,46.9);

	this.instance_24 = new lib.plane1_sphere();
	this.instance_24.parent = this;
	this.instance_24.setTransform(265.5,71.2,0.493,0.493,-83,0,0,46.4,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).wait(1));

	// plane1_sphere
	this.instance_25 = new lib.plane1_sphere();
	this.instance_25.parent = this;
	this.instance_25.setTransform(931,175.5,0.596,0.596,-95.5,0,0,46.4,46.6);

	this.instance_26 = new lib.plane1_sphere();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-287.2,-67.7,0.596,0.596,-95.5,0,0,46.4,46.6);

	this.instance_27 = new lib.plane1_sphere();
	this.instance_27.parent = this;
	this.instance_27.setTransform(681.2,274.1,0.596,0.596,-95.5,0,0,46.4,46.6);

	this.instance_28 = new lib.plane1_sphere();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-5.9,18.7,0.596,0.596,-95.5,0,0,46.4,46.6);

	this.instance_29 = new lib.plane1_sphere();
	this.instance_29.parent = this;
	this.instance_29.setTransform(774.9,76.5,0.596,0.596,-95.5,0,0,46.4,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-591.2,-252.9,1501,467.2);


(lib._1stplane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plane1_sphere
	this.instance = new lib.plane1_sphere();
	this.instance.parent = this;
	this.instance.setTransform(633.3,-154.1,0.676,0.676,128.5,0,0,46.1,46.4);

	this.instance_1 = new lib.plane1_sphere();
	this.instance_1.parent = this;
	this.instance_1.setTransform(706.2,-251.5,0.676,0.676,128.5,0,0,46.1,46.4);

	this.instance_2 = new lib.plane1_sphere();
	this.instance_2.parent = this;
	this.instance_2.setTransform(147.8,-4,0.676,0.676,128.5,0,0,46.1,46.4);

	this.instance_3 = new lib.plane1_sphere();
	this.instance_3.parent = this;
	this.instance_3.setTransform(220.7,-101.4,0.676,0.676,128.5,0,0,46.1,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// plane1_sphere
	this.instance_4 = new lib.plane1_sphere();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-727.1,-95,0.943,0.943,0,0,0,46.4,46.5);

	this.instance_5 = new lib.plane1_sphere();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-131.4,37.3,0.943,0.943,0,0,0,46.4,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// plane1_sphere
	this.instance_6 = new lib.plane1_sphere();
	this.instance_6.parent = this;
	this.instance_6.setTransform(210.8,-17.5,0.743,0.743,0,0,0,46.4,46.5);

	this.instance_7 = new lib.plane1_sphere();
	this.instance_7.parent = this;
	this.instance_7.setTransform(576.5,203.9,0.743,0.743,0,0,0,46.4,46.5);

	this.instance_8 = new lib.plane1_sphere();
	this.instance_8.parent = this;
	this.instance_8.setTransform(199.4,207.3,0.743,0.743,0,0,0,46.4,46.5);

	this.instance_9 = new lib.plane1_sphere();
	this.instance_9.parent = this;
	this.instance_9.setTransform(270.2,107.1,0.743,0.743,0,0,0,46.4,46.5);

	this.instance_10 = new lib.plane1_sphere();
	this.instance_10.parent = this;
	this.instance_10.setTransform(142,81.7,0.743,0.743,0,0,0,46.4,46.5);

	this.instance_11 = new lib.plane1_sphere();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-522.8,-84.5,0.743,0.743,0,0,0,46.4,46.5);

	this.instance_12 = new lib.plane1_sphere();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-0.6,54.4,0.743,0.743,0,0,0,46.4,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// plane1_sphere
	this.instance_13 = new lib.plane1_sphere();
	this.instance_13.parent = this;
	this.instance_13.setTransform(557.1,-237.8,0.676,0.676,128.5,0,0,46.2,46.4);

	this.instance_14 = new lib.plane1_sphere();
	this.instance_14.parent = this;
	this.instance_14.setTransform(71.5,-87.7,0.676,0.676,128.5,0,0,46.2,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// plane1_sphere
	this.instance_15 = new lib.plane1_sphere();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-96.2,96.4,0.334,0.334,-128,0,0,46.4,46.9);

	this.instance_16 = new lib.plane1_sphere();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-99.6,-72.8,0.334,0.334,-128,0,0,46.4,46.9);

	this.instance_17 = new lib.plane1_sphere();
	this.instance_17.parent = this;
	this.instance_17.setTransform(69,-141.4,0.334,0.334,-128,0,0,46.4,46.9);

	this.instance_18 = new lib.plane1_sphere();
	this.instance_18.parent = this;
	this.instance_18.setTransform(311.5,19.8,0.334,0.334,-128,0,0,46.4,46.9);

	this.instance_19 = new lib.plane1_sphere();
	this.instance_19.parent = this;
	this.instance_19.setTransform(111,95.1,0.334,0.334,-128,0,0,46.4,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

	// plane1_sphere
	this.instance_20 = new lib.plane1_sphere();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-79.7,-89.5,0.758,0.758,-150,0,0,46.4,46.8);

	this.instance_21 = new lib.plane1_sphere();
	this.instance_21.parent = this;
	this.instance_21.setTransform(36.9,-21.5,0.758,0.758,-150,0,0,46.4,46.8);

	this.instance_22 = new lib.plane1_sphere();
	this.instance_22.parent = this;
	this.instance_22.setTransform(114.8,-110.1,0.758,0.758,-150,0,0,46.4,46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(1));

	// plane1_sphere
	this.instance_23 = new lib.plane1_sphere();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-117.8,-59,0.501,0.501,111.7,0,0,46.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1));

	// plane1_sphere
	this.instance_24 = new lib.plane1_sphere();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-847.3,23.3,0.943,0.943,0,0,0,46.4,46.6);

	this.instance_25 = new lib.plane1_sphere();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-681,30.3,0.943,0.943,0,0,0,46.4,46.6);

	this.instance_26 = new lib.plane1_sphere();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-219.2,175.3,0.943,0.943,0,0,0,46.4,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-697.1,-313.6,1503.9,571.4);


(lib.mc_lockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 16
	this.instance = new lib.sun01("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(84.9,-43.5,0.59,0.59,-16.5,0,0,173.6,28.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:173.4,regY:28.2,x:11.4,y:-43.2,alpha:0.539,startPosition:3},5).wait(8).to({startPosition:11},0).to({alpha:0,startPosition:15},5).to({_off:true},1).wait(50));

	// shipping_star
	this.instance_1 = new lib.shipping_star();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.3,23.3,1.835,1.835,0,0,0,-0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:179.2},10).wait(31).to({regX:0,regY:0,scaleX:1.84,scaleY:1.84,x:179.9,y:23.2},0).wait(1).to({scaleX:1.86,scaleY:1.86,x:181.7,y:23.6},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:185,y:24.2},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:190,y:25.2},0).wait(1).to({scaleX:2.04,scaleY:2.04,x:197.3,y:26.6},0).wait(1).to({scaleX:2.15,scaleY:2.15,x:207.3,y:28.6},0).wait(1).to({scaleX:2.31,scaleY:2.31,x:221,y:31.2},0).wait(1).to({scaleX:2.53,scaleY:2.53,x:239.8,y:34.9},0).wait(1).to({scaleX:2.83,scaleY:2.83,x:266.1,y:40.1},0).wait(1).to({scaleX:3.27,scaleY:3.27,x:304.8,y:47.6},0).wait(1).to({scaleX:3.97,scaleY:3.97,x:366.3,y:59.7},0).wait(1).to({scaleX:5.11,scaleY:5.11,x:466.7,y:79.3},0).wait(1).to({scaleX:6.26,scaleY:6.26,x:567,y:98.9},0).wait(1).to({scaleX:6.96,scaleY:6.96,x:628.6,y:110.9},0).wait(1).to({scaleX:7.4,scaleY:7.4,x:667.2,y:118.5},0).wait(1).to({scaleX:7.7,scaleY:7.7,x:693.5,y:123.6},0).wait(1).to({scaleX:7.92,scaleY:7.92,x:712.3,y:127.3},0).wait(1).to({scaleX:8.07,scaleY:8.07,x:726,y:130},0).wait(1).to({scaleX:8.19,scaleY:8.19,x:736.1,y:131.9},0).wait(1).to({scaleX:8.27,scaleY:8.27,x:743.3,y:133.4},0).wait(1).to({scaleX:8.33,scaleY:8.33,x:748.4,y:134.3},0).wait(1).to({scaleX:8.37,scaleY:8.37,x:751.6,y:135},0).wait(1).to({scaleX:8.39,scaleY:8.39,x:753.4,y:135.3},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:8.39,scaleY:8.39,x:753.2,y:136.3},0).wait(1));

	// shipping_star
	this.instance_2 = new lib.shipping_star();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.3,23.3,1.835,1.835,0,0,0,-0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:-150.5},10).wait(31).to({regX:0,regY:0,scaleX:1.84,scaleY:1.84,x:-150.9,y:23.2},0).wait(1).to({scaleX:1.86,scaleY:1.86,x:-152.8,y:23.6},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:-156.2,y:24.2},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:-161.5,y:25.2},0).wait(1).to({scaleX:2.04,scaleY:2.04,x:-169.1,y:26.6},0).wait(1).to({scaleX:2.15,scaleY:2.15,x:-179.7,y:28.6},0).wait(1).to({scaleX:2.31,scaleY:2.31,x:-194,y:31.2},0).wait(1).to({scaleX:2.53,scaleY:2.53,x:-213.8,y:34.9},0).wait(1).to({scaleX:2.83,scaleY:2.83,x:-241.4,y:40.1},0).wait(1).to({scaleX:3.27,scaleY:3.27,x:-282,y:47.6},0).wait(1).to({scaleX:3.97,scaleY:3.97,x:-346.6,y:59.7},0).wait(1).to({scaleX:5.11,scaleY:5.11,x:-451.9,y:79.3},0).wait(1).to({scaleX:6.26,scaleY:6.26,x:-557.3,y:98.9},0).wait(1).to({scaleX:6.96,scaleY:6.96,x:-621.9,y:110.9},0).wait(1).to({scaleX:7.4,scaleY:7.4,x:-662.5,y:118.5},0).wait(1).to({scaleX:7.7,scaleY:7.7,x:-690.1,y:123.6},0).wait(1).to({scaleX:7.92,scaleY:7.92,x:-709.9,y:127.3},0).wait(1).to({scaleX:8.07,scaleY:8.07,x:-724.2,y:130},0).wait(1).to({scaleX:8.19,scaleY:8.19,x:-734.8,y:131.9},0).wait(1).to({scaleX:8.27,scaleY:8.27,x:-742.4,y:133.4},0).wait(1).to({scaleX:8.33,scaleY:8.33,x:-747.7,y:134.3},0).wait(1).to({scaleX:8.37,scaleY:8.37,x:-751.1,y:135},0).wait(1).to({scaleX:8.39,scaleY:8.39,x:-753,y:135.3},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:8.39,scaleY:8.39,x:-754.4,y:136.3},0).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("ArWChIAAlBIWtAAIAAFBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:99,y:27.5}).wait(11).to({graphics:null,x:0,y:0}).wait(54));

	// easy
	this.instance_3 = new lib.easy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-33.8,27.4,1.445,1.445);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({x:92.5},10,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:92.7,y:27.5},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:93.5,y:27.9},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:95,y:28.6},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:97.4,y:29.7},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:100.7,y:31.3},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:105.3,y:33.6},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:111.6,y:36.6},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:120.2,y:40.8},0).wait(1).to({scaleX:2.22,scaleY:2.22,x:132.3,y:46.6},0).wait(1).to({scaleX:2.57,scaleY:2.57,x:150.1,y:55.2},0).wait(1).to({scaleX:3.12,scaleY:3.12,x:178.4,y:68.9},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:224.5,y:91.1},0).wait(1).to({scaleX:4.93,scaleY:4.93,x:270.6,y:113.4},0).wait(1).to({scaleX:5.48,scaleY:5.48,x:298.9,y:127.1},0).wait(1).to({scaleX:5.83,scaleY:5.83,x:316.7,y:135.6},0).wait(1).to({scaleX:6.06,scaleY:6.06,x:328.8,y:141.5},0).wait(1).to({scaleX:6.23,scaleY:6.23,x:337.4,y:145.7},0).wait(1).to({scaleX:6.36,scaleY:6.36,x:343.7,y:148.7},0).wait(1).to({scaleX:6.45,scaleY:6.45,x:348.3,y:150.9},0).wait(1).to({scaleX:6.51,scaleY:6.51,x:351.6,y:152.5},0).wait(1).to({scaleX:6.56,scaleY:6.56,x:354,y:153.6},0).wait(1).to({scaleX:6.59,scaleY:6.59,x:355.5,y:154.4},0).wait(1).to({scaleX:6.6,scaleY:6.6,x:356.3,y:154.8},0).wait(1).to({scaleX:6.61,scaleY:6.61,x:356.6,y:154.9},0).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_5 = new cjs.Graphics().p("ArQChIAAlBIWhAAIAAFBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_1_graphics_5,x:-45.9,y:27.5}).wait(11).to({graphics:null,x:0,y:0}).wait(54));

	// made
	this.instance_4 = new lib.made("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(91.4,27.4,1.445,1.445);
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({x:-52.1},10,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:-52.4,y:27.5},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:-53.2,y:27.9},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:-54.6,y:28.6},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:-56.8,y:29.7},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:-60,y:31.3},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:-64.4,y:33.6},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:-70.5,y:36.6},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:-78.7,y:40.8},0).wait(1).to({scaleX:2.22,scaleY:2.22,x:-90.3,y:46.6},0).wait(1).to({scaleX:2.57,scaleY:2.57,x:-107.3,y:55.2},0).wait(1).to({scaleX:3.12,scaleY:3.12,x:-134.3,y:68.9},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:-178.4,y:91.1},0).wait(1).to({scaleX:4.93,scaleY:4.93,x:-222.6,y:113.4},0).wait(1).to({scaleX:5.48,scaleY:5.48,x:-249.6,y:127.1},0).wait(1).to({scaleX:5.83,scaleY:5.83,x:-266.6,y:135.6},0).wait(1).to({scaleX:6.06,scaleY:6.06,x:-278.2,y:141.5},0).wait(1).to({scaleX:6.23,scaleY:6.23,x:-286.4,y:145.7},0).wait(1).to({scaleX:6.36,scaleY:6.36,x:-292.5,y:148.7},0).wait(1).to({scaleX:6.45,scaleY:6.45,x:-296.9,y:150.9},0).wait(1).to({scaleX:6.51,scaleY:6.51,x:-300.1,y:152.5},0).wait(1).to({scaleX:6.56,scaleY:6.56,x:-302.3,y:153.6},0).wait(1).to({scaleX:6.59,scaleY:6.59,x:-303.7,y:154.4},0).wait(1).to({scaleX:6.6,scaleY:6.6,x:-304.5,y:154.8},0).wait(1).to({scaleX:6.61,scaleY:6.61,x:-304.7,y:154.9},0).wait(1));

	// y
	this.instance_5 = new lib.y("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-67.3,-14.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({x:19.2},10,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,y:-14.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:-14.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:-15.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:-16.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:-18.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:19.3,y:-20.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:-23.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:19.4,y:-27.7},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:19.5,y:-33.5},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:19.6,y:-42.1},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:19.8,y:-55.8},0).wait(1).to({scaleX:2.79,scaleY:2.79,x:20.2,y:-78},0).wait(1).to({scaleX:3.41,scaleY:3.41,x:20.6,y:-100.3},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:20.8,y:-114},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:21,y:-122.5},0).wait(1).to({scaleX:4.2,scaleY:4.2,x:21.1,y:-128.4},0).wait(1).to({scaleX:4.31,scaleY:4.31,y:-132.6},0).wait(1).to({scaleX:4.4,scaleY:4.4,x:21.2,y:-135.6},0).wait(1).to({scaleX:4.46,scaleY:4.46,y:-137.8},0).wait(1).to({scaleX:4.51,scaleY:4.51,x:21.3,y:-139.4},0).wait(1).to({scaleX:4.54,scaleY:4.54,y:-140.5},0).wait(1).to({scaleX:4.56,scaleY:4.56,y:-141.3},0).wait(1).to({scaleX:4.57,scaleY:4.57,y:-141.7},0).wait(1).to({scaleX:4.57,scaleY:4.57,y:-141.8},0).wait(1));

	// a
	this.instance_6 = new lib.a("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-67.3,-14.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({x:-9.8},9,cjs.Ease.get(1)).wait(31).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,x:-9.9,y:-14.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-10.3,y:-14.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-10.8,y:-15.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-11.7,y:-16.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-13,y:-18.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-14.8,y:-20.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-17.2,y:-23.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-20.5,y:-27.7},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:-25.2,y:-33.5},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:-32,y:-42.1},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:-42.8,y:-55.8},0).wait(1).to({scaleX:2.79,scaleY:2.79,x:-60.5,y:-78},0).wait(1).to({scaleX:3.41,scaleY:3.41,x:-78.3,y:-100.3},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:-89.1,y:-114},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:-95.9,y:-122.5},0).wait(1).to({scaleX:4.2,scaleY:4.2,x:-100.6,y:-128.4},0).wait(1).to({scaleX:4.31,scaleY:4.31,x:-103.9,y:-132.6},0).wait(1).to({scaleX:4.4,scaleY:4.4,x:-106.3,y:-135.6},0).wait(1).to({scaleX:4.46,scaleY:4.46,x:-108.1,y:-137.8},0).wait(1).to({scaleX:4.51,scaleY:4.51,x:-109.4,y:-139.4},0).wait(1).to({scaleX:4.54,scaleY:4.54,x:-110.3,y:-140.5},0).wait(1).to({scaleX:4.56,scaleY:4.56,x:-110.8,y:-141.3},0).wait(1).to({scaleX:4.57,scaleY:4.57,x:-111.2,y:-141.7},0).wait(1).to({scaleX:4.57,scaleY:4.57,y:-141.8},0).wait(1));

	// d
	this.instance_7 = new lib.d("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-67.3,-14.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({x:-40.7},8,cjs.Ease.get(1)).wait(32).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,x:-41,y:-14.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-41.6,y:-14.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-42.8,y:-15.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-44.7,y:-16.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-47.4,y:-18.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-51.1,y:-20.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-56.1,y:-23.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-63,y:-27.7},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:-72.7,y:-33.5},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:-87,y:-42.1},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:-109.7,y:-55.8},0).wait(1).to({scaleX:2.79,scaleY:2.79,x:-146.7,y:-78},0).wait(1).to({scaleX:3.41,scaleY:3.41,x:-183.7,y:-100.3},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:-206.4,y:-114},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:-220.6,y:-122.5},0).wait(1).to({scaleX:4.2,scaleY:4.2,x:-230.3,y:-128.4},0).wait(1).to({scaleX:4.31,scaleY:4.31,x:-237.2,y:-132.6},0).wait(1).to({scaleX:4.4,scaleY:4.4,x:-242.3,y:-135.6},0).wait(1).to({scaleX:4.46,scaleY:4.46,x:-246,y:-137.8},0).wait(1).to({scaleX:4.51,scaleY:4.51,x:-248.7,y:-139.4},0).wait(1).to({scaleX:4.54,scaleY:4.54,x:-250.5,y:-140.5},0).wait(1).to({scaleX:4.56,scaleY:4.56,x:-251.7,y:-141.3},0).wait(1).to({scaleX:4.57,scaleY:4.57,x:-252.4,y:-141.7},0).wait(1).to({scaleX:4.57,scaleY:4.57,x:-252.6,y:-141.8},0).wait(1));

	// i
	this.instance_8 = new lib.i("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-67.3,-14.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).to({x:-66.1},8,cjs.Ease.get(1)).wait(32).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,x:-66.4,y:-14.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-67.4,y:-14.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-69.1,y:-15.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-71.8,y:-16.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-75.6,y:-18.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-80.9,y:-20.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-88.1,y:-23.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-98,y:-27.7},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:-111.9,y:-33.5},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:-132.2,y:-42.1},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:-164.6,y:-55.8},0).wait(1).to({scaleX:2.79,scaleY:2.79,x:-217.4,y:-78},0).wait(1).to({scaleX:3.41,scaleY:3.41,x:-270.3,y:-100.3},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:-302.7,y:-114},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:-323,y:-122.5},0).wait(1).to({scaleX:4.2,scaleY:4.2,x:-336.9,y:-128.4},0).wait(1).to({scaleX:4.31,scaleY:4.31,x:-346.8,y:-132.6},0).wait(1).to({scaleX:4.4,scaleY:4.4,x:-354,y:-135.6},0).wait(1).to({scaleX:4.46,scaleY:4.46,x:-359.3,y:-137.8},0).wait(1).to({scaleX:4.51,scaleY:4.51,x:-363.1,y:-139.4},0).wait(1).to({scaleX:4.54,scaleY:4.54,x:-365.8,y:-140.5},0).wait(1).to({scaleX:4.56,scaleY:4.56,x:-367.5,y:-141.3},0).wait(1).to({scaleX:4.57,scaleY:4.57,x:-368.5,y:-141.7},0).wait(1).to({scaleX:4.57,scaleY:4.57,x:-368.7,y:-141.8},0).wait(1));

	// l
	this.instance_9 = new lib.l("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-67.3,-14.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({x:-84.7},8,cjs.Ease.get(1)).wait(32).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,x:-85.1,y:-14.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-86.3,y:-14.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-88.4,y:-15.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-91.6,y:-16.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-96.3,y:-18.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-102.7,y:-20.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-111.5,y:-23.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-123.6,y:-27.7},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:-140.5,y:-33.5},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:-165.3,y:-42.1},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:-204.8,y:-55.8},0).wait(1).to({scaleX:2.79,scaleY:2.79,x:-269.3,y:-78},0).wait(1).to({scaleX:3.41,scaleY:3.41,x:-333.8,y:-100.3},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:-373.3,y:-114},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:-398.1,y:-122.5},0).wait(1).to({scaleX:4.2,scaleY:4.2,x:-415,y:-128.4},0).wait(1).to({scaleX:4.31,scaleY:4.31,x:-427.1,y:-132.6},0).wait(1).to({scaleX:4.4,scaleY:4.4,x:-435.9,y:-135.6},0).wait(1).to({scaleX:4.46,scaleY:4.46,x:-442.3,y:-137.8},0).wait(1).to({scaleX:4.51,scaleY:4.51,x:-447,y:-139.4},0).wait(1).to({scaleX:4.54,scaleY:4.54,x:-450.2,y:-140.5},0).wait(1).to({scaleX:4.56,scaleY:4.56,x:-452.3,y:-141.3},0).wait(1).to({scaleX:4.57,scaleY:4.57,x:-453.5,y:-141.7},0).wait(1).to({scaleX:4.57,scaleY:4.57,x:-453.8,y:-141.8},0).wait(1));

	// o
	this.instance_10 = new lib.o("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-67.3,-14.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).to({x:-115.4},9,cjs.Ease.get(1)).wait(31).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,x:-115.9,y:-14.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-117.4,y:-14.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-120.1,y:-15.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-124.3,y:-16.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-130.3,y:-18.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-138.7,y:-20.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-150.1,y:-23.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-165.8,y:-27.7},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:-187.7,y:-33.5},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:-219.9,y:-42.1},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:-271.1,y:-55.8},0).wait(1).to({scaleX:2.79,scaleY:2.79,x:-354.7,y:-78},0).wait(1).to({scaleX:3.41,scaleY:3.41,x:-438.3,y:-100.3},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:-489.5,y:-114},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:-521.7,y:-122.5},0).wait(1).to({scaleX:4.2,scaleY:4.2,x:-543.6,y:-128.4},0).wait(1).to({scaleX:4.31,scaleY:4.31,x:-559.3,y:-132.6},0).wait(1).to({scaleX:4.4,scaleY:4.4,x:-570.7,y:-135.6},0).wait(1).to({scaleX:4.46,scaleY:4.46,x:-579.1,y:-137.8},0).wait(1).to({scaleX:4.51,scaleY:4.51,x:-585.1,y:-139.4},0).wait(1).to({scaleX:4.54,scaleY:4.54,x:-589.3,y:-140.5},0).wait(1).to({scaleX:4.56,scaleY:4.56,x:-592,y:-141.3},0).wait(1).to({scaleX:4.57,scaleY:4.57,x:-593.5,y:-141.7},0).wait(1).to({scaleX:4.57,scaleY:4.57,x:-594,y:-141.8},0).wait(1));

	// h
	this.instance_11 = new lib.h("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-67.3,-14.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).to({x:-150},10,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,x:-150.6,y:-14.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-152.5,y:-14.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-155.9,y:-15.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-161.2,y:-16.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-168.8,y:-18.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-179.3,y:-20.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-193.7,y:-23.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-213.4,y:-27.7},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:-241,y:-33.5},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:-281.5,y:-42.1},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:-346,y:-55.8},0).wait(1).to({scaleX:2.79,scaleY:2.79,x:-451.1,y:-78},0).wait(1).to({scaleX:3.41,scaleY:3.41,x:-556.3,y:-100.3},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:-620.8,y:-114},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:-661.3,y:-122.5},0).wait(1).to({scaleX:4.2,scaleY:4.2,x:-688.9,y:-128.4},0).wait(1).to({scaleX:4.31,scaleY:4.31,x:-708.6,y:-132.6},0).wait(1).to({scaleX:4.4,scaleY:4.4,x:-722.9,y:-135.6},0).wait(1).to({scaleX:4.46,scaleY:4.46,x:-733.5,y:-137.8},0).wait(1).to({scaleX:4.51,scaleY:4.51,x:-741.1,y:-139.4},0).wait(1).to({scaleX:4.54,scaleY:4.54,x:-746.3,y:-140.5},0).wait(1).to({scaleX:4.56,scaleY:4.56,x:-749.8,y:-141.3},0).wait(1).to({scaleX:4.57,scaleY:4.57,x:-751.7,y:-141.7},0).wait(1).to({scaleX:4.57,scaleY:4.57,x:-752.2,y:-141.8},0).wait(1));

	// top (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_5 = new cjs.Graphics().p("ApTAAIAAiTIZTAAIAACTg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_2_graphics_5,x:102.5,y:-14.9}).wait(11).to({graphics:null,x:0,y:0}).wait(54));

	// txt_gifting
	this.instance_12 = new lib.txt_gifting();
	this.instance_12.parent = this;
	this.instance_12.setTransform(123.3,-0.7,1.114,1.114);
	this.instance_12._off = true;

	this.instance_12.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},0).to({y:-14.3},10,cjs.Ease.get(1)).wait(31).to({regX:0.1,scaleX:1.12,scaleY:1.12,x:123.7,y:-14.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:124.9,y:-14.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:127,y:-15.6},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:130.3,y:-16.7},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:135,y:-18.3},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:141.6,y:-20.5},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:150.5,y:-23.6},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:162.8,y:-27.8},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:179.9,y:-33.6},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:205.1,y:-42.2},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:245.2,y:-55.9},0).wait(1).to({scaleX:3.11,scaleY:3.11,x:310.6,y:-78.3},0).wait(1).to({scaleX:3.8,scaleY:3.8,x:376.1,y:-100.6},0).wait(1).to({scaleX:4.23,scaleY:4.23,x:416.1,y:-114.3},0).wait(1).to({scaleX:4.5,scaleY:4.5,x:441.3,y:-122.9},0).wait(1).to({scaleX:4.68,scaleY:4.68,x:458.5,y:-128.7},0).wait(1).to({scaleX:4.81,scaleY:4.81,x:470.8,y:-132.9},0).wait(1).to({scaleX:4.9,scaleY:4.9,x:479.7,y:-136},0).wait(1).to({scaleX:4.97,scaleY:4.97,x:486.2,y:-138.2},0).wait(1).to({scaleX:5.02,scaleY:5.02,x:490.9,y:-139.8},0).wait(1).to({scaleX:5.06,scaleY:5.06,x:494.2,y:-140.9},0).wait(1).to({scaleX:5.08,scaleY:5.08,x:496.4,y:-141.7},0).wait(1).to({scaleX:5.09,scaleY:5.09,x:497.5,y:-142.1},0).wait(1).to({regX:0,scaleX:5.1,scaleY:5.1,x:497.4,y:-142.2},0).wait(1));

	// btm (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_5 = new cjs.Graphics().p("ApTBMIAAiXIZTAAIAACXg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_3_graphics_5,x:102.5,y:-7.7}).wait(11).to({graphics:null,x:0,y:0}).wait(54));

	// txt_gifting
	this.instance_13 = new lib.txt_gifting();
	this.instance_13.parent = this;
	this.instance_13.setTransform(123.3,-29.9,1.114,1.114);
	this.instance_13._off = true;

	this.instance_13.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).to({y:-14.3},10,cjs.Ease.get(1)).wait(31).to({regX:0.1,scaleX:1.12,scaleY:1.12,x:123.7,y:-14.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:124.9,y:-14.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:127,y:-15.6},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:130.3,y:-16.7},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:135,y:-18.3},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:141.6,y:-20.5},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:150.5,y:-23.6},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:162.8,y:-27.8},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:179.9,y:-33.6},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:205.1,y:-42.2},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:245.2,y:-55.9},0).wait(1).to({scaleX:3.11,scaleY:3.11,x:310.6,y:-78.3},0).wait(1).to({scaleX:3.8,scaleY:3.8,x:376.1,y:-100.6},0).wait(1).to({scaleX:4.23,scaleY:4.23,x:416.1,y:-114.3},0).wait(1).to({scaleX:4.5,scaleY:4.5,x:441.3,y:-122.9},0).wait(1).to({scaleX:4.68,scaleY:4.68,x:458.5,y:-128.7},0).wait(1).to({scaleX:4.81,scaleY:4.81,x:470.8,y:-132.9},0).wait(1).to({scaleX:4.9,scaleY:4.9,x:479.7,y:-136},0).wait(1).to({scaleX:4.97,scaleY:4.97,x:486.2,y:-138.2},0).wait(1).to({scaleX:5.02,scaleY:5.02,x:490.9,y:-139.8},0).wait(1).to({scaleX:5.06,scaleY:5.06,x:494.2,y:-140.9},0).wait(1).to({scaleX:5.08,scaleY:5.08,x:496.4,y:-141.7},0).wait(1).to({scaleX:5.09,scaleY:5.09,x:497.5,y:-142.1},0).wait(1).to({regX:0,scaleX:5.1,scaleY:5.1,x:497.4,y:-142.2},0).wait(1));

	// Layer 14
	this.instance_14 = new lib.flare_1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-64.4,-16.2,0.263,0.263,0,0,0,-0.4,0.2);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:0,regY:0,scaleX:1,scaleY:1,y:-20.9,alpha:1},5).to({scaleX:0.02,scaleY:0.02,x:17.1,y:-14.7},10,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).wait(1).to({regX:29.3,regY:6.3,x:17.7},0).wait(1).to({scaleX:0.02,scaleY:0.02,y:-15.1},0).wait(1).to({x:17.6,y:-15.8},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:17.7,y:-17},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:17.6,y:-18.6},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:17.5,y:-20.8},0).wait(1).to({scaleX:0.03,scaleY:0.03,y:-23.9},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:17.4,y:-28.1},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:17.2,y:-34},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:17,y:-42.7},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:16.7,y:-56.5},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:16.2,y:-79},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:15.7,y:-101.5},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:15.3,y:-115.3},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:15.1,y:-124},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:15,y:-129.9},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:14.9,y:-134.1},0).wait(1).to({scaleX:0.09,scaleY:0.09,y:-137.2},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:14.8,y:-139.5},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:14.7,y:-141},0).wait(1).to({y:-142.2},0).wait(1).to({scaleX:0.09,scaleY:0.09,y:-142.9},0).wait(1).to({y:-143.3},0).wait(1).to({regX:0,regY:0,x:12,y:-144.1},0).wait(1));

	// Layer 15
	this.instance_15 = new lib.flare_1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-64.4,-16.2,0.263,0.263,0,0,0,-0.4,0.2);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:0.1,regY:0.1,scaleX:0.62,scaleY:0.62,rotation:-24,x:-64.3,y:-10.8,alpha:1},5).to({regX:-2.4,regY:0.5,scaleX:0.02,scaleY:0.02,rotation:-79.2,x:-150.3,y:-14},10,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).wait(1).to({regX:29.3,regY:6.3,x:-150.6,y:-14.7},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:-152.5,y:-15.1},0).wait(1).to({x:-155.9,y:-15.8},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:-161.2,y:-17},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:-168.8,y:-18.6},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:-179.3,y:-20.8},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-193.7,y:-23.9},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-213.4,y:-28.1},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:-241,y:-34},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-281.6,y:-42.7},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-346.1,y:-56.5},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-451.3,y:-79},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-556.4,y:-101.5},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-621,y:-115.3},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-661.5,y:-124},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-689.1,y:-129.9},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-708.8,y:-134.1},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-723.2,y:-137.2},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-733.7,y:-139.4},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-741.3,y:-141.1},0).wait(1).to({x:-746.6,y:-142.2},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-750.1,y:-142.9},0).wait(1).to({x:-751.9,y:-143.4},0).wait(1).to({regX:-2.2,regY:-0.1,x:-753.6,y:-140.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.2,-53.8,217.5,107.7);


(lib.bokeh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_359 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// 1st plane
	this.instance = new lib._1stplaneB();
	this.instance.parent = this;
	this.instance.setTransform(182.3,329.5,1,1,-9.2,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// 1st plane
	this.instance_1 = new lib._1stplane();
	this.instance_1.parent = this;
	this.instance_1.setTransform(342.6,329.5,1,1,0,9.2,-170.8,-0.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360));

	// 2nd plane
	this.instance_2 = new lib._2ndplane();
	this.instance_2.parent = this;
	this.instance_2.setTransform(250.9,437.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-476.8,70.6,1549.6,490.2);


// stage content:
(lib.FY17HOL_VERIZON_DESKTOP_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (window.devicePixelRatio > 1) {  	
			var canvasWidth = canvas.width;
			var canvasHeight = canvas.height;
			canvas.width = canvasWidth * window.devicePixelRatio;
			canvas.height = canvasHeight * window.devicePixelRatio;
			canvas.style.width = canvasWidth + "px";
			canvas.style.height = canvasHeight + "px";  
			stage.scaleX=stage.scaleY=window.devicePixelRatio;  
		}
		
		var timeline=this;
		
		document.rollOverFunction = function() {
			timeline.mc_cta.gotoAndPlay("hi");
		}
		document.rollOutFunction = function() {
			timeline.mc_cta.gotoAndPlay("bye");
		}
		document.openDetails = function() {
			timeline.details.gotoAndPlay("hi");
		}
		document.closeDetails = function() {
			timeline.details.gotoAndPlay("bye");
		}
		document.closeDetails = function() {
			timeline.details.gotoAndPlay("bye");
		}
		
		
		document.getElementById("details").setAttribute	("style",	"height:"+	20 +"px;"+
																	"width:"+	70 +"px;"+
																	"left:"+	timeline.detailsHitArea.x		+"px;"+
																	"top:"+		timeline.detailsHitArea.y		+"px;"
														);
	}
	this.frame_306 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(306).call(this.frame_306).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("EA4zgG8IAAN5MhxlAAAIAAt5g");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(307));

	// logo Best Buy
	this.instance = new lib.logo_BestBuy();
	this.instance.parent = this;
	this.instance.setTransform(44.5,44.1,1.111,1.111,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(307));

	// detailsBox
	this.details = new lib.detailsBox();
	this.details.parent = this;
	this.details.setTransform(0,90.8);
	this.details._off = true;

	this.timeline.addTween(cjs.Tween.get(this.details).wait(298).to({_off:false},0).wait(9));

	// detailsHitArea
	this.detailsHitArea = new lib.detailsHitArea();
	this.detailsHitArea.parent = this;
	this.detailsHitArea.setTransform(3.7,71,1,1.001);
	this.detailsHitArea.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.detailsHitArea).to({_off:true},1).wait(287).to({_off:false,x:230,y:230},0).to({x:3.7,y:71,alpha:1},10).wait(9));

	// cta
	this.mc_cta = new lib.cta();
	this.mc_cta.parent = this;
	this.mc_cta.setTransform(-106,144);
	this.mc_cta.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_cta).to({_off:true},1).wait(283).to({_off:false,regX:0.1,scaleX:0.94,scaleY:0.94,x:578.5,y:25.9},0).to({regY:0.1,y:22.2,alpha:1},9,cjs.Ease.get(1)).wait(14));

	// txt6
	this.instance_1 = new lib.txt5b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(302.6,24.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(271).to({_off:false},0).to({y:18.7,alpha:1},11,cjs.Ease.get(1)).wait(25));

	// txt 5
	this.instance_2 = new lib.img_phone_02("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(428.3,82.4,0.326,0.326,0,0,0,0.3,0.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.txt5a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-172.7,-134.2,2.168,2.168,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.34,scaleY:0.34,x:444.9,y:81.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:459.1,y:80.2},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:467.3,y:79.6},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:471.6,y:79.3},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:473.6,y:79.2},0).wait(1).to({regX:0.4,regY:0.2,scaleX:0.37,scaleY:0.37,x:474.3,y:79.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:474.7},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:476.5,y:79.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:480.2,y:79.5},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:486.9,y:79.8},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:498.8,y:80.3},0).wait(1).to({regX:0.3,regY:0.5,scaleX:0.34,scaleY:0.34,x:520.3,y:81.3},0).to({_off:true},1).wait(210));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(262).to({_off:false},0).wait(1).to({regX:90.2,regY:30.7,scaleX:2.17,scaleY:2.17,x:22.9,y:-67.7},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:23.5,y:-67.3},0).wait(1).to({scaleX:2.15,scaleY:2.15,x:24.6,y:-66.6},0).wait(1).to({scaleX:2.14,scaleY:2.14,x:26.5,y:-65.4},0).wait(1).to({scaleX:2.12,scaleY:2.12,x:29.1,y:-63.6},0).wait(1).to({scaleX:2.09,scaleY:2.09,x:32.9,y:-61.1},0).wait(1).to({scaleX:2.04,scaleY:2.04,x:38.3,y:-57.4},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:46.3,y:-52.1},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:59,y:-43.7},0).wait(1).to({scaleX:1.69,scaleY:1.69,x:81.7,y:-28.6},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:117.2,y:-4.9},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:141.2,y:11},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:154.7,y:20},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:163.3,y:25.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:169.3,y:29.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:173.6,y:32.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:176.7,y:34.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:178.9,y:36.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:180.4,y:37.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:181.4,y:37.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:181.9,y:38.1},0).wait(1).to({regX:0,regY:0,scaleX:0.86,scaleY:0.86,x:104.4,y:11.9},0).wait(23));

	// img_phone_01
	this.instance_4 = new lib.img_phone_01("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(473.1,376.9,1.183,1.183,0,0,0,0.4,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,y:282.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:473.4,y:232.9},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:473.5,y:198.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:473.7,y:172.1},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:473.8,y:151.5},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:473.9,y:135.1},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:474,y:121.8},0).wait(1).to({scaleX:0.39,scaleY:0.39,y:111},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:474.1,y:102.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:95.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,y:90},0).wait(1).to({scaleX:0.32,scaleY:0.32,y:85.9},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:474.2,y:82.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:81},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:79.9},0).wait(1).to({regX:0.5,regY:0.1,scaleX:0.3,scaleY:0.3,x:474.3,y:79.6},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:474.4},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:475.3,y:79.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:477,y:79.8},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:479.9,y:80.2},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:484.8,y:80.7},0).wait(1).to({regX:0.6,regY:0.2,scaleX:0.28,scaleY:0.28,x:493.1,y:81.6},0).wait(1).to({regX:0,regY:0,scaleX:0.26,scaleY:0.26,x:504.2,y:82.6},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:513.7,y:83.6},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:519.3,y:84.2},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:522.2,y:84.5},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:523.5,y:84.6},0).wait(1).to({regX:0.7,regY:0.4,x:524.1,y:84.7},0).to({_off:true},1).wait(19).to({_off:false,regX:0.8,scaleX:0.27,scaleY:0.27,x:431.7,y:82.4},0).wait(1).to({regX:0,regY:0,scaleX:0.28,scaleY:0.28,x:450.7,y:81},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:462.4,y:80.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:468.7,y:79.8},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:472,y:79.6},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:473.6,y:79.5},0).wait(1).to({regX:0.5,regY:0.1,scaleX:0.3,scaleY:0.3,x:474.3,y:79.6},0).wait(1).to({mode:"synched",loop:false},0).wait(1).to({regX:0,regY:0,x:474.2,y:79.5,startPosition:1},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:79.4,startPosition:2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:474.3,y:79.2,startPosition:3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:474.5,y:78.8,startPosition:4},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:474.8,y:78.3,startPosition:5},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:475.2,y:77.5,startPosition:6},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:475.8,y:76.3,startPosition:7},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:476.8,y:74.3,startPosition:8},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:478.4,y:71.1,startPosition:9},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:480.5,y:67,startPosition:10},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:481.9,y:64.2,startPosition:11},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:482.7,y:62.5,startPosition:12},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:483.2,y:61.5,startPosition:13},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:483.6,y:60.8,startPosition:14},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:483.8,y:60.4,startPosition:15},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:483.9,y:60.1,startPosition:16},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:484,y:60,startPosition:17},0).wait(1).to({regX:0.7,regY:0.1,x:484.2,startPosition:18},0).wait(75).to({startPosition:88},0).wait(1).to({regX:0,regY:0,x:483.9,startPosition:89},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:483.6,y:60.1,startPosition:90},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:483,y:60.2,startPosition:91},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:482.1,y:60.5,startPosition:92},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:480.8,y:60.9,startPosition:93},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:478.9,y:61.4,startPosition:94},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:476.2,y:62.3,startPosition:95},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:472.1,y:63.5,startPosition:96},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:465.6,y:65.4,startPosition:97},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:456.4,y:68.1,startPosition:98},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:448,y:70.6,startPosition:99},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:442.7,y:72.2},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:439.4,y:73.2},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:437.4,y:73.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:436,y:74.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:435.3,y:74.4},0).wait(1).to({x:434.8,y:74.5},0).wait(1).to({regX:0.4,scaleX:0.28,scaleY:0.28,x:434.9,y:74.6},0).wait(35).to({startPosition:99},0).wait(1).to({regX:0},0).wait(1).to({x:435},0).wait(1).to({x:435.4},0).wait(1).to({x:435.9},0).wait(1).to({x:436.7},0).wait(1).to({x:437.8,y:74.5},0).wait(1).to({x:439.3},0).wait(1).to({x:441.5,y:74.4},0).wait(1).to({x:444.9},0).wait(1).to({x:450.7,y:74.2},0).wait(1).to({x:461.2,y:74},0).wait(1).to({x:470.3,y:73.8},0).wait(1).to({x:475.2,y:73.7},0).wait(1).to({x:478.2,y:73.6},0).wait(1).to({x:480.3,y:73.5},0).wait(1).to({x:481.7},0).wait(1).to({x:482.7},0).wait(1).to({x:483.4},0).wait(1).to({x:483.9},0).wait(1).to({x:484.3},0).wait(1).to({x:484.4,y:73.4},0).wait(1).to({regX:1.1,regY:0.4,x:484.6,y:73.5},0).wait(23));

	// img_phone_03
	this.instance_5 = new lib.img_phone_03("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(494.9,354.4,1.183,1.183,0,0,0,0.1,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60).to({_off:false},0).wait(1).to({regX:0,scaleX:0.9,scaleY:0.9,x:504,y:269},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:509,y:223.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:512.4,y:192.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:515,y:168.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:517,y:149.8},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:518.6,y:134.9},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:519.9,y:122.8},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:521,y:113.1},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:521.9,y:105.2},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:522.6,y:98.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:523.1,y:94},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:523.5,y:90.2},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:523.8,y:87.6},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:524,y:85.8},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:524.1,y:84.8},0).wait(1).to({regY:0.4,scaleX:0.3,scaleY:0.3,x:524.2,y:84.5},0).wait(1).to({startPosition:0},0).wait(1).to({regY:0,x:523.7,y:84.4},0).wait(1).to({x:522},0).wait(1).to({x:518.7},0).wait(1).to({x:513.1},0).wait(1).to({x:503.7},0).wait(1).to({regX:0.1,regY:0.4,x:488.2,y:84.5},0).wait(1).to({regX:0,regY:0,x:466.3,y:84.4},0).wait(1).to({x:447.9},0).wait(1).to({x:437.2},0).wait(1).to({x:431.6},0).wait(1).to({x:428.9},0).wait(1).to({regX:0.1,regY:0.4,x:428.3,y:84.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:428.4,y:84.4},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:429.3,y:84.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:430.9,y:84.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:433.9,y:83.8},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:439.3,y:83.1},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:448.9,y:82.1},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:460.3,y:80.8},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:467.2,y:80},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:471,y:79.6},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:472.9,y:79.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:473.9,y:79.2},0).wait(1).to({regX:0.1,regY:0.2,x:474.2,y:79.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:474.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:475.3,y:79.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:477.1,y:79.6},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:480.4,y:79.9},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:486.2,y:80.5},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:496.7,y:81.6},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:509,y:82.9},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:516.6,y:83.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:520.6,y:84.1},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:522.8,y:84.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:523.8,y:84.4},0).wait(1).to({regY:0.4,x:524.2,y:84.5},0).wait(1).to({startPosition:0},0).wait(1).to({regY:0,x:524.4,y:84.6},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:525,y:85.4},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:526.3,y:86.7},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:528.3,y:88.9},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:531.4,y:92.2},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:535.9,y:97.1},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:542.7,y:104.5},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:553.5,y:116.3},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:571.6,y:135.9},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:594.9,y:161.1},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:610.8,y:178.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:620.2,y:188.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:626.1,y:195},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:629.8,y:199.1},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:632.3,y:201.8},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:633.8,y:203.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:634.6,y:204.2},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.58,scaleY:0.58,x:634.8,y:204.7},0).to({_off:true},1).wait(74).to({_off:false,x:694.7,y:211.5},0).wait(1).to({regX:0,regY:0,scaleX:0.58,scaleY:0.58,x:694.3,y:211.2},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:693,y:210.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:690.5,y:208.9},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:686.6,y:206.5},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:680.6,y:202.7},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:671.5,y:197},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:657.1,y:188.1},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:632.7,y:173},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:588.2,y:145.3},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:543.8,y:117.7},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:519.3,y:102.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:505,y:93.6},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:495.9,y:87.9},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:489.8,y:84.2},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:485.9,y:81.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:483.5,y:80.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:482.2,y:79.4},0).wait(1).to({regX:0.2,regY:0.4,scaleX:0.28,scaleY:0.28,x:481.9,y:79.3},0).wait(35).to({startPosition:0},0).wait(1).to({regX:0,regY:0,y:79.1},0).wait(1).to({x:482},0).wait(1).to({x:482.4},0).wait(1).to({x:482.9},0).wait(1).to({x:483.7},0).wait(1).to({x:484.8},0).wait(1).to({x:486.3,y:79},0).wait(1).to({x:488.5},0).wait(1).to({x:492,y:78.9},0).wait(1).to({x:497.8,y:78.8},0).wait(1).to({x:508.2,y:78.5},0).wait(1).to({x:517.4,y:78.3},0).wait(1).to({x:522.3,y:78.2},0).wait(1).to({x:525.3,y:78.1},0).wait(1).to({x:527.4},0).wait(1).to({x:528.8,y:78},0).wait(1).to({x:529.8},0).wait(1).to({x:530.5},0).wait(1).to({x:531},0).wait(1).to({x:531.4},0).wait(1).to({x:531.5},0).wait(1).to({regX:0.9,regY:0.6,x:531.7,y:78.1},0).wait(23));

	// img_phone_02
	this.instance_6 = new lib.img_phone_02("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(449.6,353.2,1.183,1.183,0,0,0,0.1,0.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,x:442.9,y:267.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:439.3,y:222.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:436.9,y:191.4},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:435.1,y:167.8},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:433.6,y:149.2},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:432.4,y:134.3},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:431.5,y:122.3},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:430.7,y:112.5},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:430.1,y:104.7},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:429.6,y:98.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:429.3,y:93.5},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:429,y:89.8},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:428.8,y:87.1},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:428.6,y:85.4},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:428.5,y:84.4},0).wait(1).to({regX:0.4,regY:0.4,scaleX:0.3,scaleY:0.3,x:428.6,y:84.2},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:428.4,y:84},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:83.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:83.8},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:83.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:428.3,y:83},0).wait(1).to({regX:0.3,regY:0.5,scaleX:0.33,scaleY:0.33,y:82.4},0).to({_off:true},1).wait(12).to({_off:false,scaleX:0.34,scaleY:0.34,x:520.3,y:81.3},0).wait(1).to({regX:0,regY:0,scaleX:0.32,scaleY:0.32,x:522,y:82.2},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:523.2,y:82.8},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:523.8,y:83.1},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:524.1,y:83.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:524.2,y:83.4},0).wait(1).to({regX:0.4,regY:0.4,x:524.4,y:83.6},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:523.8,y:83.5},0).wait(1).to({x:522.1},0).wait(1).to({x:518.6},0).wait(1).to({x:512.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:501.1,y:83.6},0).wait(1).to({x:481.1,y:83.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:457.3,y:83.9},0).wait(1).to({x:442.8,y:84},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:435.1},0).wait(1).to({x:431},0).wait(1).to({x:429},0).wait(1).to({regX:0.4,regY:0.4,x:428.6,y:84.2},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:428.3,y:84.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:427.7,y:85},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:426.7,y:86.4},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:425,y:88.6},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:422.4,y:91.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:418.6,y:96.8},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:412.8,y:104.1},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:403.8,y:115.8},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:388.6,y:135.4},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:369,y:160.6},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:355.5,y:177.9},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:347.7,y:188.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:342.7,y:194.4},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:339.6,y:198.5},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:337.5,y:201.2},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:336.3,y:202.8},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:335.6,y:203.6},0).wait(1).to({regX:0.4,regY:0.5,scaleX:0.58,scaleY:0.58,x:335.7,y:204.1},0).to({_off:true},1).wait(74).to({_off:false,x:261.8,y:211},0).wait(1).to({regX:0,regY:0,scaleX:0.58,scaleY:0.58,y:210.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:262.6,y:209.6},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:264.1,y:208.1},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:266.5,y:205.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:270.1,y:201.9},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:275.7,y:196.3},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:284.5,y:187.4},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:299.4,y:172.3},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:326.6,y:144.7},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:353.8,y:117.1},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:368.8,y:102},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:377.5,y:93.1},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:383.1,y:87.5},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:386.8,y:83.7},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:389.2,y:81.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:390.7,y:79.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:391.5,y:79},0).wait(1).to({regX:0.2,regY:0.4,scaleX:0.28,scaleY:0.28,x:391.8,y:78.9},0).wait(35).to({startPosition:0},0).wait(1).to({regX:0,regY:0,y:78.8},0).wait(1).to({x:392},0).wait(1).to({x:392.3},0).wait(1).to({x:392.9},0).wait(1).to({x:393.6},0).wait(1).to({x:394.7,y:78.7},0).wait(1).to({x:396.3},0).wait(1).to({x:398.5},0).wait(1).to({x:401.9,y:78.6},0).wait(1).to({x:407.7,y:78.4},0).wait(1).to({x:418.1,y:78.2},0).wait(1).to({x:427.2,y:78},0).wait(1).to({x:432.1,y:77.9},0).wait(1).to({x:435.1,y:77.8},0).wait(1).to({x:437.2},0).wait(1).to({x:438.6},0).wait(1).to({x:439.6,y:77.7},0).wait(1).to({x:440.3},0).wait(1).to({x:440.8},0).wait(1).to({x:441.2},0).wait(1).to({x:441.3},0).wait(1).to({regX:0.6,regY:0.9,x:441.5,y:77.8},0).wait(23));

	// img_phone_01
	this.instance_7 = new lib.img_phone_01("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(524.1,84.7,0.239,0.239,0,0,0,0.7,0.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90).to({_off:false},0).wait(1).to({regX:0,regY:0,x:523.4,y:84.6},0).wait(1).to({x:521.7},0).wait(1).to({x:518.2},0).wait(1).to({x:512},0).wait(1).to({x:500.8},0).wait(1).to({x:480.8},0).wait(1).to({x:457.1},0).wait(1).to({x:442.7},0).wait(1).to({x:434.9},0).wait(1).to({x:430.8},0).wait(1).to({x:428.9},0).wait(1).to({regX:0.8,regY:0.4,x:428.5,y:84.7},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:428.3,y:84.6},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:428.4,y:84.5},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:428.7,y:84.3},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:429.1,y:84},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:430,y:83.4},0).wait(1).to({regX:0.8,regY:0.4,scaleX:0.27,scaleY:0.27,x:431.7,y:82.4},0).to({_off:true},1).wait(197));

	// txt 2
	this.instance_8 = new lib.txt3("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-40.3,-123,1.68,1.68);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(209).to({_off:false},0).wait(1).to({regX:97.4,regY:41.6,scaleX:1.68,scaleY:1.68,x:123.6,y:-52.9,startPosition:1},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:124.2,y:-52.3,startPosition:2},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:125.5,y:-51.2,startPosition:3},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:127.5,y:-49.4,startPosition:4},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:130.6,y:-46.6,startPosition:5},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:135.3,y:-42.4,startPosition:6},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:142.7,y:-35.8,startPosition:7},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:155.3,y:-24.6,startPosition:8},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:178.3,y:-4.1,startPosition:9},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:201.2,y:16.3,startPosition:10},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:213.8,y:27.6,startPosition:11},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:221.2,y:34.2,startPosition:12},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:225.9,y:38.3,startPosition:13},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:229.1,y:41.1,startPosition:14},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:231.1,y:42.9,startPosition:15},0).wait(1).to({scaleX:1,scaleY:1,x:232.3,y:44,startPosition:16},0).wait(1).to({scaleX:1,scaleY:1,x:233,y:44.6,startPosition:17},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:135.9,y:3.2},0).wait(35).to({startPosition:31},0).wait(1).to({regX:97.4,regY:41.6,scaleX:1,scaleY:1,x:233.3,y:44.9},0).wait(1).to({scaleX:1,scaleY:1,x:233.5,y:45.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:233.9,y:45.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:234.6,y:46.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:235.5,y:47.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:236.8,y:49.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:238.6,y:51.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:241.2,y:55.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:245.1,y:60.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:251.8,y:69},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:264.3,y:85.4},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:277,y:101.9},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:283.6,y:110.5},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:287.5,y:115.6},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:290.1,y:119},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:292,y:121.4},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:293.2,y:123.1},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:294.2,y:124.3},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:294.8,y:125.1},0).wait(1).to({scaleX:0.03,scaleY:0.03,x:295.2,y:125.6},0).wait(1).to({scaleX:0.02,scaleY:0.02,x:295.4,y:125.9},0).wait(1).to({regX:-2.3,regY:-2.3,scaleX:0.02,scaleY:0.02,x:293.4,y:125.1},0).to({_off:true},1).wait(22));

	// txt 2
	this.instance_9 = new lib.txt2("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(205.7,41.1,0.5,0.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(116).to({_off:false},0).wait(1).to({regX:121.7,regY:20.8,scaleX:0.5,scaleY:0.5,x:266.5,y:51.4,startPosition:1},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:51.3,startPosition:2},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:266.4,y:51.1,startPosition:3},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:266.2,y:50.8,startPosition:4},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:266,y:50.2,startPosition:5},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:265.6,y:49.4,startPosition:6},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:265,y:48.1,startPosition:7},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:264,y:46,startPosition:8},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:262.1,y:42,startPosition:9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:260.1,y:37.7,startPosition:10},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:259,y:35.4,startPosition:11},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:258.4,y:34,startPosition:12},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:258,y:33.1,startPosition:13},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:257.8,y:32.6,startPosition:14},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:257.6,y:32.2,startPosition:15},0).wait(1).to({scaleX:1,scaleY:1,x:257.5,y:32,startPosition:16},0).wait(1).to({scaleX:1,scaleY:1,x:257.4,y:31.9,startPosition:17},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:135.7,y:11.1,startPosition:18},0).wait(75).to({startPosition:29},0).wait(1).to({regX:121.7,regY:20.8,scaleX:1,scaleY:1,x:257.4,y:31.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:257.7,y:32.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:258,y:33},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:258.6,y:34},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:259.4,y:35.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:260.7,y:38.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:262.8,y:41.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:266.2,y:48.3},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:272.7,y:60.3},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:279.6,y:73.2},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:283.3,y:80.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:285.5,y:84.3},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:286.8,y:86.9},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:287.7,y:88.6},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:288.3,y:89.7},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:288.7,y:90.4},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:288.9,y:90.7},0).wait(1).to({regX:0,regY:0,scaleX:0.18,scaleY:0.18,x:267.1,y:87.1,startPosition:22},0).to({_off:true},1).wait(79));

	// txt 1
	this.instance_10 = new lib.txt1("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(250.7,86.6,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60).to({_off:false},0).wait(1).to({regX:23.5,regY:-15,scaleX:0.63,scaleY:0.63,x:260.3,y:69.3,startPosition:1},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:258.9,y:62.9,startPosition:2},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:257.9,y:58.1,startPosition:3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:257.1,y:54.4,startPosition:4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:256.5,y:51.5,startPosition:5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:256,y:49.2,startPosition:6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:255.6,y:47.2,startPosition:7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:255.2,y:45.7,startPosition:8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:254.9,y:44.4,startPosition:9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:254.7,y:43.3,startPosition:10},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:254.6,y:42.5,startPosition:11},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:254.4,y:41.9,startPosition:12},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:254.3,y:41.4,startPosition:13},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:254.2,y:41,startPosition:14},0).wait(1).to({scaleX:1,scaleY:1,x:254.1,y:40.8,startPosition:15},0).wait(1).to({scaleX:1,scaleY:1,y:40.6,startPosition:16},0).wait(1).to({scaleX:1,scaleY:1,y:40.5,startPosition:17},0).wait(1).to({scaleX:1,scaleY:1,startPosition:18},0).wait(1).to({regX:0,regY:0,x:230.7,y:55.6,startPosition:19},0).wait(37).to({startPosition:44},0).wait(1).to({regX:23.5,regY:-15,scaleX:1,scaleY:1,x:254,y:40.3,startPosition:45},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:253.6,y:39.5,startPosition:46},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:252.6,y:38,startPosition:47},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:251.1,y:35.5,startPosition:48},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:248.8,y:31.6,startPosition:49},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:245.3,y:25.7,startPosition:50},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:239.8,y:16.5,startPosition:51},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:230.4,y:0.8,startPosition:52},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:213.3,y:-27.7,startPosition:53},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:196.2,y:-56.3,startPosition:54},0).wait(1).to({scaleX:2.04,scaleY:2.04,x:186.8,y:-72,startPosition:55},0).wait(1).to({scaleX:2.13,scaleY:2.13,x:181.3,y:-81.2,startPosition:56},0).wait(1).to({scaleX:2.18,scaleY:2.18,x:177.8,y:-87.1,startPosition:57},0).wait(1).to({scaleX:2.22,scaleY:2.22,x:175.5,y:-91,startPosition:58},0).wait(1).to({scaleX:2.24,scaleY:2.24,x:174,y:-93.5,startPosition:59},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:173,y:-95,startPosition:60},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:172.5,y:-95.8,startPosition:61},0).wait(1).to({regX:0,regY:0,scaleX:2.27,scaleY:2.27,x:119,y:-62.1,startPosition:62},0).to({_off:true},1).wait(172));

	// logo
	this.instance_11 = new lib.logo("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(673.1,66.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(73).to({_off:false},0).to({alpha:1},10).wait(224));

	// hill_01
	this.instance_12 = new lib.hill_01("synched",0,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-4.4,94.3,0.346,0.346,0,0,0,-0.1,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(60).to({_off:false},0).wait(1).to({regX:1536.1,regY:46.3,scaleX:0.48,scaleY:0.48,x:733.5,y:101.2},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:892.3,y:94.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:1019.1,y:88.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:1121.9,y:84},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:1206.2,y:80.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:1275.8,y:77.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1333.1,y:74.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1380.1,y:72.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1418.6,y:70.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1449.7,y:69.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1474.5,y:68.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1493.8,y:67.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1508.5,y:66.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1519.1,y:66.4},0).wait(1).to({scaleX:1,scaleY:1,x:1526.4,y:66},0).wait(1).to({scaleX:1,scaleY:1,x:1530.9,y:65.9},0).wait(1).to({scaleX:1,scaleY:1,x:1533.3,y:65.7},0).wait(1).to({scaleX:1,scaleY:1,x:1534.3},0).wait(1).to({regX:0,regY:0,x:-1.8,y:19.4},0).wait(37).to({startPosition:0},0).wait(1).to({regX:1536.1,regY:46.3,x:1533,y:65.7},0).wait(1).to({x:1528.6},0).wait(1).to({x:1520.3},0).wait(1).to({x:1506.9},0).wait(1).to({x:1486.3},0).wait(1).to({x:1455.1,y:65.6},0).wait(1).to({x:1406.3},0).wait(1).to({x:1322.8,y:65.5},0).wait(1).to({x:1171,y:65.3},0).wait(1).to({x:1019.2,y:65.2},0).wait(1).to({x:935.8,y:65.1},0).wait(1).to({x:886.9,y:65},0).wait(1).to({x:855.7},0).wait(1).to({x:835.2},0).wait(1).to({x:821.7},0).wait(1).to({x:813.5},0).wait(1).to({x:809.1},0).wait(1).to({regX:0,regY:0.1,x:-728.4,y:18.7},0).wait(75).to({startPosition:0},0).wait(1).to({regX:1536.1,regY:46.3,x:805.8,y:64.8},0).wait(1).to({x:799.4},0).wait(1).to({x:787.3},0).wait(1).to({x:767.4},0).wait(1).to({x:736.9},0).wait(1).to({x:690.4},0).wait(1).to({x:618.7},0).wait(1).to({x:508.5},0).wait(1).to({x:367.1},0).wait(1).to({x:247.7},0).wait(1).to({x:167.6},0).wait(1).to({x:114.5},0).wait(1).to({x:78.6},0).wait(1).to({x:54.1},0).wait(1).to({x:37.7},0).wait(1).to({x:27.5},0).wait(1).to({x:22.1},0).wait(1).to({regX:-0.1,regY:0.1,x:-1515.7,y:18.5},0).wait(35).to({startPosition:0},0).wait(1).to({regX:1536.1,regY:46.3,x:19.4,y:64.7},0).wait(1).to({x:15.7},0).wait(1).to({x:9.2},0).wait(1).to({x:-0.8},0).wait(1).to({x:-15},0).wait(1).to({x:-34.3},0).wait(1).to({x:-60},0).wait(1).to({x:-94.1},0).wait(1).to({x:-139.2},0).wait(1).to({x:-199.2},0).wait(1).to({x:-278.8},0).wait(1).to({x:-379.7},0).wait(1).to({x:-490},0).wait(1).to({x:-586.6},0).wait(1).to({x:-659.1},0).wait(1).to({x:-710.8},0).wait(1).to({x:-747.1},0).wait(1).to({x:-772.4},0).wait(1).to({x:-789.3},0).wait(1).to({x:-800},0).wait(1).to({x:-805.8},0).wait(1).to({regX:-0.1,regY:0.1,x:-2343.7,y:18.5},0).wait(23));

	// treeline_02
	this.instance_13 = new lib.treeline_04("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(535.2,508,2.765,2.765,0,0,0,0.2,211.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(262).to({_off:false},0).wait(1).to({regX:146.2,regY:14.7,scaleX:2.76,scaleY:2.76,x:938.6,y:-36,startPosition:1},0).wait(1).to({scaleX:2.76,scaleY:2.76,x:937.6,y:-35.7,startPosition:2},0).wait(1).to({scaleX:2.74,scaleY:2.74,x:935.9,y:-35.1,startPosition:3},0).wait(1).to({scaleX:2.72,scaleY:2.72,x:933.2,y:-34.3,startPosition:4},0).wait(1).to({scaleX:2.69,scaleY:2.69,x:929.3,y:-33,startPosition:5},0).wait(1).to({scaleX:2.64,scaleY:2.64,x:923.7,y:-31.3,startPosition:6},0).wait(1).to({scaleX:2.58,scaleY:2.58,x:916,y:-28.8,startPosition:7},0).wait(1).to({scaleX:2.49,scaleY:2.49,x:904.9,y:-25.3,startPosition:8},0).wait(1).to({scaleX:2.35,scaleY:2.35,x:888.3,y:-20.1,startPosition:9},0).wait(1).to({scaleX:2.14,scaleY:2.14,x:861.9,y:-11.7,startPosition:10},0).wait(1).to({scaleX:1.79,scaleY:1.79,x:818.8,y:1.9,startPosition:11},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:775.8,y:15.5,startPosition:12},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:749.3,y:23.8,startPosition:13},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:732.8,y:29,startPosition:14},0).wait(1).to({scaleX:1,scaleY:1,x:721.7,y:32.5,startPosition:15},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:713.9,y:35,startPosition:16},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:708.3,y:36.7,startPosition:17},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:704.4,y:38,startPosition:18},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:701.7,y:38.8,startPosition:19},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:700,y:39.4,startPosition:20},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:699.1,y:39.7,startPosition:21},0).wait(1).to({regX:-0.2,regY:211.9,scaleX:0.81,scaleY:0.81,x:580.1,y:199.8,startPosition:22},0).wait(23));

	// treeline_02
	this.instance_14 = new lib.treeline_03("synched",0,false);
	this.instance_14.parent = this;
	this.instance_14.setTransform(329,634.8,3.4,3.4,0,0,0,0.2,211.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(209).to({_off:false},0).wait(1).to({regX:-16.9,regY:3.9,scaleX:3.4,scaleY:3.4,x:271,y:-70.8,startPosition:1},0).wait(1).to({scaleX:3.38,scaleY:3.38,x:271.5,y:-70.1,startPosition:2},0).wait(1).to({scaleX:3.35,scaleY:3.35,x:272.6,y:-68.7,startPosition:3},0).wait(1).to({scaleX:3.31,scaleY:3.31,x:274.4,y:-66.5,startPosition:4},0).wait(1).to({scaleX:3.24,scaleY:3.24,x:277.1,y:-63.2,startPosition:5},0).wait(1).to({scaleX:3.14,scaleY:3.14,x:281.3,y:-58,startPosition:6},0).wait(1).to({scaleX:2.98,scaleY:2.98,x:287.8,y:-50,startPosition:7},0).wait(1).to({scaleX:2.7,scaleY:2.7,x:298.8,y:-36.3,startPosition:8},0).wait(1).to({scaleX:2.2,scaleY:2.2,x:318.9,y:-11.4,startPosition:9},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:339,y:13.5,startPosition:10},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:350,y:27.2,startPosition:11},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:356.5,y:35.2,startPosition:12},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:360.6,y:40.3,startPosition:13},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:363.3,y:43.7,startPosition:14},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:365.1,y:45.9,startPosition:15},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:366.3,y:47.2,startPosition:16},0).wait(1).to({scaleX:1,scaleY:1,x:366.8,y:48,startPosition:17},0).wait(1).to({regX:-0.2,regY:211.8,scaleX:1,scaleY:1,x:384.2,y:255.7,startPosition:18},0).wait(35).to({startPosition:53},0).wait(1).to({regX:-16.9,regY:3.9,x:367.5,y:47.9,startPosition:54},0).wait(1).to({scaleX:1,scaleY:1,x:367.6,y:48.3,startPosition:55},0).wait(1).to({scaleX:1,scaleY:1,x:367.9,y:48.9,startPosition:56},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:368.2,y:49.9,startPosition:57},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:368.7,y:51.4,startPosition:58},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:369.4,y:53.5,startPosition:59},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:370.4,y:56.4,startPosition:60},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:371.9,y:60.7,startPosition:61},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:374,y:67,startPosition:62},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:377.5,y:77,startPosition:63},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:382.8,y:92.4,startPosition:64},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:387.7,y:106.6,startPosition:65},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:390.7,y:115.6,startPosition:66},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:392.7,y:121.3,startPosition:67},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:394.1,y:125.3,startPosition:68},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:395,y:128,startPosition:69},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:395.7,y:130,startPosition:70},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:396.2,y:131.4,startPosition:71},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:396.5,y:132.4,startPosition:72},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:396.7,y:133,startPosition:73},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:396.8,y:133.4,startPosition:74},0).wait(1).to({regX:-0.2,regY:211.9,scaleX:0.65,scaleY:0.65,x:407.7,y:268.1,startPosition:75},0).to({_off:true},1).wait(22));

	// treeline_02
	this.instance_15 = new lib.treeline_02("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(444.5,154.2,0.366,0.366,0,0,0,-0.1,211.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(116).to({_off:false},0).wait(1).to({regX:28.5,regY:13.4,scaleX:0.37,scaleY:0.37,x:454.7,y:81.5,startPosition:1},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:454.2,y:81.2,startPosition:2},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:453.1,y:80.7,startPosition:3},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:451.3,y:79.9,startPosition:4},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:448.7,y:78.7,startPosition:5},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:444.6,y:76.9,startPosition:6},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:438.2,y:73.9,startPosition:7},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:427.2,y:69,startPosition:8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:407.4,y:59.9,startPosition:9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:387.5,y:50.9,startPosition:10},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:376.5,y:45.9,startPosition:11},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:370.2,y:43,startPosition:12},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:366.1,y:41.2,startPosition:13},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:363.4,y:40,startPosition:14},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:361.6,y:39.1,startPosition:15},0).wait(1).to({scaleX:1,scaleY:1,x:360.5,y:38.7,startPosition:16},0).wait(1).to({scaleX:1,scaleY:1,x:360,y:38.4,startPosition:17},0).wait(1).to({regX:-0.2,regY:211.8,scaleX:1,scaleY:1,x:331.2,y:236.7,startPosition:18},0).to({_off:true},94).wait(79));

	// treeline_01
	this.instance_16 = new lib.treeline_01("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(526.6,138.4,0.21,0.21,0,0,0,20.7,12.6);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({_off:false},0).wait(1).to({regX:388.2,regY:-17.2,scaleX:0.35,scaleY:0.35,x:656.8,y:101,startPosition:1},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:692.5,y:80.1,startPosition:2},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:718.9,y:64.5,startPosition:3},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:739.6,y:52.4,startPosition:4},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:756.1,y:42.7,startPosition:5},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:769.4,y:34.8,startPosition:6},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:780.3,y:28.5,startPosition:7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:789.2,y:23.3,startPosition:8},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:796.5,y:19,startPosition:9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:802.3,y:15.6,startPosition:10},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:807,y:12.8,startPosition:11},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:810.6,y:10.7,startPosition:12},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:813.4,y:9.1,startPosition:13},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:815.5,y:7.9,startPosition:14},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:816.8,y:7,startPosition:15},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:817.7,y:6.5,startPosition:16},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:818.2,y:6.2,startPosition:17},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:818.4,y:6.1,startPosition:18},0).wait(1).to({regX:20.4,regY:12.5,x:535.9,y:29,startPosition:19,loop:false},0).to({_off:true},55).wait(173));

	// flash - highlight
	this.instance_17 = new lib.flash("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(150,125);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},0).to({alpha:1},3).to({alpha:0.191},9).to({_off:true},1).wait(290));

	// mc_lockup
	this.instance_18 = new lib.mc_lockup("synched",0,false);
	this.instance_18.parent = this;
	this.instance_18.setTransform(349.2,40.7,0.778,0.778,0,0,0,0.5,0.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({_off:false},0).to({_off:true},76).wait(227));

	// white vignette
	this.instance_19 = new lib.white_vignette("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(150,125);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(7).to({_off:false},0).to({alpha:0.191},9).wait(291));

	// black vignette
	this.instance_20 = new lib.vingette("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(150,125);
	this.instance_20.alpha = 0.422;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(4).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(295));

	// bokeh
	this.instance_21 = new lib.bokeh();
	this.instance_21.parent = this;
	this.instance_21.setTransform(254,-24.3,0.49,0.49,0,0,0,87,86.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:86.9,regY:86.7,scaleX:0.81,scaleY:0.81,x:181.1,y:-105},79,cjs.Ease.get(1)).wait(38).to({regX:309.7,regY:292.3,scaleX:0.82,scaleY:0.82,x:362.5,y:62.4},0).wait(1).to({y:62.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:62.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:61.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:61.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:61.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:60.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:59.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:362.4,y:58.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:56.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:55.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:362.3,y:54.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:54.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:53.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:53.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:53.2},0).wait(1).to({y:53.1},0).wait(1).to({regX:86.9,regY:86.7,scaleX:0.89,scaleY:0.89,x:163.7,y:-130.3},0).wait(76).to({regX:309.7,regY:292.3,x:362.4,y:53.1},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:53.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:53.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:53.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:54.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:54.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:55.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:56.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:362.5,y:58.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:59.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:60.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:61.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:362.6,y:61.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:62.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:362.5,y:62.3},0).wait(1).to({x:362.6,y:62.4},0).wait(1).to({regX:86.9,regY:86.7,scaleX:0.81,scaleY:0.81,x:181.1,y:-105},0).wait(35).to({regX:86.8,regY:86.6,scaleX:0.65,scaleY:0.65,x:218.7,y:-67.1},35).wait(10));

	// bg_01
	this.instance_22 = new lib.bg_01();
	this.instance_22.parent = this;
	this.instance_22.setTransform(150.1,125,1,1,0,0,0,150.1,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(307));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258,12.6,842.8,240);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;