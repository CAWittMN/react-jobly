import CompanyCard from "./CompanyCard";

const CompaniesList = ({ companies }) => {
  return (
    <div className="CompaniesList container-sm shadow mt-3 rounded-4 p-3">
      {companies.map((company) => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );
};

export default CompaniesList;
