import { ActionTypes } from './booking.action';

const initialState = [
  {
    id: '1',
    roomId: '1',
    guestId: '1',
    from: '2018-01-01',
    to: '2018-02-01',
  },
];

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_BOOKING:
      return state;

    case ActionTypes.ADD_BOOKING:
      return state.concat(action.payload);

    default:
      return state;
  }
};
