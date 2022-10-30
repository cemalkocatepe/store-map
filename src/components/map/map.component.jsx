import { Tooltip } from "antd";
import TurkeyMap from "turkey-map-react";

const renderCity = (cityComponent, cityData) => (
  <Tooltip title={cityData.name} key={cityData.id}>
    {cityComponent}
  </Tooltip>
);

function Map({ BoxType, StyleType, onClick }) {
  return (
    <TurkeyMap
      onClick={onClick}
      cityWrapper={renderCity}
      viewBox={BoxType}
      customStyle={StyleType}
    />
  );
}

export default Map;
