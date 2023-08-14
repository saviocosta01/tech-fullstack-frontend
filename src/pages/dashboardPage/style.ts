import styled from "styled-components";

export const HeaderSchedule = styled.header`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161623;
  color: #f3f4f6;
  overflow-x: hidden;

  .btn-configuration {
    @media (min-width: 750px) {
      display: none;
    }
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
    gap: 10px;
    flex-direction: column;
    position: absolute;
    top: 5vh;
    right: 0;
    padding: 10px;
    border-radius: 8px;
    backdrop-filter: blur(30px);
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 2;

    

    @media (min-width: 750px) {
      flex-direction: row;
      position: unset;
      background-color: transparent;
      gap: 10px;
      padding-right: 10px;

    }
    
  }

  .none {
    display: none;
    @media (min-width: 750px) {
      display: flex;
      gap: 10px;
      padding-right: 10px;
    }
  }

  button{
      border: transparent;
      background-color: transparent;
      color: #fff;
      font-size: 16px;
    }
`;

export const DivUser = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  gap: 10px;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  img {
    height: 100%;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 20px;
  flex-direction: column;
  position: relative;

  .btn-create-contact {
    @media (min-width: 750px) {
      position: absolute;
      right: 5%;
      top: -5px;
    }
  }
`;
