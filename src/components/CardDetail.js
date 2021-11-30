import { grey } from "@mui/material/colors";
import { useState } from "react";
import { Image } from "react-bootstrap";
import OrderNow from "./OrderNow";
import VideoPlayer from "./VideoPlayer";

function CardDetail(props) {
  const { img, data } = props;
  const [size, setSize] = useState(null);
  const [color, setColor] = useState("");
  const changeSize = (val) => {
    setSize(val);
  };

  const changeColor = (val) => {
    setColor(val);
  };
  return (
    <>
      <div className="card card-border" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div align="center">
                <Image src={img} width="75%" loading="lazy" />
              </div>
            </div>
            <div className="col-md-6">
              <h2
                className="mb-3"
                style={{
                  color: "green",
                }}
              >
                {Number(data.price).toLocaleString("us-Us", { style: "currency", currency: "USD" })}
              </h2>
              <VideoPlayer video={data.video} />
              <br />
              <label className="text-muted mt-3">description</label>
              <p>{data.description}</p>
              <label className="text-muted">Select Size (us)</label>
              <br />
              {data.sizes.map((el) => (
                <button
                  key={el}
                  onClick={() => {
                    changeSize(el);
                  }}
                  className={el === size ? "btn btn-dark mt-1 me-1" : "btn btn-outline-dark me-1 mt-1"}
                  style={{ width: "4rem" }}
                >
                  {el}
                </button>
              ))}
              <br />
              <label className="text-muted mt-3">Select Color</label>
              <br />
              {data.colors.map((el) => (
                <button
                  key={el.color_hash}
                  onClick={() => changeColor(el.color_hash)}
                  className="me-2"
                  style={{
                    backgroundColor: el.color_hash,
                    width: 45,
                    height: 45,
                    borderRadius: "50%",
                    borderStyle: el.color_hash === color ? "solid" : "none",
                    borderWidth: "2px",
                    borderColor: grey[400],
                  }}
                ></button>
              ))}

              <br />
              <OrderNow data={{ name: data.name, img: img, color: color, size: size, price: data.price }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetail;
