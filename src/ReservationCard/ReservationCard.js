import React from 'react';
import '../ReservationCard/ReservationCard.scss';

const ReservationCard = ({ id, name, date, time, numberOfGuests, deleteReservation }) => {

  return (
    <div className={"card"}>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{`${time} pm`}</p>
      <p>{`Number of guests: ${numberOfGuests}`}</p>
      <button className="cancel-btn" type='button' id={id} onClick={(event) => { deleteReservation(event.target.id) }}>Cancel</button>
    </div>
  )

}

export default ReservationCard;
