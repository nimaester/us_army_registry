import axios from "axios";

export const getSoldiersData = () => async (dispatch) => {
  const soldiersData = await axios.get("http://localhost:3001/soldiers");

  dispatch({
    type: "GET_SOLDIERS_DATA",
    payload: {
      soldiers: soldiersData.data,
    },
  });
};

export const openModal = () => async (dispatch) => {
  dispatch({
    type: "OPEN_MODAL",
  });
};

export const closeModal = () => async (dispatch) => {
  dispatch({
    type: "CLOSE_MODAL",
  });
};

export const sortSoldiers = () => async (dispatch) => {
  const soldiersData = await axios.get("http://localhost:3001/soldiers");
  const sorted = soldiersData.data.sort((a, b) =>
    a.soldierName.localeCompare(b.soldierName)
  );

  dispatch({
    type: "SORT_SOLDIERS",
    payload: {
      soldiers: sorted,
    },
  });
};
