import ReactPlayer from "react-player/lazy";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { PlayCircleOutline } from "@mui/icons-material";

function VideoPlayer(props) {
  const { video } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        <PlayCircleOutline /> Play Video
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="player-wrapper">
            <ReactPlayer url={video} className="react-player" playing width="100%" height="100%" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VideoPlayer;
