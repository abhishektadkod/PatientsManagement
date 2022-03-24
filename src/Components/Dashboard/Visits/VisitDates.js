import React from 'react';
import './Visits.css';

const VisitDates = (props) => {
    return (
        <div>
            <div className="visitDate" style={{ fontWeight: "bold", backgroundColor: "white", color: 'black', padding: "20px", borderRadius: "20px" , display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

                <span style={{ fontSize: "30px" }}> Stomach Infection</span>
                <span>
                    <span>12-10-2021</span><br/>
                    <span style={{ fontWeight: "lighter", letterSpacing: "2px" }}> Sunday</span>
                </span>
                <br />
                <div style={{ fontSize: "20px" }} className="btn btn-outline-dark" onClick={()=>props.setOn(!props.on)}>Prescription</div>

            </div>
            <hr />
        </div>
    );
};

export default VisitDates;