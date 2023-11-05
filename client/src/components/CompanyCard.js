import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
  const { name, description, logo_url, handle } = company;

  return (
    <Link className="CompanyCard card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{name}</span>
          <img className="float-right" src={logo_url} alt={`${name} logo`} />
        </h6>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CompanyCard;
