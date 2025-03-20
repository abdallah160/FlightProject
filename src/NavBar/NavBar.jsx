import './NavBar.css';
import { Star, Bell } from "lucide-react";
const NavBar = () => {
    return(
        <div className="nav-container">
            <div calssName="nav-inner1">
                <img src="/assets/Fickleflight Logo.png" alt="Logo" />

            </div>

            <div className="nav-inner2">
                <button className='nav-button'>Explore</button>
                <button className='nav-button'>Search</button>
                <button className='nav-button'>Hotels</button>
                <button className='nav-button'>Offers</button>
                <Bell size={24} color="black" style={{ margin: "7px 20px 0px 0px"
                 }} />

                <img src='/assets/profile picture.png'/>

            </div>
        </div>



    )

}
export default NavBar;
