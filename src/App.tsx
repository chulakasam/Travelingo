import { Home, Ticket, Heart, MessageCircle, CreditCard, Settings } from 'lucide-react';
import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import {useState} from "react";
import MainContent from "./components/MainContent.tsx";
import FeaturedCards from "./components/FeaturedCards.tsx";
import BestDestination from "./components/BestDestination.tsx";
import CalendarWidget from "./components/CalendarWidget.tsx";
import ScheduleWidget from "./components/ScheduleWidget.tsx";
import ExploreCard from "./components/ExploreCard.tsx";

function App() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [currentMonth, setCurrentMonth] = useState('May 2025');
    const sidebarItems = [
        { name: 'Dashboard', icon: Home },
        { name: 'Ticket', icon: Ticket },
        { name: 'Favorite', icon: Heart },
        { name: 'Message', icon: MessageCircle },
        { name: 'Transaction', icon: CreditCard },
        { name: 'Setting', icon: Settings },
    ];
    const destinations = [
        {
            id: 1,
            name: 'Green wood forest',
            location: 'Mangaung',
            price: 999,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80',
            category: 'Forest'
        },
        {
            id: 2,
            name: 'Green forest Camp',
            location: 'Mangaung',
            price: 999,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80',
            category: 'Camping'
        },
        {
            id: 3,
            name: 'Desert Festival',
            location: 'Gujarat',
            price: 999,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80',
            category: 'Desert'
        }
    ];
    const calendarDays = [
        { day: 27, inactive: true }, { day: 28, inactive: true }, { day: 29, inactive: true }, { day: 30, inactive: true }, { day: 1 }, { day: 2 }, { day: 3 },
        { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 },
        { day: 11 }, { day: 12 }, { day: 13 }, { day: 14 }, { day: 15 }, { day: 16 }, { day: 17 },
        { day: 18 }, { day: 19 }, { day: 20, highlight: true }, { day: 21, highlight: true }, { day: 22, highlight: true }, { day: 23, highlight: true }, { day: 24 },
        { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 }
    ];

    const scheduleItems = [
        {
            id: 1,
            title: 'Crocked Forest',
            dateRange: '20 may - 23 may',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80',
            participants: 12
        },
        {
            id: 2,
            title: 'Fern Waterfall',
            dateRange: '25 may - 31 may',
            image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80',
            participants: 10
        },
        {
            id: 3,
            title: 'Night Camping',
            dateRange: '26 may - 29 may',
            image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80',
            participants: 15
        }
    ];
  return (
      <div className="app">
          <Sidebar sidebarItems={sidebarItems} activeTab={activeTab} setActiveTab={setActiveTab} />
          <MainContent/>
              <div className="content-grid">
                <div className="left-column">
                  <div className="main-content-container">
                      <FeaturedCards />
                      <BestDestination destinations={destinations} />
                  </div>
                </div>
                  <div className="right-column">
                      <CalendarWidget currentMonth={currentMonth} calendarDays={calendarDays} />
                      <ScheduleWidget scheduleItems={scheduleItems} />
                      <ExploreCard />
                  </div>
              </div>
          </div>
  )
}

export default App
