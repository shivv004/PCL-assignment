import Header from "../components/header";
import HeroSection from "../components/hero-section";
import Clients from "../components/clients";
import Community from "../components/community";
import SqrtNode from "../components/sqrt-node";
import DataAggregator from "../components/data-aggregator";
import SwitchNode from "../components/switch-node";
import Customers from "../components/customers";
import CommunityUpdates from "../components/community-updates";
import CompanyInfo from "../components/company-info";
import Links from "../components/links";
import "./landing-page.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="input-parser">
        <Header />
        <div className="home">
          <HeroSection />
          <Clients />
          <Community />
        </div>
      </section>
      <SqrtNode />
      <DataAggregator />
      <SwitchNode />
      <section className="output-formatter">
        <Customers />
        <CommunityUpdates />
      </section>
      <section className="function-queue">
        <div className="decision-tree">
          <div className="let-nextcent-do">
            Lorem ipsum dolor sit amet consectetuer
          </div>
          <div className="output-formatter1">
            <button className="button">
              <div className="label">Get a Demo</div>
              <div className="media-merger">
                <img
                  className="arrows-directionsright"
                  alt=""
                  src="/PCL-assignment/16arrows--directionsright-1@2x.png"
                />
              </div>
            </button>
          </div>
        </div>
        <footer className="footer-big-4">
          <CompanyInfo />
          <Links />
        </footer>
      </section>
    </div>
  );
};

export default LandingPage;
