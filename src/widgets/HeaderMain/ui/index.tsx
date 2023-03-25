import { Text, View, TouchableOpacity, Pressable } from "react-native";
import styles from "./styles";
import MenuButtonSVG from "shared/assets/MenuButtonSVG";
import CloseButtonSVG from "shared/assets/CloseButtonSVG";
import { useAppDispatch, useAppSelector } from "shared/hooks/ReduxHooks";
import { toggleSidebar } from "../model";
import { Sidebar } from "widgets/Sidebar/ui";

export const Header = () => {
  const { isOpenSidebar } = useAppSelector((state) => state.headerReducer);
  const dispatch = useAppDispatch();

  const openSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <View style={styles.container}>
      <Sidebar />
      <Pressable
        onPress={openSidebar}
        style={{
          zIndex: 20,
        }}
      >
        <View style={styles.button}>
          {isOpenSidebar ? <CloseButtonSVG /> : <MenuButtonSVG />}
        </View>
      </Pressable>
      <Text style={styles.text}>Pomotime</Text>
    </View>
  );
};
