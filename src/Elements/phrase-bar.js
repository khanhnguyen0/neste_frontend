import React from 'react';

const PhraseBar = (props) =>{
  const {current_team} = props;
  // console.log(current_team)
  const team = ["sus","fin","sec","sup","bio"];
  const index = team.indexOf(current_team.toLowerCase());
  return (
    <div className = "phrase-bar">
      <div className = {`phrase-bar-item Sus ${index==0?"active":index>0?"actived":"inactive"}`}>
        <p>Sus</p>
      </div>

      <div className = {`phrase-bar-item fin ${index==1?"active":index>1?"actived":"inactive"}`}>
        <p>Fin</p>
      </div>

      <div className = {`phrase-bar-item sec ${index==2?"active":index>2?"actived":"inactive"}`}>
        <p>Sec</p>
      </div>

      <div className = {`phrase-bar-item sup ${index==3?"active":index>3?"actived":"inactive"}`}>
        <p>Sup</p>
      </div>

      <div className = {`phrase-bar-item bio ${index==4?"active":index>4?"actived":"inactive"}`}>
        <p>Bio</p>
      </div>
    </div>
  )
}

export default PhraseBar;
