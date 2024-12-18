import React from 'react'
import BookingForm from './BookingForm'


const BookingPage = ({availableTimes, updateTimes, onSubmit, dispatch}) => {
    return (
        <div>
            <BookingForm onSubmit={onSubmit} availableTimes={availableTimes} updateTimes={updateTimes} dispatch={dispatch}/>
        </div>
    )
}

export default BookingPage;