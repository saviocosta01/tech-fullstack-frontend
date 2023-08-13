import styled from "styled-components";

export const CardStyle = styled.li`
  display: flex;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: auto;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #000;
  gap: 5px;
  padding: 10px;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);;
  backdrop-filter: blur(5px);

  @media (min-width: 750px) {
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
  color: #fff;
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
    }
  }

  .div-btn-edit {
    background-color: #fff;
    color: #000;
    display: flex;
    height: 4vh;
    width: 60%;
    justify-content: center;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

    @media (min-width: 750px) {
      width: 100%;
    }
  }

  .div-btn-delete {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
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
