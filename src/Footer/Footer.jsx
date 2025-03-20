import './Footer.css'
const Footer =() =>{
    return(
        <div className='footer'>
            <div className='first-section'>
                <img src='/assets/Logo.png'/>
                <p>
                Fickle Flight is your one-stop travel portal. We offer hassle free flight and 
                hotel bookings. <br/> We also have all your flight needs in you online shop.
                </p>
            </div>
            <div className='second-section'>
                <div className='first-section-part'>
                    <h2>Company</h2>
                    <p>About Us</p>
                    <p>News</p>
                    <p>Careers</p>
                    <p>How we work</p>
                </div>
                <div className='first-section-part'>
                    <h2> Support</h2>
                    <p> Account</p>
                    <p>Support Center</p>
                    <p> FAQ</p>
                    <p>Accessibility</p>
                </div>
                <div className='first-section-part'>
                    <h2>More</h2>
                    <p>Covid Advisory</p>
                    <p> Airline Fees</p>
                    <p>Tips</p>
                    <p>Quarantine Rules</p>
                </div>

            </div>

        </div>
    )
    

}
export default Footer