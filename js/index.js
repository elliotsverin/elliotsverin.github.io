var tl = new TimelineMax();

document.addEventListener("DOMContentLoaded", function(event){

  tl.from(("body"), 3, {backgroundColor: "#000000", ease: Power1.easeOut})
  .from((".rocket"), 2, {autoAlpha: 0, x: "-500", y: "500", left: "40%"});
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "data.json"
  });
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
