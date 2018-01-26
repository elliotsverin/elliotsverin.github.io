var tl = new TimelineMax();

var select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  animationWindow = select('#bm'),
    animData = {
		wrapper: animationWindow,
		animType: 'svg',
		loop: true,
		prerender: true,
		autoplay: true,
		path: 'data.json',
  rendererSettings: {
    //context: canvasContext, // the canvas context
    //scaleMode: 'noScale',
    //clearCanvas: false,
    //progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
    //hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
  }
}, anim, tl;


	anim = bodymovin.loadAnimation(animData);
  anim.setSpeed(1);

document.addEventListener("DOMContentLoaded", function(event){

  tl.from(("body"), 3, {backgroundColor: "#000000", ease: Power1.easeIn})
  .to({frame:0}, 6, {
    frame: anim.totalFrames-1,
    onUpdate:function(){
      anim.goToAndStop(Math.round(this.target.frame), true)
    }, ease:Linear.easeNone
  })
  .from((".rocket"), 2, {autoAlpha: 0, x: "-500", y: "500", left: "40%"});
  /*var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "data.json"
  });*/
});

document.getElementById("aboutMe").addEventListener("click", about);

function about(){
  var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;


  TweenMax.to((".rocket"), 1.5, {ease: Power1.easeInOut, x: width/2, y: -height/2, autoAlpha: 0});
}





/*window.onload = function() {
  var body = documen.getElementById((#body));

}

*/
