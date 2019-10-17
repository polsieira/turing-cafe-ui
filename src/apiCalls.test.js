import { getReservations } from './apiCalls';

describe('getReservations', () => {
  let mockResponse = [
    {
      id: 1,
      name: "Pol",
      date: "10/17",
      time: "7:00",
      number: "5a"
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });


  it('should fetch', () => {
    const url = 'http://localhost:3001/api/v1/reservations';
    getReservations(url)

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations');
  })
});