import JobsList from "../components/JobsList";
import LoadingIcon from "../components/LoadingIcon";
import SearchForm from "../components/SearchForm";
import JoblyApi from "../api";
import { useState, useEffect } from "react";

const JobsListPage = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const getJobs = async () => {
      const jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    };
    getJobs();
  }, []);

  const search = async (title) => {
    setJobs(null);
    const jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  };

  return (
    <div className="JobsListPage">
      <SearchForm search={search} />
      {jobs ? <JobsList jobs={jobs} /> : <LoadingIcon />}
    </div>
  );
};

export default JobsListPage;
