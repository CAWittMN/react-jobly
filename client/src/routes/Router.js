import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import LoggedInRoutes from "./LoggedInRoutes";
import PublicRoutes from "./PublicRoutes";

const Router = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      {!currentUser && <PublicRoutes />}
      {currentUser && <LoggedInRoutes />}
    </>
  );
};

export default Router;
