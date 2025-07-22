import { Home, Ticket, Heart, MessageCircle, CreditCard, Settings } from 'lucide-react';
import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import {useState} from "react";
import MainContent from "./components/MainContent.tsx";
import FeaturedCards from "./components/FeaturedCards.tsx";

function App() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const sidebarItems = [
        { name: 'Dashboard', icon: Home },
        { name: 'Ticket', icon: Ticket },
        { name: 'Favorite', icon: Heart },
        { name: 'Message', icon: MessageCircle },
        { name: 'Transaction', icon: CreditCard },
        { name: 'Setting', icon: Settings },
    ];

  return (
      <div className="app">
          <Sidebar sidebarItems={sidebarItems} activeTab={activeTab} setActiveTab={setActiveTab} />
          <MainContent/>
              <div className="content-grid">
                <div className="left-column">
                  <div className="main-content-container">
                      <FeaturedCards />
                  </div>
                </div>
              </div>
          </div>
  )
}

export default App
