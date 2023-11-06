import JobCard from "./JobCard";

const AppliedJobsList = ({ jobs }) => {
  return (
    <div className="AppliedJobsList">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobsList;
