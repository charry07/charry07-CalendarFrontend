import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Alert, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


export const SideBarItem = () => {
  const notes: any[] = []
  const dispatch = useDispatch();

  return (
    <>
      {notes.length == 0  ? (
        <Alert severity='error'>No hay elementos disponibles</Alert>
      ) : (
        notes?.map((note: any, i: number) => (
          <ListItem disablePadding sx={{ width: '250px' }} onClick={() => console.log('onClickSideBarItem')} key={i}>
            <ListItemButton>
              <ListItemIcon>
                <NoteAltIcon />
              </ListItemIcon>
              <Grid container>
                <ListItemText primary={note.title.substring(0, 20) + '...'} />
                <ListItemText secondary={note.body.substring(0, 42) + '...'} />
              </Grid>
            </ListItemButton>
          </ListItem>
        )).reverse()
      )}
    </>
  );
};
