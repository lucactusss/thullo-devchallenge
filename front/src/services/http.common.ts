import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4003',
  headers: {
    'Content-type': 'application/json',
  },
});
