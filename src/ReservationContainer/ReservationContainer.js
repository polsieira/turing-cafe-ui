import React from 'react';
import '../ReservationContainer/ReservationContainer.scss';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationContainer = ({ reservations }) => {

  const reservationCards = reservations.map(reservation => {
    return <ReservationCard
      name={reservation.name}
      key={reservation.id}
      date={reservation.date}
      time={reservation.time}
      numberOfGuests={reservation.number} />
  })

  return (
    <>
      {reservationCards}
    </>
  )
}

export default ReservationContainer;