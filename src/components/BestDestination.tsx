import { MapPin, Star, Filter } from 'lucide-react';
export default function BestDestination({ destinations }) {
    return (
        <div className="best-destination">
            <div className="section-header">
                <div>
                    <h2>Best Destination ✍️</h2>
                    <p>100 Destination found</p>
                </div>
                <button className="filter-btn">
                    <Filter size={16} />
                    Filters
                </button>
            </div>
            <div className="destination-list">
                {destinations.map((destination) => (
                    <div key={destination.id} className="destination-item">
                        <img src={destination.image} alt={destination.name} />
                        <div className="destination-info">
                            <h4>{destination.name}</h4>
                            <p><MapPin size={14} /> {destination.location}</p>
                            <div className="destination-meta">
              <span className="rating">
                <Star size={14} fill="currentColor" />
                  {destination.rating}
              </span>
                                <span className="price">${destination.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}