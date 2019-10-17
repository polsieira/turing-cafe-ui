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

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update call handleChange when input is changed ** test simulates event **', () => {
    //Setup
    wrapper.instance().handleChange = jest.fn();
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Pol'
      }
    }

    //Execution
    wrapper.find('input').at(0).simulate('change', mockEvent);

    //Expectation
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent)
  })

  it('should update state when handleChange is called ** test changes state **', () => {
    //Setup
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Pol'
      }
    }

    const newStateName = 'Pol';

    //Execution
    wrapper.instance().handleChange(mockEvent);

    //Expectation
    expect(wrapper.state('name')).toEqual(newStateName);
  })

  it('should update call addReservation when button is clicked ** test simulates event **', () => {
    //Setup
    wrapper.instance().handleClick = jest.fn();
    const mockEvent = {
      preventDefault: jest.fn()
    }

    //Execution
    wrapper.find('button').simulate('click', mockEvent);

    //Expectation
    expect(wrapper.instance().handleClick).toHaveBeenCalledWith(mockEvent)
  })

  it('should call addReservation when handleClick is called ** test changes state **', () => {
    //Setup
    wrapper.instance().clearInputs = jest.fn();
    const mockEvent = {
      preventDefault: jest.fn()
    }
    const newState = {
      name: 'Pol',
      date: '10/17',
      time: '7:00',
      number: '5'
    };
    wrapper.setState(newState)

    //Execution 
    wrapper.instance().handleClick(mockEvent)

    //Expectation
    expect(mockAddReservation).toHaveBeenCalledWith(newState);
    expect(wrapper.instance().clearInputs).toHaveBeenCalled();
  });

  it('should clear state when clearInputs is called ** test changes state', () => {
    //Setup
    const state = {
      name: 'Pol',
      date: '10/17',
      time: '7:00',
      number: '5'
    }
    wrapper.setState(state);
    const clearedState = {
      name: '',
      date: '',
      time: '',
      number: ''
    };

    //Execution 
    wrapper.instance().clearInputs();

    //Expectation
    expect(wrapper.state()).toEqual(clearedState)

  })
});