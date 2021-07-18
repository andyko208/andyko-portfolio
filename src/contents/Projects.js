import React, { Component } from 'react';
import ScrollTop from '../components/ScrollTop'
import dataAnalysis from '../img/data_analysis.png';

import lolchess from '../img/lolchess.png';
import tftMatch from '../img/tft_match.png';
import aramTier from '../img/aram_tier.png';

import home from '../img/home.png';
import products from '../img/products.png';
import review from '../img/review.png';

import crazyHorse from '../img/crazyHorse.png';
class Projects extends Component
{
  render() {
    return (
      <div className="condiv projects">
        <h1 className="subtopic">Projects</h1>

        {/* Caterpillar ML Project */}
        <div className="project_item">
            <h2>Caterpillar ML Project</h2>
            <h3>August 2020 - Present</h3>
            <div className="tools">
              <i className="fab fa-python" title="Python"></i>
              <i className="icon-aws" title="Amazon Web Services (SageMaker, S3)"></i>
              <i class="icon-apache" title="Apache Parquet"></i>
            </div>
        </div>
        <div className="project_description">
          {/*<img src={dataAnalysis} className="dataAnalysis"></img>*/}
          <h3>Due to the fact that the project invovles company's assets, I am not able to post my related work on public until it's completely done...</h3>
          <p>Working with Caterpillar Inc., I have so far made progress with missing data analysis from a multivariate time-series data that is in apache parquet format, involving Python's Matplotlib, Scipy, Searborn, etc.</p>
        </div>

        <hr></hr>

        {/* Discord Python Bots */}
        <div className="project_item">
          <h2>Discord Bots</h2>

          <h3>June 2020 - October 2020</h3>
          <div className="tools">
            <i className="fab fa-python" title="Python"></i>
            <i className="fab fa-discord" title="Discord API"></i>
            <div className="bots_img">
              <img src="https://img.icons8.com/ios/100/000000/league-of-legends.png" title="League of Legends API"/>
              <img src={lolchess} className="lolchess" title="lolchess.gg"></img>
            </div>
          </div>
        </div>
        <div className="project_description">

          <div className="container">
            <a href="https://github.com/andyko208/TFT_Bot"><img src={tftMatch} className="tftMatch"></img>
            <div className="overlay">
              <div className="text"><i className="fab fa-github"></i></div>
            </div>
            </a>
          </div>
          <a href="https://discord.com/api/oauth2/authorize?client_id=709243803810136095&permissions=0&scope=bot">
            <h3>TFT-Bot</h3>
          </a>
          <p>First project with Python, started with personal interest to develop a tool for myself for better gaming experience in <a href="https://na.leagueoflegends.com/en-us/">League of Legends</a>.<br></br>
           Used web crawling method to fetch information from a third-party search website, <a href="https://lolchess.gg">lolchess.gg</a>,
          and created a UI embed to display appropriate information.</p>

          <div className="container">
            <a href="https://github.com/andyko208/ARAM-TIER-Bot"><img src={aramTier} className="aramTier"></img>
            <div className="overlay">
              <div className="text"><i className="fab fa-github"></i></div>
            </div>
            </a>
          </div>
          <a href="https://discord.com/api/oauth2/authorize?client_id=768191425560051733&permissions=0&scope=bot">
            <h3>ARAM-TIER-BOT</h3>
          </a>
          <p>Second project with Python, started with focus on improving data accessing and organizing skills from an api.<br></br>
          Fetched data from official api of <a href="https://na.leagueoflegends.com/en-us/">League of Legends</a> with HTTP request, developed a solution to
          display user's level of proficiency in this game in <a href="https://leagueoflegends.fandom.com/wiki/ARAM#:~:text=ARAM%20(or%20All%20Random%20All,single%20lane%20(All%20Mid).">ARAM</a> game mode.</p>
        </div>

        <hr></hr>

        {/* ReviewMyProudct */}
        <div className="project_item">
          <h2>ReviewMyProudct</h2>
          <h3>January 2019 - March 2019</h3>
          <div className="tools">
            <i class="devicon-csharp-plain-wordmark" title="C#"></i>
            <i class="devicon-dot-net-plain-wordmark" title=".NET Framework"></i>
            <i className="icon-azure" title="Microsoft Azure"></i>
            <i class="icon-mssql" title="Microsoft SQL Server"></i>
          </div>
        </div>
        <div className="project_description">

          <div className="container">
            <a href="https://github.com/andyko208/ReviewMyProduct"><img src={home} className="ReviewMyProudct-home"></img>
            <div className="overlay">
              <div className="text"><i className="fab fa-github"></i></div>
            </div>
            </a>
          </div>
          <p>Using asp.net as main framework and Microsoft SQL Server for the back-end, created a webpage
          for next-level communication service between consumers.<br></br>
          Because the initial development goal was not commercial, the website is not currently online. More development will be done in the future for commercial use.</p>
        </div>

        <hr></hr>

        {/* CrazyHorse */}
        <div className="project_item">
          <h2>CrazyHorse (Idle game)</h2>
          <h3>August 2018 - September 2018</h3>
          <div className="tools">
            <i className="fab fa-html5" title="HTML"></i>
            <i className="fab fa-css3" title="CSS"></i>
            <i className="fab fa-js" title="JavaScript"></i>
          </div>
        </div>
        <div className="project_description">

          <div class="container">
            <a href="https://andyko208.github.io/checkpoints/checkpoint3/"><img src={crazyHorse} className="crazyHorse"></img>
            <div className="overlay">
              <div className="text"><i class="fa fa-globe" aria-hidden="true"></i></div>
            </div>
            </a>
          </div>
          <p>One of the assignement from the Austin Coding Academy. HTML/CSS to create the background, the horse, and the bunny with the carrot (destination).
          Using JS, <br></br>calculate the horse's current speed, which is done by clicking on the rider (horse). Reach a higher speed so that the horse is able to constantly dash
          to obtain the carrot. <br></br><br></br>
          View and play on web by clicking the image above.</p>
        </div>

        <hr></hr>

        <ScrollTop />

      </div>
    )
  }
}

export default Projects
