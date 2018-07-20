import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import Quotes from "./../Trusted/Quotes";
import PlayIcon from "svg-react-loader?name=PlayIcon!../../../assets/img/layout/playButton.svg";
import clientData from "./../../data/clients";

class TrustedSection extends Component {
  constructor() {
    super();
    this.state = {};
    this.doOpenModal = this.doOpenModal.bind(this);
    this.doCloseModal = this.doCloseModal.bind(this);
  }
  doOpenModal() {
    this.props.openModal();
  }

  doCloseModal() {
    this.props.closeModal();
  }
  render() {
    var ClientBoxList = clientData.clientBoxes.map((box, index) => (
      <div className="logoRoller" id={"logoRoller" + index} key={"box" + box.id}>
        {box.clients.map((client, index) => (
          <span key={"client" + index}>
            {client.icon}
            <p className="detailBox">{client.quote}</p>
          </span>
        ))}
      </div>
    ));

    return (
      <section id="trustedby">
        <h2>trusted by</h2>
        <Quotes />
        <div className="trustedGrid">
          <Modal
            isOpen={this.props.modalOpen}
            onRequestClose={this.doCloseModal}
            contentLabel="Video Modal"
            className="modal"
            overlayClassName="overlay"
            onClick={this.doCloseModal}
          >
            <a className="close" onClick={this.doCloseModal} />
            <ReactPlayer url="https://vimeo.com/277716867" className="video" />
          </Modal>
          <div className="trustedVideo" onClick={() => this.props.openModal()}>
            <div className="trustedImage">
              <PlayIcon />
            </div>
            <p>what our clients say about us</p>
          </div>
          {ClientBoxList}   
        </div>
      </section>
    );
  }
}

export default TrustedSection;
