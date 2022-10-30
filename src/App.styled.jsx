import styled from "styled-components";

export const AppStyle = styled.div`
  height: 100%;
  min-height: 100vh;
  padding: 30px 0;
  background: ${(props) => props.primaryColor};
  @media screen and (max-width: 480px) {
    padding: 30px 0;
  }
`;
