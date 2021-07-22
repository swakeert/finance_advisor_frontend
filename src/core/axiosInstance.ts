import axios from 'axios';
// import store from './store';

const axiosInstance = axios.create({
  baseURL: '/api/v1/',
});

export const setAuthorizationToken = (token: string): void => {
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};

export default axiosInstance;
