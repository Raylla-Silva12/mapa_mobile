window.onload = function (){

  document.querySelector("#botao").addEventListener("click", function (){
    
    L.mapquest.key = 'uuUlD43vKBqjsyE4G0fWtb5A4erx6yro';

        var map = L.mapquest.map('map', {
          center: [37.7749, -122.4194],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());

  });

}

