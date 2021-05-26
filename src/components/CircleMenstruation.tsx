import * as React from 'react';
import Svg, { Circle, Rect, Path, Defs, LinearGradient, Stop, } from 'react-native-svg';


export default function CircleMenstruation(props) {
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
          gradientTransform="matrix(1 0 0 1.04499 .189 -21.797)"

          id="prefix__b"
          gradientUnits="userSpaceOnUse"
          x1={100.542}
          y1={281.125}
          x2={105.833}
          y2={-412.083}
        />
        <LinearGradient id="prefix__a">
          <Stop offset={0} stopColor="#a92257" stopOpacity={0.6} />
          <Stop offset={1} stopColor="#c25679" />
        </LinearGradient>
      </Defs>
      <Path
        d="M210.877 146.976a105.077 105.36 0 01-105.244 102.682A105.077 105.36 0 01.78 146.575 105.077 105.36 0 01101.093 39.044a105.077 105.36 0 01109.57 98.026"
        fill="url(#prefix__a)"
      />
      <Path
        d="M176.667 144.699a70.192 70.395 0 01-69.237 70.388 70.192 70.395 0 01-71.122-68.471 70.192 70.395 0 0167.3-72.253 70.192 70.395 0 0172.955 66.503"
        fill="#fff"
      />
      <Rect
        width={44.367}
        height={29.934}
        x={25.658}
        y={23.583}
        ry={0}
        fill="none"
      />
      <Path
        fill="none"
        d="M47.574 37.214h14.165v9.087H47.574zM8.553 145.993h11.225v3.475H8.553z"
      />
      <Rect
        width={63.019}
        height={19.884}
        x={188.186}
        y={134.581}
        ry={9.942}
        fill="#fff"
      />
    </Svg>
  );
}
