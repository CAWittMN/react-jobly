import ApplyButton from "./ApplyButton";

const JobCard = ({ job }) => {
  const { title, salary, equity, companyHandle, id } = job;
  return (
    <div className="row mt-3">
      <div className="col-8">
        <div className="JobCard card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${salary}</p>
            <p className="card-text">Equity: {equity || "none"}</p>
          </div>
        </div>
      </div>
      <div className="col d-flex flex-column border">
        <div className="row">
          <div className="col">
            <p>Company: {companyHandle}</p>
          </div>
        </div>
        <ApplyButton jobId={id} />
        <a
          href={`/companies/${companyHandle}`}
          className="btn mt-auto btn-primary mb-1"
        >
          Company Details
        </a>
      </div>
    </div>
  );
};

export default JobCard;
