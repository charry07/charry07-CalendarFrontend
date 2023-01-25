import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CalendarLayout } from '../layout/CalendarLayout';
import { NoteView, NothingSelectedView } from '../views';
import { CalendarView } from '../views/CalendarView';

export const CalendarPage = () => {
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    console.log('onClickNewNote');
  };

  return (
    <CalendarLayout>
<CalendarView/>
    </CalendarLayout>
  );
};
