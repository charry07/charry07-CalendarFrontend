import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { Box, Dialog, IconButton, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { ModalView } from '.';
import { setActiveEvent } from '../../store/calendar/calendarSlice';
import { calendarMessages, localizer } from './helpers';

export const CalendarView = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state: any) => state.calendar);
  const eventsParsed = events.map((e: any) => ({ ...e, start: new Date(e.start), end: new Date(e.end) }));
  const [open, setOpen] = useState(false);
  var themeColor = useTheme().palette.primary.main;
  const lastView: any = localStorage.getItem('lastView') || 'week';

  const onSelectEvent = (e: any) => {
    dispatch(setActiveEvent(e));
    setOpen(true);
  };

  useEffect(() => {
    if (activeEvent) {
      setOpen(true);
    }
  }, [activeEvent]);

  return (
    <>
      <Calendar
        culture='es'
        localizer={localizer}
        defaultDate={new Date()}
        events={eventsParsed}
        style={{ minHeight: 'calc(100vh - 110px)' }}
        defaultView={lastView}
        messages={calendarMessages()}
        onSelectEvent={onSelectEvent}
        onView={(e) => localStorage.setItem('lastView', e)}
        eventPropGetter={(event) => {
          return { style: { backgroundColor: `${themeColor}` } };
        }}
      />

      <IconButton
        title='Agregar nueva evento'
        // disabled={}
        size='large'
        onClick={() => setOpen(true)}
        sx={{ border: `2px solid ${themeColor}`, backgroundColor: 'primary.main', position: 'fixed', right: 50, bottom: 60 }}>
        <InsertInvitationIcon />
      </IconButton>

      <Dialog open={open} onClose={() => (setOpen(false), dispatch(setActiveEvent(null)))}>
        <Box sx={{ p: 2, border: `solid 5px ${themeColor}` }}>
          <ModalView open={(open: boolean) => setOpen(open)}></ModalView>
        </Box>
      </Dialog>
    </>
  );
};
