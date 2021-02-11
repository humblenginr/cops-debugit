import React, { useRef } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { postEvent } from "../../APIcalls/Calendar/postEvent";

export const PopupModal = ({ modal, setModal, args, user}) => {
    const subject = useRef();
    const link = useRef();
    if(args)
    return (
      <Modal show={modal} onHide={() => setModal((prev) => !prev)}>
          <Modal.Title className="p-3">Create Event</Modal.Title>
          <Modal.Body>
          <FormControl ref={subject} className="mb-4" placeholder="Subject(required)"  />
        <FormControl ref={link} placeholder="Links(if any)"  />
        <div className="mt-3 ml-3">{`${args.startTime.toString().substr(0,25)} to ${args.endTime.toString().substr(0,25)}`}</div>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="success" onClick={() => {
                  postEvent(
                      {StartTime: args.startTime,
                      EndTime: args.endTime,
                      Subject: subject.current.value,
                      Link : link.current.value
                      },
                      user._id,
                      setModal
                  )
              }}>Save</Button>
              <Button onClick={() => setModal((prev) => !prev)}>Close</Button>
          </Modal.Footer>
      </Modal>
    );
  else return null;
};
