import * as React from 'react';
import Svg, { Circle, Rect, Path } from 'react-native-svg';

export default function PillLittle(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 210 297"
      {...props}
    >
      <Path
        d="M152.497 106.469c9.056 9.909 7.836 25.742-2.727 35.395L111.546 176.8c-10.563 9.654-26.441 9.448-35.497-.461-9.056-9.909-7.836-25.742 2.726-35.395L117 106.008c10.563-9.654 26.442-9.448 35.498.461zM107.25 133.72l14.045 15.367 19.112-17.467c4.522-4.133 5.045-10.928 1.169-15.17-3.877-4.242-10.692-4.33-15.214-.197z"
        fill="#00f"
      />
    </Svg>
  );
}
