import React from 'react';
import logo from '../assets/Logo_EzSup.png'

const NavBar = ()=>{
  return (
    <div className = "nav-bar">
      <div id = "logo">
        <img src={logo}/>
      </div>
      <div id = "searchbox">
        <form className="searchbox" action="">
                <input type="search" placeholder="search.." />
                </form>
      </div>
      <div id = "navigation">
        <div className = "navigation-item news">
          <h3>News</h3>
        </div>
        <div className = "navigation-item create">
          <h3>Create</h3>
        </div>
        <div className = "navigation-item profile">
          <h3>Profile</h3>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
