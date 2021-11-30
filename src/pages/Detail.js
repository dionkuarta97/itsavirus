import { useLocation } from "react-router";
import { Container } from "react-bootstrap";
import CardDetail from "../components/CardDetail";

function Detail() {
  const location = useLocation();

  const { data, img } = location.state;

  return (
    <>
      <Container style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <div className="mt-3 mb-3">
          <h1>{data.name}</h1>
          <h3 className="text-muted">{data.category}</h3>
        </div>
        <CardDetail data={data} img={img} />
      </Container>
    </>
  );
}

export default Detail;
