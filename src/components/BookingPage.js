import React, { useState } from 'react';
import '../styles/BookingPage.css';
import Restaurant from '../assets/restaurant.jpg';
import RestaurantFood from '../assets/restaurantfood.jpg';
import RestaurantChef from '../assets/restaurant chef.jpg';
import { useNavigate } from 'react-router-dom';

function BookingPage() {
  const [selectedRadio, setSelectedOption] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [dinnersDropdown, setDinnersDropdown] = useState('');
  const [occasionsDropdown, setOccasionsDropdown] = useState('');
  const [timeDropdown, setTimeDropdown] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDinnersDropdownChange = (event) => {
    setDinnersDropdown(event.target.value);
  };

  const handleOccasionsDropdownChange = (event) => {
    setOccasionsDropdown(event.target.value);
  };

  const handleTimeDropdownChange = (event) => {
    setTimeDropdown(event.target.value);
  };

  const dinersList = [
    "1 Diner", "2 Diners", "3 Diners", "4 Diners", "5 Diners"
  ];

  const occasionsList = [
  "Birthday", "Anniversary", "Engagement"
  ];

  const timeList = [
    "5:00 pm", "6:00 pm","7:00 pm",
    "8:00 pm","9:00 pm","10:00 pm",
  ];

      const userpage = useNavigate ();
      const UserDetailsPage = (event) => {
        event.preventDefault();

      const userDetails = {
          selectedRadio,
          selectedDate,
          dinnersDropdown,
          occasionsDropdown,
          timeDropdown
        };
      userpage('/UserDetails', { state: userDetails })
    }

    const buttonDisabled = () => {
      return (
        selectedRadio === '' ||
        selectedDate === '' ||
        dinnersDropdown === '' ||
        occasionsDropdown === '' ||
        timeDropdown === ''
      );

    };

  return (
    <div>
    <div className="Booking-Section">
        <div className="Left-Column">
        <h2 className='Reseravation-heading'>Reseravation</h2>
        <label>
          <input
            type="radio"
            value="Indoor Seating"
            checked={selectedRadio === 'Indoor Seating'}
            onChange={handleRadioChange}
          />
          Indoor Seating
        </label>
        </div>
        <div className="Right-Column">
        <label>
          <input
            type="radio"
            value="Outdoor Seating"
            checked={selectedRadio === 'Outdoor Seating'}
            onChange={handleRadioChange}
          />
          Outdoor Seating
        </label>
      </div>
      
      <div className='Left-Column'>
      <label htmlFor="Date-Label" className='label'>Date</label>
          <div className='Date-Input-Container'>
            <input type="date" value={selectedDate} onChange={handleDateChange} className='Input'/>
          </div>
      </div>
      
      <div className="Right-Column">
      <label htmlFor="dinersDropdown" className='label'>Number of Diners</label>
      <select id="dinersDropdown" value={dinnersDropdown} onChange={handleDinnersDropdownChange} className="Input">
      <option value="" disabled hidden>
          Number of Diners
        </option>
        {dinersList.map((dinersList, i) => (
          <option key={i} value={dinersList}>
            {dinersList}
            </option>
        ))}
      </select>
    </div>
      
      <div className='Left-Column'>
      <label htmlFor="occasionsDropdown" className='label'>Occasions</label>
        <select id="occasionsDropdown" value={occasionsDropdown} onChange={handleOccasionsDropdownChange} className="Input">
          <option value="" disabled hidden>
          Select Occasions
          </option>
          { occasionsList.map((occasionsList, i) => (
            <option Key={i} value={occasionsList} >{occasionsList}</option>
          ))}
        </select>
      </div>
      
      <div className='Right-Column'>
      <label htmlFor="TimeId" className='label'>Time</label>
        <select id="TimeId" value={timeDropdown} onChange={handleTimeDropdownChange} class="Input">
          <option value="" disabled hidden className='Individual-Option'>
            Select Time
          </option>
          {
            timeList.map((timeList, i) =>(
                <option key={i} value={timeList}>
                    {timeList}
                </option>
            ))
          }
        </select>
      </div>
          <div className='emptydiv'></div>
    </div>
    <div className='Three-Image-Section'>
      <img src={Restaurant} alt="Restaurant" className='Three-Image'/>
      <img src={RestaurantChef} alt="Restaurant Chef" className='Three-Image'/>
      <img src={RestaurantFood} alt="Restaurant Food" className='Three-Image'/>
    </div>

    <div className='Reserve-Button'>
      <div className='btn1'>
      <button onClick={UserDetailsPage} disabled={buttonDisabled()}className='btn'>Reserve a Table</button>
      </div>
      <h6 className='text'>*Please select all options to continue</h6>
    </div>
    </div>



  );
}

export default BookingPage;