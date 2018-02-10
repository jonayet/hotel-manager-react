
export const ActionType = {
  GET_BOOKING: Symbol('GET_BOOKING'),
  ADD_BOOKING: Symbol('ADD_BOOKING'),
};

export const getBooking = () => ({
  type: ActionType.GET_BOOKING,
});

export const addBooking = booking => ({
  type: ActionType.ADD_BOOKING,
  payload: booking,
});
