import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { Route } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignupPage />} />
    </>
  );
};

export default PublicRoutes;
