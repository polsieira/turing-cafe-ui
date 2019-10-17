import React from 'react';
import '../ReservationContainer/ReservationContainer.scss';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationContainer = ({ reservations, deleteReservation }) => {

  const reservationCards = reservations.map(reservation => {
    return <ReservationCard
      id={reservation.id}
      name={reservation.name}
      key={reservation.id}
      date={reservation.date}
      time={reservation.time}
      numberOfGuests={reservation.number}
      deleteReservation={deleteReservation} />
  })

  return (
    <>
      {reservationCards}
    </>
  )
}

export default ReservationContainer;