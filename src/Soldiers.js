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
  &:hover {
    cursor: ${(props) => (props.hover ? "pointer" : null)};
  }
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
  const soldiers = useSelector((state) => state.soldiers);

  useEffect(() => {
    dispatch(getSoldiersData());
  }, [dispatch]);

  return (
    <StyledSoldiers>
      <thead>
        <tr>
          {headers.map((header, i) =>
            header === "Name" || header === "Sex" || header === "Superior" ? (
              <StyledTh
                hover
                key={i}
                onClick={() => dispatch(sortSoldiers(header))}
              >
                {header} <i className='fas fa-sort'></i>
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
            <Soldier key={soldier.soldierId} soldier={soldier} />
          ))}
      </tbody>
    </StyledSoldiers>
  );
};

export default Soldiers;
