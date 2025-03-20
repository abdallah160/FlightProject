import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './NavBar/NavBar'
import ExploreBanner from './ExploreBanner/ExploreBanner'
import RecentSearch from './RecentSearches/RecentSearches'
import PrepareIcon from './PrepareIcon/PrepareIcon'
import PopularDestinations from './PopularDestinations/PopularDestinations'
import FullPopular from './PopularDestinations/FullPopular'
import Holidays from './Holidays/Holidays'
import Tours from './Tours/Tours'
import Weekly from './Weekly/Weekly'
import Footer from './Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <ExploreBanner/>
    
    <h2 style={{ marginLeft: "100px",
      marginTop: "60px"
     }}>RECENT SEARCHES</h2>
    <div class='recent-main'>
    <RecentSearch from='SIN' to='LAX' date='7 Sep 2021'/>
    <RecentSearch from='MY' to='DUB' date='9 Sep 2021'/>
    </div>
    <h2 style={{ marginLeft: "100px",
      marginTop: "60px",
      color: "rgb(202, 202, 202)",
      fontWeight: "lighter"
     }}>PREPARE FOR YOUR TRIP</h2>
     
     <PrepareIcon/>
     <FullPopular/>
     <Holidays/>
     <Tours />
     <Weekly/>
     <Footer/>
  </StrictMode>
)
