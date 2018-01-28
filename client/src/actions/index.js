import axios from 'axios';

export const FETCH_CAKES = 'fetch_cakes';
export const CREATE_CAKE = 'create_cake';

const ROOT_URL = 'http://localhost:3000'

export function fetchCakes() {
  const request = axios.get(`${ROOT_URL}/cakes`);

  return {
    type: FETCH_CAKES,
    payload: request
  };
}


export function createCake(values, callback) {
    const request = axios.post(`${ROOT_URL}/cakes`, values).
    then(() => {callback()});

    return {
      type: CREATE_CAKE,
      payload: request
    };
  }