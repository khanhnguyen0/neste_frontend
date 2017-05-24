import React from 'react';
import _ from 'lodash'
import SupplierRow  from './supplier-row';

const SupplierList = (props) =>{
  const {list, selectSupplier,theme} = props;
  const orderedList = _.sortBy(list,'expired_certification_no').reverse();
  let {r,g,b} = theme;
  let color = `rgb(${r},${g},${b})`;
  return (
    <div>
      <h3>Supplier List</h3>
    <div className = "supplier-list" >
      {orderedList.map((s,k)=><SupplierRow {...s} key = {k} selectSupplier = {selectSupplier} color = {color}/>)}
    </div>
  </div>
  )
}

export default SupplierList;
