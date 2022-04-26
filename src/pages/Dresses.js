import React, { useState } from "react";
// import Card from "../components/card/Card";
import Cards from "../components/cards/Cards";
import AddIcon from "@mui/icons-material/Add";
import { links } from "../components/card/data";
import { IconButton } from "@mui/material";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import ImageUploading from "react-images-uploading";
import UploadImage from "../components/uploadImage/UploadImage";

function MyVerticallyCenteredModal(props) {
  const {
    dressName,
    description,
    rent_price,
    sell_price,
    type,
    images,
    setDressName,
    setDescription,
    setRent_price,
    setSell_price,
    setType,
    setImages,
    handleSubmit,
  } = { ...props };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>name</Form.Label>
              <Form.Control
                value={dressName}
                onChange={(e) => setDressName(e.target.value)}
                type="text"
                placeholder="dress name"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>type</Form.Label>
              <Form.Control
                value={type}
                onChange={(e) => setType(e.target.value)}
                type="text"
                placeholder="dress type"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="dress description"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>rent_price</Form.Label>
              <Form.Control
                value={rent_price}
                onChange={(e) => setRent_price(e.target.value)}
                placeholder="dress rent_price"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>sell_price</Form.Label>
              <Form.Control
                value={sell_price}
                onChange={(e) => setSell_price(e.target.value)}
                placeholder="dress sell_price"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>sell_price</Form.Label>
              <Form.Control
                value={sell_price}
                onChange={(e) => setSell_price(e.target.value)}
                placeholder="dress sell_price"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>upload image</Form.Label>
              <UploadImage />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const Dresses = () => {
  const [dressName, setDressName] = useState("");
  const [description, setDescription] = useState("");
  const [rent_price, setRent_price] = useState("");
  const [sell_price, setSell_price] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState([]);
  // const [rent_date, setRent_date] = useState("");
  // const [reservetion_date, setReservetion_date] = useState("");
  // const [selling_date, setSelling_date] = useState("");
  // const [first_prova_date, setFirst_prova_date] = useState("");
  // const [second_prova_date, setSecond_prova_date] = useState("");
  const [newDress, setnewDress] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const [dresses, setDresses] = useState([...links]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setnewDress({ dressName, description, rent_price, sell_price, type });
    setDresses((prevValue) => [...prevValue, newDress]);
  };
  return (
    <>
      <IconButton
        sx={{ position: "relative", right: "77rem", color: "#00073d" }}
        onClick={() => setModalShow(true)}
        color="primary"
      >
        <AddIcon />
      </IconButton>
      <Cards dresses={dresses} />
      <MyVerticallyCenteredModal
        dressName={dressName}
        setDressName={setDressName}
        description={description}
        setDescription={setDescription}
        rent_price={rent_price}
        setRent_price={setRent_price}
        sell_price={sell_price}
        setSell_price={setSell_price}
        images={images}
        setImages={setImages}
        type={type}
        setType={setType}
        show={modalShow}
        handleSubmit={handleSubmit}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Dresses;
