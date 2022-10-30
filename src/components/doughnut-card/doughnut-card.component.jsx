import Doughnut from "../doughnut/doughnut.component";
import DoughnutCombine from "../doughnut-combine/doughnut-combine.component";

function DoughuntCard({ style }) {
  const { position, borderRadius, height, width, color } = style;
  return (
    <DoughnutCombine
      position={{
        top: position.top,
        right: position.right,
        bottom: position.bottom,
        left: position.left,
      }}>
      <Doughnut
        borderRadius={borderRadius}
        height={height}
        width={width}
        color={color}>
        <Doughnut
          borderRadius={borderRadius}
          height={height}
          width={width}
          color={color}>
          <Doughnut
            borderRadius={borderRadius}
            height={height}
            width={width}
            color={color}>
            <Doughnut
              borderRadius={borderRadius}
              height={height}
              width={width}
              color={color}>
              <Doughnut
                borderRadius={borderRadius}
                height={height}
                width={width}
                color={color}>
                <Doughnut
                  borderRadius={borderRadius}
                  height={height}
                  width={width}
                  color={color}>
                  <Doughnut
                    borderRadius={borderRadius}
                    height={height}
                    width={width}
                    color={color}></Doughnut>
                </Doughnut>
              </Doughnut>
            </Doughnut>
          </Doughnut>
        </Doughnut>
      </Doughnut>
    </DoughnutCombine>
  );
}

export default DoughuntCard;
