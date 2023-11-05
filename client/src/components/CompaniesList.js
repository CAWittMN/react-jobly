import CompanyCard from "./CompanyCard";

const CompaniesList = ({ companies }) => {
  return (
    <div className="CompaniesList">
      {companies.map((company) => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );
};

export default CompaniesList;
