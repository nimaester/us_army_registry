const initState = {
  soldiers: [],
  initialData: [],
  superiors: {},
  editSoldier: {},
  modal: false,
  editing: false,
  defaultValue: {
    soldierId: Math.floor(Math.random() * (9999 - 100 + 1) + 100),
    soldierName: "",
    soldierPhoto:
      "https://7528userurl.s3.us-west-1.amazonaws.com/army_Logo.png",
    rank: "",
    sex: "",
    startDate: "",
    phone: "",
    email: "",
    superior: "",
  },
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "DISABLE_EDIT_SOLDIER":
      return {
        ...state,
        editSoldier: state.defaultValue,
        editing: false,
      };
    case "ENABLE_EDIT_SOLDIER":
      return {
        ...state,
        editing: true,
      };

    case "GET_SOLDIER_INFO":
      return {
        ...state,
        editSoldier: action.payload,
        modal: !state.modal,
      };

    case "DISPLAY_SUBORDINATES":
      return {
        ...state,
        soldiers: action.payload,
      };

    case "RESET_SOLDIER_DATA":
      return {
        ...state,
        soldiers: state.initialData,
      };

    case "GET_SOLDIERS_NAMES":
      return {
        ...state,
        soldiers: [...state.initialData].filter((soldier) =>
          soldier.soldierName
            .toLowerCase()
            .trim()
            .includes(action.payload.toLowerCase())
        ),
      };

    case "DISPLAY_SUPERIOR":
      return {
        ...state,
        soldiers: [...state.initialData].filter(
          (soldier) => soldier.soldierId === action.payload
        ),
      };

    case "GET_SOLDIERS_DATA":
      return {
        ...state,
        soldiers: action.payload.soldiers,
        initialData: action.payload.initialData,
        superiors: action.payload.superiors,
      };

    case "TOGGLE_MODAL":
      return {
        ...state,
        modal: !state.modal,
      };
    case "SORT_SOLDIERS_BY_NAME":
      return {
        ...state,
        soldiers: [...state.initialData].sort((a, b) =>
          a.soldierName.localeCompare(b.soldierName)
        ),
      };
    case "SORT_SOLDIERS_BY_GENDER":
      return {
        ...state,
        soldiers: [...state.initialData].sort((a, b) =>
          a.sex.localeCompare(b.sex)
        ),
      };
    case "SORT_SOLDIERS_BY_SUPERIORS":
      return {
        ...state,
        soldiers: [...state.initialData].sort((a, b) =>
          b.superior.localeCompare(a.superior)
        ),
      };

    default:
      return state;
  }
};

export default reducers;
