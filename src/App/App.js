import React, { Component } from 'react';
import './App.scss';
import Form from '../Form/Form';
import { getReservations, postReservation, cancelReservation } from '../apiCalls';

import ReservationContainer from '../ReservationContainer/ReservationContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <ReservationContainer deleteReservation={this.deleteReservation} reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
