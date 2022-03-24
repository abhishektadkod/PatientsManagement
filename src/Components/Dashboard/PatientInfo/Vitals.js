import React from 'react';

const Vitals = (props) => {
    return (
        <div>
        <span style={{ fontWeight:"light"}}>
            {props.name}
        </span><br/>
        <span style={{ fontWeight:"bold"}}>
            {props.value}
            <span style={{ fontSize:"0.7em",fontWeight:"light"}}>
                {props.unit}
            </span>
        </span>
    </div>
    );
};

export default Vitals;