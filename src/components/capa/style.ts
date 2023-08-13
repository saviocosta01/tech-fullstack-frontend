import styled from "styled-components";

export const CapaStyle = styled.div`
  .image-box {
    display: inline-flex;
    position: relative;
  }
  .color-capa {
    background-color: #fff;
    width: 100%;
    height: 25vh;

    img {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }
  .foto-perfil {
    margin: 1rem;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: -50%;
  }
`;
