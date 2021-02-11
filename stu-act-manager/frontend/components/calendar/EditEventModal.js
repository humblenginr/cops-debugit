import React, { useRef } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { postEvent } from "../../APIcalls/Calendar/postEvent";
import { putEvent } from "../../APIcalls/Calendar/putEvent";

export const EditEventModal = ({ modal, setModal, args, user}) => {
    const subject = useRef();
    const link = useRef();
    if(args)
    return (
      <Modal show={modal} onHide={() => setModal((prev) => !prev)}>
          <Modal.Title className="ml-3">Edit Event</Modal.Title>
          <Modal.Body>
          <FormControl ref={subject} className="mb-4" placeholder="Subject(required)"  defaultValue={args.event.Subject}/>
        <FormControl ref={link} placeholder="Links(if any)"  />
          </Modal.Body>
          <Modal.Footer>
              <Button variant="success" onClick={() => {
                  putEvent(
                      {
                      Subject: subject.current.value,
                      Link : link.current.value
                      },
                      user._id,
                      args.event.dbId,
                      setModal
                  )
              }}>Save</Button>
              <Button onClick={() => setModal((prev) => !prev)}>Close</Button>
          </Modal.Footer>
      </Modal>
    );
  else return null;
};
