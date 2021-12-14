const initState = {
  soldiers: [],
  initialData: [],
  superiors: [],
  sortBy: "",
  modal: false,
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "GET_SOLDIERS_DATA":
      return {
        ...state,
        soldiers: action.payload.soldiers,
        initialData: action.payload.soldiers,
        superiors: action.payload.superiors,
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
    case "SORT_SOLDIERS_BY_NAME":
      return {
        ...state,
        soldiers: action.payload.soldiers,
      };
    case "SORT_SOLDIERS_BY_GENDER":
      return {
        ...state,
        soldiers: action.payload.soldiers,
      };
    default:
      return state;
  }
};

export default reducers;
