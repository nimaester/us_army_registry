const initState = {
  soldiers: [],
  superiors: [],
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "GET_SOLDIERS_DATA":
      return {
        ...state,
        soldiers: action.payload.soldiers,
      };

    default:
      return state;
  }
};

export default reducers;
