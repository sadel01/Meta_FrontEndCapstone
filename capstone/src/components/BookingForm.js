import React from 'react'
import { useState } from 'react';

const BookingForm = ({availableTimes, dispatch}) => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOcccasion] = useState('');
    const [occasions, setOccasions] = useState(["Birthday", "Anniversary"]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        setDate("");
        setTime("");
        setGuests("");
        setOcccasion("");
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
        dispatch(event.target.value);
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
          <fieldset>
            <div className='field'>
                <label>Reservation Date: </label>
                <input 
                    type='date' 
                    value={date} 
                    onChange={handleDateChange} 
                    required />
            </div>
            <div className='field'>
                <label>Reservation Time: </label>
                <select 
                    id='res-time' 
                    name='res-time' 
                    value={time}
                    onChange={(e) => setTime(e.target.value)} 
                    required>
                    {availableTimes.map((time, index) => (
                      <option key={index}>{time}</option>
                    ))}
                </select>
            </div>
            <div className='guests'>
                <input 
                    type='number' 
                    min='1' 
                    max='10' 
                    placeholder='Number of guests' 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required />
            </div>

            <div className='field'>
                <label>Occasion</label>
                <select 
                    id='occasion' 
                    name='occasion'
                    value={occasion}
                    onChange={(e) => setOcccasion(e.target.value)}>
                    {occasions.map((occasion, index) => (
                      <option key={index}>{occasion}</option>
                    ))}
                </select>
            </div>
            <button disabled={!date && !guests} type='submit'>Submit</button>
          </fieldset>
        </form>
      );
}

export default BookingForm;