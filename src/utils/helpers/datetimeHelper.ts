import moment from 'moment-timezone';

/*
 * function hasPassedSpecifiedMinutes
 *
 * True
 *   If {duration} minutes has
 *   passed since from {fromTime (timestamp)}
 */
export const hasPassedSpecifiedMinutes = (
  fromTime: number,
  duration: number,
): boolean => {
  const minutesPassed = moment().diff(moment(fromTime), 'minute');

  return minutesPassed >= duration;
};

const DoMMMMYYYYatLTFormat = (time: moment.Moment) => {
  return `${time.format('Do MMMM YYYY')} at ${time.format('LT')}`;
};

/*
 * function mailExecutedTimeFormat
 *
 * Return format '30th September 2020 at 09:00'
 */

export const mailExecutedTimeFormat = (time: moment.Moment): string => {
  return DoMMMMYYYYatLTFormat(time);
};

/*
 * function getDaysDifference
 *
 * Return daysDifference (integer)
 *  difference between two timestamps
 *
 */
export const getDaysDifference = (startDay: string, endDay: string): number => {
  const start = moment(startDay);
  const end = moment(endDay);

  const diffMillisecond = end.diff(start);

  return diffMillisecond / (1000 * 60 * 60 * 24);
};

/*
 * function convertNumToMMM
 *
 * Return MMM Format (Jan, Feb etc...)
 *
 */
export const convertNumToMMM = (month: number): string => {
  const mmmFormats = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return mmmFormats[month - 1];
};

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
