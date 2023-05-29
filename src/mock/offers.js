import {POINT_TYPES, OFFERS, MAX_PRICE, MIN_PRICE} from '../const';
import {getRandomNumber, getRandomArrayElement} from '../utils/common';

export const offers = [
  {
    type: POINT_TYPES.TAXI,
    offers: [
      {
        id: '1',
        title: getRandomArrayElement(OFFERS),
        price: getRandomNumber(MIN_PRICE, MAX_PRICE)
      },
    ],
  },
  {
    type: POINT_TYPES.TRAIN,
    offers: [
      {
        id: '1',
        title: getRandomArrayElement(OFFERS),
        price: getRandomNumber(MIN_PRICE, MAX_PRICE)
      },
      {
        id: '2',
        title: getRandomArrayElement(OFFERS),
        price: getRandomNumber(MIN_PRICE, MAX_PRICE)
      },
    ],
  },
  {
    type: POINT_TYPES.RESTAURANT,
    offers: [
      {
        id: '1',
        title: getRandomArrayElement(OFFERS),
        price: getRandomNumber(MIN_PRICE, MAX_PRICE)
      },
      {
        id: '2',
        title: getRandomArrayElement(OFFERS),
        price: getRandomNumber(MIN_PRICE, MAX_PRICE)
      },
      {
        id: '3',
        title: getRandomArrayElement(OFFERS),
        price: getRandomNumber(MIN_PRICE, MAX_PRICE)
      },
    ],
  },
];