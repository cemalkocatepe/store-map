import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import LocationCart from "../location-cart/location-cart.component";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 500,
  rows: 1,
  cssEase: "linear",
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        rows: 1,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        rows: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

function Location({ primaryColor, secondaryColor, locationData, cityName }) {
  const [address, setAddress] = useState("Boyner Genel Merkez");
  const handlerLocationClick = (data) => {
    setAddress(encodeURI(data.address.toLowerCase()));
    window.scrollTo(0, 1000);
  };

  return (
    <Container className="mt-3" style={{ zIndex: 10 }}>
      {locationData.length ? (
        <Row>
          <Col md={12}>
            <h3 className="text-center text-white mb-3">
              {cityName ? cityName + " Mağazalar" : "Tüm Mağazalar"}
            </h3>
            <Slider {...settings}>
              {locationData.map((item, index) => (
                <LocationCart
                  key={index}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  data={item}
                  handlerLocationClick={() => handlerLocationClick(item)}
                />
              ))}
            </Slider>
          </Col>
          <Col md={12}>
            <iframe
              title="maps-google"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyClt0MRBtvV4wrVr8REDHjV_4Nc2-BNU1o&q=${address}`}
              width="100%"
              height="450"
              loading="lazy"
              style={{
                border: `7px solid ${primaryColor}`,
                borderRadius: "25px",
              }}></iframe>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col md={12}>
            <Button
              as="a"
              href="https://www.boyner.com.tr"
              variant="link"
              style={{
                color: secondaryColor,
                fontSize: "24px",
              }}>
              Boyner.com.tr ziyaret edebilirsiniz.
            </Button>
            <p
              className="text-center text-white mb-3"
              style={{ fontSize: "18px" }}>
              {`${cityName} Mağazası Bulunamadı`}
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Location;
