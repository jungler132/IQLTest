import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function ArrowForward(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.514 27.777"
      {...props}>
      <Defs>
        <LinearGradient
          id="a"
          x1={248.07}
          gradientUnits="userSpaceOnUse"
          y1={224.94}
          gradientTransform="matrix(1.6732 0 0 1.1476 -203.14 -178.37)"
          x2={230.58}
          y2={244.74}>
          <Stop stopColor="#ff2a26" offset={0} />
          <Stop stopColor="#96000d" offset={1} />
        </LinearGradient>
      </Defs>
      <Path
        strokeLinejoin="round"
        d="M200.81 78.34v5.348h-20.89v15.299h20.89v5.383l13.87-13.033-13.87-12.997z"
        stroke="#6b1a11"
        strokeWidth={1.75}
        fill="url(#a)"
        transform="translate(-179.04 -77.465)"
        color="#000"
      />
    </Svg>
  );
}

export default ArrowForward;
