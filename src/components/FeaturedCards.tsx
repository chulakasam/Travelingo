import { MapPin, Star } from 'lucide-react';
export default function FeaturedCards() {
    const featured = [
        {
            title: 'Mount climbing',
            location: 'Green Mountain',
            rating: 4.8,
            className: 'mountain-card',
        },
        {
            title: 'Night camping',
            location: 'Lightning lake',
            rating: 4.8,
            className: 'camping-card',
        },
        {
            title: 'Mount climbing',
            location: 'Green Mountain',
            rating: 4.8,
            className: 'climbing-card',
        },
    ];
    return (
        <div className="featured-cards">
            {featured.map((card, idx) => (
                <div key={idx} className={`card ${card.className}`}>
                    <div className="card-content">
                        <h3>{card.title}</h3>
                        <div className="card-meta">
                            <span><MapPin size={16} /> {card.location}</span>
                            <span><Star size={16} /> {card.rating}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
