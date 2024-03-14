import "./media-classifier.css";

const MediaClassifier = ({
  image18,
  creatingStreamlinedSafegu,
  arrowsDirectionsRight,
}) => {
  return (
    <div className="media-classifier">
      <img className="image-18-icon" loading="lazy" alt="" src={image18} />
      <div className="content1">
        <div className="creating-streamlined-safeguard">
          {creatingStreamlinedSafegu}
        </div>
        <div className="value-sorter">
          <div className="readmore">Readmore</div>
          <img
            className="arrows-directionsright3"
            loading="lazy"
            alt=""
            src={arrowsDirectionsRight}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaClassifier;
