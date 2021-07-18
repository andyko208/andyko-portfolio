import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Education</h1>
        <Widecard major="Computer Science" comment="GPA: 3.72" school="Purdue University, West Lafayette" from="August 2019" to="Present"/>
        <Widecard major="C# .NET Web Development" comment="Gap year after HS"school="Austin Coding Academy" from="July 2018" to="March 2019"/>
      </div>
    )
  }
}
export default Education
