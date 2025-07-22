import { LogOut } from 'lucide-react';

export default function Sidebar({ sidebarItems, activeTab, setActiveTab }) {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2 className="logo">Travelingo</h2>
            </div>
            <nav className="sidebar-nav">
                {sidebarItems.map((item) => (
                    <button
                        key={item.name}
                        className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
                        onClick={() => setActiveTab(item.name)}
                    >
                        <item.icon size={20} />
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>
            <div className="discount-card">
                <div className="discount-content">
                    <h3>50% Discount</h3>
                    <p>Get a discount on certain days and don't miss it</p>
                    <div className="discount-circle">
                        <div className="discount-arrow">
                            →
                        </div>
                    </div>
                </div>
            </div>
            <button className="logout-btn">
                <LogOut size={20} />
                <span>Log Out</span>
            </button>
        </div>
    )
}