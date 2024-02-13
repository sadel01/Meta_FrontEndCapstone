import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('verifica que se aplica la validación HTML5', () => {
  const onSubmit = jest.fn();
  const dispatch = jest.fn();
  const { getByLabelText } = render(<BookingForm availableTimes={[]} dispatch={dispatch} onSubmit={onSubmit} />);

  const dateInput = getByLabelText('Reservation Date:');
  expect(dateInput).toHaveAttribute('required');

  const timeInput = getByLabelText('Reservation Time:');
  expect(timeInput).toHaveAttribute('required');

  const guestsInput = getByLabelText('Guests:');
  expect(guestsInput).toHaveAttribute('required');

  const occasionInput = getByLabelText('Occasion:');
  expect(occasionInput).toHaveAttribute('required');
});

test('verifica las funciones de validación de JavaScript', () => {
  const onSubmit = jest.fn();
  const dispatch = jest.fn();
  const { getByLabelText, getByText } = render(<BookingForm availableTimes={[]} dispatch={dispatch} onSubmit={onSubmit} />);

  fireEvent.change(getByLabelText('Reservation Date:'), { target: { value: '2022-12-31' } });
  fireEvent.change(getByLabelText('Reservation Time:'), { target: { value: '13:00' } });
  fireEvent.change(getByLabelText('Guests:'), { target: { value: '5' } });
  fireEvent.change(getByLabelText('Occasion:'), { target: { value: 'Birthday' } });
  fireEvent.click(getByText('Submit'));

  fireEvent.change(getByLabelText('Reservation Date:'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Reservation Time:'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Guests:'), { target: { value: '' } });
  fireEvent.change(getByLabelText('Occasion:'), { target: { value: '' } });
  fireEvent.click(getByText('Submit'));
});