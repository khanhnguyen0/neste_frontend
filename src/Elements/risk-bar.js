import React from 'react';

const Risk = (props) => {
    const {value} = props;
    // let a = [];
    let width = value/5*80 + "%";
    const color = ["#b64a4a","#bb7b4c","#b5bf51","#88bb50","#88bb50"]
    return (
        <div className = "risk">
            <p>Risk: </p>
            <div className = "risk-bar" style = {{"width":width,"backgroundColor":color[5-value]}}>
            </div>
        </div>
    )
}

export default Risk;
