import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';

import ReservationContainer from '../ReservationContainer/ReservationContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(res => this.setState({ reservations: res }))
  }

  addReservation = ({ name, date, time, number }) => {
    const newReservation = {
      name,
      date,
      time,
      number,
      id: Date.now()
    }
    this.setState({ reservations: [newReservation, ...this.state.reservations] })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
