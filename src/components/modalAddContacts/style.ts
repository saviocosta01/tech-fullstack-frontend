import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  overflow-x: hidden;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 80%;
  height: 60%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  border-radius: 4px;
  position: relative;
  padding: 10px;
  justify-content: center;
  gap: 20px;

  .div-titile {
    display: flex;

    .close-modal {
      width: 20px;
      height: 30px;
      position: absolute;
      right: 20px;
      cursor: pointer;
    }
  }

  @media(min-width: 750px){
    width: 45%;
  }
`;

export const FormModal = styled.form`
display: flex;
flex-direction: column;
width: 90%;
gap: 10px;


input{
    height: 40px;
    border-radius: 8px;
}

button{
    height: 40px;
    border-radius: 8px;
    margin-top: 10px;
    cursor: pointer;
}


`
