
export const ActionTypes = {
  GET_BOOKING: '[BOOKING] GET',
  ADD_BOOKING: '[BOOKING] ADD',
};

export const getBooking = () => ({
  type: ActionTypes.GET_BOOKING,
});

export const addBooking = booking => ({
  type: ActionTypes.ADD_BOOKING,
  payload: booking,
});
