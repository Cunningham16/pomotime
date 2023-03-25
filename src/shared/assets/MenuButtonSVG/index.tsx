import React from "react";
import { View } from "react-native";
import { Path, Svg } from "react-native-svg";

const MenuButtonSVG = () => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
          fill="#80889B"
        />
      </Svg>
    </View>
  );
};

export default MenuButtonSVG;
