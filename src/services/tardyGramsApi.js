
export const createTardyGram = tardyGram => {
  return fetch('https://tardy-graham-cracker.herokuapp.com/api/v1/tardyGrams', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tardyGram)
  })
    .then(res => res.json());
};
