import './Holidays.css'
import Holiday from './Holiday'; 
const Holidays = () =>{
    return(
        <div>
            <div className="holidays-title">
                <h1> Recommended Holidays</h1>
                <h2> View all holidays</h2>
            </div>
            <div className="holiday-list">
            <Holiday image="/assets/image.png" place="Bali" code="4D3N" price="$899" />
            <Holiday image="/assets/SwitzerlandImage.png" place="Swiss" code="6D5N" price="$900" />
            <Holiday image="/assets/BoracayImage.png" place=" Boracay" code="5D4N" price="$699" />
            <Holiday image="/assets/PalawanImage.png" place=" Palawan" code="4D3N" price="$789" />
        </div>
        </div>
    )

}
export default Holidays