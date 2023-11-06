import JobCard from "./JobCard";

const JobsList = ({ jobs }) => {
  return (
    <div className="JobsList container">
      <h1 className="display-3">Jobs</h1>
      <div className="container shadow px-5">
        {jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default JobsList;
