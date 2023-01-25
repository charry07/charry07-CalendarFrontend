import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { calendarSlice } from './calendar/calendarSlice';
import { searchBarSlice, SidebarSlice } from './componentsSlices.ts';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    searchBar: searchBarSlice.reducer,
    sidebarOpen: SidebarSlice.reducer,
    calendar: calendarSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
