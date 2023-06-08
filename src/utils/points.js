import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import {getRandomNumber} from './common';

dayjs.extend(utc);
dayjs.extend(duration);

const DATE_SHORT_FORMAT = 'MMM D';
const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';
const TIME_FORMAT = 'HH:mm';
const DATE_FULL_FORMAT = 'DD/MM/YY HH:mm';
const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;
const MIN_COUNT_DATE = 0;
const MAX_DAY = 5;
const MAX_HOUR = 10;
const MAX_MIN = 59;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

function getDate() {
  const minutesGap = getRandomNumber(MIN_COUNT_DATE, MAX_MIN);
  const hoursGap = getRandomNumber(MIN_COUNT_DATE, MAX_HOUR);
  const daysGap = getRandomNumber(MIN_COUNT_DATE, MAX_DAY);

  const dateFrom = dayjs().subtract(getRandomNumber(MIN_COUNT_DATE, MAX_DAY), 'day').toDate();

  const dateTo = dayjs(dateFrom)
    .add(minutesGap, 'minute')
    .add(hoursGap, 'hour')
    .add(daysGap, 'day')
    .toDate();

  return {
    from: dateFrom,
    to: dateTo
  };
}

function getRefinePointDateTime(date) {
  return date ? dayjs(date).utc().format(DATE_TIME_FORMAT) : '';
}

function getRefinePointDateShort(date) {
  return date ? dayjs(date).utc().format(DATE_SHORT_FORMAT) : '';
}

function getRefineTimeDate(date) {
  return date ? dayjs(date).utc().format(TIME_FORMAT) : '';
}

function getRefineFullDate(date) {
  return date ? dayjs(date).utc().format(DATE_FULL_FORMAT) : '';
}

function getTimeDifference(dateFrom, dateTo) {
  const timeDifference = dayjs(dateTo).diff(dayjs(dateFrom));
  let durationPoint = 0;
  switch (true) {
    case (timeDifference >= MSEC_IN_DAY):
      durationPoint = dayjs.duration(timeDifference).format('DD[D] HH[H] mm[M]');
      break;
    case (timeDifference >= MSEC_IN_HOUR):
      durationPoint = dayjs.duration(timeDifference).format('HH[H] mm[M]');
      break;
    case (timeDifference < MSEC_IN_HOUR):
      durationPoint = dayjs.duration(timeDifference).format('mm[M]');
      break;
  }
  return durationPoint;
}

function isPointFuture(dataFrom) {
  return dayjs(dataFrom).isAfter(dayjs());
}

function isPointPresent(dataFrom) {
  return dayjs(dataFrom).isSame((dayjs()));
}

function isPointPast(dataTo) {
  return dayjs(dataTo).isBefore((dayjs()));
}

function sortByDay(pointA, pointB) {
  if (dayjs(pointA.dateFrom).isAfter(dayjs(pointB.dateFrom))) {
    return 1;
  }
  if (dayjs(pointA.dateFrom) === dayjs(pointB.dateFrom)) {
    return 0;
  }
  if (dayjs(pointA.dateFrom).isBefore(dayjs(pointB.dateFrom))) {
    return -1;
  }
}

function sortByTime(pointA, pointB) {
  return dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom)) - dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
}

function sortByPrice(pointA, pointB) {
  return pointB.basePrice - pointA.basePrice;
}

export {
  getRefinePointDateShort,
  getRefineTimeDate,
  getTimeDifference,
  getRefineFullDate,
  getRefinePointDateTime,
  getDate,
  isPointFuture,
  isPointPast,
  isPointPresent,
  sortByDay,
  sortByTime,
  sortByPrice
};
