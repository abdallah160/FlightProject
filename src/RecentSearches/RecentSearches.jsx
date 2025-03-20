import { Plane } from "lucide-react";
import './RecentSearches.css'
const RecentSearch = ({from, to, date}) =>{
    return(
        <div>
            
            <div className="searches">
                <div className="flight-direction">
                    <h1>{from}</h1>
                     <Plane size={35} />
                     <h1>{to}</h1>
                </div>
                <br/>
                <h2 class='depart-on'>Depart-on: {date}</h2>
            </div>
        </div>
    )
}
export default RecentSearch;