import CompanyDetails from "../components/CompanyDetails";
import JoblyApi from "../api";
import LoadingIcon from "../components/LoadingIcon";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CompanyDetailsPage = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const getCompany = async () => {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
    };
    getCompany();
  }, [handle]);

  return (
    <div className="CompanyDetailsPage">
      {company ? <CompanyDetails company={company} /> : <LoadingIcon />}
    </div>
  );
};

export default CompanyDetailsPage;
