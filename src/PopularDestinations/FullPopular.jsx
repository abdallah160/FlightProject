import './PopularDestinations.css'
import PopularDestinations from "./PopularDestinations";

const FullPopular = () =>{
    return (
        <div>
            <div className='plan-section'>
                <h2>Plan your next trip</h2>
                <h2>View all destinations</h2>
            </div>
            <h1 style={{
                marginLeft: "80px",
                marginBottom:"20px"
            }}>Most Popular Destinations</h1>
        <div className="image-grid">
          <PopularDestinations image="/assets/ParisImage.png" place="Paris" price="$699" />
          <PopularDestinations image="/assets/GreeceImage.png" place="Greece" price="$1079" />
          <PopularDestinations image="/assets/NorwayImage.png" place="Norway" price="$895" />
          <PopularDestinations image="/assets/TuscanyImage.png" place="Tuscany" price="$1245" />
        </div>
        </div>
      );
}
export default FullPopular;