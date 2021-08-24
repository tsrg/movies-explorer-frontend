import { moviesApiURL } from '../constants/constants';

const handleOriginalResponse = (res) => {
	if (!res.ok) {
		return Promise.reject(`Error: ${res.status}`);
	}
	return res.json();
};

export const getMovies = () => {
  return fetch(moviesApiURL, {
    method: 'GET'
  })
  .then(handleOriginalResponse)
};
