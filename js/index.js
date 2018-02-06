var  tl = new TimelineMax();
var home = new Boolean(true);
var homeTest = "WHATUP";
var width = window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var height = window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;


//console.log(tl + " what " + anim);

//function onDOMLoaded(e) {

 console.log(home);
 var anim = bodymovin.loadAnimation({
   container: document.getElementById('aboutbm'),
   renderer: "svg",
   loop: true,
   autoplay: true,
   path: "./aboutloop.json"
 });

/*var aboutAnim = bodymovin.loadAnimation({
  container = document.getElementById('aboutbm'),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./aboutloop.json"
});*/

//}
document.addEventListener("DOMContentLoaded", function(event) {
  tl = new TimelineMax();

  var select = function(s) {
      return document.querySelector(s);
    },
    selectAll = function(s) {
      return document.querySelectorAll(s);
    },
    animationWindow = select('bm'),
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
  //anim.addEventListener('DOMLoaded', onDOMLoaded);
  anim.setSpeed(1);


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
    .fromTo(("#about"), 0.1, {autoAlpha:0}, {autoAlpha:0})
     .staggerFrom((".footer_li"), 0.5, {
       x: "-50",
       backgroundColor: "black",
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
     });

  //var scene = document.getElementsByClassName('rocket');
  //var parallaxInstance = new Parallax(scene);


//  console.log(anim.totalFrames);

});

//document.getElementsByClassName("footer_li").addEventListener("mouseover", rollover);

function rollover(){
  //TweenMax.to()
}

document.getElementById("aboutMe").addEventListener("click", about);
document.ontouchmove = function (e) {
  e.preventDefault();
}
function about() {
    console.log(home + " HEJ");
    width = window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    height = window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;


    if(home){
      console.log(homeTest);
      document.getElementById("aboutMe").innerHTML="CLOSE";
      home = false;
      TweenMax.to((".rocket"), 1.5, {
        ease: Power1.easeInOut,
        x: width / 2,
        y: -height / 1.8,
        autoAlpha: 0
      });
      TweenMax.to(("#about"), 1, {autoAlpha:1});
    }else{
      document.getElementById("aboutMe").innerHTML="ABOUT";
      //document.getElementsByClassName("rocket").style.transform = "matrix(1, 0, 0, 1, -500, 500)";
      TweenMax.to(("#about"), 1, {autoAlpha:0});

      home = true;
    }
};







/*window.onload = function() {
  var body = documen.getElementById((#body));

}

*/
