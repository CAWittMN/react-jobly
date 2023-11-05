import { useState, useEffect } from "react";
import JoblyApi from "../api";
import EditUserForm from "../components/EditUserForm";
import LoadingIcon from "../components/LoadingIcon";
import { useParams } from "react-router-dom";

const UserProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await JoblyApi.getUser(username);
      setUser(user);
    };
    getUser();
  }, [username]);

  const updateUser = async (data) => {
    const user = await JoblyApi.updateUser(username, data);
    setUser(user);
  };

  return (
    <div className="UserProfilePage">
      {user ? (
        <EditUserForm user={user} updateUser={updateUser} />
      ) : (
        <LoadingIcon />
      )}
    </div>
  );
};

export default UserProfilePage;
