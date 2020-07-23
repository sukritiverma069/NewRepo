const initialState = {
  items: [{ firstname: "", lastname: "", address: "" }],
};

export const displayreducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "USER_DATA") {
    console.log(action.payload);
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};
