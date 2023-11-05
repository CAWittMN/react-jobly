import { useState } from "react";

const LoginForm = ({ login }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
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
    await login(formData);
    setFormData(INITIAL_STATE);
  };
  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
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
      <button className="btn btn-primary float-right">Submit</button>
    </form>
  );
};

export default LoginForm;
