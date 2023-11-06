import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUserForm = ({ user, updateUser }) => {
  const navigate = useNavigate();

  const INITIAL_STATE = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateUser(formData);
    setFormData(INITIAL_STATE);
    navigate("/jobs");
  };

  return (
    <form
      className="EditUserForm container-sm w-50 rounded-5 shadow p-3"
      onSubmit={handleSubmit}
    >
      <div className="form-group rounded-top-4 border-0 bg-body-tertiary border-bottom pb-3">
        <label>First Name</label>
        <input
          className="form-control w-75 m-auto"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          autoComplete="given-name"
          required
        />
      </div>
      <div className="form-group border-0 bg-body-tertiary border-bottom pb-3">
        <label>Last Name</label>
        <input
          className="form-control w-75 m-auto"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          autoComplete="family-name"
          required
        />
      </div>
      <div className="form-group border-0 bg-body-tertiary border-bottom pb-3">
        <label>Email</label>
        <input
          className="form-control w-75 m-auto"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
      </div>
      <div className="form-group border-0 bg-body-tertiary border-bottom pb-3">
        <label>Confirm password to make changes:</label>
        <input
          className="form-control w-75 m-auto"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />
      </div>
      <button className="btn mt-3 btn-primary float-right">Submit</button>
    </form>
  );
};

export default EditUserForm;
