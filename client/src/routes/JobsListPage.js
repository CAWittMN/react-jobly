import JobsList from "../components/JobsList";
import LoadingIcon from "../components/LoadingIcon";
import JobSearchForm from "../components/JobSearchForm";
import JoblyApi from "../api";
import { useState, useEffect } from "react";

const JobsListPage = () => {
  const [jobs, setJobs] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    const getJobs = async () => {
      const jobs = await JoblyApi.getJobs(searchQuery);
      setJobs(jobs);
    };
    getJobs();
  }, [searchQuery]);

  const search = async (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="JobsListPage">
      <JobSearchForm
        fields={["minSalary", "hasEquity", "title"]}
        search={search}
      />
      {jobs ? <JobsList jobs={jobs} /> : <LoadingIcon />}
    </div>
  );
};

export default JobsListPage;
