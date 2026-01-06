# SuperMarketGo  

SuperMarketGo is a web-based grocery shopping platform designed to modernize traditional retail workflows by combining **digital product browsing, persistent cart management, simulated checkout, and real-time delivery tracking** into a single, modular web application.
The project emphasizes **software engineering principles**, including separation of concerns, modular architecture, maintainability, and clear system documentation, rather than relying on heavy frontend frameworks.


## Motivation & Problem Statement

Traditional grocery shopping suffers from several inefficiencies:

1. Customers cannot verify product availability before visiting the store
2. Searching for items inside physical stores is time-consuming
3. Checkout queues create friction in the buying experience
4. Customers lack visibility into order fulfillment and delivery status

SuperMarketGo addresses these issues by **digitizing the entire shopping pipeline**, from browsing to delivery tracking, while remaining lightweight and framework-free.


## Project Objectives

1. Provide a **digital product catalog** with search and category browsing
2. Implement a **persistent shopping cart** using browser storage
3. Simulate a **checkout and payment workflow**
4. Visualize **real-time delivery tracking** on an interactive map
5. Demonstrate **clean frontend architecture** using Vanilla JavaScript
6. Apply **software engineering lifecycle practices**, not just UI design


## Key Features

### Product Browsing
1. Structured product catalog
2. Category-based organization
3. Dynamic rendering using JavaScript modules

### Cart Management
1. Add/remove items
2. Persistent cart using LocalStorage
3. Real-time cart count updates in navigation

### Checkout Simulation
1. Order validation
2. Simulated payment confirmation
3. User feedback via notifications

### User Notifications
1. Toast-based success and error messages
2. Non-intrusive UX feedback

### Live Delivery Tracking
1. Interactive map using Leaflet.js
2. Simulated real-time movement
3. Route visualization with OpenStreetMap tiles


## System Architecture

The application follows a **modular, component-oriented architecture**:

HTML (Structure) → CSS (Presentation) → JavaScript Modules (Behavior) → Data & Utilities (Support)


## Tech Stack

1. Frontend: HTML5, Tailwind CSS, Vanilla JavaScript (ES Modules).
2. Backend: Google Firebase (Firestore & Auth) for a serverless architecture.
3. Visualization: Leaflet.js for geospatial data rendering.
4. State: Real-time listeners (onSnapshot) for multi-device synchronization.


## Application Flow

1. User opens the application (`index.html`)
2. Application initializes via `app.js`
3. Navbar and cart state are loaded
4. Products are rendered dynamically
5. User interacts with cart and checkout
6. Order tracking is visualized on a map


## Testing & Validation

1. Functional validation against project requirements
2. Manual UI testing for all user flows
3. LocalStorage state verification
4. Map rendering and movement testing
5. Requirement traceability through SRS


## Documentation

1. **Software Requirements Specification (SRS)** included
2. Functional and non-functional requirements defined
3. System assumptions and constraints documented


## Demo & Screenshots

> 📸 Screenshots: *(add images here)*  
> 🎬 Demo Video: *(add link here)*  


## Future Enhancements

1. Backend integration (Firebase / REST API)
2. Real authentication & payment gateway
3. Admin dashboard for inventory management
4. Real-time order updates via WebSockets
5. Mobile-first PWA support


## Author

**AHMED MD SHAKIL**  
Studying Software Engineering at Yangzhou University, China.


## License

This project is for educational and portfolio purposes.
