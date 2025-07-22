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
    const bestDestinations = [
        {
            title: 'Green wood forest',
            location: 'Telangana',
            rating: 4.8,
            price: 999,
            image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=100&q=80',
        },
        {
            title: 'Green forest Camp',
            location: 'Channai',
            rating: 4.8,
            price: 999,
            image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=100&q=80',
        },
        {
            title: 'Desert Festival',
            location: 'Gujarat',
            rating: 4.8,
            price: 999,
            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=100&q=80',
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
                    <div className="destination-count">100 Destination found</div>
                    <div>
                        {bestDestinations.map((dest, idx) => (
                            <div key={idx} className="destination-item">
                                <img src={dest.image} alt={dest.title} className="destination-image" />
                                <div className="destination-info">
                                    <div className="destination-title">{dest.title}</div>
                                    <div className="destination-location">📍 {dest.location} &nbsp; ⭐ {dest.rating}</div>
                                </div>
                                <div className="destination-price">₹{dest.price}<span className="destination-night">/night</span></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Promo Card */}
                <div className="promo-card">
                    <div className="promo-avatar">
                        <span className="promo-emoji">🧑‍🦰</span>
                    </div>
                    <div className="promo-title">Let's Explore the beauty</div>
                    <div className="promo-subtitle">Get special offers & news</div>
                    <button className="promo-btn">Join Now</button>
                </div>

            </div>
        </main>
    )
}