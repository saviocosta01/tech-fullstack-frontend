import styled from "styled-components";

export const HeaderSchedule = styled.header`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: black;
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
      top: 8vh;
      right: 0;
      padding: 10px;
      border-radius: 8px;
      backdrop-filter: blur(30px);
      

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
      @media(min-width: 750px){
        display: flex;
        gap:10px;
        padding-right:10px;
      }
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
`;
