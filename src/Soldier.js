import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteEntry } from "./actions";

const StyledSoldierTr = styled.tr``;

const StyledAvatar = styled.img`
  width: 2rem;
  border-radius: 5rem;
`;

const StyledTd = styled.td`
  font-size: 0.9rem;
  text-align: ${(props) => (props.center ? "center" : "left")};
  &:hover {
    cursor: ${(props) => (props.hover ? "pointer" : "")};
  }
`;

const Soldier = ({ soldier }) => {
  const {
    soldierId,
    soldierName,
    soldierPhoto,
    rank,
    sex,
    startDate,
    phone,
    email,
  } = soldier;

  // const soldiers = useSelector((state) => state.initialData);
  const superiors = useSelector((state) => state.superiors);
  const dispatch = useDispatch();

  const countSubordinates = (soldier) => {
    if (superiors[soldierName]) {
      return superiors[soldierName].length;
    }
  };

  const findSuperior = () => {
    for (const superiorName in superiors) {
      if (superiors[superiorName].includes(soldierName)) {
        return superiorName;
      }
    }
  };

  const displaySuperior = (e) => {
    e.preventDefault();
  };

  const handleDelete = (id) => {
    dispatch(deleteEntry(id));
  };

  return (
    <StyledSoldierTr>
      <StyledTd center>
        <StyledAvatar src={soldierPhoto} alt='photo_image' />
      </StyledTd>
      <StyledTd>{soldierName}</StyledTd>
      <StyledTd>{sex}</StyledTd>
      <StyledTd>{rank}</StyledTd>
      <StyledTd>{startDate}</StyledTd>
      <StyledTd>
        <a href={`tel:${phone.split("-").join("")}`}>{phone}</a>
      </StyledTd>
      <StyledTd>
        <a href={`mailto:${email}`}>{email}</a>
      </StyledTd>
      <StyledTd style={{ textDecoration: "underline" }}>
        <StyledTd hover>{findSuperior()}</StyledTd>
      </StyledTd>
      <StyledTd center>{countSubordinates()}</StyledTd>
      <StyledTd center>
        <i className='fas fa-edit'></i>
      </StyledTd>
      <StyledTd center onClick={() => handleDelete(soldierId)}>
        <i className='fas fa-trash-alt'></i>
      </StyledTd>
    </StyledSoldierTr>
  );
};

export default Soldier;
