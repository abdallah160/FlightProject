import './Tours.css';
import {Star} from 'lucide-react';

const Tour = ({ image, description, place, price, rating, reviews }) => {
    return (
        <div className="tour-card">
            <img src={image} alt={place} className="tour-image" />
            <p className="tour-description">{description}</p>
            <h3 className="tour-place">{place}</h3>
            <span className="tour-price">{price}</span>
            <div className="tour-rating">
                <Star size={18}/>
                <span className="tour-score">{rating}</span>
                <span className="tour-reviews">({reviews})</span>
            </div>
            <button className="tour-button">More Details</button>
        </div>
    );
};

export default Tour;
