import axios from "axios";

export const getSoldiersData = () => async (dispatch) => {
  const soldiersData = await axios.get("http://localhost:3002/soldiers");
  const superiors = {};
  soldiersData.data.forEach((soldier) => {
    if (soldier.superior.length !== 0) {
      let sup = soldiersData.data.find(
        (s) => s.soldierId === Number(soldier.superior)
      );
      superiors[sup.soldierName]
        ? superiors[sup.soldierName].push(soldier.soldierName)
        : (superiors[sup.soldierName] = [soldier.soldierName]);
    }
  });
  dispatch({
    type: "GET_SOLDIERS_DATA",
    payload: {
      soldiers: soldiersData.data,
      superiors: superiors,
    },
  });
};

export const deleteEntry = (entry) => async (dispatch) => {
  await axios.delete(`http://localhost:3002/soldiers/delete/${entry}`);
  const soldiersData = await axios.get("http://localhost:3002/soldiers");

  dispatch({
    type: "DELETE_SOLDIER_DATA",
    payload: {
      initialData: soldiersData.data,
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

export const sortSoldiers = (type) => {
  if (type === "Name") {
    return {
      type: "SORT_SOLDIERS_BY_NAME",
    };
  } else if (type === "Sex") {
    return {
      type: "SORT_SOLDIERS_BY_GENDER",
    };
  } else if (type === "Superior") {
    return {
      type: "SORT_SOLDIERS_BY_SUPERIORS",
    };
  }
};
