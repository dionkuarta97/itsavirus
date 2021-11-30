import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { AddShoppingCart } from "@mui/icons-material";
import { Box } from "@mui/system";
import { alertError, alertSuccess, alertSure } from "../assets/js/sweetalert2";
import { useNavigate } from "react-router";

function OrderNow(props) {
  const navigate = useNavigate();
  const myOrder = localStorage.getItem("myOrder");
  const { data } = props;
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [order, setOrder] = useState(JSON.parse(myOrder) || []);

  const handleClose = () => {
    setShow(false);
    setQuantity(1);
    setOrder(JSON.parse(myOrder) || []);
  };
  const handleShow = () => {
    setShow(true);
    setQuantity(1);
    setOrder(JSON.parse(myOrder) || []);
  };
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleOrder = async () => {
    let payload = [];
    if (quantity < 1) {
      alertError("min quantity is 1");
    } else if (!data.size || !data.color) {
      alertError("please, select your color/size");
    } else {
      if (order.length > 0) {
        for (const key in order) {
          if (order[key]["name"] === data.name && order[key]["size"] === data.size && order[key]["color"] === data.color) {
            order[key]["quantity"] += quantity;
            payload = [...order];
          } else {
            setOrder([...order, { name: data.name, size: data.size, color: data.color, price: data.price, quantity: quantity, img: data.img }]);
            payload = [...order, { name: data.name, size: data.size, color: data.color, price: data.price, quantity: quantity, img: data.img }];
          }
        }
        const result = await alertSure();
        if (result.value) {
          localStorage.setItem("myOrder", JSON.stringify(payload));
          alertSuccess("success add product to your bag");
          navigate("/mybag");
        }
      } else {
        setOrder([{ name: data.name, size: data.size, color: data.color, price: data.price, quantity: quantity, img: data.img }]);
        payload = [{ name: data.name, size: data.size, color: data.color, price: data.price, quantity: quantity, img: data.img }];
        const result = await alertSure();
        if (result.value) {
          localStorage.setItem("myOrder", JSON.stringify(payload));
          alertSuccess("success add product to your bag");
          navigate("/mybag");
        }
      }
    }
  };
  return (
    <>
      <Button variant="outline-secondary" className="mt-5" onClick={handleShow}>
        Add To Bag <AddShoppingCart />
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="text-muted">Size</label>
          <br />
          <span>{data.size ? data.size : "please, select your size"}</span>
          <br />
          <label className="text-muted mt-3">Color</label>
          <br />
          <span>{data.color ? <Box sx={{ width: 30, height: 30, borderRadius: "50%", borderStyle: "none", backgroundColor: data.color }} /> : "please, select your color"}</span>
          <Form className="mt-3">
            <Form.Group style={{ width: 60 }}>
              <Form.Label className="text-muted">Quantity</Form.Label>
              <Form.Control type="number" onChange={handleChange} value={quantity} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleOrder}>
            Order
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderNow;
