import React from 'react';

const SupplierRow = (props) =>{
  let {code,start_date,end_date,expired_certification_no,selectSupplier} = props;
  start_date = new Date(start_date)
  let s = `${start_date.getDate()>9?start_date.getDate():'0'+start_date.getDate()}-${start_date.getMonth()>9?start_date.getMonth():'0'+start_date.getMonth()}-${start_date.getFullYear()}`

  end_date = new Date(end_date)
  let e = `${end_date.getDate()>9?end_date.getDate():'0'+end_date.getDate()}-${end_date.getMonth()>9?end_date.getMonth():'0'+end_date.getMonth()}-${end_date.getFullYear()}`
  return (
    <div className = "supplier-row" onClick = {()=>{selectSupplier(code)}}>
      <div className = "code">
        <p>{code}</p>
      </div>

      <div className = "date">
        <p>Start: {s}</p>
      </div>

      <div className = "date">
        <p>End: {e}</p>
      </div>
      <div className = "expired">
      {expired_certification_no>0?<i className="fa fa-exclamation" aria-hidden="true"></i>:null}
    </div>
    </div>
  )
}

export default SupplierRow;
