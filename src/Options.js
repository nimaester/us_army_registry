import React from "react";
import styled from "styled-components";

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
  return (
    <StyledOptions>
      <StyledInput type='text' placeholder='Search' />

      <div>
        <StyledButtons>Reset</StyledButtons>
        <StyledButtons>New Soldier</StyledButtons>
      </div>
    </StyledOptions>
  );
};

export default Options;
