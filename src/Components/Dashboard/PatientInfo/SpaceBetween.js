import React from 'react';

const SpaceBetween = (props) => {
    return (
        <div>
             <div style={{
                display: 'flex', flexDirection: "row",
                justifyContent: "space-between",
                color:"grey"
            }}>
                <span>
                    {props.name}
                </span>
                <span style={{color:'black'}}>
                    {props.subName}
                </span>
            </div>
            <hr/>
        </div>
    );
};

export default SpaceBetween;