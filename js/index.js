document.addEventListener("DOMContentLoaded", function(event){
  TweenMax.from((".rocket"), 2, {autoAlpha: 0});
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "data.json"
  });
});





/*window.onload = function() {
  var body = documen.getElementById((#body));

}

*/
