import React from 'react';
import _ from 'lodash'
import SupplierRow  from './supplier-row';

const SupplierList = (props) =>{
  const {list, selectSupplier} = props;
  const orderedList = _.sortBy(list,'expired_certification_no').reverse();

  return (
    <div className = "supplier-list">
      {orderedList.map((s,k)=><SupplierRow {...s} key = {k} selectSupplier = {selectSupplier}/>)}
    </div>
  )
}

export default SupplierList;
