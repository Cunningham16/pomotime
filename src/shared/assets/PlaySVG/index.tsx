import React from 'react'
import { View } from 'react-native'
import { Path, Svg } from 'react-native-svg'

const PlaySVG = () => {
  return (
    <View>
      <Svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <Path
          d="M13.8906 26.2865C13.4045 26.6024 12.9121 26.6204 12.4133 26.3404C11.9156 26.0614 11.6667 25.6302 11.6667 25.0469V9.95312C11.6667 9.36979 11.9156 8.93812 12.4133 8.65812C12.9121 8.37909 13.4045 8.39757 13.8906 8.71354L25.776 16.2604C26.2135 16.5521 26.4323 16.9653 26.4323 17.5C26.4323 18.0347 26.2135 18.4479 25.776 18.7396L13.8906 26.2865Z"
          fill="#EFF1F5"
        />
      </Svg>
    </View>
  );
}

export default PlaySVG