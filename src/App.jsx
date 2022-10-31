import { useState, useEffect } from "react";
import { shopsArray } from "./utils/shops";

import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { AppStyle } from "./App.styled";

import DoughuntCard from "./components/doughnut-card/doughnut-card.component";
import Map from "./components/map/map.component";
import Location from "./components/location/location.component";

const shopFind = (shops, id) => {
  return { ...shops.find((e) => e.id === id), cityName: null };
};

function App() {
  const [isActiveShopId, setIsActiveShopId] = useState(1);
  const [shop, setShop] = useState(shopFind(shopsArray, isActiveShopId));

  useEffect(() => {
    setShop(shopFind(shopsArray, isActiveShopId));
  }, [isActiveShopId]);

  const handlerShopChange = (id) => {
    setIsActiveShopId(id);
  };

  const handlerMapClick = ({ plateNumber, name }) => {
    setShop({
      ...shop,
      data: shopFind(shopsArray, isActiveShopId).data.filter(
        (e) => e.city === plateNumber
      ),
      cityName: name,
    });
  };

  return (
    <AppStyle primaryColor={shop.theme.app.primaryColor}>
      <DoughuntCard
        style={{
          position: {
            top: "-680px",
            right: "auto",
            bottom: "auto",
            left: "-680px",
          },
          borderRadius: "500px",
          height: "500px",
          width: "500px",
          color: shop.theme.app.secondaryColor,
        }}
      />
      <DoughuntCard
        style={{
          position: {
            top: "-680px",
            right: "-680px",
            bottom: "auto",
            left: "auto",
          },
          borderRadius: "500px",
          height: "500px",
          width: "500px",
          color: shop.theme.app.secondaryColor,
        }}
      />
      <Container style={{ position: "relative", zIndex: "10" }}>
        <Row>
          <Col className="text-center">
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-basic"
                size="md"
                style={{
                  backgroundColor: shop.theme.app.secondaryColor,
                  border: "0px",
                  width: "160px",
                }}>
                {shop.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {shopsArray.map((item, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handlerShopChange(item.id)}>
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Map
              BoxType={{ top: 0, left: 100, width: 1050, height: 500 }}
              StyleType={{
                idleColor: shop.theme.map.primaryColor,
                hoverColor: shop.theme.map.secondaryColor,
              }}
              onClick={handlerMapClick}
            />
            <Location
              primaryColor={shop.theme.location.primaryColor}
              secondaryColor={shop.theme.location.secondaryColor}
              locationData={shop.data}
              cityName={shop.cityName}
            />
          </Col>
        </Row>
      </Container>
    </AppStyle>
  );
}

export default App;
