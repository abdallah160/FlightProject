import './PopularDestinations.css';
const PopularDestinations = ({ image, place, price }) =>{
      return (
        <div className="image-card">
          <img src={image} alt={place} />
          <div className="text-container">
            <span className="place">{place}</span>
            <div className="price-info">
              <span className="from">From</span>
              <span className="price">{price}</span>
            </div>
          </div>
        </div>
      );

}
export default PopularDestinations;