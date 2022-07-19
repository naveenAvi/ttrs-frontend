import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import { set_trains_list } from '../../Redux/Actions/TrainsActions'
import { getTrainsList } from '../../Requests'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import AddTrain from './AddTrain/AddTrain'

export default function TrainsList() {
    const dispatch = useDispatch();
    const [addeditmodelstate, setaddeditmodelstate] = useState({display:false});
    const TrainsReducer = useSelector((state) => state.TrainsReducer)

    useEffect(() => {
        getTrainsList()
            .then(res => {
                if (res.data.status === 200) {
                    dispatch(set_trains_list(res.data.trainslist))
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(TrainsReducer)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ marginBottom: "5px" }}>
                            <div className="card-body">

                                <div style={{ display: 'flex', flexDirection: "row", width: "100%", alignItems: "flex-start", justifyContent: "space-between" }}>
                                    <h3>Trains list</h3>

                                    <Button onClick={()=> setaddeditmodelstate( {display:true} )}>
                                        <FontAwesomeIcon icon={ faPlusCircle } />
                                        Add
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
                                            <div className="result-header">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="records">Showing: <b>1-20</b> of <b>200</b> result</div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="result-body">
                                                <div className="table-responsive">
                                                    <table className="table widget-26">
                                                        <tbody>

                                                            <tr>
                                                                <td>
                                                                    
                                                                </td>
                                                                <td>
                                                                    <div className="widget-26-job-title">
                                                                        <a href="#">Train Name</a>
                                                                        <p className="m-0"><a href="#" className="employer-name">Engine Number.</a> </p>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="widget-26-job-salary">1st class</div>
                                                                </td>

                                                                <td>
                                                                    <div className="widget-26-job-salary">2nd class</div>
                                                                </td>

                                                                <td>
                                                                    <div className="widget-26-job-salary">3rd class</div>
                                                                </td>
                                                                <td>
                                                                    
                                                                <div className="widget-26-job-salary">actions</div>
                                                                    
                                                                </td>

                                                            </tr>


                                                            {TrainsReducer.map(singletrain =>
                                                                <tr>
                                                                    <td>
                                                                        <div className="widget-26-job-emp-img">
                                                                            <img src="/train.jpg" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="widget-26-job-title">
                                                                            <a href="#"> {singletrain.trainName} </a>
                                                                            <p className="m-0"><a href="#" className="employer-name">{singletrain.engineno}</a></p>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="widget-26-job-info">
                                                                            <p className="type m-0">{singletrain.firstClass}</p>

                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="widget-26-job-salary">{singletrain.secondClass}</div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="widget-26-job-salary">{singletrain.thirdClass}</div>
                                                                    </td>
                                                                    <td>
                                                                        <Button>
                                                                            <FontAwesomeIcon icon={faEdit} />
                                                                        </Button>
                                                                        {" "}
                                                                        <Button >
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
                                    <ul className="pagination pagination-base pagination-boxed pagination-square mb-0">
                                        <li className="page-item">
                                            <a className="page-link no-border" href="#">
                                                <span aria-hidden="true">«</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link no-border" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link no-border" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link no-border" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link no-border" href="#">4</a></li>
                                        <li className="page-item">
                                            <a className="page-link no-border" href="#">
                                                <span aria-hidden="true">»</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <AddTrain addeditmodelstate={addeditmodelstate} setaddeditmodelstate={setaddeditmodelstate} />
        </div>
    )
}
