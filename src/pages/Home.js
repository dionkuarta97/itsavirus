import { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../components/CardProduct";
import SlideShow from "../components/SlideShow";
import { getProducts } from "../store/actios";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Home() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state);
  const imgShoes = [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e125b578-4173-401a-ab13-f066979c8848/air-force-1-older-shoes-w6PsF3.png",
    "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/1925b921-d32f-45b7-a4d6-3bc07504b64b/zoom-freak-2-letter-bro-release-date.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/80d39ff9-36c8-4c5c-a8a7-85c524b35f82/jordan-delta-2-shoe-8Z0Rkk.png",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4a124753-81c5-4174-87e1-ab80d0c3b106/kyrie-7-ep-basketball-shoes-8ZrrMn.png",
    "https://ncrsport.com/img/storage/large/DB9990-100-1.jpg",
    "https://images.tokopedia.net/img/cache/500-square/product-1/2019/12/11/6153296/6153296_4cab9aad-d960-4b69-8ca1-4ebb5c257268_768_768",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/698f3c6a-ee61-4d2a-9d31-9ee469882d60/kd13-ep-basketball-shoe-vnXhjj.png",
    "https://ncrsport.com/img/storage/large/AT1198-001-1.jpg",
  ];

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <SlideShow img={imgShoes} />
      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="inherit" />
        </Box>
      ) : (
        <Container style={{ marginTop: "2rem", marginBottom: "5rem" }}>
          <div align="center">
            <h1>New Releases</h1>
          </div>
          <Row>
            {products?.map((el, idx) => (
              <Col xs={6} lg={4} md={4} key={idx + el.name}>
                <CardProduct img={imgShoes[idx]} data={el} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default Home;
