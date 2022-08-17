import moment from 'moment';

export const getDate = (date: number) => {
  return moment(date).format('YYYY-MM-DD HH:mm');
};
