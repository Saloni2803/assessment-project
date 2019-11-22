var body = $('h2');
var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
var currentIndex = 0;
setInterval(function () {
   body.css({
     backgroundColor: colors[currentIndex]
   });
   if (!colors[currentIndex]) {
       currentIndex = 0;
   } else {
       currentIndex++;
   }
}, 
200);
function initMap() {
    var here = {lat:30.4766, lng: 76.5905};
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 18, center: here});
    var marker = new google.maps.Marker({position: here, map: map});
}
