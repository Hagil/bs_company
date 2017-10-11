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

      $(document).ready(setup);

      function setup(){
      	console.log('Inside setup');
      	$('#send').click(send_data);
      }
      function send_data(){
      	console.log('Inside send_data');
      	var name =$('#name').val();
      	var email =$('#email').val();
      	var comments =$('#comments').val();
      	console.log('data:' + name + ', ' + email + ', ' + comments);
      }