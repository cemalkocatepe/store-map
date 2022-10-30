import styled from "styled-components";

export const DoughnutStyled = styled.div`
  border: 20px solid ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: inline-table;
  padding: 20px;
  box-shadow: 0px 10px 8px -5px rgba(0, 0, 0, 0.75);
`;
