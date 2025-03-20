import './PrepareIcon.css';
import { Bed, Ticket, Utensils, Bus, Car, Clapperboard } from 'lucide-react';

const PrepareIcon = () => {
  return (
    <div className='icon-full-container'>
      <div className='icon-text-container'>
        <div className='icon-container' style={{
            backgroundColor: "rgb(218, 123, 175)"
        }}>
          <Bed color='white' size={35} />
        </div>
        <p>Hotel</p>
      </div>
      <div className='icon-text-container'>
        <div className='icon-container' style={{
            backgroundColor: "rgb(206, 113, 76)"
        }}>
          <Ticket color='white' size={35} />
        </div>
        <p>Attractions</p>
      </div>
      <div className='icon-text-container'>
        <div className='icon-container' style={{
            backgroundColor: "rgb(132, 216, 136)"
        }}>
          <Utensils color='white' size={35} />
        </div>
        <p> Eats</p>
      </div>
      <div className='icon-text-container'>
        <div className='icon-container' style={{
            backgroundColor: "rgb(255, 223, 82)"
        }}>
          <Bus color='white' size={35} />
        </div>
        <p> Commute</p>
      </div>
      <div className='icon-text-container'>
        <div className='icon-container' style={{
            backgroundColor: "rgb(121, 195, 255)"
        }}>
          <Car color='white' size={35} />
        </div>
        <p>Taxi</p>
      </div>
      <div className='icon-text-container'>
        <div className='icon-container' style={{
            backgroundColor: "rgb(120, 192, 62)"
        }}>
          <Clapperboard color='white' size={35} />
        </div>
        <p>Movies</p>
      </div>
    </div>
  );
};

export default PrepareIcon;
