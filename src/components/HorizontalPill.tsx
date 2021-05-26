import * as React from 'react';
import Svg, { Circle, Rect, Path } from 'react-native-svg';

export default function HorizontalPill(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 210 297"
      {...props}
    >
      <Path
        d="M152.692 138.196c0-13.423-11.581-24.288-25.891-24.288H75.018c-14.31 0-25.892 10.865-25.892 24.288 0 13.424 11.582 24.288 25.892 24.288H126.8c14.31 0 25.891-10.864 25.891-24.288zm-51.783 10.41v-20.819h25.892c6.126 0 11.096 4.663 11.096 10.41 0 5.746-4.97 10.408-11.096 10.408z"
        fill="#00f"
      />
    </Svg>
  );
}
