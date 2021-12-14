import React, { useEffect } from "react";
import styled from "styled-components";
import Soldier from "./Soldier";
import { useDispatch, useSelector } from "react-redux";
import { getSoldiersData, sortSoldiers } from "./actions";

const StyledSoldiers = styled.table``;

const StyledTh = styled.th`
  background-color: #5b9bd5;
  color: white;
  text-align: left;
  padding: 1rem;
  white-space: nowrap;
`;

const Soldiers = () => {
  const headers = [
    "Avatar",
    "Name",
    "Sex",
    "Rank",
    "Start Date",
    "Phone",
    "Email",
    "Superior",
    "# of D.S",
    "Edit",
    "Delete",
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSoldiersData());
  }, [dispatch]);

  const soldiers = useSelector((state) => state.soldiers);

  return (
    <StyledSoldiers>
      <thead>
        <tr>
          {headers.map((header, i) =>
            header === "Name" ? (
              <StyledTh key={i}>
                {header}{" "}
                <i
                  onClick={() => dispatch(sortSoldiers())}
                  className='fas fa-sort'
                ></i>
              </StyledTh>
            ) : (
              <StyledTh key={i}>{header}</StyledTh>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {soldiers.length > 0 &&
          soldiers.map((soldier) => (
            <Soldier
              key={soldier.soldierId}
              soldiers={soldiers}
              soldier={soldier}
            />
          ))}
      </tbody>
    </StyledSoldiers>
  );
};

export default Soldiers;
