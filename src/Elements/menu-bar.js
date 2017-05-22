import React from 'react';

const MenuBar = (props) =>{
  return (
    <div className = "menubar">
      <div className = "menubar-item" onClick = {()=>{
          props.changeInterface('application');
        }}>
        <h3>
          New Application
        </h3>
      </div>
      <div className = "menubar-item" onClick = {()=>{
          props.changeInterface('supplier');
        }}>
        <h3>
          Supplier performance
        </h3>
      </div>
    </div>

  )
}

export default MenuBar;
