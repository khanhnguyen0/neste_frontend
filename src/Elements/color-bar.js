import React from 'react';

const ColorBar = () => {
    return (
        <div className="color-bar">
            <div className="color-bar column">
                <div className= "color-code" id = "af">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <h3>AF & FF</h3>
                    <p>Animal fat and Fish fat</p>
                </div>
                <div className= "color-code" id = "pfad">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <h3>PFAD</h3>
                    <p>Palm fatty acid distillate</p>
                </div>
                <div className= "color-code" id = "uco">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <h3>UCO</h3>
                    <p>Used cooking oil</p>
                </div>
                <div className= "color-code" id = "tco">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <h3>TCO</h3>
                    <p>Technical corn oil</p>
                </div>

            </div>

            <div className="color-bar column" id = "pes">
                <div className= "color-code">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <h3>PES</h3>
                    <p>Palm effluent sludge</p>
                </div>
                <div className= "color-code" id = "sbeo">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <h3>SBEO</h3>
                    <p>Spent bleaching earth oil</p>
                </div>
                <div className= "color-code" id = "cpo">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <h3>CPO</h3>
                    <p>Crude palm oil</p>
                </div>
                <div className= "color-code" id = "top">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <h3>TOP</h3>
                    <p>Tall oil pitch</p>
                </div>

            </div>

            <div className="color-bar column">
                <div className= "color-code" id ="await">
                    <i className="fa fa-square" aria-hidden="true"></i>
                    <i className="fa fa-circle-o" aria-hidden="true"></i>
                    <p>Await</p>
                </div>

                <div className= "color-code" id = "process">
                    <i className="fa fa-square" aria-hidden="true"></i>
                    <i className="fa fa-circle-o" aria-hidden="true"></i>
                    <p>In progress</p>
                </div>

                <div className= "color-code" id = "pass">
                    <i className="fa fa-square" aria-hidden="true"></i>
                    <i className="fa fa-circle-o" aria-hidden="true"></i>
                    <p>Pass</p>
                </div>

                <div className= "color-code" id = "deny">
                    <i className="fa fa-square" aria-hidden="true"></i>
                    <i className="fa fa-circle-o" aria-hidden="true"></i>
                    <p>Deny</p>
                </div>

            </div>

            <div className="color-bar column">
                <div className= "color-code">
                    <div id = "very-high-risk"></div>
                    <p>
                        Very High risk
                    </p>
                </div>

                <div className= "color-code">
                    <div id = "high-risk"></div>
                    <p>
                        High risk
                    </p>
                </div>

                <div className= "color-code">
                    <div id ="low-risk"></div>
                    <p>Low risk</p>
                </div>

                <div className= "color-code">
                    <div id = "very-low-risk"></div>
                    <p>Very low risk</p>
                </div>

            </div>
        </div>
    )
}

export default ColorBar;
