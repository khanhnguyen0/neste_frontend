import React from 'react';

const Risk = (props) => {
    const {value} = props;
    let a = [];
    for (var i = 0; i < value-1; i++) {
        a.push(
            <div className="risk-bar" key = {i}></div>
        )
      }
    return (
        <div className = "risk">
            <p>Risk :</p>
            {a}
        </div>
    )
}

export default Risk;
