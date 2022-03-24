import React, { useState } from 'react';
import Aside from './Aside';
import './Dashboard.css';
import Main from './Main';

function Dashboard(props) {
    return (
        <div className="dashboard">
            <div className="container-fluid patient ">
                <div class="row">
                    <div className="patientList col-md-3" >
                        <Aside/>
                    </div>
                    <div className="patientInfo col-md-9" >
                        <Main />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;