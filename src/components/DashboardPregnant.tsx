import * as React from 'react';
import Svg, { Circle, Rect, Path, Defs, LinearGradient, Stop, G } from 'react-native-svg';


export default function DashboardPregnant(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="500"
      height="590"
      viewBox="0 0 210 297"
      {...props}
    >
      <Defs>
        <LinearGradient
          y2={4.239}
          x2={103.943}
          y1={281.125}
          x1={100.542}
          gradientUnits="userSpaceOnUse"
          id="prefix__b"

          gradientTransform="matrix(1 0 0 1.04499 .189 -21.797)"
        />
        <LinearGradient id="prefix__a">
          <Stop offset={0} stopColor="#46af31" stopOpacity={0.5} />
          <Stop offset={1} stopColor="#4bd172" />
        </LinearGradient>
      </Defs>
      <G transform="translate(-.492 9.945)">
        <Path
          d="M210.877 146.976a105.077 105.36 0 01-105.244 102.682A105.077 105.36 0 01.78 146.575 105.077 105.36 0 01101.093 39.044a105.077 105.36 0 01109.57 98.026"
          fill="url(#prefix__a)"
        />
        <Path
          d="M176.667 144.699a70.192 70.395 0 01-69.237 70.388 70.192 70.395 0 01-71.122-68.471 70.192 70.395 0 0167.3-72.253 70.192 70.395 0 0172.955 66.503"
          fill="#fff"
        />
        <Rect
          ry={0}
          y={23.583}
          x={25.658}
          height={29.934}
          width={44.367}
          fill="none"
        />
        <Path
          fill="none"
          d="M47.574 37.214h14.165v9.087H47.574zM8.553 145.993h11.225v3.475H8.553z"
        />
        <Rect
          ry={9.942}
          y={134.581}
          x={188.186}
          height={19.884}
          width={63.019}
          fill="#fff"
        />
      </G>
    </Svg>
  );
}
