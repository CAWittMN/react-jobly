import { useState } from "react";

const SignupForm = ({ signup }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
    console.log(formData);
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await signup(formData);
    setFormData(INITIAL_STATE);
  };
  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input
          className="form-control"
          name="username"
          value={formData.username}
          onChange={handleChange}
          autoComplete="username"
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />
      </div>
      <div className="form-group">
        <label>First Name</label>
        <input
          className="form-control"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          autoComplete="given-name"
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          className="form-control"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          autoComplete="family-name"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
      </div>
      <button className="btn btn-primary float-right">Submit</button>
    </form>
  );
};

export default SignupForm;
