import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { add_new_station, add_new_station_OBJ } from '../../../Redux/Actions/FairsStationActin';
import { addAStation } from '../../../Requests';

const AddNewModel = ({ addeditmodelstate, setaddeditmodelstate, selectedtrack }) => {
    const [modal, setModal] = useState(false);
    const [formvals, setformvals] = useState({});
    const dispatch = useDispatch()
    const [formvalsValidity, setformvalsValidity] = useState([]);
    const toggle = () => setaddeditmodelstate((prevstate) => { return { ...prevstate, display: false } });
    console.log(formvals, formvalsValidity)



    const addnewStation = () => {
        const fieldset = ["stationName", "distance", "timetaken", "firstPrice", "secondPrice", "thirdPrice"];
        setformvalsValidity([])
        var localform = []
        for (let i = 0; i < fieldset.length; i++) {
            const field = fieldset[i];
            if (formvals.hasOwnProperty(field)) {
                //has the field
                if (typeof formvals[field] !== "undefined" && formvals[field] !== null) {
                    setformvalsValidity(oldArray => [...oldArray, field]);
                    localform.push(field)
                }
            }
        }

        if (localform.length === fieldset.length) {
            addAStation(formvals, selectedtrack)
                .then(res => {
                    console.log(res)
                    if (res.data.status === 200) {
                        dispatch(add_new_station_OBJ( res.data.lastadded ))
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    return (
        <div>
            <Modal isOpen={addeditmodelstate.display} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="StationName">
                            Station Name
                        </Label>
                        <Input
                            id="StationName"
                            name="stationName"
                            value={formvals.stationName}
                            onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, stationName: e.target.value } }) }}
                            placeholder="ex:- colombo"
                            type="text"
                            valid={formvalsValidity.indexOf("stationName") > -1}
                        />
                        <FormFeedback tooltip>
                            This field is required
                        </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="StationName">
                            Distance from Colombo (meters)
                        </Label>
                        <Input
                            id="StationName"
                            name="stationName"
                            placeholder="(meters)"
                            type="number"
                            value={formvals.distance}
                            onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, distance: e.target.value } }) }}
                            valid={formvalsValidity.indexOf("distance") > -1}
                        />
                        <FormFeedback tooltip>
                            This field is required
                        </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="StationName">
                            Time to reach from Colombo (mins)
                        </Label>
                        <Input
                            id="StationName"
                            name="stationName"
                            placeholder="minutes"
                            type="number"
                            value={formvals.timetaken}
                            onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, timetaken: e.target.value } }) }}
                            valid={formvalsValidity.indexOf("timetaken") > -1}
                        />
                        <FormFeedback tooltip>
                            This field is required
                        </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="StationName">
                            1st class price(rs)
                        </Label>
                        <Input
                            id="StationName"
                            name="stationName"
                            type="number"
                            value={formvals.firstPrice}
                            onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, firstPrice: e.target.value } }) }}
                            valid={formvalsValidity.indexOf("firstPrice") > -1}
                        />
                        <FormFeedback tooltip>
                            This field is required
                        </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="StationName">
                            2nd class price(rs)
                        </Label>
                        <Input
                            id="StationName"
                            name="stationName"
                            type="number"
                            value={formvals.secondPrice}
                            onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, secondPrice: e.target.value } }) }}
                            valid={formvalsValidity.indexOf("secondPrice") > -1}
                        />
                        <FormFeedback tooltip>
                            This field is required
                        </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="StationName">
                            3rd class price(rs)
                        </Label>
                        <Input
                            id="StationName"
                            name="stationName"
                            type="number"
                            value={formvals.thirdPrice}
                            onChange={(e) => { e.persist(); setformvals((prevstate) => { return { ...prevstate, thirdPrice: e.target.value } }) }}
                            valid={formvalsValidity.indexOf("thirdPrice") > -1}
                        />
                        <FormFeedback tooltip>
                            This field is required
                        </FormFeedback>
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => addnewStation()}>Add Station</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AddNewModel;
