import axios from 'axios';


export const CalendarApi = axios.create({
  baseURL: `http://localhost:3001/api`,
  headers: {
    'x-token': localStorage.getItem('token') || '',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
