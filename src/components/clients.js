import "./clients.css";

const Clients = () => {
  return (
    <div className="clients">
      <div className="clients1">
        <div className="section-title">Our Clients</div>
        <div className="description">
          We have been working with some Fortune 500+ clients
        </div>
      </div>
      <div className="clients-logos">
        <img className="logo-icon" loading="lazy" alt="" src="/PCL-assignment/logo.svg" />
        <img className="logo-icon1" loading="lazy" alt="" src="/PCL-assignment/logo-1.svg" />
        <img className="logo-icon2" loading="lazy" alt="" src="/PCL-assignment/logo-2.svg" />
        <img className="logo-icon3" loading="lazy" alt="" src="/PCL-assignment/logo-3.svg" />
        <img className="logo-icon4" loading="lazy" alt="" src="/PCL-assignment/logo-4.svg" />
        <img className="logo-icon5" loading="lazy" alt="" src="/PCL-assignment/logo-5.svg" />
        <img className="logo-icon6" loading="lazy" alt="" src="/PCL-assignment/logo-6.svg" />
      </div>
    </div>
  );
};

export default Clients;
