import { initializeTimes, updateTimes } from './components/Main';
import { fetchAPI } from './API';

jest.mock('./API', () => ({
  fetchAPI: jest.fn(),
}));

describe('Main component functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize times', async () => {
    const dispatch = jest.fn();
    const mockTimes = ['10:00', '11:00', '12:00'];
    fetchAPI.mockResolvedValueOnce(mockTimes);

    await initializeTimes(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_TIMES',
      payload: mockTimes,
    });
  });

  it('should update times', async () => {
    const dispatch = jest.fn();
    const mockTimes = ['10:00', '11:00', '12:00'];
    const selectedDate = '2024-02-16';
    fetchAPI.mockResolvedValueOnce(mockTimes);

    await updateTimes(selectedDate, dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_TIMES',
      payload: mockTimes,
    });
  });
});