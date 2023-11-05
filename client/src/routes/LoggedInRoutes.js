import CompaniesListPage from "./CompaniesListPage";
import CompanyDetailsPage from "./CompanyDetailsPage";
import JobsListPage from "./JobsListPage";
import JobDetailsPage from "./JobDetailsPage";
import UserProfilePage from "./UserProfilePage";
import { Route } from "react-router-dom";

const LoggedInRoutes = () => {
  return (
    <>
      <Route exact path="/companies" element={<CompaniesListPage />} />
      <Route exact path="/companies/:handle" element={<CompanyDetailsPage />} />
      <Route exact path="/jobs" element={<JobsListPage />} />
      <Route exact path="/jobs/:id" element={<JobDetailsPage />} />
      <Route exact path="/profile" element={<UserProfilePage />} />
    </>
  );
};

export default LoggedInRoutes;
