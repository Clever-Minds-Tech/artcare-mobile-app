import * as React from 'react';
import Svg, { Circle, Rect, Path, G } from 'react-native-svg';

export default function CalendarIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="130"
      viewBox="0 0 210 297"
      {...props}
    >
      <G fill="#a92257">
        <Path d="M187.606 80.608h-17.397V64.726c0-2.016-1.957-3.665-4.349-3.665h-14.497c-2.392 0-4.349 1.65-4.349 3.665v15.882h-46.39V64.726c0-2.016-1.958-3.665-4.35-3.665H81.777c-2.392 0-4.35 1.65-4.35 3.665v15.882H60.032c-9.604 0-17.396 6.567-17.396 14.66v107.508c0 8.094 7.792 14.66 17.396 14.66h127.575c9.604 0 17.397-6.566 17.397-14.66V95.268c0-8.093-7.793-14.66-17.397-14.66zm-2.175 122.168H62.206c-1.196 0-2.175-.825-2.175-1.832l-.049-103.351 127.364-.354.26 103.705c.002 1.007-.979 1.832-2.175 1.832z" />
        <Path d="M124.422 189.063c9.892 0 17.917-7.046 17.917-15.733 0-6.696-12.26-21.979-17.13-27.82-1.195-1.423-.944-1.465-2.139-.042-4.87 5.841-16.564 21.166-16.564 27.861 0 8.687 8.025 15.734 17.916 15.734zM58.265 113.92h130.962v14.7H58.265z" />
        <Rect width={23.6} height={22.889} x={77.428} y={80.608} ry={3.359} />
        <Rect
          width={23.122}
          height={22.889}
          x={147.087}
          y={80.608}
          ry={3.199}
        />
      </G>
    </Svg>
  );
}
