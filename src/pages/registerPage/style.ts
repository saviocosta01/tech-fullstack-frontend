import styled from "styled-components";

export const RegisterContainer = styled.main`
display:flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #4F4F4F;
`


export const SectionRegister = styled.section`
display: flex;
width: 80%;
height: 90%;
background-color: #fff;
flex-direction: column;
border-radius: 8px;

@media(min-width: 750px){
    flex-direction: row;
    height: 60%;
    width: 60%;
    align-items: center;
    justify-content: space-between;
}

`

export const DivImg = styled.div`
width: 100%;
height: 45%;

img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-size: cover;
}

@media(min-width: 750px){
    width: 60%;
    height: 100%;
}

`

export const DivContent = styled.div`
width: 100%;
height: 50%;
display: flex;
flex-direction: column;
align-items: center;

h2{
    margin: 0;
}

@media(min-width: 750px){
    width: 40%;
    height: 80%;
    align-items: flex-start;
    gap: 5px;
    padding-right: 20px;
}
`


export const Form = styled.form`
width: 80%;
height: auto;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
position: relative;

.login-page{
    position: absolute;
    text-decoration: none;
    right: 0;
    bottom: -30px;
    color: #4666E2;
}

@media(min-width: 750px){
    width: 100%;
    height: 100%;

    .login-page{
        bottom: -10px;
    }
}

`