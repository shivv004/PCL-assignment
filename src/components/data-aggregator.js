import "./data-aggregator.css";

const DataAggregator = () => {
  return (
    <section className="data-aggregator">
      <div className="achievements">
        <div className="section-heading">
          <div className="section-heading1">
            <div className="section-title2">
              <span>{`Helping a local `}</span>
              <span className="business-reinvent-itself">
                business reinvent itself
              </span>
            </div>
          </div>
          <div className="description2">
            We reached here with our hard work and dedication
          </div>
        </div>
        <div className="counts">
          <div className="row-1">
            <div className="variable-node">
              <img className="icon3" loading="lazy" alt="" src="/PCL-assignment/icon-3.svg" />
              <div className="details">
                <b className="number">2,245,341</b>
                <div className="label4">Members</div>
              </div>
            </div>
            <div className="parallel-flow">
              <img className="icon4" loading="lazy" alt="" src="/PCL-assignment/icon-4.svg" />
              <div className="details1">
                <b className="number1">46,328</b>
                <div className="label5">Clubs</div>
              </div>
            </div>
          </div>
          <div className="row-2">
            <div className="div">
              <img className="icon5" loading="lazy" alt="" src="/PCL-assignment/icon-5.svg" />
              <div className="details2">
                <b className="number2">828,867</b>
                <div className="label6">Event Bookings</div>
              </div>
            </div>
            <div className="div1">
              <img className="icon6" loading="lazy" alt="" src="/PCL-assignment/icon-6.svg" />
              <div className="details3">
                <b className="number3">1,926,436</b>
                <div className="label7">Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAggregator;
