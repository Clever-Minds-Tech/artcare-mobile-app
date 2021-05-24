import * as React from 'react';
import Svg, { Circle, Rect, Path, G } from 'react-native-svg';

export default function Colic(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 210 297"
      {...props}
    >
      <G fill="#fc0">
        <Rect width={49.515} height={5.795} x={64.809} y={69.867} ry={2.898} />
        <Rect width={46.842} height={6.33} x={56.217} y={139.363} ry={3.165} />
        <Rect width={50.317} height={5.929} x={97.017} y={112.249} ry={2.965} />
        <Rect
          width={49.366}
          height={6.024}
          x={-28.457}
          y={137.034}
          ry={3.012}
          transform="matrix(.31376 -.9495 .7624 .6471 0 0)"
        />
        <Rect
          width={75.085}
          height={7.42}
          x={43.321}
          y={-83.308}
          ry={3.71}
          transform="matrix(-.14188 .98988 -.935 -.35462 0 0)"
        />
        <Rect
          width={104.142}
          height={11.731}
          x={48.96}
          y={240.916}
          ry={5.865}
          transform="matrix(.58054 -.81423 .23902 .97101 0 0)"
        />
        <Rect
          width={63.648}
          height={7.992}
          x={-134.166}
          y={133.345}
          ry={3.996}
          transform="matrix(.22249 -.97494 .85448 .51948 0 0)"
        />
      </G>
    </Svg>
  );
}
