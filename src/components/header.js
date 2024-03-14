import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="pcl">
        <span>P</span>
        <span className="cl">cl</span>
      </div>
      <div className="right-menu">
        <nav className="header-menu">
          <div className="menu">
            <div className="why-justgo">Home</div>
            <img className="expand-icon" alt="" src="/PCL-assignment/expand.svg" />
          </div>
          <div className="menu1">
            <div className="why-justgo1">Features</div>
            <img className="expand-icon1" alt="" src="/PCL-assignment/expand.svg" />
          </div>
          <div className="menu2">
            <div className="why-justgo2">Community</div>
            <img className="expand-icon2" alt="" src="/PCL-assignment/expand.svg"/>
          </div>
          <div className="menu3">
            <div className="why-justgo3">Blog</div>
            <img className="expand-icon3" alt="" src="/PCL-assignment/expand.svg" />
          </div>
          <div className="menu4">
            <div className="why-justgo4">Pricing</div>
            <img className="expand-icon4" alt="" src="/PCL-assignment/expand.svg" />
          </div>
        </nav>
        <button className="button1">
          <div className="label1">Register Now</div>
          <img
            className="arrows-directionsright1"
            alt=""
            src="/PCL-assignment/16arrows--directionsright@2x.png"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
