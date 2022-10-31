import styled from "styled-components";

export const DoughnutCombineStyled = styled.div`
  position: fixed;
  top: ${(props) => props.position.top};
  right: ${(props) => props.position.right};
  bottom: ${(props) => props.position.bottom};
  left: ${(props) => props.position.left};
  @media screen and (max-width: 1440px) {
    display: none;
  }
`;
