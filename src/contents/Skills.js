import React, { Component } from 'react'
class Skills extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      frontends:[{skill:'HTML',icon:'devicon-html5-plain-wordmark'}, {skill:'CSS',icon:'devicon-css3-plain-wordmark'}, {skill:'React.js',icon:'fab fa-react'}],
      backends:[{skill:'Python',icon:'fab fa-python'}, {skill:'Java',icon:'fab fa-java'}, {skill:'C#',icon:'devicon-csharp-line'}, {skill:'C',icon:'devicon-c-line-wordmark'}],
      developTools:[{skill:'Git',icon:'devicon-git-plain'}, {skill:'Atom',icon:'devicon-atom-original colored'}, {skill:'IntelliJ',icon:'devicon-intellij-plain'}, {skill:'Visual Studio',icon:'devicon-visualstudio-plain'}, {skill:'Linux',icon:'devicon-linux-plain'}]
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">Skills</h1>

        <div className="frontend">
          <h2>Front-end</h2>
            {this.state.frontends.map((value, index) => (
              <i class={value.icon} title={value.skill}></i>
            ))}
        </div>

        <div className="backend">
          <h2>Back-end</h2>
            {this.state.backends.map((value, index) => (
              <i class={value.icon} title={value.skill}></i>
            ))}
        </div>

        <div className="developTools">
          <h2>Develop Tools</h2>
            {this.state.developTools.map((value, index) => (
              <i class={value.icon} title={value.skill}></i>
            ))}
        </div>


      </div>
    )
  }
}
export default Skills
