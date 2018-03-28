import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Instafeed from 'react-instafeed';


class Home extends Component {
  render() {
      const instafeedTarget = 'instafeed';
    return (
      <div className='home-container'>
        <div className='link-container'>
          <span className="description">
            Welcome to Turing Salaries where you
            can view data from past Turing graduates.
          </span>
          <div className="button-area">
            <NavLink className='home-nav'
              to='/viewsalary'>Browse Salaries</NavLink>
            <NavLink className='charts-nav'
              to='/viewline'>2015 & 2016 Salaries</NavLink>
            <NavLink className='charts-nav'
              to='/viewPie'>Jobs Titles of Grads</NavLink>
            <NavLink className='charts-nav'
              to='/viewBar'>How many days to hire?</NavLink>
          </div>
        </div>
        <h2>Recent Instagram Posts</h2>
        <div class='insta-container'
           id={instafeedTarget}>
          <Instafeed
            limit='10'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={instafeedTarget}
            template=''
            userId='295628134'
            clientId='clientIdInstagramApiString'
            accessToken='295628134.17babc8.7801cc7efb6d462dacfbf4a3222c992b'
          />
        </div>
      </div>
    );
  }
}

export default Home;
