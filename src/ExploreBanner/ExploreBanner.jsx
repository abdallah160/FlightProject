import { StrictMode } from 'react';
import './ExploreBanner.css'
import SearchFlights from '../SearchFlights/SearchFlights';

const ExploreBanner = () =>{
    return(
        <div>
            <div className='explore-banner-container'>
                <div className='exlpore-banner-background'> </div>
                <img src='/assets/Banner  Background.png' className='explore-overlay'/>
                <div className="explore-text-overlay">
                    <h1>Let’s explore & travel the world</h1>
                    <p>Find the best destinations and the most popular stays!</p>
                    
                </div>
                
                
                
            </div>
            <div className='search'>
            <StrictMode>
                        <SearchFlights/>
                    </StrictMode>
                </div>
            
        </div>
    )
}
export default ExploreBanner;