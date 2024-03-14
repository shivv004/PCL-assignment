import "./links.css";

const Links = () => {
  return (
    <div className="links">
      <div className="col-1">
        <div className="company">Company</div>
        <div className="list-items">
          <div className="about-us">About us</div>
          <div className="blog">Blog</div>
          <div className="contact-us">Contact us</div>
          <div className="pricing">Pricing</div>
          <div className="testimonials">Testimonials</div>
        </div>
      </div>
      <div className="col-2">
        <div className="support">Support</div>
        <div className="list-items1">
          <div className="help-center">Help center</div>
          <div className="terms-of-service">Terms of service</div>
          <div className="legal">Legal</div>
          <div className="privacy-policy">Privacy policy</div>
          <div className="status">Status</div>
        </div>
      </div>
      <div className="col-3">
        <div className="stay-up-to">Stay up to date</div>
        <div className="email-input-field">
          <div className="input-field-bg" />
          <input
            className="your-email-address"
            placeholder="Your email address"
            type="text"
          />
          <div className="polygon-splitter">
            <img
              className="essential-icons-send"
              alt=""
              src="/PCL-assignment/essential-icons--send.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
