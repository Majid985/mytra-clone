const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border"
        style={{
          marginTop: "20%",
          color: "yellowgreen",
          width: "10rem",
          fontSize: "50px",
          height: "10rem",
        }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
