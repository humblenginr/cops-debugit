import React, { useRef } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { deleteEvent } from "../../APIcalls/Calendar/deleteEvent";
import { postEvent } from "../../APIcalls/Calendar/postEvent";
import { putEvent } from "../../APIcalls/Calendar/putEvent";

export const EditEventModal = ({ modal, setModal, args, user }) => {
  const subject = useRef();
  const link = useRef();
  console.log(args);
  if (args)

    return (
      <Modal show={modal} onHide={() => setModal((prev) => !prev)}>
        <Modal.Title className=" p-3">Edit Event</Modal.Title>
        <Modal.Body>
          <FormControl
            ref={subject}
            className="mb-4"
            placeholder="Subject(required)"
            defaultValue={args.event.Subject}
            readOnly={args.event.dbId ? false : true}
            
          />
          <FormControl
            ref={link}
            placeholder="Links(if any)"
            defaultValue={args.event.link}
            readOnly={args.event.dbId ? false : true}
          />
        </Modal.Body>
        <Modal.Footer>
          {!(args.event.dbId )? <div className="mr-3 mb-3">You are not allowed to edit the events coming from MS teams!</div>: null}
          <Button
            variant="success"
            disabled ={args.event.dbId ? false : true}
            onClick={() => {
              putEvent(
                {
                  Subject: subject.current.value,
                  Link: link.current.value,
                },
                user._id,
                args.event.dbId,
                setModal
              );
            }}
          >
            Save
          </Button>
          <Button
            variant="danger"
            disabled ={args.event.dbId ? false : true}
            onClick={() => {
              deleteEvent(
                user._id,
                args.event.dbId,
                setModal
              );
            }}
          >
            Delete
          </Button>
          <Button onClick={() => setModal((prev) => !prev)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  else return null;
};
