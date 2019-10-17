import React from 'react';
import { shallow } from 'enzyme';
import ReservationCard from './ReservationCard';

describe('ReservationCard', () => {
  let wrapper;
  const mockDeleteReservation = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<ReservationCard
      id={1}
      name={'Pol'}
      key={1}
      date={'10/17'}
      time={'7:00'}
      numberOfGuests={'10'}
      deleteReservation={mockDeleteReservation} />)
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});