import React from 'react';

const SupplierCategory = (props)=>{
  const {selectCategory} = props;

  return (
    <div className = "supplier-bar">
    <div className = "supplier-category">
    </div>
    <div className = "supplier-category">
      <div className = "supplier-category-item" onClick = {()=>{selectCategory('af')}}>
        <p>AF & FF</p>
      </div>
      <div className = "supplier-category-item" onClick = {()=>{selectCategory('pfad')}}>
        <p>PFAD</p>
      </div>
      <div className = "supplier-category-item" onClick = {()=>{selectCategory('uco')}}>
        <p>UCO</p>
      </div>
      <div className = "supplier-category-item" onClick = {()=>{selectCategory('tco')}}>
        <p>TCO</p>
      </div>
      <div className = "supplier-category-item" onClick = {()=>{selectCategory('pes')}}>
        <p>PES</p>
      </div>
      <div className = "supplier-category-item" onClick = {()=>{selectCategory('sbeo')}}>
        <p>SBEO</p>
      </div>
      <div className = "supplier-category-item" onClick = {()=>{selectCategory('cpo')}}>
        <p>CPO</p>
      </div>
      <div className = "supplier-category-item" onClick = {()=>{selectCategory('top')}}>
        <p>TOP</p>
      </div>
    </div>
  </div>
  )
}

export default SupplierCategory
