import React, { Component } from "react";

class CV extends Component {
  render() {
      if (this.props.resumeBasicInfo) {
        var sectionName = this.props.resumeBasicInfo.section_name.cv;
      }

    return (
        <div className="cta"><a  className="download-cv-btn" href="/Avinoam_Ashkenazy_cv_fs.pdf" download>
            {sectionName}
        </a></div>
    );
  }
}

export default CV;
