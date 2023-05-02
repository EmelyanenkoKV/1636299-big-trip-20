// import flatpickr from 'flatpickr/dist/flatpickr';
import dayjs from 'dayjs';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomNumber = (a, b) => {

  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const humanizeDate = (date, dateFormat) => date ? dayjs(date).format(dateFormat) : '';

const isOfferChecked = (checked) => Object.values(checked).some(Boolean);

export { getRandomArrayElement, getRandomNumber, humanizeDate, isOfferChecked };
