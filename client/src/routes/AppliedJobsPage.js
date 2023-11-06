import { useState, useEffect } from "react";
import AppliedJobsList from "../components/AppliedJobsList";
import JoblyApi from "../api";
import LoadingIcon from "../components/LoadingIcon";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { Navigate } from "react-router-dom";

const AppliedJobsPage = () => {
  const { applicationIds } = useContext(CurrentUserContext);
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const getJobs = async () => {
      const jobs = await JoblyApi.getJobsFromIds(applicationIds);
      setJobs(jobs);
    };
    getJobs();
  }, [applicationIds]);

  if (applicationIds.size === 0) return <Navigate to="/" />;
  return (
    <div className="AppliedJobsPage">
      {jobs ? <AppliedJobsList jobs={jobs} /> : <LoadingIcon />}
    </div>
  );
};

export default AppliedJobsPage;
