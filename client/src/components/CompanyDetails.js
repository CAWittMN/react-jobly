const CompanyDetails = ({ company }) => {
  const { name, description, jobs, logoUrl } = company;

  const jobCards = jobs.map((job) => (
    //returns a well desinged card with job details
    <div className="card col" key={job.id}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text">{job.salary}</p>
        <p className="card-text">{job.equity}</p>

        <a href={`/jobs/${job.id}`} className="btn mt-auto btn-primary">
          Details
        </a>
      </div>
    </div>
  ));

  //returns a well desinged card with company details
  return (
    <div className="CompanyDetails">
      <div className="card">
        <div className="card-body">
          <img src={logoUrl} alt={`logo`} />
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
      <div className="container text-center pb-5 px-5 rounded-4 shadow">
        <h5 className="display-3">Jobs</h5>
        <div className="row row-cols-lg-3 g-2">{jobCards}</div>
      </div>
    </div>
  );
};

export default CompanyDetails;
