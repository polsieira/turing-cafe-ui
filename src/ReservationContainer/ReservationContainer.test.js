import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ReservationContainer from './ReservationContainer';

describe('ReservationContainer', () => {

  let wrapper;
  const mockDeleteReservation = jest.fn();
  const reservations = []

  beforeEach(() => {
    wrapper = shallow(<ReservationContainer deleteReservation={mockDeleteReservation} reservations={reservations} />)
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});