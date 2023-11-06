import { Link } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";

const Homepage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="Homepage">
      <div className="container-sm p-5 shadow rounded-4 my-3">
        <h1
          className="display-4 m-auto border-bottom border-3 border-primary mb-3"
          style={{ width: "fit-content" }}
        >
          Jobly
        </h1>
        <p className="display-5">All the jobs in one, convenient place.</p>
      </div>
      {currentUser && (
        <p>Welcome back, {currentUser.firstName || currentUser.username}!</p>
      )}
      {!currentUser && (
        <div className="container-sm bg-body-tertiary mt-5 py-3 rounded-4 w-25">
          <p className="display-6">Welcome!</p>
          <Link className="btn btn-light border mx-1" to="/login">
            Log in
          </Link>
          <Link className="btn btn-light border mx-1" to="/signup">
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Homepage;
