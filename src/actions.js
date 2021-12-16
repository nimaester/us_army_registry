import axios from "axios";

const handleDataEntries = async () => {
  const soldiersData = await axios.get("http://localhost:3002/soldiers");
  const superiors = {};
  soldiersData.data.forEach((soldier) => {
    if (soldier.superior.length !== 0) {
      let soldierSuperior = soldiersData.data.find(
        (s) => s.soldierId === Number(soldier.superior)
      );
      if (soldierSuperior) {
        superiors[soldierSuperior.soldierName]
          ? superiors[soldierSuperior.soldierName].push(soldier.soldierName)
          : (superiors[soldierSuperior.soldierName] = [soldier.soldierName]);
      }
    }
  });

  return [soldiersData.data, superiors];
};

export const resetSoldierData = () => {
  return {
    type: "RESET_SOLDIER_DATA",
  };
};

export const createSoldierData = (soldierData) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:3002/soldiers`, soldierData);
  } catch {
    console.log("errrurrrrsss"); // always remember to use body parser or app.use(express.json())
  }

  let states = await handleDataEntries();

  dispatch({
    type: "GET_SOLDIERS_DATA",
    payload: {
      soldiers: states[0],
      initialData: states[0],
      superiors: states[1],
    },
  });
};

export const getSoldiersData = () => async (dispatch) => {
  let states = await handleDataEntries();
  dispatch({
    type: "GET_SOLDIERS_DATA",
    payload: {
      soldiers: states[0],
      initialData: states[0],
      superiors: states[1],
    },
  });
};

export const deleteEntry = (entry) => async (dispatch) => {
  await axios.delete(`http://localhost:3002/soldiers/delete/${entry}`);
  let states = await handleDataEntries();

  dispatch({
    type: "GET_SOLDIERS_DATA",
    payload: {
      initialData: states[0],
      soldiers: states[0],
      superiors: states[1],
    },
  });
};

export const getSoldiersNames = (name) => {
  return {
    type: "GET_SOLDIERS_NAMES",
    payload: name,
  };
};

export const toggleModal = () => {
  return {
    type: "TOGGLE_MODAL",
  };
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

export const displaySuperior = (id) => {
  return {
    type: "DISPLAY_SUPERIOR",
    payload: id,
  };
};
