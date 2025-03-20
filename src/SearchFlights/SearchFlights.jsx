import './SearchFlights.css';
const SearchFlights = () =>{
    return(
        <div className='search-flights'>
            <div className='search-flights-title'>
                <h1>Search Flights</h1>
                
                <div>
                <input type="radio" id="option1" name="options" value="option1"/>
                <label for="option1">Return</label>

                <input type="radio" id="option2" name="options" value="option2"/>
                <label for="option2">One-way</label>
                </div>

                
            </div>
            <div className='search-flights-boxes'>
                <div>

                
                <label>Departure:</label>
                <input type='text' className='input-box'/>

                <label>Arrival:</label>
                <input type='text' className='input-box'/>

                <label>Date:</label>
                <input type='Date' className='input-box'/>
                </div>
                <div>

                
                <button>SEARCH FLIGHTS</button>
                </div>
            </div>
        </div>


    )
}
export default SearchFlights