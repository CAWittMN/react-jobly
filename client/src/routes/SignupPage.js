import SignupForm from "../components/SignupForm";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";

const SignupPage = () => {
  const { signup } = useContext(CurrentUserContext);
  return (
    <div className="SignupPage">
      <h1 className="mb-3">Sign Up</h1>
      <SignupForm signup={signup} />
    </div>
  );
};

export default SignupPage;
