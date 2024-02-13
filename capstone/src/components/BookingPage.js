import React from 'react'
import BookingForm from './BookingForm'

const BookingPage = ({availableTimes, dispatch}) => {
    return (
        <div>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    )
}

export default BookingPage;