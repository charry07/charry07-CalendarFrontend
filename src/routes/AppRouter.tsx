import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CalendarApi } from '../api';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { CalendarRoutes } from '../CalendarApp/routes/CalendarRoutes';
import { onLogin, onLogout } from '../store/auth/authSlice';

export const AppRouter = () => {
  const { status, user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    CalendarApi.get(`/auth/renewToken`).then(({ data }) => {
      if (!data.token) return onLogout(), localStorage.clear();
      localStorage.setItem('token', data.token);
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    });
  }, []);

  return (
    <Routes>
      {status === 'authenticated' ? <Route path='/*' element={<CalendarRoutes />} /> : <Route path='auth/*' element={<AuthRoutes />} />}

      <Route path='*' element={<Navigate to='auth/login' />} />
    </Routes>
  );
};
