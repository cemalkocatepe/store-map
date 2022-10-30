import { Col, Card } from "react-bootstrap";
import { ButtonType, LocationIcon } from "./location-cart.styled";

function LocationCart({
  primaryColor,
  secondaryColor,
  data,
  handlerLocationClick,
}) {
  return (
    <div className="mb-2 mx-1">
      <Card className="text-center" style={{ minHeight: "230px" }}>
        <Card.Header>
          <Col as="b">{data.name}</Col>
        </Card.Header>
        <Card.Body>
          <Card.Text>{data.address}</Card.Text>
          <Col as="span">{data.phone}</Col>
        </Card.Body>
        <Card.Footer>
          <Col className="d-grid gap-2">
            <ButtonType
              variant="dark"
              primarycolor={primaryColor}
              secondarycolor={secondaryColor}
              onClick={handlerLocationClick}>
              <LocationIcon
                primarycolor={primaryColor}
                secondarycolor={secondaryColor}
              />{" "}
              Harita'da Göster
            </ButtonType>
          </Col>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default LocationCart;
