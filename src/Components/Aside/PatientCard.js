import React from 'react';

const PatientCard = (props) => {
    let name = props.name;
    let nameLength = name.length;
    var index = name.indexOf(props.search);
    var length = props.search.length;
   
    //name = index!=-1?name.substring(0,index-1)+ name.substring(index, length) + name.substring(length, nameLength):name;
    return (
        <div className="p-2 haha">
            <div class="row" >
                <div className='col-md-3'><img src={props.url} alt="..." style={{ borderRadius: "50%", height: "50px", width: "50px" }} /></div>
                <div class="col-md-8">
                    <div className="" style={{ fontWeight: "bolder", fontSize: "20px" }}>{name}</div>
                    <div className="" style={{ fontWeight: "lighter" }}>{props.disease}</div>
                </div>
            </div>

        </div>
    );
};

export default PatientCard;