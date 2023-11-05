const JobDetails = ({ job }) => {
  const { title, salary, equity, companyHandle } = job;
  return (
    <div className="JobDetails">
      <h1>{title}</h1>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <p>Company: {companyHandle}</p>
    </div>
  );
};

export default JobDetails;
