import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompaniesList from "../components/CompaniesList";
import SearchForm from "../components/SearchForm";
import LoadingIcon from "../components/LoadingIcon";

const CompaniesListPage = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    const getCompanies = async () => {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    };
    getCompanies();
  }, []);

  const search = async (name) => {
    setCompanies(null);
    const companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  };

  return (
    <div className="CompaniesListPage">
      <SearchForm search={search} />
      {companies ? <CompaniesList companies={companies} /> : <LoadingIcon />}
    </div>
  );
};

export default CompaniesListPage;
