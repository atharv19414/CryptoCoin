import React from "react";
import MNavBar from "../../ui_components/MNavBar";
import MForm from "../../ui_components/MForm";

class Initiate extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <MNavBar />
        <h2 className="h2-common">Initiate a Project</h2>
        <MForm />
      </div>
    );
  }
}

export default Initiate;