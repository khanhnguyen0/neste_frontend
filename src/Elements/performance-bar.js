import React from 'react';

const PerformanceBar = (props)=>{
  const {value,theme} = props;
  const width = value*400;
  const {r,g,b} = theme
  const color = `rgba(${r},${g},${b},${value})`
  console.log(color);
  return (
    <div className = "performance-bar" style = {{width:width+"px", "backgroundColor":color}}>
    </div>
  )
}

export default PerformanceBar;
