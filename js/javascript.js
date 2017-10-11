console.log("loaded");
//AIzaSyBYnvDLc4VVOaopd1lK-CLNF_t2C41TsC8
function initMap() {
        var gbi = {lat: 22.375057, lng: 114.110579};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: gbi
        });
        var marker = new google.maps.Marker({
          position: gbi,
          map: map
        });
      }