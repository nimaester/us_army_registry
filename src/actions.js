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
