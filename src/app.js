import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Elements/nav-bar';
import MenuBar from './Elements/menu-bar';
import Container from './Components/container'
import './Style/main.scss';
const App = ()=>{
  return (
    <div>
      <NavBar />
      <MenuBar />
      <Container />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
