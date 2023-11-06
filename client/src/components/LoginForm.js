import { useState } from "react";
import Error from "./Error";

const LoginForm = ({ login }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
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
      await login(formData);
    } catch (err) {
      setErrors([...errors, err]);
    }
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      {errors.length ? <Error errors={errors} /> : null}

      <form
        className="LoginForm container-sm w-50 rounded-5 shadow p-3"
        onSubmit={handleSubmit}
      >
        <div className="form-group rounded-top-4 border-0 bg-body-tertiary border-bottom pb-3">
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
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
