import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap'
import { getStationList } from '../../Requests'
import { useDispatch, useSelector } from "react-redux";
import { set_station_list } from '../../Redux/Actions/FairsStationActin'
import AddNewModel from './AddNewModel/AddNewModel'
import DeleteModel from './DeleteStation/DeleteModel'
import Avatar from 'react-avatar'


export default function StationList() {
    const dispatch = useDispatch();
    const [selectedtrack, setSeletedtrack] = useState("A");
    const FairsStationReducer = useSelector((state) => state.FairsStationReducer)
    const [addnewstationModel, setaddnewstationModel] = useState({ display: true })
    const [deletingModel, setdeletingModel] = useState({ display: false })

    const getStationlistReq = () => {
        getStationList(selectedtrack)
            .then(res => {
                console.log(res)
                if (res.data.status === 200) {
                    dispatch(set_station_list(res.data.list))
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getStationlistReq()
    }, [])



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ marginBottom: "5px" }}>
                            <div className="card-body">
                                <b>Stations and fairs</b>
                                <div style={{ display: 'flex', flexDirection: "row", width: "100%", alignItems: "flex-start", justifyContent: "space-between" }}>
                                    <FormGroup style={{ width: "90%" }}>
                                        <Input type="select" name="select" value={selectedtrack} onChange={(e) => setSeletedtrack(e.target.value)} >
                                            <option value={"A"}>A</option>
                                            <option value={"B"}>B</option>
                                            <option value={"C"}>C</option>
                                            <option value={"D"}>D</option>
                                            <option value={"E"}>E</option>
                                        </Input>
                                    </FormGroup>

                                    <Button onClick={()=>getStationlistReq()}>
                                        Load
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-margin">
                            <div className="card-body">
                                <div className="row search-body">
                                    <div className="col-lg-12">
                                        <div className="search-result">
                                            <div className="result-body">
                                                <div className="table-responsive">
                                                    <table className="table widget-26">
                                                        <tbody>

                                                            <tr>
                                                                <td>

                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">Station</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">Distance </a>
                                                                            -
                                                                            <span className="text-muted time"> Time Taken</span></p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-info">
                                                                        <p className="type m-0">Track</p>

                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">1st class</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">2nd class</div>
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-salary">3d class</div>
                                                                </td>
                                                                <td>
                                                                    Action
                                                                </td>
                                                            </tr>


                                                            {FairsStationReducer.map(singleRow =>
                                                                <tr>
                                                                    <td>
                                                                        <Avatar size="30" name="A" />
                                                                    </td>
                                                                    <td>
                                                                        <div className="widget-26-job-title">
                                                                            <a href="#">{singleRow.stationName}</a>
                                                                            <p className="m-0"><a href="#" className="employer-name">{singleRow.distancem} m </a>
                                                                                -
                                                                                <span className="text-muted time"> {singleRow.minutesfromc}</span></p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="widget-26-job-salary">Track {singleRow.track}</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="widget-26-job-salary">Rs:{singleRow.class1}</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="widget-26-job-salary">Rs:{singleRow.class2}</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="widget-26-job-salary">Rs:{singleRow.class3}</div>
                                                                    </td>
                                                                    <td>
                                                                        <Button>
                                                                            <FontAwesomeIcon icon={faEdit} />
                                                                        </Button>
                                                                        {" "}
                                                                        <Button onClick={() => setdeletingModel({ display: true, id: singleRow.id })}>
                                                                            <FontAwesomeIcon icon={faTrash} />
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            )}



                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav className="d-flex justify-content-center">
                                    <Button onClick={() => setaddnewstationModel((prevs) => { return { ...prevs, display: true } })}>
                                        Import stations
                                    </Button>
                                    {"  "}
                                    <Button onClick={() => setaddnewstationModel((prevs) => { return { ...prevs, display: true } })}>
                                        Add New
                                    </Button>
                                    {"  "}
                                    <Button>
                                        Confirm
                                    </Button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AddNewModel selectedtrack={selectedtrack} addeditmodelstate={addnewstationModel} setaddeditmodelstate={setaddnewstationModel}  />
            <DeleteModel deletingModel={deletingModel} setdeletingModel={setdeletingModel} />
        </div>
    )
}
