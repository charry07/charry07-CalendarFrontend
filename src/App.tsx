import { Loader } from './CalendarApp/components';
import { loading } from './loading/loading';
import { AppRouter } from './routes/AppRouter';
import { AppTheme } from './theme';

function App() {

  return (
    <AppTheme>
      {loading() && <Loader />}
      <AppRouter />
    </AppTheme>
  );
}

export default App;
