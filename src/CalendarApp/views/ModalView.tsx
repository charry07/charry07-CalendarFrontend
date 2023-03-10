import { DeleteOutlined, SaveOutlined } from '@mui/icons-material';
import { Button, Grid, Typography, useTheme } from '@mui/material';
import es from 'date-fns/locale/es';
import { Form, Formik } from 'formik';
import DatePicker, { registerLocale } from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { CalendarApi } from '../../api';
import { addNewEvent, deleteEvent, updateEvent } from '../../store/calendar/calendarSlice';
import { AppTextField } from '../components';

export const ModalView = ({ open }: any) => {
  const { activeEvent } = useSelector((state: any) => state.calendar);
  var themeColor = useTheme().palette.primary.main;
  registerLocale('es', es);
  const dispatch = useDispatch();

  const initialValues = {
    id: activeEvent ? activeEvent.id : new Date().getTime(),
    start: activeEvent ? new Date(activeEvent.start) : new Date(),
    end: activeEvent ? new Date(activeEvent.end) : new Date(),
    title: activeEvent ? activeEvent.title : '',
    notes: activeEvent ? activeEvent.notes : '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().min(8, String('Must Contain 8 Characters')).required('Enter your title'),
    notes: Yup.string().min(20, String('Must Contain 20 Characters')).required('Enter your notes'),
  });

  const onDeletevent = async () => {
    dispatch(deleteEvent(activeEvent.id));
    CalendarApi.delete(`/events/${activeEvent?.id}`);
    open(false);
  };

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
      <Formik
        validateOnChange
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);

          activeEvent?.id ? dispatch(updateEvent(data)) : dispatch(addNewEvent(data));
          activeEvent?.id ? CalendarApi.put(`/events/${activeEvent?.id}`, data) : CalendarApi.post('/events', data);
          open(false);
          setSubmitting(false);
        }}>
        {({ isValid, isSubmitting, setFieldValue, values }) => (
          <Form noValidate autoComplete='on'>
            <Grid container>
              <Grid container justifyContent='space-between'>
                <Typography variant='h4'>{activeEvent ? 'Editar Evento' : 'Nuevo Evento'}</Typography>
                <hr style={{ width: '100%', height: 4, background: `${themeColor}` }} />
              </Grid>
              <Grid container justifyContent='space-between'>
                <Grid item>
                  <Typography>Fecha Inicio</Typography>
                  <DatePicker
                    showTimeSelect
                    locale='es'
                    dateFormat='Pp'
                    timeCaption='Hora'
                    selected={values.start}
                    onChange={(date: any) => setFieldValue('start', new Date(date))}
                  />
                </Grid>
                <Grid item>
                  <Typography>Fecha Fin</Typography>
                  <DatePicker
                    showTimeSelect
                    locale='es'
                    dateFormat='Pp'
                    timeCaption='Hora'
                    minDate={values.start}
                    selected={values.end}
                    onChange={(date: any) => setFieldValue('end', new Date(date))}
                  />
                </Grid>
              </Grid>

              <AppTextField
                fullWidth
                required
                type='text'
                placeholder='Ingresa titulo'
                label='Ingresa el titulo'
                name='title'
                sx={{ my: 2, zIndex: '0' }}
                onChange={({ target }: any) => setFieldValue('title', target.value)}
              />

              <AppTextField
                multiline
                fullWidth
                minRows={5}
                name='notes'
                type='text'
                placeholder='Cual Nota quieres dejar ?'
                label='Cual Nota quieres dejar ?'
                required
                sx={{ mb: 2, zIndex: '0' }}
                onChange={({ target }: any) => setFieldValue('notes', target.value)}
              />
              <Grid item>
                <Button color='primary' sx={{ p: 2 }} variant='outlined' type='submit' disabled={!isValid || isSubmitting}>
                  <SaveOutlined />
                  <Typography sx={{ ml: 1 }}>Guardar</Typography>
                </Button>
              </Grid>
              {activeEvent?.id && (
                <Button title='Eliminar este evento' color='error' sx={{ p: 2, ml: 2 }} variant='outlined' onClick={onDeletevent}>
                  <DeleteOutlined />
                </Button>
              )}

              {/* {errorMessage && <Alert severity='error' sx={{mt:1}}>{errorMessage}</Alert>} */}
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};
