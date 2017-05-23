import React from 'react';
import _ from 'lodash'
import SupplierRow  from './supplier-row';

const SupplierList = (props) =>{
  const {list, selectSupplier} = props;
  const orderedList = _.sortBy(list,'expired_certification_no').reverse();

  return (
    <div>
      <h3>Supplier List</h3>
    <div className = "supplier-list">
      {orderedList.map((s,k)=><SupplierRow {...s} key = {k} selectSupplier = {selectSupplier}/>)}
    </div>
  </div>
  )
}

export default SupplierList;
