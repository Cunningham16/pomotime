import React from "react";
import { View } from "react-native";
import { Path, Svg } from "react-native-svg";

const PauseSVG = () => {
  return (
    <View>
      <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
        <Path
          d="M21.875 27.7084C21.0729 27.7084 20.3865 27.423 19.8158 26.8523C19.2442 26.2806 18.9583 25.5938 18.9583 24.7917V10.2084C18.9583 9.40627 19.2442 8.71988 19.8158 8.14919C20.3865 7.57752 21.0729 7.29169 21.875 7.29169H24.7917C25.5937 7.29169 26.2806 7.57752 26.8523 8.14919C27.423 8.71988 27.7083 9.40627 27.7083 10.2084V24.7917C27.7083 25.5938 27.423 26.2806 26.8523 26.8523C26.2806 27.423 25.5937 27.7084 24.7917 27.7084H21.875ZM10.2083 27.7084C9.40625 27.7084 8.71986 27.423 8.14916 26.8523C7.5775 26.2806 7.29166 25.5938 7.29166 24.7917V10.2084C7.29166 9.40627 7.5775 8.71988 8.14916 8.14919C8.71986 7.57752 9.40625 7.29169 10.2083 7.29169H13.125C13.9271 7.29169 14.614 7.57752 15.1856 8.14919C15.7563 8.71988 16.0417 9.40627 16.0417 10.2084V24.7917C16.0417 25.5938 15.7563 26.2806 15.1856 26.8523C14.614 27.423 13.9271 27.7084 13.125 27.7084H10.2083Z"
          fill="#EFF1F5"
        />
      </Svg>
    </View>
  );
};

export default PauseSVG;
