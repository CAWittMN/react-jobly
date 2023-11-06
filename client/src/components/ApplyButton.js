import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";

const ApplyButton = ({ jobId }) => {
  const { applyToJob, hasAppliedTo } = useContext(CurrentUserContext);

  const handleClick = () => {
    applyToJob(jobId);
  };

  return (
    <button
      className="btn btn-success"
      onClick={handleClick}
      disabled={hasAppliedTo(jobId)}
    >
      Apply
    </button>
  );
};

export default ApplyButton;
