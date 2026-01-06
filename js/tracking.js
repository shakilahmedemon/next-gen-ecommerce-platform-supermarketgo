// Demo path coordinates (warehouse to Yangzhou University) - Longer route in Yangzhou City
const demoPath = [
    { lat: 32.3500, lng: 119.3800, name: "Warehouse" },  // Farther location in Yangzhou (approximate warehouse)
    { lat: 32.3520, lng: 119.3820, name: "Yangzhou Economic Development Zone" },
    { lat: 32.3540, lng: 119.3840, name: "Yangzhou Railway Station" },
    { lat: 32.3560, lng: 119.3860, name: "Garden International Hotel" },
    { lat: 32.3580, lng: 119.3880, name: "Yangzhou Polytechnic College" },
    { lat: 32.3600, lng: 119.3900, name: "Yangzhou Vocational University" },
    { lat: 32.3620, lng: 119.3920, name: "Yangzhou Science and Technology Museum" },
    { lat: 32.3640, lng: 119.3940, name: "Yangzhou Sports Park" },
    { lat: 32.3660, lng: 119.3960, name: "Yangzhou Government" },
    { lat: 32.3680, lng: 119.3980, name: "Wanfu Bridge" },
    { lat: 32.3700, lng: 119.4000, name: "Slender West Lake Scenic Area" },
    { lat: 32.3720, lng: 119.4020, name: "Ge Garden" },
    { lat: 32.3740, lng: 119.4040, name: "He Garden" },
    { lat: 32.3760, lng: 119.4060, name: "Daming Temple" },
    { lat: 32.3780, lng: 119.4080, name: "Yangzhou Museum" },
    { lat: 32.3800, lng: 119.4100, name: "East Gate Street" },
    { lat: 32.3820, lng: 119.4120, name: "Wenchang Road" },
    { lat: 32.3840, lng: 119.4140, name: "Yangzhou High School" },
    { lat: 32.3860, lng: 119.4160, name: "New City Plaza" },
    { lat: 32.3975, lng: 119.4335, name: "Yangzhou University" }  // Yangzhou University (your location)
];

// Vehicle options
const vehicles = {
    bike: { emoji: "🏍️", type: "Fast Delivery Bike", speed: 25 },
    scooter: { emoji: "🛴", type: "Standard Delivery Scooter", speed: 20 },
    car: { emoji: "🚗", type: "Standard Delivery Car", speed: 30 },
    van: { emoji: "🚐", type: "Bulk Delivery Van", speed: 22 }
};

// Driver names and ratings
const drivers = [
    { name: "Alex Morgan", rating: "4.9 (250 deliveries)" },
    { name: "Taylor Swift", rating: "4.8 (180 deliveries)" },
    { name: "Jordan Lee", rating: "4.9 (320 deliveries)" },
    { name: "Casey Smith", rating: "4.7 (150 deliveries)" },
    { name: "Riley Johnson", rating: "4.8 (210 deliveries)" }
];

// Map variables
let map = null;
let trackingMarker = null;
let trackingPolyline = null;
let trackingInterval = null;
let currentPositionIndex = 0;
let startTime = null;
let selectedVehicle = "bike";
let currentDriver = drivers[0];

// Initialize the map
function initMap() {
    // Remove existing map if it exists
    if (map) {
        map.remove();
    }
    
    // Create map centered between warehouse and Yangzhou University
    const centerLat = (demoPath[0].lat + demoPath[demoPath.length - 1].lat) / 2;
    const centerLng = (demoPath[0].lng + demoPath[demoPath.length - 1].lng) / 2;
    map = L.map('map').setView([centerLat, centerLng], 13);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    
    // Add warehouse marker
    const warehouseIcon = L.divIcon({
        className: 'custom-icon',
        html: '<div style="background: #fbbf24; color: white; padding: 8px 12px; border-radius: 20px; font-weight: bold; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">📦 Warehouse</div>',
        iconSize: [120, 40],
        iconAnchor: [60, 20]
    });
    
    L.marker([demoPath[0].lat, demoPath[0].lng], { icon: warehouseIcon })
        .addTo(map)
        .bindPopup("Warehouse");
    
    // Add customer marker
    const customerIcon = L.divIcon({
        className: 'custom-icon',
        html: '<div style="background: #34d399; color: white; padding: 8px 12px; border-radius: 20px; font-weight: bold; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">📍 Your Location</div>',
        iconSize: [140, 40],
        iconAnchor: [70, 20]
    });
    
    const customerLocation = demoPath[demoPath.length - 1];
    L.marker([customerLocation.lat, customerLocation.lng], { icon: customerIcon })
        .addTo(map)
        .bindPopup("Your Location");
    
    // Draw the route
    const routePoints = demoPath.map(point => [point.lat, point.lng]);
    trackingPolyline = L.polyline(routePoints, {
        color: '#7c3aed',
        weight: 4,
        opacity: 0.7,
        dashArray: '10, 10'
    }).addTo(map);
    
    // Fit map to the route
    map.fitBounds(trackingPolyline.getBounds().pad(0.1));
}

