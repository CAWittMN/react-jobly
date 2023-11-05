import { useState } from "react";

const EditUserForm = ({ user, editUser }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form className="EditUserForm" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Confirm password to make changes:</label>
      <input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>Save Changes</button>
    </form>
  );
};

export default EditUserForm;
