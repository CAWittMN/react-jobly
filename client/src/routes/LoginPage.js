import LoginForm from "../components/LoginForm";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";

const LoginPage = () => {
  const { login } = useContext(CurrentUserContext);
  return (
    <div className="LoginPage">
      <h1 className="mb-3">Log In</h1>
      <LoginForm login={login} />
    </div>
  );
};

export default LoginPage;
