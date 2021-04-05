let map;
let datas;
let markers;
let tracks = new Object();

for (let element of tracks_datas.features) {
  tracks[element.properties.OBJECTID] = element.geometry.coordinates[0][0]
}
console.log(tracks)
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5.5,
    center: { lat: -40.9006, lng: 174.8860 },
  });

  markers = [];
  datas = map.data.addGeoJson(tracks_datas);
  map.data.setStyle({
    strokeColor: 'green',
    strokeOpacity: '0.0'
  });

  for (var i = 0; i < Object.keys(tracks).length; i++) {
    const data = datas[i];
    const lat = data.getGeometry().getAt(0).g[0].lat();
    const lng = data.getGeometry().getAt(0).g[0].lng();
    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng }, label: ""+data.getProperty('OBJECTID')+""
    });
      const infowindow = new google.maps.InfoWindow({
          content: data.getProperty('OBJECTID') + ": "+ "<p>Marker Location:" + marker.getPosition() + "</p>",
      });
      google.maps.event.addListener(marker, "click", () => {
          console.log(marker)
          infowindow.open(map, marker);
      });
    markers.push(marker);
  }

  google.maps.event.addListener(map, 'bounds_changed', function() {

    let bounds = map.getBounds();
    let maxLat = bounds.getNorthEast().lat();
    let minLat = bounds.getSouthWest().lat();
    let maxLng = bounds.getNorthEast().lng();
    let minLng = bounds.getSouthWest().lng();

    if (maxLng < 0) {
      maxLng += 360
    }
    console.log(maxLat, maxLng, minLat, minLng)

    let filteredObject = Object.keys(tracks).reduce(function(r, ele) {
      if (tracks[ele][1] >= Number(minLat) &&
          tracks[ele][1] <= Number(maxLat) &&
          tracks[ele][0] >= Number(minLng) &&
          tracks[ele][0] <= Number(maxLng)) {

          r[ele] = tracks[ele]
      }
        return r;
    }, {})
    console.log(Object.keys(filteredObject).length)
  })

  new MarkerClusterer(map, markers, {
    imagePath:
    "https://raw.githubusercontent.com/googlemaps/js-markerclustererplus/main/images/m",
  });
}

google.maps.event.addDomListener(window, 'load', function() {
  initMap();
});
