import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutMe, CalendarPage, Profile } from '../pages';

export const CalendarRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CalendarPage />} />
      <Route path='/AboutMe' element={<AboutMe />} />
      <Route path='/Profile' element={<Profile />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
