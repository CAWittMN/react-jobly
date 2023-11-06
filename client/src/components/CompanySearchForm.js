import { useState } from "react";

const CompanySearchForm = ({ search }) => {
  const [formData, setFormData] = useState({
    minEmployees: "",
    maxEmployees: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search(formData);
  };

  return (
    <form className="SearchForm d-flex" onSubmit={handleSubmit}>
      <div className="me-3 form-floating col-md">
        <input
          className="form-control shadow-sm bg-transparent form-control-sm me-2"
          id="floatingMinEmployees"
          placeholder="Minimum Employees"
          type="number"
          name="minEmployees"
          value={formData["minEmployees"]}
          onChange={handleChange}
        />
        <label htmlFor="floatingMinEmployees">Minimum Employees</label>
      </div>
      <div className="me-3 form-floating col-md">
        <input
          className="form-control shadow-sm bg-transparent form-control-sm me-2"
          id="floatingMaxEmployees"
          type="number"
          placeholder="Maximum Employees"
          name="maxEmployees"
          value={formData["maxEmployees"]}
          onChange={handleChange}
        />
        <label htmlFor="floatingMaxEmployees">Minimum Employees</label>
      </div>
      <div className="me-3 form-floating col-md">
        <input
          className="form-control shadow-sm bg-transparent form-control-sm me-2"
          id="floatingName"
          placeholder="Name"
          name="name"
          value={formData["minEmployees"]}
          onChange={handleChange}
        />
        <label htmlFor="floatingName">Name</label>
      </div>
      <button className="btn btn-outline-primary">Search</button>
    </form>
  );
};

export default CompanySearchForm;
