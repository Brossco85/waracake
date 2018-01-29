import axios from 'axios';

export const FETCH_CAKES = 'fetch_cakes';
export const FETCH_CAKE = 'fetch_cake';
export const CREATE_CAKE = 'create_cake';

// const ROOT_URL = 'http://localhost:3001';

export function fetchCakes() {
  const request = axios.get(`/cakes`);

  return {
    type: FETCH_CAKES,
    payload: request
  };
}


export function createCake(values, callback) {
    const request = axios.post(`/cakes`, values)
    .then(() => {callback()});

    return {
      type: CREATE_CAKE,
      payload: request
    };
  }

export function fetchCake(id) {
  const request = axios.get(`/cakes/${id}`);

  return {
    type: FETCH_CAKE,
    payload: request
  };
}