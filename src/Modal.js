import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal, createSoldierData } from "./actions";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
`;

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMainForm = styled.form`
  background-color: white;
  padding: 2rem;
  width: 800px;
  height: 660px;
  opacity: 1 !important;
  border-radius: 20px;
  z-index: 5;
`;

const StyledForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledFormImage = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

const StyledLogo = styled.img`
  object-fit: contain;
  max-width: 90%;
`;

const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

let lazyId = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Modal = () => {
  const emptySoldierForm = {
    soldierId: lazyId(35, 99999),
    soldierName: "",
    soldierPhoto:
      "https://7528userurl.s3.us-west-1.amazonaws.com/army_Logo.png",
    rank: "",
    sex: "",
    startDate: "",
    phone: "",
    email: "",
    superior: "",
  };

  const [newSoldier, setNewSoldier] = useState(emptySoldierForm);
  const superiors = useSelector((state) => state.superiors);
  // const soldiers = useSelector((state) => state.soldiers);

  // const findSuperiorIdByName = (name) => {
  //   return soldiers.filter((soldier) => soldier.soldierName === name)[0]
  //     .soldierId;
  // };

  const arrayOfSuperiors = Object.keys(superiors);
  const ranks = [
    "General",
    "Colonel",
    "Major",
    "Captain",
    "Liutenant",
    "Warrant Officer",
    "Sergeant",
    "Corporal",
    "Specialist",
    "Private",
  ];

  const dispatch = useDispatch();
  const handleCloseButton = () => {
    dispatch(toggleModal());
  };
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setNewSoldier((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (data) => {
    dispatch(createSoldierData(data));
    dispatch(toggleModal());
    setNewSoldier(emptySoldierForm);
  };

  return (
    <StyledModal>
      <StyledBackground>
        <StyledMainForm onSubmit={() => handleSubmit(newSoldier)}>
          <StyledTitle>Soldier Entry</StyledTitle>
          <StyledForm>
            <StyledFormImage>
              <StyledLogo src={newSoldier.soldierPhoto} alt='' />
            </StyledFormImage>
            <StyledFormInput>
              <TextField
                id='outlined-basic'
                label='Name'
                variant='outlined'
                name='soldierName'
                onChange={handleChange}
                value={newSoldier.soldierName}
                sx={{ margin: 1 }}
              />

              <Box sx={{ minWidth: 180, margin: 1 }}>
                <FormControl fullWidth>
                  <InputLabel>Rank</InputLabel>
                  <Select
                    name='rank'
                    onChange={handleChange}
                    value={newSoldier.rank}
                  >
                    {ranks.map((rank, i) => (
                      <MenuItem key={i} value={rank}>
                        {rank}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <FormControl sx={{ margin: 1 }} component='fieldset'>
                <FormLabel component='legend'>Sex</FormLabel>
                <RadioGroup
                  row
                  aria-label='gender'
                  onChange={handleChange}
                  name='sex'
                >
                  <FormControlLabel
                    value='F'
                    control={<Radio />}
                    label='Female'
                  />
                  <FormControlLabel
                    value='M'
                    control={<Radio />}
                    label='Male'
                  />
                </RadioGroup>
              </FormControl>

              <TextField
                id='outlined-basic'
                label='Start Date'
                variant='outlined'
                name='startDate'
                onChange={handleChange}
                value={newSoldier.startDate}
                sx={{ margin: 1 }}
              />

              <TextField
                id='outlined-basic'
                label='Phone Number'
                variant='outlined'
                name='phone'
                onChange={handleChange}
                value={newSoldier.phone}
                sx={{ margin: 1 }}
              />

              <TextField
                id='outlined-basic'
                label='Email Address'
                variant='outlined'
                name='email'
                onChange={handleChange}
                value={newSoldier.email}
                sx={{ margin: 1 }}
              />

              <Box sx={{ minWidth: 180, margin: 1 }}>
                <FormControl fullWidth>
                  <InputLabel>Superior</InputLabel>
                  <Select
                    name='superior'
                    onChange={handleChange}
                    value={newSoldier.superior}
                  >
                    {arrayOfSuperiors.map((superior, i) => (
                      <MenuItem key={i} value={superior}>
                        {superior}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </StyledFormInput>
          </StyledForm>

          <StyledButtons>
            <Stack spacing={5} mt={4} direction='row'>
              <Button
                onClick={() => {
                  handleSubmit(newSoldier);
                }}
                variant='outlined'
              >
                Submit
              </Button>
              <Button
                onClick={() => {
                  handleCloseButton();
                }}
                variant='outlined'
              >
                Cancel
              </Button>
            </Stack>
          </StyledButtons>
        </StyledMainForm>
      </StyledBackground>
    </StyledModal>
  );
};

export default Modal;
