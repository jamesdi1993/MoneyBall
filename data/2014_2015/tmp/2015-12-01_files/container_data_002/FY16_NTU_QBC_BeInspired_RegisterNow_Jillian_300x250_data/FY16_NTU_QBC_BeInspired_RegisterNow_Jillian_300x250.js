(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/_2_ladies_bg.jpg", id:"_2_ladies_bg"},
		{src:"images/classroom.jpg", id:"classroom"},
		{src:"images/jillian.jpg", id:"jillian"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._2_ladies_bg = function() {
	this.initialize(img._2_ladies_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,250);


(lib.classroom = function() {
	this.initialize(img.classroom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,250);


(lib.jillian = function() {
	this.initialize(img.jillian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,250);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoTAVgMAAAgq/MBQmAAAMAAAAq/g");
	mask.setTransform(258,137.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABjD+IAAmzIhBAAQg1AAgoAnQgnAnABA3QgBA1AnAnQAoAnA1AAIATAAIAABIIgTAAQhTAAg8g8Qg9g8ABhTQgBhVA9g8QA8g8BTAAICJAAIAAH7g");
	this.shape.setTransform(62.5,335.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#279B3E").s().p("AlrFsQiXiXAAjVQAAjUCXiXQCXiXDUAAQDVAACXCXQCXCXAADUQAADViXCXQiXCXjVAAQjUAAiXiXg");
	this.shape_1.setTransform(81.9,330.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBpQgLAAAAgLIAAiYIgyAAQgJAAAAgIIAAgeQAAgIAIAAICYAAQAJAAAAAIIAAAeQAAAIgJAAIgyAAIAACYQAAALgMAAg");
	this.shape_2.setTransform(244.5,299.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAWQgKgKABgMQgBgLAKgKQAKgKALAAQAMAAAKAKQAKAKAAALQAAAMgKAKQgKAKgMgBQgLABgKgKg");
	this.shape_3.setTransform(244.5,283);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBpQgLAAAAgLIAAiYIgyAAQgJAAAAgIIAAgeQAAgIAIAAICZAAQAIAAAAAIIAAAeQAAAIgJAAIgyAAIAACYQAAALgLAAg");
	this.shape_4.setTransform(190.6,299.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAWQgJgKAAgMQAAgLAJgKQAJgKAMAAQANAAAJAKQAJAKAAALQAAAMgJAKQgJAKgNgBQgMABgJgKg");
	this.shape_5.setTransform(190.6,283);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0BsQgLAAAAgMIAAh0QAAgUgGgJQgIgMgSAAQgLAAgOAHQgOAFgKAJIAACJQAAAKgLABIgfAAQgLAAAAgLIAAi7QAAgMALAAIAcAAQAKAAAAAJIABAMQAfgZAlAAQBFgBAABOIAAB9QAAAMgKAAg");
	this.shape_6.setTransform(170,299.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBpQgLAAAAgLIAAi9QAAgJAIAAIAiAAQAJAAAAAJIAAC9QAAALgLAAg");
	this.shape_7.setTransform(229.6,299.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBpQgLAAAAgLIAAi9QAAgJAIAAIAjAAQAIAAAAAJIAAC9QAAALgLAAg");
	this.shape_8.setTransform(152.5,299.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhcAeIAAh+QAAgLALAAIAeAAQALAAAAALIAAB1QAAAUAHAJQAHALASAAQAKAAAPgGQAOgFAKgJIAAiJQAAgLALAAIAeAAQALAAAAALIAAC6QAAAHgCADQgDACgGABIgcAAQgJAAgBgJIgBgLQgeAYglAAQhEAAAAhNg");
	this.shape_9.setTransform(212.2,299.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBEEQg3AAgygUQgvgUgjgjQgigigVgxQgUguAAg4QAAg3AUgvQAVgxAighQAigjAwgUQAwgUA5AAQA1AAAwAUQAxAUAhAjQAkAiAUAwQAUAxAAA1QAAAggJAfQgIAfgRAdQgQAcgWAVQgXAXgdALIAAACICCAAIAAA0gAhRi7QglARgZAaQgaAcgPAlQgOAmAAApQgBAqAQAmQAOAkAbAcQAbAcAjAQQAkAQArAAQAmAAAlgQQAlgQAZgcQAbgcAPgkQAPgmAAgqQAAgpgOgmQgQglgagcQgYgaglgRQgkgQgpAAQguAAgiAQg");
	this.shape_10.setTransform(175.2,345.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABGD+IilixIAACxIg4AAIAAn7IA4AAIAAE+ICXiSIBQAAIihCXICxC4g");
	this.shape_11.setTransform(447.9,345.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABGD+IilixIAACxIg4AAIAAn7IA4AAIAAE+ICXiSIBQAAIihCXICxC4g");
	this.shape_12.setTransform(300.9,345.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AitD+IAAn7ICaAAQAbAAAhAHQAgAHAWAOQAYAPAOAYQAPAXABAjQAAAtgZAdQgXAcgpANIAAABQAXACAWAKQAWAKAOAQQAQAQAJAWQAIAWABAZQgBArgRAbQgSAbgcARQgdAQgjAGQgmAHgfAAgAhxDGIBmAAQAWAAAUgFQAWgFARgKQASgLALgQQALgRAAgZQAAgagLgSQgKgSgRgLQgRgLgWgEQgUgEgXAAIhnAAgAhxglIBTAAQAWAAASgDQAVgDAQgJQAQgJALgQQAJgQABgbQgBgYgIgPQgLgOgOgIQgQgJgTgDQgSgDgUAAIhaAAg");
	this.shape_13.setTransform(335.1,345.9);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnpAVLMAAAgqVMBPTAAAMAAAAqVg");
	mask.setTransform(253.8,135.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#279B3E").s().p("EAl6AUzI/+kWIhngsIkVgIMgl5AFKQgsAGgigeQghgdgBgtMAAAgmhQABgtAhgdQAigeAsAGMAl5AFKMAl6gFKQAsgGAhAeQAjAdAAAtMgABAmhQAAAtgiAdQgcAZgjAAIgOgBg");
	this.shape.setTransform(253.8,133.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipD+IAAn7IBIAAIAAGzIBAAAQA1AAAngnQAngnAAg3QAAg1gngnQgngng1AAIgTAAIAAhIIATAAQBTAAA8A8QA9A8AABTQAABVg9A8Qg8A8hTAAg");
	this.shape_1.setTransform(96.5,321.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,507.6,271.1);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoTAVgMAAAgq/MBQmAAAMAAAAq/g");
	mask.setTransform(258,137.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#107530").s().p("ASFFRI/7kWIhog6IkVAGMAnngFYIAAJAQAAAtghAdQgdAZgjAAIgOgBg");
	this.shape.setTransform(385.5,236.9);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258.6,203.1,253.8,67.7);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnpAVLMAAAgqVMBPTAAAMAAAAqVg");
	mask.setTransform(253.8,135.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#115823").s().p("AtTBaIanjnI0qEbg");
	this.shape.setTransform(339.1,224.4);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(253.8,210.2,170.5,28.4);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoTAVgMAAAgq/MBQmAAAMAAAAq/g");
	mask.setTransform(258,137.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96D686").s().p("AgrAbIAAjDIBXFRg");
	this.shape.setTransform(231.2,150.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#279B3E").s().p("AgRBPIAQjYIATBPIAADEg");
	this.shape_1.setTransform(224.9,139.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoKHrQgHgHAAgQIAAsWQAAgQAHgJQAHgIAQgCIBjgOQAKgBAGACQAHACADAGIEoHRIAAnmQAAgQAHgJQAHgJAQgCIBhgNQAKgCAGADQAHACAEAGID8GPIAXAoIAUAoIAAn1QAAgQAHgIQAGgJARgCIBjgOQARgCAGAHQAHAGAAARIAAMVQAAARgHAIQgGAJgRACIhjANQgNACgFgCQgGgDgFgIIjyl9QgMgRgQgfQgOgZgJgXIAAH1QAAAQgHAIQgGAJgRACIhhAOQgOABgEgCQgGgCgFgJIkOmsQgOgagJgXIAAH1QAAAQgHAJQgGAIgRACIhjAOIgIAAQgKAAgFgEg");
	this.shape_2.setTransform(234.7,142.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNG7QgHgIAAgPIAAqnIiyAYQgQACgIgGQgIgIAAgPIAAhPQAAgQAIgJQAIgIAQgCIIOhIQAPgCAIAGQAIAGAAAQIAABPQAAARgIAIQgHAJgQACIizAYIAAKnQAAAQgHAKQgHAJgQACIhtAPIgHABQgKAAgGgGg");
	this.shape_3.setTransform(446.5,112.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjnGVQg/g1AAhQIAAnPQAAhQA/hGQA/hHCogYQCpgXA/A2QA/A3AABPIAAA8QAAAQgHAJQgGAIgQACIhpAPQgQACgIgHQgHgGAAgRIAAgeQAAgvghgTQghgTg+AJQg8AIghAcQggAdAAAuIAAGTQAAAuAgAUQAgATA9gIQA/gJAggcQAhgcAAgvIAAgwQAAgQAHgJQAIgJAQgCIBpgOQAQgCAGAHQAHAHAAAQIAABOQAABPg/BHQg/BIipAXQgxAGgoAAQhiAAgsgmg");
	this.shape_4.setTransform(381.2,122.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Aj0HDQgGgIAAgPIAAsTQAAgQAGgKQAIgJAQgCIGsg7QAQgCAHAGQAIAGAAAQIAABPQAAARgIAIQgHAJgQACIkhAoIAADLIELglQAQgCAIAGQAJAGAAAQIAABMQAAAOgJAIQgIAIgQACIkLAlIAADpIEtgpQARgCAHAGQAIAGAAAQIAABPQAAAQgIAJQgHAJgRACIm4A8IgHAAQgLAAgGgFg");
	this.shape_5.setTransform(321.4,131.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjsGWQhEg2AAhPIAAnPQAAhPBEhIQBEhHCogYQCpgXBEA2QBEA1AABPIAAHPQAABQhEBHQhEBIipAYQgxAHgqAAQhiAAgvgmgAAAknQg+AJgjAcQgkAdAAAuIAAGTQAAAvAkASQAkAUA9gJQA+gIAlgeQAkgdAAguIAAmSQAAgvgkgTQgagMgmAAQgRAAgSACg");
	this.shape_6.setTransform(142.8,155.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjnGVQg/g1AAhQIAAnPQAAhQA/hGQA/hHCogYQCpgXA/A2QA/A3AABPIAAA8QAAAQgHAJQgGAIgQACIhpAPQgQACgIgHQgHgGAAgQIAAgfQAAgvghgTQgigTg9AJQg8AIghAcQggAdAAAuIAAGTQAAAuAgAUQAgATA9gIQA/gJAggcQAhgcAAgvIAAgwQAAgQAHgJQAIgJAQgCIBpgOQAQgCAGAHQAHAHAAAQIAABOQAABPg/BHQg/BIipAXQgxAHgqAAQhgAAgsgng");
	this.shape_7.setTransform(74.4,164.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E8636").s().p("AHXiNIF9A0I6nDng");
	this.shape_8.setTransform(173.3,46.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4CB742").s().p("Aw1juQAAgpAdgdQAdgdAoAAMAgJAEYI0qEaItBBxg");
	this.shape_9.setTransform(112.6,38.1);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.8,4.3,471.2,204.8);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1nG3IAAttMArPAAAIAANtg");
	mask.setTransform(138.5,44);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPA8QgJgLAAgRIAAg8IAZAAIAAA1QAAAbATAAQALAAAGgJQAGgIAAgKIAAg1IAZAAIAABiIgYAAIAAgQIAAAAQgEAHgIAGQgJAFgKABQgTgBgJgMgADCBGIAAhNIgcAAIAAgVIBRAAIAAAVIgcAAIAABNgAB7BGIAAhiIAZAAIAABigAg+BGIAAhNIgcAAIAAgVIBQAAIAAAVIgbAAIAABNgAiABGIAAg4QAAgYgTAAQgLgBgGAJQgGAGAAALIAAA3IgZAAIAAhiIAYAAIAAAPIAAAAQADgHAJgFQAIgGALAAQATAAAJANQAJAKAAAPIAAA/gAj2BGIAAhiIAZAAIAABigADEguQgFgEAAgHQAAgGAFgEQAEgFAGABQAHgBAEAFQAEAEAAAGQAAAHgEAEQgEAEgHAAQgGAAgEgEgAg9guQgEgEAAgHQAAgGAEgEQAFgFAGABQAGgBAFAFQAEAEAAAGQAAAHgEAEQgFAEgGAAQgGAAgFgEg");
	this.shape.setTransform(84.1,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiCMQgKgKAAgOIAAirIgfAAQgWAAgRARQgRARAAAVQAAAWARARQARAQAWAAIANAAIAAAhIgNAAQgkAAgbgaQgagaAAgkQAAgjAagbQAbgaAkAAIBAAAIAADtQgOAAgJgJgAAMBYIAAjsQAOAAAKAKQAJAJAAANIAACrIAeAAQAYAAAQgQQAQgRAAgWQAAgVgQgRQgQgRgYAAIgMAAIAAghIAMAAQAlAAAaAaQAaAbAAAjQAAAkgaAaQgaAaglAAg");
	this.shape_1.setTransform(27.7,53.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#279E3F").s().p("AigChQhDhDAAheQAAhdBDhDQBDhDBdAAQBeAABDBDQBDBDAABdQAABehDBDQhDBDheAAQhdAAhDhDg");
	this.shape_2.setTransform(27.7,53.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AtzDIIAAh4IgBAAQgLAMgPAIQgSAJgSAAQgqAAgbgdQgbgeAAguQAAgqAdgdQAcgdApAAQAjAAAbAeIABAAIAAgYIA0AAIAAEigAvNggQgNAQAAAUQAAAYAOARQAPASAYAAQAXAAAPgSQAOgRAAgXQAAgUgOgRQgPgTgXAAQgZABgPASgAORBlQgWgIgNgQIAhggQAIAKAOAGQAOAHANgBQAJABAIgEQALgGgBgMQAAgJgJgFQgIgEgYgGQgbgHgNgKQgTgMABgZQgBgfAagRQAXgQAgAAQAYAAATAIQAUAHALAOIgfAfQgGgHgMgHQgNgFgMgBQgLAAgHAEQgLAFAAALQAAAHAJAFQAGAEAXAFQBCAPgBArQABAfgXASQgWASgogBQgYAAgVgIgAHOBRQgfgeAAgvQAAgqAegdQAegdAuAAQAuAAAfAdQAeAdAAAqQgBAvgeAdQgeAdguAAQguABgdgdgAHyggQgNAQAAAUQAAAYANARQAOASAZAAQAZAAAOgSQANgRAAgYQAAgUgNgQQgOgSgZgBQgZABgOASgADfBRQgfgeABgvQAAgqAdgdQAfgdAuAAQAuAAAeAdQAeAdAAAqQAAAvgeAdQgfAdgtAAQguABgegdgAEEggQgMAQAAAUQAAAYAMARQAOASAZAAQAZAAAOgSQAMgRAAgYQAAgUgMgQQgOgSgZgBQgZABgOASgAAhBkQgQgJgKgPIAAAAIAAAbIgyAAIAAkuIA0AAIAACCIABAAQAdgbAfAAQAqAAAcAdQAbAdABAqQgBAugbAeQgdAdgqAAQgTAAgRgJgAAWggQgOARgBAUQABAXAOARQAPASAXAAQAYAAAPgSQAOgRAAgYQgBgUgNgQQgPgSgYgBQgXAAgPATgAmzBQQgegcAAgvQAAgrAegdQAdgdAuAAQAuAAAbAcIgjAjQgEgIgMgEQgLgFgLAAQgWAAgOASQgNAQABAVQAAAXAMARQAOASAXAAQALAAAMgFQAKgEAHgIIAhAlQgYAagxAAQgvAAgdgdgAr+BUQgRgVAAgiIAAh3IA2AAIAABqQAAAvAiAAQAUAAALgQQAMgNAAgTIAAhpIA2AAIAADBIg0AAIAAgdIgBAAQgJANgOAKQgRAMgSAAQglAAgUgZgAMnBnIhJhgIgBAAIAABgIg2AAIAAkuIA2AAIAAC+IABAAIBGhRIBGAAIhQBYIBUBpgAiCBnIhJhgIgCAAIAABgIg2AAIAAkuIA2AAIAAC+IACAAIBGhRIBFAAIhQBYIBVBpgAoqBnIAAjBIA2AAIAADBg");
	this.shape_3.setTransform(161,62.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAGQgHAHgJAAQgIAAgGgHgAgMgMQgFAGAAAGQAAAIAFAFQAGAGAGAAQAHAAAGgGQAGgFAAgIQAAgGgGgGQgGgFgHAAQgGAAgGAFgAAEAMIgEgKIgDAAIAAAKIgEAAIAAgXIAHAAQAJAAAAAHQAAAEgGABIAHALgAgDAAIADAAQAEAAAAgEQAAgDgEAAIgDAAg");
	this.shape_4.setTransform(270,70.5);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.9,30.9,267.4,51.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.classroom();
	this.instance.setTransform(-175,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-125,350,250);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFeBiQgFAAgBgDIg5hfQgHgMgEgLIAAByQAAAHgHAAIgXAAQgHAAAAgHIAAi1QAAgHAHAAIAXAAQAEAAACADIA6BiQAFAIAFAMIAAhyQAAgHAHAAIAXAAQAHAAAAAHIAAC1QAAAHgHAAgACqBiQgEAAgDgHIgchEIgfAAIAABEQAAAHgHAAIgZAAQgHAAAAgHIAAi0QAAgIAHAAIA9AAQATAAAOAEQANAEAJAHQAIAGAEAJQADAIAAAJIAAAcQAAAHgCAFQgBAHgEADQgEAGgGAEQgGAFgJADIAfBJQAEAHgKAAgABogHIAdAAQAPAAAIgGQAIgFAAgLIAAgOQAAgKgIgGQgIgFgPAAIgdAAgAAKBiQgHAAgCgHIgIgjIg2AAIgKAjQgCAHgHAAIgXAAQgIAAACgHIA2i1QACgHAHAAIAZAAQAIAAACAHIA0C1QACAHgHAAgAgQAZIgJgfQgEgLgFgpQgFAogEAMIgKAfIAlAAgAjqBiQgHAAAAgHIAAi0QAAgIAHAAIBjAAQAHAAAAAHIAAASQAAAIgHAAIhDAAIAAAvIA+AAQAIAAAAAHIAAAPQAAAHgIAAIg+AAIAAA2IBGAAQAHAAAAAHIAAASQAAAHgHAAgAl1BiQgGAAAAgHIAAi0QAAgIAHAAIAZAAQAHAAAAAIIAACbIBBAAQAHAAAAAHIAAASQAAAHgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-9.8,76.2,19.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFYBpQgOgEgJgHQgIgIgEgJQgEgJAAgKIAAhzQAAgLAEgIQAEgKAIgHQAJgHAOgEQAPgEAUAAQAVAAAPAEQAOAEAJAHQAIAHAEAKQAEAIAAALIAAAPQAAAIgIAAIgaAAQgIAAAAgIIAAgIQAAgLgIgGQgIgGgQAAQgQAAgIAGQgIAGAAALIAABkQAAAMAIAGQAIAGAQAAQAQAAAIgGQAIgGAAgMIAAgMQAAgIAIAAIAaAAQAIAAAAAIIAAAUQAAAKgEAJQgEAJgIAIQgJAHgOAEQgPAEgVAAQgUAAgPgEgAmNBpQgOgEgKgHQgJgIgEgJQgEgJAAgKIAAhzQAAgLAEgIQAEgKAJgHQAKgHAOgEQAPgEAVAAQAUAAAQAEQAOAEAKAHQAIAHAFAKQADAIAAALIAABzQAAAKgDAJQgFAJgIAIQgKAHgOAEQgQAEgUAAQgVAAgPgEgAmChDQgJAGAAALIAABkQAAAMAJAGQAJAGAQAAQAQAAAJgGQAJgGAAgMIAAhkQAAgLgJgGQgJgGgQAAQgQAAgJAGgApDBpQgNgEgKgHQgIgIgEgJQgDgJAAgKIAAhzQAAgLADgIQAEgKAIgHQAKgHANgEQAPgEAVAAQAUAAAPAEQAPAEAIAHQAIAHAEAKQAEAIAAALIAAAPQAAAIgIAAIgaAAQgHAAAAgIIAAgIQAAgLgIgGQgJgGgPAAQgRAAgHAGQgIAGAAALIAABkQAAAMAIAGQAHAGARAAQAPAAAJgGQAIgGAAgMIAAgMQAAgIAHAAIAaAAQAIAAAAAIIAAAUQAAAKgEAJQgEAJgIAIQgIAHgPAEQgPAEgUAAQgVAAgPgEgAISBrQgIAAAAgJIAAioIgsAAQgIAAAAgJIAAgTQAAgIAIAAICEAAQAIAAAAAIIAAATQAAAJgIAAIgtAAIAACoQAAAJgHAAgACcBrQgIAAAAgJIAAjEQAAgIAIAAIBrAAQAIAAAAAIIAAATQAAAJgIAAIhIAAIAAAzIBDAAQAIAAAAAHIAAARQAAAHgIAAIhDAAIAAA7IBMAAQAHAAAAAIIAAAUQAAAIgHAAgABIBrQgGAAgBgEIg+hnQgGgOgEgLIAAB8QAAAIgIAAIgYAAQgIAAAAgIIAAjFQAAgIAIAAIAYAAQAFAAACADIA9BrQAGAJAFANIAAh8QAAgIAIAAIAZAAQAIAAAAAIIAADFQAAAIgIAAgAh7BrQgFAAgCgEIg+hnQgIgOgEgLIAAB8QAAAIgIAAIgYAAQgIAAAAgIIAAjFQAAgIAIAAIAYAAQAFAAACADIBABrIAKAWIAAh8QAAgIAIAAIAZAAQAIAAAAAIIAADFQAAAIgIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-10.9,123.8,22);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BiQgGAAAAgHIAAi0QAAgIAHAAIA+AAQASAAAOAEQAOAEAIAHQAIAGAEAJQAEAIAAAJIAABlQAAAKgEAIQgEAIgIAHQgIAHgOADQgOAEgSAAgAgeBCIAeAAQAOAAAIgGQAJgFAAgLIAAhXQAAgKgJgGQgIgFgOAAIgeAAg");
	this.shape.setTransform(68.6,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBiQgIAAAAgHIAAi0QAAgIAIAAIBhAAQAHAAAAAHIAAASQAAAIgHAAIhBAAIAAAvIA8AAQAHAAAAAHIAAAPQAAAHgHAAIg8AAIAAA2IBEAAQAHAAAAAHIAAASQAAAHgHAAg");
	this.shape_1.setTransform(52.6,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBiQgEAAgDgHIgdhEIAAAAIgcAAIAABEQAAAHgHAAIgZAAQgIAAAAgHIAAi0QAAgIAIAAIA8AAQARAAAOAEQANAEAJAHQAIAGAEAJQAEAIAAAJIAAAcQAAAHgCAFQgCAHgEADQgEAGgGAEQgGAFgIADIAfBJQADAHgKAAgAgcgHIAcAAQANAAAIgGQAJgFAAgLIAAgOQAAgKgJgGQgIgFgNAAIgcAAg");
	this.shape_2.setTransform(36.3,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBiQgHAAAAgHIAAi0QAAgIAHAAIAXAAQAHAAAAAIIAAC0QAAAHgHAAg");
	this.shape_3.setTransform(23.4,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8BiQgIAAAAgHIAAi0QAAgIAIAAIA8AAQARAAAOAEQANAEAJAHQAIAGAEAJQAEAIAAAJIAAAhQAAAKgEAHQgEAHgIAHQgJAHgNADQgOAEgRAAIgcAAIAAA/QAAAHgHAAgAgcgCIAcAAQANAAAIgGQAJgFAAgLIAAgTQAAgKgJgGQgIgFgNAAIgcAAg");
	this.shape_4.setTransform(11.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBhQgNgEgJgHQgHgGgEgKQgEgIAAgJIAAgSQAAgIAHAAIAZAAQAHAAAAAIIAAANQAAALAHAEQAIAGAOAAQAOAAAIgGQAIgEAAgLIAAgKQAAgHgHgGIgSgIIgrgRQgLgCgHgKQgEgFgCgGQgCgGAAgGIAAgRQAAgKADgIQAEgJAHgGQAIgHAMgEQAOgDAQAAQASAAAOADQAMAEAIAHQAIAGADAJQAEAIAAAKIAAALQAAAIgHAAIgZAAQgGAAAAgIIAAgGQAAgLgIgFQgHgFgOAAQgMAAgHAFQgHAFAAALIAAAEQAAAHAEAEIAIAFIAwASIAOAHQAGACAFAFQAFAFACAGQADAHAAAIIAAAWQAAAJgEAIQgEAKgHAGQgJAHgNAEQgOADgSAAQgRAAgOgDg");
	this.shape_5.setTransform(-5.5,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoBiQgFAAgBgDIg3hfQgHgMgEgLIAAByQAAAHgHAAIgXAAQgHAAAAgHIAAi1QAAgHAHAAIAXAAQAEAAACADIA4BiQAFAIAFAMIAAhyQAAgHAHAAIAXAAQAHAAAAAHIAAC1QAAAHgHAAg");
	this.shape_6.setTransform(-22.9,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBiQgHAAAAgHIAAi0QAAgIAHAAIAXAAQAHAAAAAIIAAC0QAAAHgHAAg");
	this.shape_7.setTransform(-35.9,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBiQgIAAAAgHIAAi0QAAgIAIAAIBhAAQAHAAAAAHIAAASQAAAIgHAAIhBAAIAAAvIA8AAQAHAAAAAHIAAAPQAAAHgHAAIg8AAIAAA2IBEAAQAHAAAAAHIAAASQAAAHgHAAg");
	this.shape_8.setTransform(-52.5,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag9BiQgHAAAAgHIAAi0QAAgIAHAAIA1AAQARAAAOAEQANADAJAGQAIAGAEAIQADAHAAAKIAAARQAAALgFAIQgFAIgMAFQAPAEAIAJQAIAJAAAMIAAAWQAAAKgDAIQgEAIgIAHQgJAGgNAEQgOADgSAAgAgdBDIAdAAQAOAAAIgFQAJgGAAgLIAAgNQAAgJgJgFQgIgGgOAAIgdAAgAgdgPIAWAAQAMAAAIgGQAIgFAAgLIAAgKQAAgKgIgFQgHgEgOAAIgVAAg");
	this.shape_9.setTransform(-68.5,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-20,159.1,40.1);


(lib.shaq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.jillian();
	this.instance.setTransform(-173,-139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-139.5,350,250);


(lib.Invisible_Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Date = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIwBmQgOgFgJgKQgLgJgFgNQgGgNAAgPIABgQIAFgPIAHgMIA7hfIArAAIg1BMIABAAIAKgCIAMgBQANAAAMAFQAMAFAJAJQAJAJAFAKQAFAMAAAOQAAAQgGANQgGANgJAKQgKAJgOAFQgOAFgQAAQgQAAgOgFgAI/AAQgIADgGAFQgFAGgCAHQgEAIAAAJQABAIACAHQADAHAFAGQAFAGAIADQAHADAJAAQAIAAAIgDQAHgDAGgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgFQgGgGgHgDQgHgBgIAAQgKAAgGABgApWBkQgUgJgOgOQgPgOgJgUQgIgUAAgXQAAgYAIgTQAFgKAFgJQAGgIAIgHQAHgHAIgGQAJgFAKgEQAUgHAYAAQAYAAAUAHIATAJQAJAGAHAHQAIAHAGAIQAFAJAFAKQAIATAAAYQAAAXgIAUQgJAUgPAOQgHAHgJAGIgTAKQgUAHgYAAQgYAAgUgHgApHhEQgNAFgIALQgKAKgFANQgFAOAAAPQAAAQAFANQAFAOAKAKQAJAKANAGQANAGAPAAQAQAAANgGQANgGAJgKQAKgKAFgOQAFgNAAgQQAAgPgFgOQgFgNgJgKQgJgLgNgFQgNgGgRAAQgQAAgNAGgAlzBlQgOgFgKgJQgLgKgGgNQgGgOAAgRQAAgRAGgOQAGgLALgKQAKgKANgFQAOgFAPAAQAPAAAOAGQAPAGAJAKIgYATQgEgEgIgEQgJgEgIAAQgKAAgHAEQgHAEgFAEQgFAHgCAIQgDAIAAAIQAAAIADAIQACAIAGAGQAEAHAIADQAHAEAKAAQAIAAAIgDQAIgDAFgGIAWAWQgJAJgOAFQgNAFgPAAQgPAAgOgFgAjxBlQgJgEgFgHQgFgGgCgJQgCgJAAgKIAAg/IgYAAIAAgcIAYAAIAAgoIAiAAIAAAoIAjAAIAAAcIgjAAIAAA/QAAAJAEAGQADAGALAAIAIgBIAHgCIABAbIgKADIgMABQgPAAgIgEgAFZBmIAAggIBPhLQALgKAFgJQAGgKAAgMQAAgHgDgGQgCgFgFgFQgEgEgHgCQgFgCgHAAQgIAAgGACQgGADgEAFQgFAFgDAGQgCAGgBAIIgigFQACgNAFgLQAGgLAJgHQAJgIAMgFQAMgEAOAAQANAAANAEQAMADAKAIQAJAIAGALQAGALAAAPQAAAKgDAIQgDAJgEAHIgLANIhIBFIBdAAIAAAggACeBmIAAgqIhgAAIAAgfIBYiCIApAAIAACDIAeAAIAAAeIgeAAIAAAqgABiAeIA8AAIAAhaIgBAAgAhiBmIAAggIBPhLQAKgKAFgJQAEgKAAgMQAAgHAAgGQgDgFgFgFQgEgEgGgCQgGgCgHAAQgHAAgGACQgGADgEAFQgFAFgDAGQgCAGgBAIIgigFQABgNAGgLQAGgLAIgHQAKgIAMgFQALgEAPAAQANAAAMAEQALADAKAIQAJAIAFALQAHALgBAPQAAAKgCAIQgDAJgEAHIgLANIhGBFIBaAAIAAAggAD0AuIAAgeIBGAAIAAAeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-10.7,133.1,21.6);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TXT copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFTBSIAAh4IAQAAIAAANIAAAAQAEgHAIgEIAIgDIAJgBQAJAAAIADQAHADAFAGQAGAGACAIQADAHAAAHQAAAJgDAIQgCAIgGAGQgFAFgHAEQgIADgJAAQgJAAgHgEQgIgDgEgHIgBAAIAAA1gAFygYQgFACgEAEQgDAEgCAFQgCAGAAADQAAAGACAGQACAFADAEQAEAEAFACQAFADAGAAQAHAAAFgDQAFgCADgFQAEgEABgFQACgFAAgGQAAgDgCgGQgBgFgEgEQgDgEgFgCQgFgDgHAAQgGAAgFADgAD9AnQgLgEgHgJIANgLQAEAHAIADQAHAEAIAAIAIgBIAIgEQAEgCACgEQACgEAAgFQAAgGgCgDQgCgCgEgCQgEgDgFgCIgXgIIgKgGQgEgEgDgFQgDgGAAgIQAAgJAEgHQAEgGAFgFQAGgEAIgCQAHgCAIAAIAKABIAJADQAKAEAFAGIgMAMQgDgFgHgDQgGgEgHAAIgJACQgEABgDACIgGAGQgCAEAAAFQAAAFACADQACAEAEACQADACAEACIAWAHQAHADAFAEQAFAEADAFQADAGAAAHQAAAKgDAGQgEAHgFAFQgGAEgIADQgHACgIAAQgMAAgKgFgAo7AnQgKgEgHgJIANgLQAEAHAHADQAHAEAIAAIAJgBIAIgEQADgCACgEQADgEAAgFQAAgGgDgDQgCgCgEgCQgEgDgFgCIgWgIIgKgGQgFgEgCgFQgDgGAAgIQAAgJADgHQAEgGAGgFQAGgEAHgCQAIgCAHAAIAKABIAKADQAJAEAGAGIgMAMQgEgFgGgDQgGgEgIAAIgIACQgEABgEACIgFAGQgCAEAAAFQAAAFACADQACAEADACQADACAFACIAWAHQAGADAFAEQAFAEAEAFQADAGAAAHQAAAKgEAGQgDAHgGAFQgGAEgHADQgIACgIAAQgLAAgLgFgAHTAoQgIgDgFgGQgGgGgDgIQgEgHAAgKQAAgHAEgIQADgHAGgGQAFgGAIgDQAIgDAKAAQAJAAAIADQAIADAGAGQAFAGAEAHQADAIAAAHQAAAKgDAHQgEAIgFAGQgGAGgIADQgIADgJAAQgKAAgIgDgAHZgYQgFACgDAEQgEAEgCAFIgBAJQAAAGABAFQACAGAEAEQADAEAFACQAFADAHAAQAGAAAFgDQAFgCADgEQAEgEACgGQABgFAAgGIgBgJQgCgFgEgEQgDgEgFgCQgFgDgGAAQgHAAgFADgAA4AoQgGgCgDgFQgEgEgCgGQgCgGAAgHIAAgwIAQAAIAAArIABAJQABAFACADQACADAEACQADADAGAAQAFAAADgCQAEgCADgEQAGgHAAgMIAAgpIAQAAIABBPIgPAAIgBgOIAAAAQgDAHgHAEIgIAEIgJABQgHAAgGgDgAgpAoQgIgDgFgGQgGgGgDgIQgEgHAAgKQAAgHAEgIQADgHAGgGQAFgGAIgDQAIgDAKAAQAJAAAIADQAGADAGAGQAFAGAEAHQADAIAAAHQAAAKgDAHQgEAIgFAGQgGAGgGADQgIADgJAAQgKAAgIgDgAgjgYQgFACgDAEQgEAEgCAFIgBAJQAAAGABAFQACAGAEAEQADAEAFACQAFADAHAAQAGAAAFgDQAFgCADgEQAEgEAAgGQABgFAAgGIgBgJQAAgFgEgEQgDgEgFgCQgFgDgGAAQgHAAgFADgAkfAoQgIgDgFgGQgGgFgDgIQgDgIAAgJQAAgIADgIQADgHAGgGQAFgGAIgDQAIgDAIAAQAJAAAIADQAHADAFAFQAFAGADAHQACAIAAAIIAAAFIhAAAQAAAFACAFQACAEAEADQAEAEAEACQAFACAFAAQAIAAAGgEQAGgEAEgFIALAJQgHAJgIAEIgJADIgLABQgJAAgIgDgAj4gFIgCgJIgEgHIgHgFQgEgBgGAAQgFAAgEABIgIAFIgFAHQgDAFAAAEIAwAAIAAAAgAnXApQgFgBgFgDQgEgDgDgEQgCgFAAgHIABgIIAEgHQAEgDAIgDQAIgDAKAAIAVgBIAAgCQAAgJgGgFQgFgEgJAAQgHAAgGADQgGACgEAEIgJgKQAGgGAJgDQAIgDAKAAQAJAAAGACQAHADAEAEQAEAEACAGQACAGAAAHIAAApIABAIIgOAAQgCgGAAgGIAAAAQgFAHgGADQgHAEgJAAIgKgCgAnDADIgLACQgFABgEADQgDAEAAAFQAAADABADIAEADIAFADIAGAAQAGAAAEgBQAFgCADgEQADgDABgEQACgEAAgFIAAgFgAIuAkQgGgGAAgNIAAgqIgPAAIAAgNIAPAAIAAgXIAQAAIAAAXIAVAAIAAANIgVAAIAAAoQAAAHADAEQACADAGAAIAFgBIAFgBIAAANIgNACQgMAAgGgGgACLApIgBhPIAPAAIABAOIAAAAQAEgHAGgFIAHgDQAEgBAEAAIAGABIgBAOIgHAAQgGAAgEACQgEACgDADQgDAEgBAFQgCAEAAAFIAAApgAiJApIAAgyIgthFIAVAAIAhA3IAig3IATAAIgtBFIAAAygAl0ApIghhPIASAAIAYA+IAYg+IARAAIghBPg");
	this.shape.setTransform(55.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("As4jbIZxAAQAUAAAAAUIAAGPQAAAUgUAAI5xAAQgUAAAAgUIAAmPQAAgUAUAAg");
	this.shape_1.setTransform(54.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// OverColor
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.333)").ss(1,1,1).p("As4jbIZxAAQAUAAAAAUIAAGPQAAAUgUAAI5xAAQgUAAAAgUIAAmPQAAgUAUAAg");
	this.shape_2.setTransform(54.5,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("As3DcQgVgBABgTIAAmPQgBgTAVgBIZvAAQAVABgBATIAAGPQABATgVABg");
	this.shape_3.setTransform(54.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-24,172,47);


(lib._2_peeps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2_ladies_bg();
	this.instance.setTransform(-175,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-125,350,250);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var that = this;
		
		this.cta.addEventListener("click", clickTagger);
		function clickTagger(event) {
			window.open(clickTag, "_blank");
			stage.update(event);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.cta = new lib.cta();
	this.cta.setTransform(80.6,13.5,1,1,0,0,0,55.6,13.5);
	this.cta.shadow = new cjs.Shadow("rgba(0,0,0,0.549)",1,1,4);
	new cjs.ButtonHelper(this.cta, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-29,185,61);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(2.1,42.6,0.352,0.352,0,0,0,138.5,43.9);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(-0.1,-9.1,0.352,0.352,0,0,0,258.1,137.8);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(0.1,-8.4,0.352,0.352,0,0,0,253.8,135.2);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(-0.1,-9.1,0.352,0.352,0,0,0,258.1,137.8);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.setTransform(0.1,4.9,0.352,0.352,0,0,0,253.8,173.1);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.setTransform(-0.1,9.7,0.352,0.352,0,0,0,258.1,191.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-57.6,181.7,134.5);


// stage content:
(lib.FY16_NTU_QBC_BeInspired_RegisterNow_Jillian_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.invisBTN.addEventListener("click", clickTagger);
		
		
		
		
		function clickTagger(event) {
			/*alert("ffff")*/
			window.open(clickTag, "_blank");
			stage.update(event);
		}
		
		function clickTagger1(event) {
			/*alert("GGGG")*/
			window.open(clickTag1, "_blank");
			stage.update(event);
		}
	}
	this.frame_9 = function() {
		this.stop();
		var that = this;
		setTimeout(function(){
			that.play();
			//clearTimeout(that.pauseVar);
		}, 1500)
	}
	this.frame_37 = function() {
		this.stop();
		var that = this;
		setTimeout(function(){
			that.play();
			//clearTimeout(that.pauseVar);
		}, 1500)
	}
	this.frame_69 = function() {
		this.stop();
		var that = this;
		setTimeout(function(){
			that.play();
			//clearTimeout(that.pauseVar);
		}, 1500)
	}
	this.frame_146 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(28).call(this.frame_37).wait(32).call(this.frame_69).wait(77).call(this.frame_146).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.333)").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(147));

	// cta
	this.instance = new lib.Symbol4();
	this.instance.setTransform(71,350.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({y:278.3,alpha:0.379},3).to({y:211.5,alpha:1},5).wait(35));

	// InvisBTN
	this.invisBTN = new lib.Invisible_Button();
	new cjs.ButtonHelper(this.invisBTN, 0, 1, 2, false, new lib.Invisible_Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.invisBTN).wait(147));

	// date
	this.instance_1 = new lib.Date();
	this.instance_1.setTransform(150.8,295.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101).to({_off:false},0).to({y:232.6,alpha:0.359},4).to({y:160.7,alpha:1},7).wait(35));

	// mainlogo
	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(150,210.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(97).to({_off:false},0).to({y:148.5,alpha:0.539},8).to({y:75.5,alpha:1},7).wait(35));

	// learn
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(261.3,231.9,1,1,0,0,0,0.2,9.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({x:149.3,alpha:1},8).wait(13).to({x:39.3,alpha:0},7).to({_off:true},22).wait(37));

	// connect
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(235.6,233.1,1,1,0,0,0,0,11);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({x:150.6,alpha:1},8).wait(16).to({regY:0,y:222.1},0).to({x:-59.4,alpha:0},8).to({_off:true},1).wait(86));

	// Be_inspired
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(225,232.4,1,1,0,0,0,0,10);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:150,alpha:1},8).wait(12).to({x:3,alpha:0},8).to({_off:true},1).wait(118));

	// grey_bar
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383B3D").s().p("A7uFOIAAqbMA3dAAAIAAKbg");
	this.shape_1.setTransform(143.5,226.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383B3D").s().p("A7uHAIAAt/MA3dAAAIAAN/g");
	this.shape_2.setTransform(143.5,215.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383B3D").s().p("A7uIyIAAxjMA3dAAAIAARjg");
	this.shape_3.setTransform(143.5,203.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383B3D").s().p("A7uKkIAA1HMA3dAAAIAAVHg");
	this.shape_4.setTransform(143.5,192.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383B3D").s().p("A7uMWIAA4rMA3dAAAIAAYrg");
	this.shape_5.setTransform(143.5,180.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383B3D").s().p("A7uOIIAA8PMA3dAAAIAAcPg");
	this.shape_6.setTransform(143.5,169.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383B3D").s().p("A7uP6IAA/zMA3dAAAIAAfzg");
	this.shape_7.setTransform(143.5,158.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383B3D").s().p("A7uRrMAAAgjVMA3dAAAMAAAAjVg");
	this.shape_8.setTransform(143.5,146.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383B3D").s().p("A7uTdMAAAgm6MA3dAAAMAAAAm6g");
	this.shape_9.setTransform(143.5,135.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383B3D").s().p("A7uVPMAAAgqdMA3dAAAMAAAAqdg");
	this.shape_10.setTransform(143.5,124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_1}]},11).to({state:[{t:this.shape_1}]},17).to({state:[{t:this.shape_1}]},12).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_1}]},29).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(88).to({_off:true},1).wait(58));

	// two_peeps
	this.instance_6 = new lib._2_peeps();
	this.instance_6.setTransform(176,125.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({x:153,alpha:1},8).wait(16).to({x:21,alpha:0},8).to({_off:true},1).wait(86));

	// jullian
	this.instance_7 = new lib.shaq();
	this.instance_7.setTransform(297,125.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:150,alpha:1},8).wait(12).to({x:28,alpha:0},8).to({_off:true},22).wait(97));

	// classroom
	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.setTransform(172,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60).to({_off:false},0).to({x:142,alpha:1},8).wait(13).to({startPosition:0},0).to({x:124,alpha:0},7).wait(59));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.333)").ss(1,1,1).p("A6Z17MA0zAAAMAAAAr3Mg0zAAAg");
	this.shape_11.setTransform(153,123.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A6ZV8MAAAgr3MA0zAAAMAAAAr3g");
	this.shape_12.setTransform(153,123.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116,107,508,283);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;