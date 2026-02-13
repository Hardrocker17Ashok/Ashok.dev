import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <h1 className="loader-logo">Ashok Sharma</h1>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
