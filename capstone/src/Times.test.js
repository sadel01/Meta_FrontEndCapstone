import { initializeTimes, updateTimes } from './components/Main';

describe('initializeTimes function', () => {
  test('should return the correct initial times', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });
});

describe('updateTimes function', () => {
  test('should return the same state', () => {
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const selectedDate = new Date();
    const newState = updateTimes(state, selectedDate);
    expect(newState).toEqual(state);
  });
});