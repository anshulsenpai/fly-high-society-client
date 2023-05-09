import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { IuserState } from "../App";
import { Container } from "../utils";
import { styled } from "styled-components";

const Auth = () => {
    const user = useSelector((state: IuserState) => state.user.currentUser);
    console.log(user)
    const navigate = useNavigate();
  
    useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, []);

  return (
    <Container>
        <FormContainer></FormContainer>
    </Container>
  )
}


const FormContainer = styled.div`
    max-width: 45rem;
    width: 100%;
    max-height: 40rem;
    height: 100%;
    background-color: var(--bg-primary);
    margin: 1rem;
    border-radius: 1rem;
`

export default Auth