// Calculate distance between two points (in kilometers)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180);
}

// Get position along path at percentage
function getPositionAtPercentage(percentage) {
    if (percentage >= 1) return demoPath[demoPath.length - 1];
    
    const pathIndex = percentage * (demoPath.length - 1);
    const startIndex = Math.floor(pathIndex);
    const endIndex = Math.min(startIndex + 1, demoPath.length - 1);
    const ratio = pathIndex - startIndex;
    
    return {
        lat: demoPath[startIndex].lat + (demoPath[endIndex].lat - demoPath[startIndex].lat) * ratio,
        lng: demoPath[startIndex].lng + (demoPath[endIndex].lng - demoPath[startIndex].lng) * ratio
    };
}

// Calculate bearing between two points
function calculateBearing(lat1, lng1, lat2, lng2) {
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δλ = (lng2 - lng1) * Math.PI / 180;
    
    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    const θ = Math.atan2(y, x);
    const bearing = (θ * 180 / Math.PI + 360) % 360;
    
    return bearing;
}

// Update tracking information
function updateTrackingInfo(progress) {
    // Update progress bar and percentage
    document.getElementById('progress-bar').style.width = (progress * 100) + '%';
    document.getElementById('progress-percent').textContent = Math.round(progress * 100) + '%';
    
    // Update status and progress steps
    const statusBadge = document.getElementById('status-badge');
    const steps = document.querySelectorAll('.progress-step');
    
    if (progress >= 1) {
        statusBadge.className = 'status-badge delivered';
        statusBadge.textContent = 'Delivered';
        document.getElementById('eta').textContent = 'Arrived';
        document.getElementById('distance').textContent = '0 km';
        
        // Update all steps to completed
        steps.forEach(step => {
            step.classList.add('completed');
            step.classList.remove('active');
        });
    } else if (progress > 0.8) {
        statusBadge.className = 'status-badge in-progress';
        statusBadge.textContent = 'Almost There';
        
        // Update steps
        steps[0].classList.add('completed');
        steps[1].classList.add('completed');
        steps[2].classList.add('completed');
        steps[3].classList.remove('completed');
        steps[3].classList.add('active');
    } else if (progress > 0.5) {
        statusBadge.className = 'status-badge in-progress';
        statusBadge.textContent = 'Out for Delivery';
        
        // Update steps
        steps[0].classList.add('completed');
        steps[1].classList.add('completed');
        steps[2].classList.add('completed', 'active');
        steps[3].classList.remove('completed', 'active');
    } else if (progress > 0.2) {
        statusBadge.className = 'status-badge in-progress';
        statusBadge.textContent = 'Preparing Order';
        
        // Update steps
        steps[0].classList.add('completed');
        steps[1].classList.add('completed', 'active');
        steps[2].classList.remove('completed', 'active');
        steps[3].classList.remove('completed', 'active');
    }
    
    // Update ETA and distance
    if (progress < 1) {
        const remainingPercentage = 1 - progress;
        const estimatedMinutes = Math.ceil(remainingPercentage * 10); // 10 minutes total for demo
        document.getElementById('eta').textContent = estimatedMinutes + ' mins';
        
        // Update arrival time
        const arrivalTime = new Date(Date.now() + estimatedMinutes * 60000);
        const timeString = arrivalTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        document.getElementById('eta-time').textContent = `by ${timeString}`;
        
        const totalDistance = calculateDistance(
            demoPath[0].lat, demoPath[0].lng,
            demoPath[demoPath.length - 1].lat, demoPath[demoPath.length - 1].lng
        );
        const remainingDistance = (totalDistance * remainingPercentage).toFixed(1);
        document.getElementById('distance').textContent = remainingDistance + ' km';
        
        // Update speed
        const vehicle = vehicles[selectedVehicle];
        document.getElementById('speed').textContent = vehicle.speed + ' km/h';
    }
}

