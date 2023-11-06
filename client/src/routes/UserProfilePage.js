import { useState, useEffect, useContext } from "react";
import JoblyApi from "../api";
import EditUserForm from "../components/EditUserForm";
import LoadingIcon from "../components/LoadingIcon";
import { CurrentUserContext } from "../context/CurrentUserContext";

const UserProfilePage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await JoblyApi.getUser(currentUser.username);
      setUser(user);
    };
    getUser();
  }, [currentUser]);

  const updateUser = async (data) => {
    const user = await JoblyApi.updateUser(currentUser.username, data);
    setUser(user);
  };

  return (
    <div className="UserProfilePage">
      {user ? (
        <EditUserForm user={user} updateUser={updateUser} />
      ) : (
        <LoadingIcon message="Loading Profile Info..." />
      )}
    </div>
  );
};

export default UserProfilePage;
