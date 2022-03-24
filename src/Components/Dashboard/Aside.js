import React from 'react';
import './Aside.css';

function PatientCard(props) {
    return (
        <div className="p-2 haha">
            <div class="row" >
                <div className='col-md-3'><img src="https://source.unsplash.com/water" alt="..." style={{ borderRadius: "50%", height: "50px", width: "50px" }} /></div>
                <div class="col-md-8">
                    <div className="" style={{ fontWeight: "bolder", fontSize: "20px" }}>{props.name}</div>
                    <div className="" style={{ fontWeight: "lighter" }}>Stomach Infection</div>
                </div>
            </div>

        </div>
    )
}


const Aside = (props) => {
    const listOfPatients = [
        "Aaren"
        ,
        "Aarika"
        ,
        "Abagael"
        ,
        "Abagail"
        ,
        "Abbe"
        ,
        "Abbey"
        ,
        "Abbi"
        ,
        "Sfgbn"
        ,
        "Abby"
        ,
        "hbhb"
        ,
        "Abigael"]

    const listItems = listOfPatients.map((name) =>
        <div><PatientCard name={name} /> <hr /></div>
    );


    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabets = [];
    for (const a of possible) {
        alphabets.push(<div style={{ fontWeight: 'bolder', fontSize: "10px", lineHeight: "0.8", color: "#104c85" }}><br /><div>{a}</div><br /><span class="material-icons-sharp" style={{ fontSize: "10px" }}>
            fiber_manual_record
        </span></div>)
    }

    return (
        <div className="p-5 aside">

            <div style={{ position: 'fixed', top: '10', left: '40vh', marginTop: "90px" }}>{alphabets}</div>
            <div className="btn" style={{top:0, position:"absolute"}}> <span class="material-icons-sharp bg-success text-light rounded-circle">
                add
            </span></div>
            <div className="display-4">Patients List
            </div><br />
            <div class="form-group search" style={{ paddingBottom: "20px" }}>
                <label for=""></label>
                <input type="text" class="form-control" name="" id="here" aria-describedby="helpId" placeholder="Search..." />
                <small id="helpId" class="form-text text-muted">
                    <span class="material-icons-sharp">
                        search
                    </span>

                </small>
            </div>
            {listItems}
        </div>
    );
};

export default Aside;