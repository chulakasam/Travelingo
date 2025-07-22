export default function MainContent(){
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
        </main>
    )
}