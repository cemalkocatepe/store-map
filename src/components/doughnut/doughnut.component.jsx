import { DoughnutStyled } from "./doughnut.styled";

function Doughunt({ children, borderRadius, height, width, color }) {
  return (
    <DoughnutStyled
      borderRadius={borderRadius}
      height={height}
      width={width}
      color={color}>
      {children}
    </DoughnutStyled>
  );
}

export default Doughunt;
