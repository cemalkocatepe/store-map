import { DoughnutCombineStyled } from "./doughnut-combine.styled";

function DoughnutCombine({ children, position }) {
  return (
    <DoughnutCombineStyled position={position}>
      {children}
    </DoughnutCombineStyled>
  );
}

export default DoughnutCombine;
