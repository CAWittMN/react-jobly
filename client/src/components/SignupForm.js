import { useState } from "react";
import Error from "./Error";

const SignupForm = ({ signup }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await signup(formData);
    } catch (err) {
      setErrors([...errors, err]);
    }
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      {errors.length ? <Error errors={errors} /> : null}
      <form
        className="SignupForm container-sm w-50 rounded-5 shadow p-3"
        onSubmit={handleSubmit}
      >
        <div className="form-group border-0 rounded-top-4 bg-body-tertiary border-bottom pb-3">
          <label>Username</label>
          <input
            className="form-control w-75 m-auto"
            name="username"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </div>
        <div className="form-group border-0 bg-body-tertiary border-bottom pb-3">
          <label>Password</label>
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
        <div className="form-group border-0 bg-body-tertiary border-bottom pb-3">
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
        <button className="btn mt-3 btn-primary float-right">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
