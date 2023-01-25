export const calendarMessages = () => {
  return {
    allDay: 'Todos los días',
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Tiempo',
    event: 'Evento',
    noEventsinRange: ' No hay eventos en este rango',
    showMore: (total: number) => `+ Ver más (${total})`,
  };
};
