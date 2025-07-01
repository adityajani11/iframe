function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 22.3, lng: 70.78 },
  });

  const locations = [
    { lat: 22.284549862269554, lng: 70.79303691431043, title: "Rajkot Branch 1" },
    { lat: 22.26559240397907, lng: 70.71199595418997, title: "Rajkot Branch 2" }
  ];

  locations.forEach((loc) => {
    new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map,
      title: loc.title,
    });
  });
}

window.initMap = initMap;
