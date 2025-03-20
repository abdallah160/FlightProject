import './Holidays.css'
const Holiday = ({ image, place, code, price }) => {
    return (
        <div className="holiday-card">
            <img src={image} alt={place} className="holiday-image" />
            <div className="holiday-info">
                <div className="holiday-details">
                    <span className="holiday-place">{place}</span>
                    <span className="holiday-code">{code}</span>
                </div>
                <span className="holiday-price">{price}</span>
            </div>
        </div>
    );
};

export default Holiday