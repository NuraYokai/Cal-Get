import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { Text } from "../../atoms/typography/text.component";

export const TouchableOption = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text variant="title">{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
