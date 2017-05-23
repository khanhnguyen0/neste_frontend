import React from 'react';

const SupplierCategory = (props)=>{
  const {selectCategory, selectedCategory} = props;

  return (
    <div className = "supplier-bar">
    <div className = "supplier-category">
    </div>
    <div className = "supplier-category">
      <div className = {`supplier-category-item ${selectedCategory=='af'?"selected":""}`} onClick = {()=>{selectCategory('af')}}>
        <p>AF & FF</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='pfad'?"selected":""}`} onClick = {()=>{selectCategory('pfad')}}>
        <p>PFAD</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='uco'?"selected":""}`} onClick = {()=>{selectCategory('uco')}}>
        <p>UCO</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='tco'?"selected":""}`} onClick = {()=>{selectCategory('tco')}}>
        <p>TCO</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='pes'?"selected":""}`} onClick = {()=>{selectCategory('pes')}}>
        <p>PES</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='sbeo'?"selected":""}`} onClick = {()=>{selectCategory('sbeo')}}>
        <p>SBEO</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='cpo'?"selected":""}`} onClick = {()=>{selectCategory('cpo')}}>
        <p>CPO</p>
      </div>
      <div className = {`supplier-category-item ${selectedCategory=='top'?"selected":""}`} onClick = {()=>{selectCategory('top')}}>
        <p>TOP</p>
      </div>
    </div>
  </div>
  )
}

export default SupplierCategory
