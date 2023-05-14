import { View } from "react-native";
import React from "react";
import styled from "styled-components";
import { StyleSheet } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

export default function Settings() {
  return (
    <TransparentSafeArea>
      <View style={styles.container}>
        <Text variant="title">Log Out</Text>
        <Text variant="title">About</Text>
      </View>
    </TransparentSafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
