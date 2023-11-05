import SignupForm from "../components/SignupForm";
import JoblyApi from "../api";

const SignupPage = () => {
  return (
    <div className="SignupPage">
      <h1 className="mb-3">Sign Up</h1>
      <SignupForm signup={JoblyApi.signupUser} />
    </div>
  );
};

export default SignupPage;
