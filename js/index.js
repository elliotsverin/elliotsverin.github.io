var  tl = new TimelineMax();


var width = window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var height = window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

 var anim = bodymovin.loadAnimation({
   container: document.getElementById('aboutbm'),
   renderer: "svg",
   loop: true,
   autoplay: true,
   path: "./aboutloop.json"
 });

document.addEventListener("DOMContentLoaded", function(event) {
  tl = new TimelineMax();

  //INTRO ANIMATION
  var animationMain = bodymovin.loadAnimation({
    container: document.getElementById('bm2'), // Required
    path: './data.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
  });

  var select = function(s) {
      return document.querySelector(s);
    },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  animationWindow = select('aboutbm'),
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
  anim.setSpeed(1);

//TIMELINE FOR THE SITE INTRO
  tl.to(("#cover"), 0.1, {autoAlpha:0})

  .from(("body"), 3, {
      backgroundColor: "#000000",
      ease: Power1.easeIn
    }).fromTo(("#work"), 0.1, {autoAlpha:0}, {autoAlpha:0})
    .fromTo(("#about"), 0.1, {autoAlpha:0}, {autoAlpha:0})
    .staggerFrom(("#stars"), 0.5, {y: "-50", autoAlpha: 0}, 0.1)
    .from((".rocket"), 2, {
      autoAlpha: 0,
      x: "-500",
      y: "500"
    })

    .from(("#title"), 0.5, {x: "-50", autoAlpha:0})

    .staggerFrom((".footer_li"), 0.5, {
       x: "-50",
       backgroundColor: "black",
       autoAlpha: 0.01
     }, 0.2)

     .to({frame: 0},
        6.01,
        {frame: anim.totalFrames - 1,
          onUpdate: function() {
            anim.goToAndStop(Math.round(this.target.frame), true)
          },ease: Linear.easeNone});
});

document.getElementById("myWork").addEventListener("click", work);
document.getElementById("aboutMe").addEventListener("click", about);
document.ontouchmove = function (e) {
  e.preventDefault();
}


//FOOTER BUTTON WORK
function work(){
  width = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  height = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;


  if(document.getElementById("myWork").innerHTML == "WORK"){ //IF WORK MENU IS NOT TOGGLED
    document.getElementById("myWork").innerHTML="CLOSE";
    document.getElementById("aboutMe").innerHTML="ABOUT";
    TweenMax.to((".rocket"), 1.5, {
      ease: Power1.easeInOut,
      x: width / 2,
      y: -height / 1.8,
      autoAlpha: 0
    });
    TweenMax.to(("#work"), 1, {autoAlpha:1});
    TweenMax.to(("#bm2"), 1, {autoAlpha:0});
    TweenMax.to(("#about"), 1, {autoAlpha:0});


  }else if(document.getElementById("myWork").innerHTML == "CLOSE"){ //IF WORK MENU IS TOGGLED
    document.getElementById("myWork").innerHTML="WORK";
    TweenMax.to(("#work"), 1, {autoAlpha:0});
    document.getElementById("aboutMe").innerHTML="ABOUT";
  }
};
//FOOTER BUTTON ABOUT
function about() {
    width = window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    height = window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    if(document.getElementById("aboutMe").innerHTML == "ABOUT"){ //IF ABOUT MENU IS NOT TOGGLED
      document.getElementById("aboutMe").innerHTML="CLOSE";
      TweenMax.to((".rocket"), 1.5, {
        ease: Power1.easeInOut,
        x: width / 2,
        y: -height / 1.8,
        autoAlpha: 0
      });
      TweenMax.to(("#about"), 1, {autoAlpha:1});
      TweenMax.to(("#work"), 1, {autoAlpha:0});
      document.getElementById("myWork").innerHTML="WORK";
    }
    else if(document.getElementById("aboutMe").innerHTML == "CLOSE"){ //IF ABOUT MENU IS TOGGLED
      document.getElementById("aboutMe").innerHTML="ABOUT";
      document.getElementById("myWork").innerHTML="WORK";
      TweenMax.to(("#about"), 1, {autoAlpha:0});
      TweenMax.to(("#bm2"), 1, {autoAlpha:1});

    }
};







/*window.onload = function() {
  var body = documen.getElementById((#body));

}

*/
