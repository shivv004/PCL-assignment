import { useMemo } from "react";
import "./national-associations.css";

const NationalAssociations = ({
  icon,
  nationalAssociations,
  propAlignSelf,
  propWidth,
  propPadding,
}) => {
  const nationalAssociationsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="national-associations">
      <div className="member">
        <img className="icon" loading="lazy" alt="" src={icon} />
        <b className="national-associations1" style={nationalAssociationsStyle}>
          {nationalAssociations}
        </b>
      </div>
      <div
        className="our-membership-management-soft-wrapper"
        style={frameDivStyle}
      >
        <div className="our-membership-management">
          Our membership management software provides full automation of
          membership renewals and payments
        </div>
      </div>
    </div>
  );
};

export default NationalAssociations;
