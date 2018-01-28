import axios from 'axios';

export const FETCH_CAKES = 'fetch_cakes';

const ROOT_URL = 'http://localhost:3000'

export function fetchCakes() {
  const request = axios.get(`${ROOT_URL}/cakes`);

  return {
    type: FETCH_CAKES,
    payload: request
  };
}