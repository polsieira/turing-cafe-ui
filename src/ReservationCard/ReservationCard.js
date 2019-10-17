import React from 'react';
import '../ReservationCard/ReservationCard';

const ReservationCard = ({ name, date, time, numberOfGuests }) => {

  return (
    <>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{`Number of guests: ${numberOfGuests}`}</p>
      <button type='button'>Cancel</button>
    </>
  )

}

export default ReservationCard;
