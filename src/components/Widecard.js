import React, { Component } from 'react'
class Widecard extends Component {
  render() {
    return (
    <div className="widecard">
      <div className="eduBlock">
        <div className="school">
          <h2>{this.props.school}</h2>
          <h3>{this.props.from} - {this.props.to}</h3>
        </div>
        <h3>Major/Study: {this.props.major}</h3>
        <h3>{this.props.comment}</h3>
      </div>
    </div>
    )
  }
}
export default Widecard
