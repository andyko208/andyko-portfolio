import React, { Component } from 'react';
import Social from '../components/Social'
import profilepic from '../img/profilePic(head).jpg';
class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <div class="profilepic">
        <img src={profilepic}></img>
        </div>
        <div class="profile">
          <h2>Hello!</h2>
          <h2>This is Kyung Myung (Andy) Ko's portfolio website.</h2>
          <Social />
        </div>
        <div>
          <div className="updates">
            <h1>Updates 20.12.29</h1>
            <ul>
              <li><h3>Updated GPA in Education tab</h3></li>
              <li><h3>Added "Caterpillar ML Project" item in Projects tab</h3></li>
              <li><h3>Added "react" in Skills tab</h3></li>
            </ul>
          </div>

          <div className="goals">
            <h1>Next Goals</h1>
            <ul>
              <li><h3>Track number of visitors</h3></li>
              <li><h3>Edit "Caterpillar ML Project" in Projects tab</h3></li>
            </ul>
          </div>

          <div className="resources">
            <h2>Resources</h2>
            <ul>
              <li><h4><a href="https://github.com/naaficodes/Portfolio_Website_ReactJS">template</a></h4></li>
              <li><h4><a href="https://seongmin.org">design inspired</a></h4></li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}
export default Home
