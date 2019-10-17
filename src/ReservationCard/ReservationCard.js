import React from 'react';
import '../ReservationCard/ReservationCard';

const ReservationCard = ({ id, name, date, time, numberOfGuests, deleteReservation }) => {

  return (
    <>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{`Number of guests: ${numberOfGuests}`}</p>
      <button type='button' id={id} onClick={(event) => { deleteReservation(event.target.id) }}>Cancel</button>
    </>
  )

}

export default ReservationCard;
