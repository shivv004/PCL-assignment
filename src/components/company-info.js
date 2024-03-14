import "./company-info.css";

const CompanyInfo = () => {
  return (
    <div className="company-info">
      <div className="logo">
        <img className="icon7" alt="" src="/PCL-assignment/icon-7.svg" />
        <img className="nexcent-icon" alt="" src="/PCL-assignment/nexcent.svg" />
      </div>
      <div className="copyright">
        <div className="copyright-2020">Copyright © 2020 Landify UI Kit.</div>
        <div className="all-rights-reserved">All rights reserved</div>
      </div>
      <div className="social-links">
        <img
          className="social-icons"
          loading="lazy"
          alt=""
          src="/PCL-assignment/social-icons.svg"
        />
        <img
          className="social-icons1"
          loading="lazy"
          alt=""
          src="/PCL-assignment/social-icons-1.svg"
        />
        <img
          className="social-icons2"
          loading="lazy"
          alt=""
          src="/PCL-assignment/social-icons-2.svg"
        />
        <img
          className="social-icons3"
          loading="lazy"
          alt=""
          src="/PCL-assignment/social-icons-3.svg"
        />
      </div>
    </div>
  );
};

export default CompanyInfo;
