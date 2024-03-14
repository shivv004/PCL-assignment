import NationalAssociations from "./national-associations";
import "./community.css";

const Community = () => {
  return (
    <div className="community">
      <div className="community1">
        <div className="section-title1">
          Manage your entire community in a single system
        </div>
        <div className="description1">Who is Nextcent suitable for?</div>
      </div>
      <div className="modulus-node">
        <div className="membership-organizatios">
          <div className="member1">
            <div className="icon1">
              <div className="neg-node" />
              <img className="icon2" loading="lazy" alt="" src="/PCL-assignment/icon.svg" />
            </div>
            <b className="membership-organisations">Membership Organisations</b>
          </div>
          <div className="tan-node">
            <div className="our-membership-management1">
              Our membership management software provides full automation of
              membership renewals and payments
            </div>
          </div>
        </div>
        <NationalAssociations
          icon="/PCL-assignment/icon-1.svg"
          nationalAssociations="National Associations"
        />
        <NationalAssociations
          icon="/PCL-assignment/icon-2.svg"
          nationalAssociations="Clubs And Groups"
          propAlignSelf="unset"
          propWidth="10.05rem"
          propPadding="var(--padding-0) var(--padding-7xs) var(--padding-0) var(--padding-8xs)"
        />
      </div>
    </div>
  );
};

export default Community;
