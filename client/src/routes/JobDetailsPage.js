import JobDetails from "../components/JobDetails";
import JoblyApi from "../api";
import LoadingIcon from "../components/LoadingIcon";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const getJob = async () => {
      const job = await JoblyApi.getJob(id);
      setJob(job);
    };
    getJob();
  }, [id]);

  return (
    <div className="JobDetailsPage">
      {job ? <JobDetails job={job} /> : <LoadingIcon />}
    </div>
  );
};

export default JobDetailsPage;
