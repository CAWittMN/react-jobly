import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { Routes, Route, Navigate } from "react-router-dom";
import LoggedInRoutes from "./LoggedInRoutes";
import PublicRoutes from "./PublicRoutes";
import Homepage from "./Homepage";

const Router = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Routes>
      <Route exact path="/" element={<Homepage currentUser={currentUser} />} />
      {!currentUser && <PublicRoutes />}
      {currentUser && <LoggedInRoutes />}
      <Route exact path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
