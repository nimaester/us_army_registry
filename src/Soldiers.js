import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSoldiersData } from "./actions";

const StyledSoldiers = styled.div``;

const Soldiers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSoldiersData());
  }, [dispatch]);

  const soldiers = useSelector((state) => state.soldiers);

  return (
    <StyledSoldiers>
      {soldiers.length > 0 &&
        soldiers.map((soldier) => (
          <div key={soldier.soldierId}>{soldier.soldierName}</div>
        ))}
    </StyledSoldiers>
  );
};

export default Soldiers;
