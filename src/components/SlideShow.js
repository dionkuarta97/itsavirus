import { Carousel, Image } from "react-bootstrap";

function SlideShow() {
  const imgSlide = [
    {
      img: "https://seoaves.com/wp-content/uploads/2021/05/Nike-casual-wear.webp",
    },
    {
      img: "https://pbs.twimg.com/media/EV5_G8jXgAAw_vJ.jpg",
    },
    {
      img: "https://i2.wp.com/www.footfire.co.uk/wp-content/uploads/2019/12/nike-kyrie-6-jet-black-bq4630-001-sale-now-under-100.jpg?ssl=1",
    },
  ];

  return (
    <>
      <Carousel className="mb-3" interval={3000}>
        {imgSlide.map((el, index) => (
          <Carousel.Item key={index}>
            <Image src={el.img} alt="First slide" className="img-slide" loading="lazy" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default SlideShow;
