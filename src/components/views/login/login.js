import React, {useState} from 'react';
import{
    Modal,
    Button
} from "react-bootstrap";

function Login(props) {
  
    return (
      <>
        <Modal { ...props } size="md" arial-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>st
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={props.onHide}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default Login;