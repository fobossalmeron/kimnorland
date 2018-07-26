import React, { Component } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import StepIcon from "./../../../assets/img/layout/step.svg";
import StepLineIcon from "./../../../assets/img/layout/stepLine.svg";

const stepsData = {
  steps: [
    {
      id: 1,
      title: "conceive it achieve it",
      video: "https://vimeo.com/145667721"
    },
    {
      id: 2,
      title: "real innovation",
      video: "https://vimeo.com/128611752"
    },
    {
      id: 3,
      title: "choose your dream team",
      video: "https://vimeo.com/140947117"
    },
    {
      id: 4,
      title: "fusion innovation",
      video: "https://vimeo.com/145667721"
    },
    {
      id: 5,
      title: "explore exploration",
      video: "https://vimeo.com/145667721"
    },
    {
      id: 6,
      title: "the power of the 3 p's",
      video: "https://vimeo.com/145667721"
    },
    {
      id: 7,
      title: "find new horizons",
      video: "https://vimeo.com/145667721"
    }
  ]
};

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStep: ""
    };
    this.doOpenStep = this.doOpenStep.bind(this);
    this.doCloseStep = this.doCloseStep.bind(this);
  }

  nextStep(selected) {
    var index = stepsData.steps.indexOf(selected);
    if (index + 2 > stepsData.steps.length) {
      var nextStepName = stepsData.steps[0];
    } else {
      var nextStepName = stepsData.steps[index + 1];
    }
    this.setState({
      selectedStep: nextStepName
    });
  }

  prevStep(selected) {
    var index = stepsData.steps.indexOf(selected);
    if (index - 1 < 0) {
      var nextStepName = stepsData.steps[stepsData.steps.length - 1];
    } else {
      var nextStepName = stepsData.steps[index - 1];
    }
    this.setState({
      selectedStep: nextStepName
    });
  }

  toggleStep(selected) {
    this.setState(
      {
        selectedStep: selected
      },
      () => this.doOpenStep()
    );
  }

  doOpenStep() {
    this.props.openStep();
  }

  doCloseStep() {
    this.props.closeStep();
  }

  render() {
    var stepsList = stepsData.steps.map((step, index) => (
      <li
        className="step"
        id={"step" + step.id}
        key={"step" + step.id}
        onClick={() => this.toggleStep(step)}
      >
        <h3>{step.id}</h3>
        <h6 dangerouslySetInnerHTML={{ __html: step.title }} />
        <StepIcon className="stepIcon" />
      </li>
    ));
    return (
      <section id="steps">
        <h2>7 steps for success</h2>
        <h5>click any number to see its video</h5>
        <ul id="stepsContainer">
          {stepsList}
          <StepLineIcon className="stepLine" />
          <Modal
            isOpen={this.props.stepOpen}
            onRequestClose={this.doCloseStep}
            contentLabel="Video Step"
            className="modal"
            overlayClassName="overlay"
            onClick={this.doCloseStep}
          >
            <a className="close" onClick={this.doCloseStep} />
            <ReactPlayer
              url={this.state.selectedStep.video}
              className="video"
            />
          </Modal>
        </ul>
      </section>
    );
  }
}

export default Steps;
