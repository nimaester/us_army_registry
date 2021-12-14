import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledSoldierTr = styled.tr``;

const StyledAvatar = styled.img`
  width: 2rem;
  border-radius: 5rem;
`;

const StyledTd = styled.td`
  font-size: 0.9rem;
  text-align: ${(props) => (props.center ? "center" : "left")};
  &:hover {
    cursor: ${(props) => (props.center ? "pointer" : "")};
  }
`;

const Soldier = ({ soldier }) => {
  const {
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

  const countSubordinates = (soldier) => {
    let count = 0;
    superiors.forEach((superior) => {
      if (superior === soldier.soldierName) {
        count++;
      }
    });
    return count > 0 ? count : null;
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
      <StyledTd>
        {superior.length === 0 ? null : soldiers[Number(superior)].soldierName}
      </StyledTd>
      <StyledTd center>{countSubordinates(soldier)}</StyledTd>
      <StyledTd center>
        <i className='fas fa-edit'></i>
      </StyledTd>
      <StyledTd center>
        <i className='fas fa-trash-alt'></i>
      </StyledTd>
    </StyledSoldierTr>
  );
};

export default Soldier;