import styled from "styled-components";

export const HeaderProfile = styled.header`
  width: 100%;
  height: 10vh;
`;

export const PersonalInformation = styled.div`
  border: 1px solid #BEC3C6;
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  margin-top: 100px;
`;

export const MainContainer = styled.main`
  width: 100%;
  height: 77vh;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 100px;
  background-color: #fff;
  

  .btn-back {
    position: absolute;
    right: 10px;
    top: 10px;
    text-decoration: none;

    svg{
      width: 1.5rem;
      height: 1.3rem;

    }
  }
`;


export const DivBtns = styled.div`
width: 90%;
display: flex;
align-items: center;
gap: 10px;

`