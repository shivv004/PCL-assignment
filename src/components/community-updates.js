import MediaClassifier from "./media-classifier";
import "./community-updates.css";

const CommunityUpdates = () => {
  return (
    <div className="community-updates">
      <div className="community2">
        <div className="section-title3">Caring is the new marketing</div>
        <div className="description3">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </div>
      </div>
      <div className="text-combiner">
        <MediaClassifier
          image18="/PCL-assignment/image-18@2x.png"
          creatingStreamlinedSafegu="Creating Streamlined Safeguarding Processes with OneRen"
          arrowsDirectionsRight="/PCL-assignment/24arrows--directionsright-1@2x.png"
        />
        <MediaClassifier
          image18="/PCL-assignment/image-19@2x.png"
          creatingStreamlinedSafegu="What are your safeguarding responsibilities and how can you manage them?"
          arrowsDirectionsRight="/PCL-assignment/24arrows--directionsright-2@2x.png"
        />
        <MediaClassifier
          image18="/PCL-assignment/image-20@2x.png"
          creatingStreamlinedSafegu="Revamping the Membership Model with Triathlon Australia"
          arrowsDirectionsRight="/PCL-assignment/24arrows--directionsright-3@2x.png"
        />
      </div>
    </div>
  );
};

export default CommunityUpdates;
