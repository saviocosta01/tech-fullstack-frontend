import styled from "styled-components";

export const UlContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  overflow-x: hidden;
  width: 100%;

`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: auto;
  border-radius: 8px;
  background-color: #FFFFFF;
  color: #000;
  gap: 5px;
  padding: 10px;

  @media (min-width: 750px) {
    /* flex-direction: row; */
    min-width:25%;
    width:25%;
  }
`;

export const DivContent = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    gap: 3px;
  }

  @media (min-width: 750px) {
    flex-direction: column;
    gap: 20px;

    div {
      gap: 6px;
    }
  }
`;

export const DivBtns = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    button {
      background-color: transparent;
      border: transparent;
      color: #fff;
    }
  }

  .div-btn-edit {
    background-color: #4e66c1;
    display: flex;
    border-radius: 4px;
    height: 4vh;
    width: 60%;
    justify-content: center;
    cursor: pointer;

    @media (min-width: 750px) {
      width: 100%;
    }
  }

  .div-btn-delete {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 4vh;
    background-color: #e24657;
    cursor: pointer;
    svg {
      color: #fff;
    }

    @media (min-width: 750px) {
      width: 100%;
    }
  }
  @media (min-width: 750px) {
    width: 80%;
  }
`;
