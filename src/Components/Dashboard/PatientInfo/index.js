import React from 'react';
import SpaceBetween from './SpaceBetween';
import Vitals from './Vitals';

const index = () => {
    return (
        <div>
            <div class="container m-5">

            </div>
            <h2>Contact Information</h2><hr />
            <SpaceBetween name="Address" subName="36, Subhashchandra Nagar" />

            <SpaceBetween name="Telephone Number" subName="9148301122" />

            <SpaceBetween name="E-mail" subName="abhishektadkod@gmail.com" />

            <SpaceBetween name="Way of Communication" subName="Phone" />

            <SpaceBetween name="Emergency Contact" subName="9876543210" />

            <SpaceBetween name="Caregiver" subName="Alicia" />


            <br />
            <h2>Recent Vitals</h2><hr />
            <div className="m-5">
                <div style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", fontSize: "20px" }}>
                    <Vitals name="Height" value="197" unit="CM" />

                    <Vitals name="Weight" value="197" unit="KG" />

                    <Vitals name="Mass Index" value="197" unit="BMI" />

                    <Vitals name="Fat" value="197" unit="%" />

                    <Vitals name="Temperature" value="97" unit="C" />
                </div>
            </div>
        </div>
    );
};

export default index;