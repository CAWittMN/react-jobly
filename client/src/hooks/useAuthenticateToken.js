import { useEffect } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import JoblyApi from "../api";
import { useState } from "react";

const useAuthenticateToken = () => {
  const { token, setCurrentUser, setToken } = useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticateToken = async () => {
      try {
        if (token) {
          const user = await JoblyApi.getUserFromToken(token);
          setCurrentUser(user);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
        setToken(null);
        setCurrentUser(null);
        setIsLoading(false);
        navigate("/login");
      }
    };
    authenticateToken();
  }, [token, setCurrentUser, setToken, navigate]);

  return { isLoading };
};
