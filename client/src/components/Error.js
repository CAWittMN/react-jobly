const Error = ({ errors }) => {
  return (
    <div className="Error">
      {errors.map((error) => (
        <div className="alert alert-danger" key={error}>
          {error}
        </div>
      ))}
    </div>
  );
};

export default Error;
