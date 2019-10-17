import React, { Component } from 'react';
import './App.scss';
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
      .catch(error => console.error(error))
  }

  addReservation = ({ name, date, time, number }) => {
    const newReservation = {
      name,
      date,
      time,
      number,
      id: Date.now()
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(newReservation),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(response => response.json())
      .then(reservation => this.setState({
        reservations: [reservation, ...this.state.reservations]
      }))
      .catch(error => console.error(error))
  }

  deleteReservation = (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
      .then(() => fetch('http://localhost:3001/api/v1/reservations'))
      .then(response => response.json())
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
