import React, { Component } from "react";
import HamburgerIcon from "./../../assets/img/layout/hamburger.svg";
import DesignSuccess from "./../../assets/img/layout/designSuccess.svg";
import DesignSuccessMobile from "./../../assets/img/layout/designSuccessMobile.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relative: false,
      menuToggled: false
    };
    this.navScrollMagic = this.navScrollMagic.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.doHideNav = this.doHideNav.bind(this);
  }

  toggleMenu() {
    this.setState({ menuToggled: !this.state.menuToggled });
    document.body.classList.toggle("restrictBody");
    document.addEventListener("touchstart", this.touchstart);
    document.addEventListener("touchmove", this.touchmove);
    function touchstart(e) {
      e.preventDefault();
    }
    function touchmove(e) {
      e.preventDefault();
    }
    this.props.closeModal();
  }
  doHideNav() {
    this.setState({ menuToggled: false });
    document.body.classList.remove("restrictBody");
    document.removeEventListener("touchstart", this.touchstart);
    document.removeEventListener("touchmove", this.touchmove);
    this.props.closeModal();
  }

  componentDidMount() {
    if (typeof this.props.relativePath !== "undefined") {
      this.setState({ relative: true }, () => this.navScrollMagic());
    } else {
      this.navScrollMagic();
    }
  }

  doScrollToHome() {
    this.props.closeModal();
    this.props.closeStep();
    if (typeof this.props.scrollToHome !== "undefined") {
      event.preventDefault();
      this.props.scrollToHome();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#home");
      }
    }
  }

  doScrollToAbout() {
    this.props.closeModal();
    this.props.closeStep();
    if (typeof this.props.scrollToAbout !== "undefined") {
      event.preventDefault();
      this.props.scrollToAbout();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#about");
      }
    }
  }

  doScrollToBio() {
    this.props.closeModal();
    this.props.closeStep();
    if (typeof this.props.scrollToBio !== "undefined") {
      event.preventDefault();
      this.props.scrollToBio();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#bio");
      }
    }
  }

  doScrollToSteps() {
    this.props.closeModal();
    this.props.closeStep();
    if (typeof this.props.scrollToSteps !== "undefined") {
      event.preventDefault();
      this.props.scrollToSteps();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#steps");
      }
    }
  }

  doScrollToTrusted() {
    this.props.closeModal();
    this.props.closeStep();
    if (typeof this.props.scrollToTrusted !== "undefined") {
      event.preventDefault();
      this.props.scrollToTrusted();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#trustedby");
      }
    }
  }
  doScrollToEngage() {
    this.props.closeModal();
    this.props.closeStep();
    if (typeof this.props.scrollToEngage !== "undefined") {
      event.preventDefault();
      this.props.scrollToEngage();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#engage");
      }
    }
  }

  navScrollMagic() {
    var controllerX = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 0 }
    });
    var logoScene = new ScrollMagic.Scene({
      triggerElement: "body",
      offset: 20
    })
      .setClassToggle("header", "headerScroll")
      .addTo(controllerX);
  }

  render() {
    var baseUrl = this.state.relative ? this.props.relativePath : "";
    var active = this.state.menuToggled ? "active" : "";

    return (
      <header>
        <div className="headerWrapper">
          <a
            href={"https://designsuccess.com"}
            className="hideText"
          >
            <DesignSuccess className="designSuccessLogo" />
            <DesignSuccessMobile className="designSuccessLogoMobile" />
            design:success
          </a>

          <a
            onClick={() => {
              this.doHideNav();
              this.doScrollToHome(event);
            }}
            href={baseUrl + "#home"}
            className="hideTextd"
          >
            kim norland
          </a>

          <HamburgerIcon
            id="hamburger"
            className={active}
            onClick={() => this.toggleMenu()}
          />
          <nav className={active} onClick={() => this.closeNav()}>
            <ul>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToAbout();
                }}
              >
                <a href={baseUrl + "#about"}>about</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToBio();
                }}
              >
                <a href={baseUrl + "#bio"}>bio</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToSteps();
                }}
              >
                <a href={baseUrl + "#steps"}>steps to success</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToTrusted();
                }}
              >
                <a href={baseUrl + "#trustedby"}>trusted by</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToEngage();
                }}
              >
                <a href={baseUrl + "#engage"}>engage</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
