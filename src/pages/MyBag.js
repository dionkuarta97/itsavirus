import { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router";
import { alertError, alertSuccess, alertSure } from "../assets/js/sweetalert2";
import ListOrder from "../components/ListOrder";
function MyBag() {
  const navigate = useNavigate();
  let myBag = JSON.parse(localStorage.getItem("myOrder"));
  const [myOrder, setMyOrder] = useState(myBag);

  const handleDelete = async (idx) => {
    const result = await alertSure();
    if (result.value) {
      setMyOrder(myOrder.splice(idx, 1));
      localStorage.setItem("myOrder", JSON.stringify(myOrder));
      alertSuccess("success to delete my bag");
      navigate("/");
    }
  };

  const total = () => {
    let temp = 0;
    for (const key in myOrder) {
      temp += myOrder[key]["price"] * myOrder[key]["quantity"];
    }
    return temp;
  };

  return (
    <>
      <Container style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <h1>My Bag</h1>
        <br />

        <h3>
          Total :{Number(total()).toLocaleString("us-Us", { style: "currency", currency: "USD" })}{" "}
          <button
            onClick={() => {
              alertError("You Must Login");
            }}
            className="btn btn-dark ms-2"
          >
            Pay Now
          </button>
        </h3>

        {!myOrder ? (
          "Go Shopping Now"
        ) : (
          <ListGroup as="ol" numbered>
            {myOrder?.map((el, idx) => (
              <ListOrder data={el} handleDelete={handleDelete} index={idx} key={el.name + el.size} />
            ))}
          </ListGroup>
        )}
      </Container>
    </>
  );
}

export default MyBag;
