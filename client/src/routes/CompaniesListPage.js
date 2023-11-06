import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompaniesList from "../components/CompaniesList";
import CompanySearchForm from "../components/CompanySearchForm";
import LoadingIcon from "../components/LoadingIcon";

const CompaniesListPage = () => {
  const [companies, setCompanies] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    const getCompanies = async () => {
      const companies = await JoblyApi.getCompanies(searchQuery);
      setCompanies(companies);
    };
    getCompanies();
  }, [searchQuery]);

  const search = async (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="CompaniesListPage">
      <CompanySearchForm search={search} />
      {companies ? <CompaniesList companies={companies} /> : <LoadingIcon />}
    </div>
  );
};

export default CompaniesListPage;
