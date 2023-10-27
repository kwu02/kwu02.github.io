
    let msg="";
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
        // Prompt user for permission to access their location
        navigator.geolocation.watchPosition(
            // Success callback function
            function(position) {
                // Get the user's latitude and longitude coordinates
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                //                 const lat = 37.7274676;
                // const lng = position.-122.4560389;

                // Update the map with the user's new location
                msg = `Latitude: ${lat}, longitude: ${lng}`;
                document.getElementById("result").innerHTML = msg;

                const map = L.map('map').setView([lat, lng], 30); // Set the initial center and zoom level

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19, // Maximum zoom level
                }).addTo(map);

                const marker = L.marker([lat, lng]).addTo(map);
                // map.panTo(new L.LatLng(lat, lng));
                marker.bindPopup('Your current location on map').openPopup();

            },
            // Error callback function
            function(error) {
                // Handle errors, e.g. user denied location sharing permissions
                msg = "<span style='color:red; font-weight:bold;'>Error getting user location</span>" + " " + error;
                document.getElementById("result").innerHTML = msg;
            }
        );
    } else {
        // Geolocation is not supported by the browser
        msg = "<span style='color:green; font-weight:bold;'>Geolocation is not supported by this browser.";
        document.getElementById("result").innerHTML = msg
    }


