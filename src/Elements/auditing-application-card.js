import React from 'react';
import Risk from './risk-bar.js'
import PhraseBar from './phrase-bar'

const AuditingApplicationCard = (props)=>{
  const {code,attachment,risk,doc_fulfilled,latest_update, current_team, cert_no} = props;
  return (
    <div className = "application-card">
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
      <Risk value = {risk}/>
      <PhraseBar current_team = {current_team} />
    </div>
  )
}

export default AuditingApplicationCard;
