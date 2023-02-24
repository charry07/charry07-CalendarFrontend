import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Alert, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { EventSchema } from '../../schemas/EventSchema';
import { setActiveEvent } from '../../store/calendar/calendarSlice';
import { close } from '../../store/componentsSlices.ts';

export const SideBarItem = () => {
  const { events } = useSelector((state: any) => state.calendar);
  const dispatch = useDispatch();

  const onClickSideBarItem = (note: any) => {
    dispatch(close());
    dispatch(setActiveEvent(note));
  };

  return (
    <>
      {events.length == 0 ? (
        <Alert severity='error'>No hay elementos disponibles</Alert>
      ) : (
        events
          ?.map((note: EventSchema, i: number) => (
            <ListItem disablePadding sx={{ width: '250px' }} onClick={() => onClickSideBarItem(note)} key={i}>
              <ListItemButton>
                <ListItemIcon>
                  <NoteAltIcon />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={note?.title?.substring(0, 20) + '...'} />
                  <ListItemText secondary={note?.notes?.substring(0, 42) + '...'} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))
          .reverse()
      )}
    </>
  );
};
