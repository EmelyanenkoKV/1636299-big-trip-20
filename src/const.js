const WAYPOINTS = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant',
];

const DEFAULT_TYPE = 'Taxi';

const CITIES = [
  'Amsterdam',
  'Chamonix',
  'Geneva',
  'Tokyo',
  'Seoul',
  'New York',
  'Manila',
  'Valencia',
  'Paris'
];

const OFFERS = [
  'Add luggage',
  'Switch to comfort',
  'Rent a car',
  'Add breakfast',
  'Book tickets',
  'Lunch in city',
  'Order Uber',
];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const MIN_NUMBER = 10;
const MAX_NUMBER = 1000;
const MIN_COUNT_OFFER = 0;
const MAX_COUNT_OFFER = 5;
const MIN_COUNT_DESCRIPTION = 1;
const MAX_COUNT_DESCRIPTION = 5;

const POINT_EMPTY = {
  type: DEFAULT_TYPE,
  dateFrom: null,
  dateTo: null,
  basePrice: 0,
  offers: [],
  destination: null,
  isFavorite: false
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

export {
  WAYPOINTS,
  CITIES,
  MAX_NUMBER,
  MIN_NUMBER,
  OFFERS,
  DESCRIPTIONS,
  MAX_COUNT_DESCRIPTION,
  MIN_COUNT_DESCRIPTION,
  MIN_COUNT_OFFER,
  MAX_COUNT_OFFER,
  POINT_EMPTY,
  FilterType,
  SortType,
  UpdateType,
  UserAction
};
