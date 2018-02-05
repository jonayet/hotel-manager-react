import { combineReducers } from 'redux';

import { bookingReducer } from './booking';

export const store = combineReducers({
  bookings: bookingReducer,
});
