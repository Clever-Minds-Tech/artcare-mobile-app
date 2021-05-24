import * as React from 'react';
import Svg, { Circle, Rect, Path } from 'react-native-svg';

export default function LittleFlow(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="80mm"
      height="80mm"
      viewBox="0 0 210 297"
      {...props}
    >
      <Rect
        width={187.158}
        height={36.981}
        x={12.851}
        y={129.935}
        ry={18.491}
        fill="#faa"
      />
    </Svg>
  );
}
