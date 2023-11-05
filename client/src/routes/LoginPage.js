import LoginForm from "../components/LoginForm";
import JoblyApi from "../api";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <h1 className="mb-3">Log In</h1>
      <LoginForm login={JoblyApi.loginUser} />
    </div>
  );
};

export default LoginPage;
