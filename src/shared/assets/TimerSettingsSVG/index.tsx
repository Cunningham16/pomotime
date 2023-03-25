import React from "react";
import { View } from "react-native";
import { Path, Svg } from "react-native-svg";

const TimerSettingsSVG = () => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z"
          fill="#80889B"
        />
      </Svg>
    </View>
  );
};

export default TimerSettingsSVG;
