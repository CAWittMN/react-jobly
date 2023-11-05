import JobCard from "./JobCard";

const JobsList = ({ jobs }) => {
  return (
    <div className="JobsList">
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  );
};

export default JobsList;
