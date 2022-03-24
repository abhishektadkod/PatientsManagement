import React, { useState } from 'react';
import Presciption from './Presciption';
import VisitDates from './VisitDates';

const Index = () => {
    const [on,setOn] = useState(false)
    return (
        <div>
            <div class="container m-5">

            </div>
            <div className="container">
                <div className="datesList">

                    <h2>Consultation Visit Dates</h2><hr />
                    <div className="row">
                        <div class="col-md-6">
                           <VisitDates setOn={setOn} on={on}/>
                           <VisitDates/>
                           <VisitDates/>
                           <VisitDates/>
                           <VisitDates/>
                        </div>
                        <div className="col-md-5 m-5 shadow" style={{borderRadius:"5%"}} style={{display:on?"block":"none"}}>
                            <h2 className="text-center p-5">Prescription</h2><hr />
                            <Presciption on={on}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
