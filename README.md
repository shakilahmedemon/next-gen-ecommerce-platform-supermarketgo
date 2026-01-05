# SuperMarketGo  
**A Modular Smart Grocery Web Platform**

SuperMarketGo is a web-based grocery shopping platform designed to modernize
traditional retail workflows by combining **digital product browsing,
persistent cart management, simulated checkout, and real-time delivery
tracking** into a single, modular web application.

The project emphasizes **software engineering principles**, including
separation of concerns, modular architecture, maintainability, and clear
system documentation, rather than relying on heavy frontend frameworks.

---

## Motivation & Problem Statement

Traditional grocery shopping suffers from several inefficiencies:

- Customers cannot verify product availability before visiting the store
- Searching for items inside physical stores is time-consuming
- Checkout queues create friction in the buying experience
- Customers lack visibility into order fulfillment and delivery status

SuperMarketGo addresses these issues by **digitizing the entire shopping
pipeline**, from browsing to delivery tracking, while remaining lightweight
and framework-free.

---

## Project Objectives

- Provide a **digital product catalog** with search and category browsing
- Implement a **persistent shopping cart** using browser storage
- Simulate a **checkout and payment workflow**
- Visualize **real-time delivery tracking** on an interactive map
- Demonstrate **clean frontend architecture** using Vanilla JavaScript
- Apply **software engineering lifecycle practices**, not just UI design

---

## Key Features

### Product Browsing
- Structured product catalog
- Category-based organization
- Dynamic rendering using JavaScript modules

### Cart Management
- Add/remove items
- Persistent cart using LocalStorage
- Real-time cart count updates in navigation

### Checkout Simulation
- Order validation
- Simulated payment confirmation
- User feedback via notifications

### User Notifications
- Toast-based success and error messages
- Non-intrusive UX feedback

### Live Delivery Tracking
- Interactive map using Leaflet.js
- Simulated real-time movement
- Route visualization with OpenStreetMap tiles

---

## System Architecture

The application follows a **modular, component-oriented architecture**:

HTML (Structure)
↓
CSS (Presentation)
↓
JavaScript Modules (Behavior)
↓
Data & Utilities (Support)

---

### Architectural Principles Applied
- Separation of Concerns
- Single Responsibility Principle
- Modular ES6 JavaScript
- No global state pollution
- Clear dependency flow

---

## Tech Stack

### Frontend
- **HTML5** — semantic structure
- **Tailwind CSS** — utility-first styling
- **Vanilla JavaScript (ES Modules)** — application logic

### Mapping & Visualization
- **Leaflet.js**
- **OpenStreetMap**

### State Management
- **Browser LocalStorage**

---

## Project Structure
SuperMarketGo/
│
├── public/
│   ├── index.html              # Main application entry
│   └── tracking.html           # Real-time delivery tracking page
│
├── src/
│   ├── css/
│   │   ├── base.css            # Global styles, fonts, scrollbars
│   │   ├── theme.css           # Tailwind config & brand colors
│   │   ├── components.css      # Buttons, modals, cards, toasts
│   │   └── tracking.css        # Delivery tracking UI styles
│   │
│   ├── data/
│   │   └── products.js         # Product catalog (static mock data)
│   │
│   ├── js/
│   │   ├── app.js              # Application bootstrap
│   │   ├── nav.js              # Navigation rendering
│   │   ├── store.js            # Cart & state management
│   │   ├── products.js         # Product listing & search logic
│   │   ├── checkout.js         # Checkout & QR payment logic
│   │   ├── reviews.js          # Product reviews system
│   │   ├── notifications.js    # Toast notifications
│   │   └── tracking.js         # Map & delivery simulation
│   │
│   └── utils/
│       ├── dom.js              # DOM helper utilities
│       └── format.js           # Price/time formatting helpers
│
├── assets/
│   ├── images/
│   └── screenshots/
│
├── docs/
│   ├── SRS.pdf                 # Full Software Requirements Specification
│   └── architecture.png
│
├── README.md
├── LICENSE
└── .gitignore

## Application Flow

1. User opens the application (`index.html`)
2. Application initializes via `app.js`
3. Navbar and cart state are loaded
4. Products are rendered dynamically
5. User interacts with cart and checkout
6. Order tracking is visualized on a map

---

## Testing & Validation

- Functional validation against project requirements
- Manual UI testing for all user flows
- LocalStorage state verification
- Map rendering and movement testing
- Requirement traceability through SRS

---

## Documentation

- **Software Requirements Specification (SRS)** included
- Functional and non-functional requirements defined
- System assumptions and constraints documented

---

## Demo & Screenshots

> 📸 Screenshots: *(add images here)*  
> 🎬 Demo Video: *(add link here)*  

---

## Future Enhancements

- Backend integration (Firebase / REST API)
- Real authentication & payment gateway
- Admin dashboard for inventory management
- Real-time order updates via WebSockets
- Mobile-first PWA support

---

## Author

**Shakil Ahmed**  
Software Engineering  
Interests: Web Development, System Architecture, AI-Driven Applications

---

## License

This project is for educational and portfolio purposes.
