import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarLayout } from '../layout/CalendarLayout';
import Profile from '/profile.png';

export const AboutMe = () => {


  return (
    <CalendarLayout>
      <Box>
        <img src={Profile} alt='perfil' width={800} />
      </Box>
    </CalendarLayout>
  );
};
