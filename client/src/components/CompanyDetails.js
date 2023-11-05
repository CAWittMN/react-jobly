import JobCard from "./JobCard";

const CompanyDetails = ({ company }) => {
  const { name, description, jobs } = company;
  return (
    <div className="CompanyDetails">
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>Jobs at {name}</h2>
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
};

export default CompanyDetails;
