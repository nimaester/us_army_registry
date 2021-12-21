import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteEntry,
  displaySuperior,
  displaySubordinates,
  getSoldierInfo,
  enableEditSoldier,
} from "./actions/actions";

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

const StyledLinks = styled.span`
  &:hover {
    cursor: pointer;
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
    superior,
  } = soldier;

  const soldiers = useSelector((state) => state.initialData);
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

  const handleDisplaySuperior = (id) => {
    dispatch(displaySuperior(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteEntry(id));
  };

  const handleDisplaySubordinates = () => {
    let subordinates = [];
    if (superiors[soldierName]) {
      superiors[soldierName].forEach((soldier) => {
        soldiers.forEach((sub) => {
          if (sub.soldierName === soldier) {
            subordinates.push(sub);
          }
        });
      });
    }
    dispatch(displaySubordinates(subordinates));
  };

  const handleUpdateSoldier = (id) => {
    dispatch(enableEditSoldier());
    dispatch(getSoldierInfo(id));
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
        <StyledLinks onClick={() => handleDisplaySuperior(Number(superior))}>
          {findSuperior()}
        </StyledLinks>
      </StyledTd>
      <StyledTd center style={{ textDecoration: "underline" }}>
        <StyledLinks onClick={() => handleDisplaySubordinates()}>
          {countSubordinates()}
        </StyledLinks>
      </StyledTd>
      <StyledTd center hover onClick={() => handleUpdateSoldier(soldierId)}>
        <i className='fas fa-edit'></i>
      </StyledTd>
      <StyledTd center hover onClick={() => handleDelete(soldierId)}>
        <i className='fas fa-trash-alt'></i>
      </StyledTd>
    </StyledSoldierTr>
  );
};

export default Soldier;
