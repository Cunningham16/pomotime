import { View, StyleSheet, Text, TouchableOpacity, Alert, Linking } from "react-native";
import { constants } from "shared/constants";

export const SettingsSection = () => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: constants.secondaryColor,
        alignItems: "center"
      }}>
        <TouchableOpacity>
          <View
            style={{
              width: 344,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: constants.primaryColor,
              height: 46,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: constants.whiteColor,
                fontSize: 16,
                fontFamily: "open-sans",
              }}
            >
              Rate us
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: 344,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: constants.primaryColor,
              height: 46,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: constants.whiteColor,
                fontSize: 16,
                fontFamily: "open-sans",
              }}
            >
              Github
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: 344,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: constants.primaryColor,
              height: 46,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: constants.whiteColor,
                fontSize: 16,
                fontFamily: "open-sans",
              }}
            >
              License
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
}