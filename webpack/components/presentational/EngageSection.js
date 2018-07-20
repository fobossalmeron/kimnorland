import React, { Component } from "react";
import ContactForm from "./../ContactForm";
import DesignSuccess from "svg-react-loader?name=DigitalSuccessIcon!../../../assets/img/layout/designSuccess.svg";
import LocationMap from "svg-react-loader?name=LocationMap!../../../assets/img/layout/locationMap.svg";
import InstagramIcon from "svg-react-loader?name=InstagramIcon!../../../assets/img/social/instagram.svg";
import FacebookIcon from "svg-react-loader?name=FacebookIcon!../../../assets/img/social/facebook.svg";
import VimeoIcon from "svg-react-loader?name=VimeoIcon!../../../assets/img/social/vimeo.svg";
import YouTubeIcon from "svg-react-loader?name=YouTubeIcon!../../../assets/img/social/youtube.svg";
import LinkedInIcon from "svg-react-loader?name=LinkedInIcon!../../../assets/img/social/linkedin.svg";
import TwitterIcon from "svg-react-loader?name=TwitterIcon!../../../assets/img/social/twitter.svg";

class EngageSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id="contact">
        <DesignSuccess className="engageLogo" />
        <h2>challenges welcome</h2>
        <div className="locationContact">
          <ul className="chooseList">
            <li>las vegas</li>
            <li>mexico city</li>
            <li>copenhaguen</li>
            <li>singapore</li>
          </ul>
        </div>
        <div className="locationContact">
          <p>universal number: +1-702 802 0200</p>
          <p>
            <a href="mailto:success@designsuccess.com">
              success@designsuccess.com
            </a>
          </p>
        </div>
        <ContactForm />
        <LocationMap className="locationMap" />
        <footer>
          <div className="socialList">
            <FacebookIcon className="socialIcon" />
            <VimeoIcon className="socialIcon" />
            <YouTubeIcon className="socialIcon" />
            <InstagramIcon className="socialIcon" />
            <LinkedInIcon className="socialIcon" />
            <TwitterIcon className="socialIcon" />
          </div>
          <p>
            © design success international ds worldwide consulting llc. all
            rights reserved. <a>privacy of use</a> | <a>terms & conditions</a>
          </p>
        </footer>
      </section>
    );
  }
}

export default EngageSection;
