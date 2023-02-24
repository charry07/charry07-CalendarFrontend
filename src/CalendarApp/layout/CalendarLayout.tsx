import { Box } from '@mui/material';
import { AppBarMenu, Footer, SideBar } from '../components';

export const CalendarLayout = ({ children }: any) => {
  return (
    <Box>
      {/* NavBar */}
      <AppBarMenu />
      {/* SideBar */}
      <SideBar />
      {/* Main */}
      <Box component='main' sx={{ p: 3, display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 185px)' }}>
        {children}
      </Box>
      {/* Footer */}
      <Footer />
    </Box>
  );
};
