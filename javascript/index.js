const hotels = [
  {
    lat: 42.227125,
    lng: -8.466236,
    dir: "Av. Enrique Peinador Vela, 0, 36890 Mondariz – Balneario, Pontevedra",
  },
  {
    lat: 41.120953,
    lng: 1.246179,
    dir: "C. de Sant Antonio Maria Claret, 43002 Tarragona",
  },
  {
    lat: 41.482088,
    lng: -2.526977,
    dir: "C. San Pascual, 26, 42200 Almazán, Soria",
  },
  {
    lat: 43.332898,
    lng: -4.761559,
    dir: "Peñamellera Alta, 33576, Asturias",
  },
  {
    lat: 37.86767,
    lng: -4.773331,
    dir: "Pje. Cristo del Amor, 5, 14009 Córdoba",
  },
  {
    lat: 37.388862,
    lng: -6.55891,
    dir: "C. Rafael Alberti, 7, 21700 La Palma del Condado, Huelva",
  },
  {
    lat: 42.130875,
    lng: -0.279228,
    dir: "HU-V-3313, 22120 Siétamo, Huesca",
  },
  {
    lat: 28.047452,
    lng: -16.70799,
    dir: "P.º El Ancla, 38650 Los Cristianos, Santa Cruz de Tenerife",
  },
  {
    lat: 39.715313,
    lng: 2.914318,
    dir: "Carrer Mare de Déu de Gràcia, 80-202, 07300 Inca, Illes Balears",
  },
  {
    lat: 40.398593,
    lng: -3.696081,
    dir: "C. de Cáceres, 2-16, 28045 Madrid",
  },
];

let map, infoWindow;

function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.4165, lng: -3.70256 },
    zoom: 4.55,
  });

  for (let hotel of hotels) {
    const marker = new google.maps.Marker({
      position: hotel,
      icon: "javascript/hotel.png",
      map: map,
    });
  }
  
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location founded");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;
