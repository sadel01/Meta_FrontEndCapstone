import React from 'react'
import { useState } from 'react';
import { updateTimes } from './Main';

const BookingForm = ({availableTimes, dispatch, onSubmit}) => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOcccasion] = useState('');
    const [occasions, setOccasions] = useState(["Birthday", "Anniversary"]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');

        const formData = {
            date,
            time,
            guests,
            occasion
        }

        onSubmit(formData);

        setDate("");
        setTime("");
        setGuests("");
        setOcccasion("");
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
        dispatch({ type: 'DATE_SELECTED', payload: event.target.value });
        updateTimes(event.target.value, dispatch);
        console.log(availableTimes)
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value);
      };

    const today = new Date().toISOString().split('T')[0];

    return (
        <form className='form' onSubmit={handleSubmit}>
          <fieldset className='fieldSet'>
            <div className='field'>
                <label for="reservationDate">Reservation Date: </label>
                <input id='reservationDate'
                    min={today}
                    type='date' 
                    value={date} 
                    onChange={handleDateChange} 
                    required />
            </div>
            <div className='field'>
                <label for="reservationTime">Reservation Time: </label>
                <select id='reservationTime' name="time" value={time} onChange={handleTimeChange} required>
                    {availableTimes.length > 0 ? (
                    availableTimes.map((availableTime, index) => (
                        <option key={index} value={availableTime}>
                            {availableTime}
                        </option>
                    ))
                    ) : (
                        <option>No available times</option>
                    )}
                </select>
            </div>
            <div className='field'>
                <label for="guests">Guests: </label>
                <input id='guests'
                    type='number' 
                    min='1' 
                    max='10' 
                    placeholder='Number of guests' 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required />
            </div>

            <div className='field'>
                <label for="occasion">Occasion: </label>
                <select id='occasion'
                    name='occasion'
                    value={occasion}
                    required
                    onChange={(e) => setOcccasion(e.target.value)}>
                    {occasions.map((occasion, index) => (
                      <option key={index}>{occasion}</option>
                    ))
                    }
                </select>
            </div>
            <button disabled={!date || !guests || availableTimes.length === 0} type='submit' aria-label='Submit button'>Submit</button>
          </fieldset>
        </form>
      );
}

export default BookingForm;