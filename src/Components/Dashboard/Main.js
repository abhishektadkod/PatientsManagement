import React from 'react';
import './Main.css';
import PatientInfo from './PatientInfo' 
import Visits from './Visits';

function Main(props) {
    return (
        <div className="main shadow-lg bg-white">
            <div class="container">
                <div style={{ height: "5vh" }}></div>
                <div class="row">
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-2">
                        <div class="">
                            <img class="card-img-top" src="https://source.unsplash.com/water" alt="" style={{ borderRadius: "50%", height: "100px", width: "100px" }} />
                        </div>
                    </div>
                    <div class="col-md-5">
                        <h1 class="">Abhishek Tadkod</h1>
                        <h4 >Stomach Infection</h4>
                    </div>
                    <div class="col-md-4">
                        <button type="button" class="btn btn-light rounded-75"><span class="material-icons-sharp bg-dark text-light rounded-circle">
                            add
                        </span>
                            &nbsp;Add new Prescription</button>
                    </div>
                </div>

                <div style={{ height: "5vh" }}></div>
                <div class="container">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist" style={{ width: "100%", background:"#ccd4e0", display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Patient Info</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Visits</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><PatientInfo/></div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><Visits/></div>
                </div>
                </div>
               
            </div>
        </div>
    );
}

export default Main;