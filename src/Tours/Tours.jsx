import './Tours.css';
import Tour from './Tour'; 

const Tours = () => {
    return (
        <div>
            <div className="holidays-title">
                <h1>Popular Tours</h1>
                <h2>View all tours</h2>
            </div>
            <div className="tour-list">
                <Tour image="/assets/Matterhorn Suites Image.png" description="Entire bungalow" place=" Matterhorn Suites" price="$575/night" rating="4.9" reviews="60 reviews" />
                <Tour image="/assets/Discovery Shores Image.png" description="2-Story beachfront suite" place="Discovery Shores" price="$360/night" rating="4.8" reviews="116 reviews" />
                <Tour image="/assets/Arctic Hut Image.png" description=" Single deluxe hut" place="Arctic Hut " price="$420/night" rating="4.7" reviews="78 reviews" />
                <Tour image="/assets/Lake Louise Image.png" description="Deluxe King Room" place="Lake Louise Inn" price="$244/night" rating="4.6" reviews="63 reviews" />
            </div>
        </div>
    );
};

export default Tours;
