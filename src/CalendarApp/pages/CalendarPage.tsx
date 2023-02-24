import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CalendarApi } from '../../api';
import { setEvents } from '../../store/calendar/calendarSlice';
import { CalendarLayout } from '../layout/CalendarLayout';
import { CalendarView } from '../views/CalendarView';

export const CalendarPage = () => {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    CalendarApi.get('/events').then(({ data }) => {
      const userEvents = data.filter((event: any) => event.user._id === user.uid);
      dispatch(setEvents(userEvents));
    });
  }, []);

  return (
    <CalendarLayout>
      <CalendarView />
    </CalendarLayout>
  );
};
