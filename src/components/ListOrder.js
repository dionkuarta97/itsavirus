import { Box } from "@mui/system";
import { ListGroup, Image } from "react-bootstrap";
import { Delete } from "@mui/icons-material";
function ListOrder(props) {
  const { data, handleDelete, index } = props;
  return (
    <>
      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{data.name}</div>
          <div align="center">
            <Image src={data.img} width={100} height={70} loading="lazy" />
          </div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">Size</div>
          <div className="mt-3" style={{ width: 40 }}>
            <div align="center">
              <h3>{data.size}</h3>
            </div>
          </div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">Color</div>
          <div className="mt-3 ">
            <div align="center">
              <Box sx={{ width: 30, height: 30, borderRadius: "50%", borderStyle: "none", backgroundColor: data.color }} />
            </div>
          </div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">Quantity</div>
          <div className="mt-3 ">
            <div align="center">
              <h3>{data.quantity}</h3>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 35, marginLeft: 6 }}>
          <div align="center">
            <button onClick={() => handleDelete(index)} className="btn btn-outline-danger btn-sm">
              <Delete />
            </button>
          </div>
        </div>
      </ListGroup.Item>
    </>
  );
}

export default ListOrder;
