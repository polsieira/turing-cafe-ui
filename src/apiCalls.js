
export const getReservations = (url) => {
  return fetch(url)
    .then(res => res.json())
}

export const postReservation = (url, newReservation) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newReservation),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(url, options)
    .then(response => response.json())
}

export const cancelReservation = (url, id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`${url}/${id}`, options)
    .then(() => fetch(url))
    .then(response => response.json())
}
