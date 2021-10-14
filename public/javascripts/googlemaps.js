window.addEventListener("load", (event) => {
  // const pathName = window.location.pathname;
  const locations = [
    {
      title: "Dominic's Pizza & Pasta I",
      lat: 26.369428,
      lng: -80.1726854,
      address: {
        street: "8177 Glades Rd #19",
        city: "Boca Raton",
        state: "Florida",
      },
      number: "(561) 487-3186",
      addressURL: "https://goo.gl/maps/TsiBJ26DMMoG2Uj66",
    },
    {
      title: "Dominic's Pizza & Pasta II",
      lat: 26.3653671,
      lng: -80.1999743,
      address: {
        street: "9834 West Glades Road",
        city: "Boca Raton",
        state: "Florida",
      },
      number: "(561) 487-6325",
      addressURL: "https://goo.gl/maps/vdq8R1JBkwNW5FHR8",
    },
    {
      title: "Dominic's Pizza & Pasta III",
      lat: 26.5711936,
      lng: -80.1474034,
      address: {
        street: "6566 Hypoluxo Road",
        city: "Lake Worth",
        state: "Florida",
      },
      number: "(561) 641-1110",
      addressURL: "https://goo.gl/maps/2LqXPSy16fx1jN238",
    },
    {
      title: "Dominic's Pizza & Pasta IV",
      lat: 26.5441955,
      lng: -80.090206,
      address: {
        street: "1790 North Congress Avenue",
        city: "Boynton Beach",
        state: "Florida",
      },
      number: "(561) 734-3033",
      addressURL: "https://goo.gl/maps/xenEMwiqNQkvLV9p6",
    },
  ];

  // if(pathName.indexOf("/locations/") !== -1){
  startMap();
  // }

  function startMap() {
    // Initialize the map

    if (document.getElementById("map")) {
      const mapCenter = { lat: 26.47960075, lng: -80.1468382 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: mapCenter,
      });

      // Add Markers
      for (let i = 0; i < locations.length; i++) {
        addMarker(locations[i], map);
      }
    }

    for (let i = 0; i < 4; i++) {
      const elementID = "map" + (i + 1);
      // console.log(elementID);
      if (document.getElementById(elementID)) {
        const locationMap = new google.maps.Map(
          document.getElementById(elementID),
          {
            zoom: 15,
            center: { lat: locations[i].lat, lng: locations[i].lng },
          }
        );
        addMarker(locations[i], locationMap);

        break;
      }
    }

    // addMarker Function
    function addMarker(location, theMap) {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: theMap,
        // icon: '../images/D.png',
      });

      const infowindow = new google.maps.InfoWindow({
        content: `<div class="map-info-window">
      <h4 class="title">${location.title}</h4>
      <div class="address">
          <h4>Address:</h4>
          <a href="${location.addressURL}" target="_blank">
              <div>${location.address.street}</div>
              <div>${location.address.city}, ${location.address.state}</div>
          </a>
      </div>
      <div class="Contact">
          <h4>Phone:</h4><span></span>
          <div><a href="tel:${location.number}">${location.number}</a></div>
      </div>
      </div>`,
      });
      marker.addListener("click", function () {
        infowindow.open(theMap, marker);
      });
    }
  }
});
