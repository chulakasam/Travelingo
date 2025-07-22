import { Home, Ticket, Heart, MessageCircle, CreditCard, Settings } from 'lucide-react';
import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import {useState} from "react";
import MainContent from "./components/MainContent.tsx";

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
      </div>
  )
}

export default App
