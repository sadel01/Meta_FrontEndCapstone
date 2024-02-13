import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
    // Proporciona un array para availableTimes
    render(<BookingForm availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]} />);
    const headingElement = screen.getByText("Reservation Date:");
    expect(headingElement).toBeInTheDocument();
})