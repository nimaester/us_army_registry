import axios from "axios";

export const getSoldiersData = () => async (dispatch) => {
  const soldiersData = await axios.get("http://localhost:3001/soldiers");
  const superiors = [];
  soldiersData.data.forEach((soldier) =>
    soldier.superior !== ""
      ? superiors.push(soldiersData.data[Number(soldier.superior)].soldierName)
      : null
  );

  dispatch({
    type: "GET_SOLDIERS_DATA",
    payload: {
      soldiers: soldiersData.data,
      superiors: superiors,
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

export const sortBy = (sortOrder) => (dispatch) => {
  if (sortOrder === "asc") {
    dispatch({
      type: "SORT_BY_ASCENDING",
    });
  } else {
    dispatch({
      type: "SORT_BY_DESCENDING",
    });
  }
};

export const sortSoldiers = (type) => async (dispatch) => {
  const soldiersData = await axios.get("http://localhost:3001/soldiers");
  let sorted;

  if (type === "Name") {
    sorted = soldiersData.data.sort((a, b) =>
      a.soldierName.localeCompare(b.soldierName)
    );

    dispatch({
      type: "SORT_SOLDIERS_BY_NAME",
      payload: {
        soldiers: sorted,
      },
    });
  } else if (type === "Sex") {
    sorted = soldiersData.data.sort((a, b) => b.sex.localeCompare(a.sex));

    dispatch({
      type: "SORT_SOLDIERS_BY_GENDER",
      payload: {
        soldiers: sorted,
      },
    });
  } else if (type === "Superior") {
    sorted = soldiersData.data.sort((a, b) =>
      b.superior.localeCompare(a.superior)
    );

    dispatch({
      type: "SORT_SOLDIERS_BY_GENDER",
      payload: {
        soldiers: sorted,
      },
    });
  }
};
