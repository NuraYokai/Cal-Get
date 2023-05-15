import React, { memo, useCallback } from "react";
import { View } from "react-native";

import { TouchableOption } from "../../components/molecules/TouchableOption/TouchableOption";

const SettingScreen = () => {
  const handleLogout = useCallback(() => {
    console.log("User logged out");
  }, []);

  const handleAbout = useCallback(() => {
    console.log("About page opened");
  }, []);

  return (
    <>
      <View>
        <TouchableOption onPress={handleLogout} text="Log Out" />
        <TouchableOption onPress={handleAbout} text="About" />
      </View>
    </>
  );
};

export default memo(SettingScreen);
