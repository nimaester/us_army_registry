const initState = {
  soldiers: [],
  initialData: [],
  superiors: {},
  modal: false,
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_SOLDIERS_DATA":
      return {
        ...state,
        initialData: action.payload.soldiers,
      };

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
      let sortByName = [...state.soldiers].sort((a, b) =>
        a.soldierName.localeCompare(b.soldierName)
      );
      return {
        ...state,
        soldiers: sortByName,
      };
    case "SORT_SOLDIERS_BY_GENDER":
      let sortByGender = [...state.soldiers].sort((a, b) =>
        a.sex.localeCompare(b.sex)
      );
      return {
        ...state,
        soldiers: sortByGender,
      };
    case "SORT_SOLDIERS_BY_SUPERIORS":
      let sortBySuperiors = [...state.soldiers].sort((a, b) =>
        b.superior.localeCompare(a.superior)
      );
      return {
        ...state,
        soldiers: sortBySuperiors,
      };

    default:
      return state;
  }
};

export default reducers;
