import { Search, Bell, ChevronDown } from 'lucide-react';
export default function HeaderBar(){
    return(
        <header className="header">
            <div className="header-left">
                <h1>Hello, Jemmy 👋</h1>
                <p>Welcome back and explore the world</p>
            </div>
            <div className="header-center">
                <div className="search-bar">
                    <Search size={20} />
                    <input type="text" placeholder="Search direction" />
                </div>
            </div>
            <div className="header-right">
                <button className="notification-btn">
                    <Bell size={20} />
                    <span className="notification-badge">1</span>
                </button>
                <div className="user-profile">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=40&h=40&q=80"
                        alt="User"
                        className="user-avatar"
                    />
                    <div className="user-info">
                        <span className="user-name">Jemmy Max</span>
                        <span className="user-role">Travel Enthusiast</span>
                    </div>
                    <ChevronDown size={16} />
                </div>
            </div>
        </header>
    )
}