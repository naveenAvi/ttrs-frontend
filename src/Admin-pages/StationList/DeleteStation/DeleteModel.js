import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default function DeleteModel({ deletingModel, setdeletingModel }) {
    const closemodel = () =>{
        setdeletingModel({ display: false })
    }
    return (
        <Modal isOpen={deletingModel.display} toggle={()=>closemodel() }>
            <ModalBody>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <FontAwesomeIcon icon={faTrash} size="4x" style={{ color: "red" }} />
                    <h2>Are you sure?</h2>
                </div>

                Do you really want to delete these records? This process cannot be undone.
            </ModalBody>
            {" "}
            <ModalFooter>
                <Button color="secondary" onClick={()=>closemodel()} >Cancel</Button>{' '}
                <Button color="danger" >Delete</Button>
            </ModalFooter>
        </Modal>
    )
}
