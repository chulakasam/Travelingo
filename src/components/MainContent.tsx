export default function MainContent(){
    const featuredTrips = [
        {
            title: 'Mount climbing',
            location: 'Green Mountain',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        },
        {
            title: 'Night camping',
            location: 'Lightning lake',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        },
        {
            title: 'Mount climbing',
            location: 'Green Mountain',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
        },
    ];
    return (
        <main className="main-content">
            {/* welcome & search part */}
            <div className="welcome-search">
                <div>
                    <h2 className="welcome-title">Hello, Jemmy <span role="img" aria-label="wave">👋</span></h2>
                    <div className="welcome-subtitle">Welcome back and explore the world</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search direction" className="search-input" />
                    <span className="notification-icon">🔔</span>
                </div>
            </div>
            {/* featured card part loading*/}
            <div className="featured-cards">
                {featuredTrips.map((trip, idx) => (
                    <div key={idx} className="featured-card">
                        <img src={trip.image} alt={trip.title} className="featured-image" />
                        <div className="featured-info">
                            <div className="featured-title">{trip.title}</div>
                            <div className="featured-location">📍 {trip.location} &nbsp; ⭐ {trip.rating}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Best Destination & Promo Card part */}
            <div className="destination-promo">
                {/* best destination part */}
                <div className="best-destination">
                    <div className="best-destination-header">
                        <div className="best-destination-title">Best Destination <span role="img" aria-label="rainbow">🌈</span></div>
                        <button className="filter-btn">Filters</button>
                    </div>
                    <div className="destination-count">100 Destination found</div>

                </div>

            </div>
        </main>
    )
}