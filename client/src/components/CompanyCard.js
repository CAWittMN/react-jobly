import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
  const { name, description, logoUrl, handle, numEmployees } = company;

  return (
    <div
      className="CompanyCard w-75 m-auto card mt-3  shadow-sm border-0"
      to={`/companies/${handle}`}
    >
      <div className="card-body">
        <h6 className="card-title  border-bottom shadow-sm pb-2 row justify-content-between">
          <span className="text-capitalize col-5">{name}</span>
          <span className="float-right border rounded-4 col-2">
            {numEmployees} employees
          </span>
          <img className="float-right col-1" src={logoUrl} alt={`logo`} />
        </h6>
        <p className="card-text">{description}</p>
        <div className="row">
          <Link
            className="card-link border-top bg-body-tertiary"
            to={`/companies/${handle}`}
          >
            See Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
