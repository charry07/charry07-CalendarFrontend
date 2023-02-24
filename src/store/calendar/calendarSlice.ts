import { createSlice } from '@reduxjs/toolkit';
import { EventSchema } from '../../schemas/EventSchema';

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [] as EventSchema[],
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
      state.events = state.events.filter((e) => e.id !== payload);
    },
    setActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    setEvents: (state, { payload }) => {
      state.events = payload;
    }
  },
});

export const { addNewEvent, setActiveEvent, updateEvent, deleteEvent, setEvents } = calendarSlice.actions;