// Start the tracking simulation
function startTracking() {
    // Reset UI
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('progress-percent').textContent = '0%';
    document.getElementById('status-badge').className = 'status-badge in-progress';
    document.getElementById('status-badge').textContent = 'Preparing Order';
    
    // Generate random order ID
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('order-id').textContent = orderId;
    
    // Select random vehicle and driver
    const vehicleKeys = Object.keys(vehicles);
    selectedVehicle = vehicleKeys[Math.floor(Math.random() * vehicleKeys.length)];
    const vehicle = vehicles[selectedVehicle];
    
    currentDriver = drivers[Math.floor(Math.random() * drivers.length)];
    
    // Update vehicle info
    document.getElementById('vehicle-emoji').textContent = vehicle.emoji;
    document.getElementById('vehicle-type').textContent = vehicle.type;
    
    // Update driver info
    document.getElementById('driver-name').textContent = currentDriver.name;
    document.getElementById('driver-rating').textContent = '⭐ ' + currentDriver.rating;
    
    // Initialize map if not already done
    if (!map) {
        initMap();
    }
    
    // Remove existing marker if present
    if (trackingMarker) {
        map.removeLayer(trackingMarker);
    }
    
    // Create delivery marker with rotation
    const deliveryIcon = L.divIcon({
        className: 'delivery-icon',
        html: `<div style="font-size: 2rem;">${vehicle.emoji}</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });
    
    // Position marker at start
    trackingMarker = L.marker([demoPath[0].lat, demoPath[0].lng], { icon: deliveryIcon })
        .addTo(map);
    
    // Start tracking animation
    currentPositionIndex = 0;
    startTime = Date.now();
    
    // Clear any existing interval
    if (trackingInterval) {
        clearInterval(trackingInterval);
    }
    
    // Start animation loop
    trackingInterval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000; // seconds
        const progress = Math.min(elapsed / 600, 1); // 600 seconds (10 minutes) for full animation
        
        // Get current position
        const position = getPositionAtPercentage(progress);
        
        // Calculate bearing for rotation
        if (progress < 0.99) {
            const nextPosition = getPositionAtPercentage(Math.min(progress + 0.05, 1));
            const bearing = calculateBearing(position.lat, position.lng, nextPosition.lat, nextPosition.lng);
            
            // Update marker with rotation
            const rotatedIcon = L.divIcon({
                className: 'delivery-icon',
                html: `<div style="font-size: 2rem; transform: rotate(${bearing}deg);">${vehicle.emoji}</div>`,
                iconSize: [40, 40],
                iconAnchor: [20, 20]
            });
            trackingMarker.setIcon(rotatedIcon);
        }
        
        // Update marker position
        trackingMarker.setLatLng([position.lat, position.lng]);
        
        // Update map view to follow marker
        map.panTo([position.lat, position.lng], { animate: true, duration: 0.5 });
        
        // Update tracking info
        updateTrackingInfo(progress);
        
        // Stop when reached destination
        if (progress >= 1) {
            clearInterval(trackingInterval);
            trackingInterval = null;
        }
    }, 100); // Update every 100ms for smooth animation
}

// Handle back button click
document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Handle refresh button click
document.getElementById('refresh-tracking').addEventListener('click', () => {
    // Clear existing tracking
    if (trackingInterval) {
        clearInterval(trackingInterval);
        trackingInterval = null;
    }
    
    // Restart tracking
    startTracking();
});

// Handle call driver button
document.getElementById('call-driver').addEventListener('click', () => {
    alert(`Calling driver ${currentDriver.name}...`);
});

// Handle message driver button
document.getElementById('message-driver').addEventListener('click', () => {
    alert(`Messaging driver ${currentDriver.name}...`);
});

// Initialize map and start tracking on page load
window.addEventListener('load', () => {
    initMap();
    setTimeout(startTracking, 500); // Small delay to ensure map is ready
});
