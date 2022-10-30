import styled from "styled-components";

import { Button } from "react-bootstrap";
import { ReactComponent as LocationSvg } from "../../assets/icons/location.svg";

export const LocationIcon = styled(LocationSvg)`
  width: 14px;
  fill: ${(props) => props.secondarycolor};
`;

export const ButtonType = styled(Button)`
  color: ${(props) => props.secondarycolor};
  background-color: ${(props) => props.primarycolor};
  border-color: ${(props) => props.primarycolor};
  &:hover {
    ${LocationIcon} {
      fill: ${(props) => props.primarycolor};
    }
    background-color: transparent;
    border-color: ${(props) => props.primarycolor};
    color: ${(props) => props.primarycolor};
  }
`;
