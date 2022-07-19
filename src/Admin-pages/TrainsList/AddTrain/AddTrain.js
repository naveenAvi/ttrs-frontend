import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { add_new_station, add_new_station_OBJ } from '../../../Redux/Actions/FairsStationActin';
import { addAStation, addATrain } from '../../../Requests';
import { AvFeedback, AvField, AvForm, AvGroup } from 'availity-reactstrap-validation';
import { add_a_Train } from '../../../Redux/Actions/TrainsActions';

const AddTrain = ({ addeditmodelstate, setaddeditmodelstate, track }) => {
    const [formvals, setformvals] = useState({});
    const [submitresponse, setsubmitresponse] = useState("");
    const dispatch = useDispatch();
    const toggle = () => setaddeditmodelstate((prevstate) => { return { ...prevstate, display: false } });

    useEffect(() => {
        setsubmitresponse("")
    }, [formvals.trainID])
    
    const handleSubmit = (event, values) => {
        console.log(values)
        addATrain(values)
            .then(res => {
                console.log(res)
                if (res.data.status === 200) {
                    dispatch(add_a_Train( res.data.addedtrain ) )
                    setaddeditmodelstate({display:false})
                }else if(res.data.status === 208) {
                    setsubmitresponse("Train ID Already Added")
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
                    <div style={{ color:"red" }}> {submitresponse} </div>
                    <AvForm id="myform" onValidSubmit={(event, values) => handleSubmit(event, values)}>
                        <AvGroup>
                            <Label for="TrainName">
                                Train Name
                            </Label>
                            <AvField
                                id="TrainName"
                                name="TrainName"
                                value={formvals.TrainName}
                                onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, TrainName: e.target.value } }) }}
                                placeholder="ex:- Tikiri Manike"
                                type="text"
                                required
                            />
                            <AvFeedback tooltip>
                                This field is required
                            </AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="trainID">
                                Train ID
                            </Label>
                            <AvField
                                id="trainID"
                                name="trainID"
                                value={formvals.trainID}
                                onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, trainID: e.target.value } }) }}
                                placeholder="es: CMB112"
                                type="text"
                                required
                            />
                            <AvFeedback tooltip>
                                This field is required
                            </AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="firstClassSeats">
                                1st class Seats
                            </Label>
                            <AvField
                                id="firstClassSeats"
                                name="firstClassSeats"
                                value={formvals.firstClassSeats}
                                onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, firstClassSeats: e.target.value } }) }}

                                type="number"
                                required
                            />
                            <AvFeedback tooltip>
                                This field is required
                            </AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="secondClassSeats">
                                2nd class Seats
                            </Label>
                            <AvField
                                id="secondClassSeats"
                                name="secondClassSeats"
                                value={formvals.secondClassSeats}
                                onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, secondClassSeats: e.target.value } }) }}

                                type="number"
                                required
                            />
                            <AvFeedback tooltip>
                                This field is required
                            </AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="thirdClassSeats">
                                3rd class Seats
                            </Label>
                            <AvField
                                id="thirdClassSeats"
                                name="thirdClassSeats"
                                value={formvals.thirdClassSeats}
                                onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, thirdClassSeats: e.target.value } }) }}

                                type="number"
                                required
                            />
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
