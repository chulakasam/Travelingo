import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

export default function ScheduleWidget({ scheduleItems }) {
    return (
        <div className="schedule-widget">
            <div className="schedule-header">
                <h3>My Schedule</h3>
                <div className="schedule-nav">
                    <button><ChevronLeft size={16} /></button>
                    <button><ChevronRight size={16} /></button>
                </div>
            </div>
            <div className="schedule-list">
                {scheduleItems.map((item) => (
                    <div key={item.id} className="schedule-item">
                        <img src={item.image} alt={item.title} />
                        <div className="schedule-info">
                            <h4>{item.title}</h4>
                            <p>{item.dateRange}</p>
                        </div>
                        <div className="schedule-participants">
                            <Users size={14} />
                            <span>{item.participants}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
