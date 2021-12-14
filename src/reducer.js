const initState = {
  soldiers: [],
  superiors: [],
  modal: false,
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "GET_SOLDIERS_DATA":
      return {
        ...state,
        soldiers: action.payload.soldiers,
      };

    case "OPEN_MODAL":
      return {
        ...state,
        modal: true,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        modal: false,
      };
    case "SORT_SOLDIERS":
      return {
        ...state,
        soldiers: action.payload.soldiers,
      };
    default:
      return state;
  }
};

export default reducers;
