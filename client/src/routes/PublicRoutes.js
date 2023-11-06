import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Homepage from "./Homepage";
import { Route, Routes, Navigate } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PublicRoutes;
