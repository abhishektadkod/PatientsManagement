import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Aside.css';
import PatientCard from './PatientCard';


const Aside = (props) => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState();
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get('http://ec2-3-95-223-31.compute-1.amazonaws.com:8080/list/patients')
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((error) => console.log(error))
    }, []);

    const handlePost = (data) => {
        axios.post('http://ec2-3-95-223-31.compute-1.amazonaws.com:8080/register/patients', {
            name: data.name,
            disease: data.disease,
            url: data.url
        })
            .then(function (response) {
                axios.get('http://localhost:8080/list/patients')
                    .then((res) => {
                        setData(res.data)
                    })
                    .catch((error) => console.log(error))
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        data != null ?
            <div className="p-5 aside">
                <div class="modal fade" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">


                            <div class="modal-header">
                                <h4 class="modal-title">Add a patient</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>


                            <div class="modal-body">
                                <form onSubmit={handleSubmit((data) => handlePost(data))}>

                                    <input {...register("name")} placeholder="Name" />
                                    <input {...register("disease")} placeholder="Disease" />
                                    <input {...register("url")} placeholder="Photo Url" />
                                    <input type="submit" />
                                </form>
                            </div>


                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="btn" style={{ top: 0, position: "absolute" }} data-bs-toggle="modal" data-bs-target="#myModal"> <span class="material-icons-sharp bg-success text-light rounded-circle">
                    add
                </span></div>
                <div className="display-4">Patients List
                </div><br />
                <div class="form-group search" style={{ paddingBottom: "20px" }}>
                    <label for=""></label>
                    <input type="text" class="form-control" name="" id="here" aria-describedby="helpId" onChange={(e)=>setSearch(e.target.value)} placeholder="Search..." />
                    <small id="helpId" class="form-text text-muted">
                        <span class="material-icons-sharp">
                            search
                        </span>

                    </small>
                </div>
                {data.map((patient) =>
                    patient.name.toLowerCase().includes(search.toLowerCase()) || patient.disease.toLowerCase().includes(search.toLowerCase())?
                    <div><PatientCard name={patient.name} disease={patient.disease} url={patient.url} search={search}/> <hr /></div>:""
                )}
            </div> : ""
    );
};

export default Aside;