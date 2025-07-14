// 1. GEOLOCATION API
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    console.log("Your location:", latitude, longitude);

    // Display on map
    const map = L.map('map').setView([latitude, longitude], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup('You are here').openPopup();
  }, () => {
    alert("Location access denied!");
  });
} else {
  alert("Geolocation not supported in your browser.");
}

// 2. NETWORK INFORMATION API
const netAlert = document.getElementById('network-alert');

if ('connection' in navigator) {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  console.log("Network type:", connection.effectiveType);

  if (connection.effectiveType === "2g" || connection.saveData) {
    netAlert.innerText = "⚠️ You're on a slow connection. Avoid streaming.";
    netAlert.style.display = "block";
  }

  connection.addEventListener('change', () => {
    console.log("Network changed:", connection.effectiveType);
  });
}

// 3. INTERSECTION OBSERVER API
const reminder = document.getElementById('hydration-reminder');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Hydration reminder visible");
      alert("💧 Time to hydrate!");
    }
  });
});
observer.observe(reminder);
