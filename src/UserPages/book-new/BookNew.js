import React, { useEffect, useState } from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { checktrainavailability, getStationList } from '../../Requests';
import { set_station_list } from '../../Redux/Actions/FairsStationActin';
import { AvField, AvForm, AvGroup } from 'availity-reactstrap-validation';

export default function BookNew() {
    const [pageselected, setpageselected] = useState(0);
    const [reservationdetails, setreservationdetails] = useState({fromstation:0, tostation:20});
    const dispatch = useDispatch();
    const FairsStationReducer = useSelector((state) => state.FairsStationReducer)

    const getStationlistReq = () => {
        getStationList("all")
            .then(res => {
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

    const checkavailability = () => {
        checktrainavailability(reservationdetails)
            .then(res => {
                console.log( res )
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(pageselected)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div style={{ width: "100%", paddingTop: "0px" }} className="pl-2 pr-2">
                        <div className="card" style={{ marginBottom: "0px" }}>
                            <div className="card-body">
                                <b>Reserve a ticket</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AvForm>
                <div className="container">
                    <div className="row justify-content-center mt-0">
                        <div style={{ width: "100%" }} className="p-2 pt-0">
                            <div className="card px-1 pl-1  pb-0  mb-3" style={{ paddingTop: "0px" }}>
                                <div className="card-body">
                                    <p>Fill all form field to go to next step</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mx-0">
                                        <form id="msform">
                                            <ul id="progressbar">
                                                <li className={(pageselected === 0 ? "active" : "")} id="account"><strong>Details</strong></li>
                                                <li className={(pageselected === 1 ? "active" : "")} id="personal"><strong>selection</strong></li>
                                                <li className={(pageselected === 2 ? "active" : "")} id="payment"><strong>Payment</strong></li>
                                                <li className={(pageselected === 3 ? "active" : "")} id="confirm"><strong>Finish</strong></li>
                                            </ul>
                                            <fieldset style={{ display: (pageselected === 0 ? "block" : "none") }}>
                                                <div className="form-card">
                                                    <h2 className="fs-title">Account Information</h2>
                                                    <AvGroup>
                                                        <Label>From </Label>
                                                        <AvField type="select" name="tostation" required onChange={(e)=> setreservationdetails((prevstate)=>({ ...prevstate, fromstation:e.currentTarget.value }))} >
                                                            <option value={0}> Colombo Fort </option>
                                                            {FairsStationReducer.map(singleStation =>
                                                                <option value={singleStation.id}>{singleStation.stationName} - {singleStation.track} </option>
                                                            )}
                                                        </AvField>
                                                    </AvGroup>
                                                    <AvGroup>
                                                        <Label>To </Label>
                                                        <AvField type="select" name="tostation" required onChange={(e)=> setreservationdetails((prevstate)=>({ ...prevstate, tostation:e.currentTarget.value }))}>
                                                            <option value={0}> Colombo Fort </option>
                                                            {FairsStationReducer.map(singleStation =>
                                                                <option value={singleStation.id}>{singleStation.stationName} - {singleStation.track} </option>
                                                            )}
                                                        </AvField>
                                                    </AvGroup>
                                                    <FormGroup>
                                                        <Label>Date </Label>
                                                        <Input type="date" name="date" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label>seats </Label>
                                                        <Input type="select" name="select" >
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>7</option>
                                                            <option>8</option>
                                                            <option>9</option>
                                                            <option>10</option>
                                                            <option>11</option>
                                                            <option>12</option>
                                                        </Input>
                                                    </FormGroup>
                                                </div>

                                            </fieldset>
                                            <fieldset style={{ display: (pageselected === 1 ? "block" : "none") }}>
                                                <div className="form-card">
                                                    <h2 className="fs-title">Available Trains </h2>

                                                    <div className="card p-3">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user d-flex flex-row align-items-center">
                                                                <img src="https://i.imgur.com/hczKIze.jpg" width="30" className="user-img rounded-circle mr-2" />
                                                                <span><small className="font-weight-bold text-primary">Udarata Manike</small> <small className="font-weight-bold">From: kandy To:colombo</small></span>
                                                            </div>
                                                            <small>2 days ago</small>
                                                        </div>
                                                        <div className="action d-flex justify-content-between mt-2 align-items-center">
                                                            <div className="reply px-4">
                                                                <small>Remove</small>
                                                                <span className="dots"></span>
                                                                <small>Reply</small>
                                                                <span className="dots"></span>
                                                                <small>Translate</small>
                                                            </div>
                                                            <div className="icons align-items-center">
                                                                <i className="fa fa-star text-warning"></i>
                                                                <i className="fa fa-check-circle-o check-icon"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </fieldset>
                                            <fieldset style={{ display: (pageselected === 2 ? "block" : "none") }}>
                                                <div className="form-card">
                                                    <h2 className="fs-title">Payment Information</h2>
                                                    <div className="radio-group">
                                                        <div className='radio' data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px" /></div>
                                                        <div className='radio' data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px" /></div>

                                                    </div>
                                                    <label className="pay">Card Holder Name*</label>
                                                    <input type="text" name="holdername" placeholder="" />
                                                    <div className="row">
                                                        <div className="col-9">
                                                            <label className="pay">Card Number*</label>
                                                            <input type="text" name="cardno" placeholder="" />
                                                        </div>
                                                        <div className="col-3">
                                                            <label className="pay">CVC*</label>
                                                            <input type="password" name="cvcpwd" placeholder="***" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <label className="pay">Expiry Date*</label>
                                                        </div>
                                                        <div className="col-9">
                                                            <select className="list-dt" id="month" name="expmonth">
                                                                <option selected>Month</option>
                                                                <option>January</option>
                                                                <option>February</option>
                                                                <option>March</option>
                                                                <option>April</option>
                                                                <option>May</option>
                                                                <option>June</option>
                                                                <option>July</option>
                                                                <option>August</option>
                                                                <option>September</option>
                                                                <option>October</option>
                                                                <option>November</option>
                                                                <option>December</option>
                                                            </select>
                                                            <select className="list-dt" id="year" name="expyear">
                                                                <option selected>Year</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset style={{ display: (pageselected === 3 ? "block" : "none") }}>
                                                <div className="form-card">
                                                    <h2 className="fs-title text-center">Success !</h2>

                                                    <div className="row justify-content-center">
                                                        <div className="col-3">
                                                            <img src="https://img.icons8.com/color/96/000000/ok--v2.png" className="fit-image" />
                                                        </div>
                                                    </div>

                                                    <div className="row justify-content-center">
                                                        <div className="col-7 text-center">
                                                            <h5>You Have Successfully Signed Up</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <Button onClick={() => setpageselected(0)}>
                                                Next
                                            </Button>
                                            <Button onClick={() => setpageselected(1)}>
                                                Next
                                            </Button>
                                            {" "}

                                            <Button onClick={() => checkavailability()}>
                                                check
                                            </Button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AvForm>
        </div>
    )
}
