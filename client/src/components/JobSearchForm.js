import { useState } from "react";

const JobSearchForm = ({ search, fields }) => {
  const [formData, setFormData] = useState({
    minSalary: "",
    hasEquity: "",
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFormData((fData) => ({
      ...fData,
      [name]: checked,
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
          id="floatingMinSalary"
          placeholder="Minimum Salary"
          type="number"
          name="minSalary"
          onChange={handleChange}
        />
        <label htmlFor="floatingMinEmployees">Minimum Salary</label>
      </div>
      <div className="me-3  col-md">
        <input
          className="btn-check shadow-sm bg-transparent form-control-sm me-2"
          id="floatingHasEquity"
          type="checkbox"
          name="hasEquity"
          value={formData["hasEquity"]}
          onChange={handleCheckboxChange}
        />
        <label className="btn btn-lg shadow-sm" htmlFor="floatingHasEquity">
          Has Equity
        </label>
      </div>
      <div className="me-3 form-floating col-md">
        <input
          className="form-control shadow-sm bg-transparent form-control-sm me-2"
          id="floatingTitle"
          placeholder="Title"
          name="title"
          value={formData["title"]}
          onChange={handleChange}
        />
        <label htmlFor="floatingTitle">Title</label>
      </div>
      <button className="btn btn-outline-primary">Search</button>
    </form>
  );
};

export default JobSearchForm;
