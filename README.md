🏃‍♂️ Smart Jogger Companion
A web-based tool designed to help joggers and walkers track their live location, stay aware of their network conditions, and receive hydration reminders while on the move.

🔍 Problem It Solves
Many joggers and outdoor fitness lovers:

Don’t track their live location

Forget to hydrate

Use apps that consume high data even on poor network

This app fixes those issues using Web APIs built into the browser—no fancy frameworks needed.

🚀 Features
✅ Real-time location tracking on a map
✅ Detects slow internet connections and warns the user
✅ Triggers hydration reminders when the user scrolls to them

🔌 Web APIs Used
Web API	Purpose
Geolocation API	Gets the user’s real-time latitude and longitude and displays on a map
Intersection Observer API	Detects when a hydration reminder enters the screen and alerts the user
Network Information API	Checks if the user is on a slow network (e.g., 2G) and gives a warning

🛠️ Technologies Used
HTML5, CSS3, JavaScript (Vanilla)

Leaflet.js for interactive maps

Web APIs (from MDN documentation)

📁 How to Run Locally
Download the project folder

Open index.html in your browser

Allow location access

Scroll to see hydration alert

Use network throttling (e.g., 2G in DevTools → Network) to see network warning