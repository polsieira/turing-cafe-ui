import React, { Component } from 'react';
import './App.scss';
import Form from '../Form/Form';
import { getReservations, postReservation, cancelReservation } from '../apiCalls';

import ReservationContainer from '../ReservationContainer/ReservationContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      sort: 'up'
    }
  }

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/reservations';
    getReservations(url)
      .then(res => this.setState({ reservations: res }))
      .catch(error => console.error(error))
  }

  addReservation = ({ name, date, time, number }) => {
    const url = 'http://localhost:3001/api/v1/reservations';
    const newReservation = {
      name,
      date,
      time,
      number,
      id: Date.now()
    }
    postReservation(url, newReservation)
      .then(reservation => this.setState({
        reservations: [reservation, ...this.state.reservations]
      }))
      .catch(error => console.error(error))
  }

  deleteReservation = (id) => {
    const url = 'http://localhost:3001/api/v1/reservations';
    cancelReservation(url, id)
      .then(reservations => this.setState({
        reservations
      }))
      .catch(error => console.error(error));
  }

  sortReservations = () => {
    let direction = '';
    const sortedReservations = this.state.reservations.sort((reservationA, reservationB) => {
      if (this.state.sort === 'up') {
        direction = 'down';
        return reservationB.date > reservationA.date ? 1 : -1
      } else {
        direction = 'up';
        return reservationB.date < reservationA.date ? 1 : -1
      }
    })
    this.setState({
      reservation: sortedReservations,
      sort: direction
    })
  }

  render() {

    const text = this.state.sort === 'up' ? 'Newest' : 'Oldest'
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <button className='sort-btn' type='button' onClick={this.sortReservations}>{`Sort by ${text}`}</button>
        <div className='resy-container'>
          <ReservationContainer deleteReservation={this.deleteReservation} reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
