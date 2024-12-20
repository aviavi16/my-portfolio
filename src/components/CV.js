import React, { Component } from "react";

class CV extends Component {
  render() {
      if (this.props.resumeBasicInfo) {
        var sectionName = this.props.resumeBasicInfo.section_name.cv;
      }

    return (
        <div className="cta"><a href="/static/media/cv.e19bcd263eabf63f3dd5.pdf" className="download-cv-btn">
            {sectionName}
        </a></div>
    );
  }
}

export default CV;
