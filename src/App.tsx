import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./utils";
import { useSelector } from "react-redux/es/exports";

export interface IuserState {
  user: {
    currentUser: object | null;
    isFetching: boolean;
    error: boolean;
  }
}

const App = () => {
  const user = useSelector((state:IuserState) => state.user.currentUser);
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, []);

  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
};

export default App;
