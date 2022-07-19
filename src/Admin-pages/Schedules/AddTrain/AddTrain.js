import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, FormText, FormFeedback, Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux'
import { add_new_station, add_new_station_OBJ } from '../../../Redux/Actions/FairsStationActin';
import { addAStation, addATrain, addTrainSchedule } from '../../../Requests';
import { AvFeedback, AvField, AvForm, AvGroup } from 'availity-reactstrap-validation';
import { add_a_Train } from '../../../Redux/Actions/TrainsActions';

const AddTrain = ({ addeditmodelstate, setaddeditmodelstate, track }) => {
    const [formvals, setformvals] = useState({});
    const [submitresponse, setsubmitresponse] = useState("");
    const dispatch = useDispatch();
    const TrainsReducer = useSelector((state) => state.TrainsReducer)
    const FairsStationReducer = useSelector((state) => state.FairsStationReducer)
    const toggle = () => setaddeditmodelstate((prevstate) => { return { ...prevstate, display: false } });

    useEffect(() => {
        setsubmitresponse("")
    }, [formvals.trainID])

    const handleSubmit = (event, values) => {
        console.log(values)
        addTrainSchedule(values)
            .then(res => {
                console.log(res)
                if (res.data.status === 200) {

                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <Modal isOpen={addeditmodelstate.display} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add A train</ModalHeader>
                <ModalBody>
                    <div style={{ color: "red" }}> {submitresponse} </div>
                    <AvForm id="myform" onValidSubmit={(event, values) => handleSubmit(event, values)}>
                        <AvGroup>
                            <Label for="TrainName">
                                Select The Train
                            </Label>
                            <AvField type="select" name="trainid" required>
                                {TrainsReducer.map(singleTrain =>
                                    <option value={singleTrain.id}>{singleTrain.trainName} - {singleTrain.engineno} </option>
                                )}
                            </AvField>
                            <AvFeedback tooltip>
                                This field is required
                            </AvFeedback>
                        </AvGroup>
                        <Row>
                            <Col xs={6}>
                                <AvGroup>
                                    <Label for="date">
                                        Date
                                    </Label>
                                    <AvField
                                        id="date"
                                        name="date"
                                        type="date"
                                        required
                                    />
                                    <AvFeedback tooltip>
                                        This field is required
                                    </AvFeedback>
                                </AvGroup>
                            </Col>
                            <Col xs={6}>
                                <AvGroup>
                                    <Label for="departuretime">
                                        Departure Time
                                    </Label>
                                    <AvField
                                        id="departuretime"
                                        name="departuretime"
                                        value={formvals.departuretime}
                                        onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, departuretime: e.target.value } }) }}
                                        type="time"
                                        required
                                    />
                                    <AvFeedback tooltip>
                                        This field is required
                                    </AvFeedback>
                                </AvGroup>
                            </Col>
                        </Row>
                        <AvGroup>
                            <Label for="firstClassSeats">
                                From Station
                            </Label>
                            <AvField type="select" name="fromstation" required>
                                <option value={0}> Colombo Fort </option>
                                {FairsStationReducer.map(singleStation =>
                                    <option value={singleStation.id}>{singleStation.stationName} - {singleStation.track} </option>
                                )}
                            </AvField>
                            <AvFeedback tooltip>
                                This field is required
                            </AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="secondClassSeats">
                                To Station
                            </Label>
                            <AvField type="select" name="tostation" required>
                                <option value={0}> Colombo Fort </option>
                                {FairsStationReducer.map(singleStation =>
                                    <option value={singleStation.id}>{singleStation.stationName} - {singleStation.track} </option>
                                )}
                            </AvField>
                            <AvFeedback tooltip>
                                This field is required
                            </AvFeedback>
                        </AvGroup>


                    </AvForm>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" form="myform" color="primary" >submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AddTrain;
