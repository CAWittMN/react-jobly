import "./App.css";
import { useState, useEffect } from "react";
import JoblyApi from "./api";
import useLocalStorage from "./hooks/useLocalStorage";
import LoadingIcon from "./components/LoadingIcon";
import { CurrentUserContext } from "./context/CurrentUserContext";
import { useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Router from "./routes/Router";

const App = () => {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("jobly-token");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  useEffect(() => {
    const getCurrentUser = async () => {
      if (token) {
        JoblyApi.token = token;
        const username = await JoblyApi.getCurrentUsername();
        const userdata = await JoblyApi.getUser(username);
        setCurrentUser(userdata);
        setApplicationIds(new Set(userdata.applications));
      }
      setIsLoaded(true);
    };
    getCurrentUser();
  }, [token]);

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
    JoblyApi.token = null;
    navigate("/");
  };

  const login = async (loginData) => {
    try {
      const token = await JoblyApi.login(loginData);
      const user = await JoblyApi.getCurrentUser();
      setToken(token);
      setCurrentUser(user);
      setApplicationIds(new Set(user.applications));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const signup = async (signupData) => {
    const token = await JoblyApi.signup(signupData);
    setToken(token);
    navigate("/");
  };

  const hasAppliedTo = (id) => {
    return applicationIds.has(id);
  };

  const applyToJob = async (id) => {
    if (hasAppliedTo(id)) return;
    await JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        hasAppliedTo,
        applyToJob,
        login,
        signup,
        applicationIds,
      }}
    >
      <div className="App mt-3">
        <NavBar
          currentUser={currentUser}
          logout={logout}
          login={login}
          signup={signup}
          applicationIds={applicationIds}
        />
        <div className="App-content text-center p-5">
          {!isLoaded ? <LoadingIcon /> : <Router />}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
