import "./hero-section.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="last-executed-script">
        <div className="text">
          <div className="lessons-and-insights-container">
            <span>{`Lessons and insights `}</span>
            <span className="from-8-years">from 8 years</span>
          </div>
          <div className="where-to-grow">
            Where to grow your business as a photographer: site or social media?
          </div>
        </div>
        <button className="button2">
          <div className="label2">Register</div>
        </button>
      </div>
      <img
        className="illustration-icon"
        loading="lazy"
        alt=""
        src="/PCL-assignment/illustration.svg"
      />
      <div className="dot">
        <div className="atan-node" />
        <div className="atan-node1" />
        <div className="atan-node2" />
      </div>
    </div>
  );
};

export default HeroSection;
