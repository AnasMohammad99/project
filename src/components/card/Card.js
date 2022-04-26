import * as React from "react";
import { Button, Modal } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
}
const Card = ({ dress }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="col-4">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: صورة مصغرة"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            صورة مصغرة
          </text>
        </svg>

        <div className="card-body">
          <p className="card-text">{dress.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                onClick={() => setModalShow(true)}
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                عرض
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                تعديل
              </button>
            </div>
            <small className="text-muted">{dress.rent_price}</small>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Card;
