import React from 'react';

const NewApplicationCard = (props)=>{
  const {code,attachment,risk,doc_fulfilled,latest_update, cert_no} = props;
  return (
    <div className = "approved application-card">
      <p>{latest_update}</p>
      <div id="info-row">
        <div id = "application-code">

          <p>{code}</p>
        </div>
        <div>

          <p>{cert_no}</p>
        </div>
        <div>
          <p>{doc_fulfilled}</p>

        </div>
      </div>
    </div>
  )
}

export default NewApplicationCard;
