import React from 'react';

const SupplierCategory = (props)=>{
  const {selectCategory, selectedCategory,theme} = props;
  let {r,g,b} = theme;
  let color = `rgb(${r},${g},${b})`;

  return (
    <div className = "supplier-bar">
    <div className = "supplier-category">
    </div>
    <div className = "supplier-category">
      <div className = {`supplier-category-item ${selectedCategory=='af'?"selected":""}`} onClick = {()=>{selectCategory('af')}} style={selectedCategory=='af'?{backgroundColor:color}:null}>
        <p>AF & FF</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='pfad'?"selected":""}`} onClick = {()=>{selectCategory('pfad')}} style={selectedCategory=='pfad'?{backgroundColor:color}:null}>
        <p>PFAD</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='uco'?"selected":""}`} onClick = {()=>{selectCategory('uco')}} style={selectedCategory=='uco'?{backgroundColor:color}:null}>
        <p>UCO</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='tco'?"selected":""}`} onClick = {()=>{selectCategory('tco')}} style={selectedCategory=='tco'?{backgroundColor:color}:null}>
        <p>TCO</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='pes'?"selected":""}`} onClick = {()=>{selectCategory('pes')}} style={selectedCategory=='pes'?{backgroundColor:color}:null}>
        <p>PES</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='sbeo'?"selected":""}`} onClick = {()=>{selectCategory('sbeo')}} style={selectedCategory=='sbeo'?{backgroundColor:color}:null}>
        <p>SBEO</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='cpo'?"selected":""}`} onClick = {()=>{selectCategory('cpo')}} style={selectedCategory=='cpo'?{backgroundColor:color}:null}>
        <p>CPO</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='top'?"selected":""}`} onClick = {()=>{selectCategory('top')}} style={selectedCategory=='top'?{backgroundColor:color}:null}>
        <p>TOP</p>
      </div>
    </div>
  </div>
  )
}

export default SupplierCategory
