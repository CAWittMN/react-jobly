const JobCard = ({ job }) => {
  const { title, salary, equity, companyHandle } = job;
  return (
    <div className="JobCard">
      <h2>{title}</h2>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <p>Company: {companyHandle}</p>
    </div>
  );
};

export default JobCard;
