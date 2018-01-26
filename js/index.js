var  tl = new TimelineMax();
var width = window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var height = window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

var select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  animationWindow = select('.bm'),
      animData = {
    wrapper: animationWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: true,
    path: 'data.json',

  },
  anim, tl;


anim = bodymovin.loadAnimation(animData);
anim.addEventListener('DOMLoaded', onDOMLoaded);
anim.setSpeed(1);

console.log(tl + " what " + anim);

//function onDOMLoaded(e) {

 console.log("WEMADEIT");
 tl = new TimelineMax();

 tl.from(("body"), 3, {
     backgroundColor: "#000000",
     ease: Power1.easeIn
   })
   .from((".rocket"), 2, {
     autoAlpha: 0,
     x: "-500",
     y: "500",
     left: "40%"
   })
    .staggerFrom((".footer_li"), 0.5, {
      x: "-50",
      autoAlpha: 0.01
    }, 0.2)
     .to({
      frame: 0
    }, 6.01, {
      frame: anim.totalFrames - 1,
      onUpdate: function() {
        anim.goToAndStop(Math.round(this.target.frame), true)
      },
      ease: Linear.easeNone
    });*/
//}
document.addEventListener("DOMContentLoaded", function(event) {
  //var scene = document.getElementsByClassName('rocket');
  //var parallaxInstance = new Parallax(scene);


  console.log(anim.totalFrames);
  /*var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "data.json"
  });*/
});



document.getElementById("aboutMe").addEventListener("click", about);

function about() {
  width = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  height = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;


  TweenMax.to(("rocket"), 1.5, {
    ease: Power1.easeInOut,
    x: width / 2,
    y: -height / 1.8,
    autoAlpha: 0
  });
}







/*window.onload = function() {
  var body = documen.getElementById((#body));

}

*/
