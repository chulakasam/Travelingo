import { LogOut } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2 className="logo">Travelingo</h2>
            </div>
            <nav className="sidebar-nav">

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