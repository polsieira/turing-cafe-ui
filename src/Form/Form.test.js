import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;
  const mockAddReservation = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Form addReservation={mockAddReservation} />)
  })

  it('should update state when an typing in an input', () => {

  })
});