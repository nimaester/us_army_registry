import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  // getSoldiersData,
  getSoldiersNames,
  toggleModal,
  resetSoldierData,
  disableEditSoldier,
} from "./actions";

const StyledOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

const StyledInput = styled.input`
  width: 200px;
`;

const StyledButtons = styled.button`
  background-color: #5b9bd5;
  padding: 0.2rem 0.5rem;
  color: white;
  border: 1px solid black;
  margin-left: 2rem;
`;

const Options = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleResetClick = () => {
    dispatch(resetSoldierData());
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleNewSoldierButton = () => {
    dispatch(disableEditSoldier());
    dispatch(toggleModal());
  };

  useEffect(() => {
    dispatch(getSoldiersNames(query));
  }, [dispatch, query]);

  return (
    <StyledOptions>
      <StyledInput
        onChange={handleChange}
        value={query}
        type='text'
        placeholder='Search by name'
      />
      <div>
        <StyledButtons onClick={() => handleResetClick()}>Reset</StyledButtons>
        <StyledButtons onClick={() => handleNewSoldierButton()}>
          New Soldier
        </StyledButtons>
      </div>
    </StyledOptions>
  );
};

export default Options;
