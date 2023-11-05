import { useState } from "react";

const SearchForm = ({ search }) => {
  const [formData, setFormData] = useState({
    search: "",
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
    console.log("formData", formData);
    search(formData.search);
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        name="search"
        placeholder="Enter search term.."
        value={formData.search}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
