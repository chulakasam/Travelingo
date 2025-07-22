import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function CalendarWidget({ currentMonth, calendarDays, onPrev, onNext }) {
    return (
        <div className="calendar-widget">
            <div className="calendar-header">
                <h3>{currentMonth}</h3>
                <div className="calendar-nav">
                    <button onClick={onPrev}><ChevronLeft size={16} /></button>
                    <button onClick={onNext}><ChevronRight size={16} /></button>
                </div>
            </div>
            <div className="calendar-grid">
                <div className="calendar-weekdays">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="weekday">{day}</div>
                    ))}
                </div>
                <div className="calendar-days">
                    {calendarDays.map((date, index) => (
                        <div
                            key={index}
                            className={`calendar-day ${date.inactive ? 'inactive' : ''} ${date.highlight ? 'highlight' : ''}`}
                        >
                            {date.day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}