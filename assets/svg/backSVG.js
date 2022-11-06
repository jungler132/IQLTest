import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function ArrowBack(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.514 27.777"
      {...props}>
      <Defs>
        <LinearGradient
          id="a"
          x1={-451.31}
          gradientUnits="userSpaceOnUse"
          y1={-228.7}
          gradientTransform="matrix(-1.6732 0 0 -1.1476 -296.47 -182.02)"
          x2={-434.34}
          y2={-246.58}>
          <Stop stopColor="#ff2a26" offset={0} />
          <Stop stopColor="#96000d" offset={1} />
        </LinearGradient>
      </Defs>
      <Path
        strokeLinejoin="round"
        d="M440.51 104.37v-5.352h20.89V83.719h-20.89V78.34l-13.87 13.029 13.87 13.001z"
        stroke="#6b1a11"
        strokeWidth={1.75}
        fill="url(#a)"
        transform="translate(-425.76 -77.465)"
        color="#000"
      />
    </Svg>
  );
}

export default ArrowBack;
