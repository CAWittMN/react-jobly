import CompaniesListPage from "./CompaniesListPage";
import CompanyDetailsPage from "./CompanyDetailsPage";
import JobsListPage from "./JobsListPage";
import JobDetailsPage from "./JobDetailsPage";
import UserProfilePage from "./UserProfilePage";
import Homepage from "./Homepage";
import AppliedJobsPage from "./AppliedJobsPage";
import { Route, Routes, Navigate } from "react-router-dom";

const LoggedInRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/companies" element={<CompaniesListPage />} />
      <Route exact path="/companies/:handle" element={<CompanyDetailsPage />} />
      <Route exact path="/jobs" element={<JobsListPage />} />
      <Route exact path="/jobs/:id" element={<JobDetailsPage />} />
      <Route exact path="/profile" element={<UserProfilePage />} />
      <Route exact path="/applications" element={<AppliedJobsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default LoggedInRoutes;
