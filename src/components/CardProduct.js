import React from "react";
import { useNavigate } from "react-router";

function CardProduct(props) {
  const navigate = useNavigate();
  const { img, data } = props;

  const handleClick = () => {
    navigate("/detail", { state: { data: data, img: img } });
  };

  return (
    <>
      <div className="card-product p-2">
        <div className="text-center">
          <img src={img} className="img-fluid" width="150" alt="products" loading="lazy" />
        </div>
        <div className="content">
          <div className="d-flex justify-content-between align-items-center">
            <span className="category">{data.name}</span> <span className="price">{Number(data.price).toLocaleString("us-Us", { style: "currency", currency: "USD" })}</span>
          </div>
          <p>{data.category}</p>
          <div className="buttons d-flex justify-content-center">
            <button className="btn btn-dark" onClick={handleClick}>
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
