import React from 'react';
import Risk from './risk-bar.js'
import PhraseBar from './phrase-bar'


const theme = {
    uco: {
        r: 93,
        g: 141,
        b: 152
    },
    af: {
        r: 224,
        g: 188,
        b: 83
    },
    pfad: {
        r: 105,
        g: 188,
        b: 98
    },
    tco: {
        r: 105,
        g: 188,
        b: 98
    },
    pes: {
        r: 82,
        g: 102,
        b: 172
    },
    sbeo: {
        r: 132,
        g: 94,
        b: 164
    },
    cpo: {
        r: 132,
        g: 94,
        b: 164
    },
    top: {
        r: 223,
        g: 98,
        b: 144
    }
};

const AuditingApplicationCard = (props)=>{
  const {code,attachment,risk,doc_fulfilled,latest_update, current_team, cert_no} = props;
  let color = theme[code.split('.')[0].toLowerCase()];
  color = `rgb(${color.r},${color.g},${color.b})`
  return (
    <div className = "application-card" style = {{borderLeftColor:color}}>
      <p>{latest_update}</p>
      <div id="info-row">
        <div id = "application-code">

          <p>{code}</p>
        </div>
        <div>

          <p><i className="fa fa-file-text-o" aria-hidden="true"></i> {cert_no}/{cert_no+Math.floor(Math.random()*2)}</p>
        </div>
        <div>
          <p><i className="fa fa-paperclip" aria-hidden="true"></i> {doc_fulfilled}/{doc_fulfilled+Math.floor(Math.random()*2)}</p>

        </div>
      </div>
      <Risk value = {risk}/>
      <PhraseBar current_team = {current_team} />
    </div>
  )
}

export default AuditingApplicationCard;
