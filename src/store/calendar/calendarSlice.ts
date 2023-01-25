import { createSlice } from '@reduxjs/toolkit';

const event1 = {
  id: new Date().getTime(),
  title: 'Cumpleaños del jefe',
  start: new Date(),
  end: new Date(2023, 0, 26, 14, 0, 0),
  bgcolor: '#fafafa',
  body: 'Comprar el pastel Comprar el pastel',
  user: {
    _id: '123',
    name: 'Jorge',
  },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [event1],
    activeEvent: null,
  },
  reducers: {
    addNewEvent: (state, { payload }) => {
      state.events.push(payload);
    },
    updateEvent: (state, { payload }) => {
      state.events = state.events.map((e) => (e.id === payload.id ? payload : e));
    },
    deleteEvent: (state, { payload }) => {
      state.events = state.events.filter((e) => e.id !== payload.id);
    },
    setActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
  },

});

export const { addNewEvent, setActiveEvent, updateEvent, deleteEvent } = calendarSlice.actions;
