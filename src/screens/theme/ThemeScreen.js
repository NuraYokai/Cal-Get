import React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "../../components/atoms/typography/text.component";
import { Spacer } from "../../components/atoms/spacer/spacer.component";

const ThemeScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="title">Title</Text>
      <Spacer size="medium" />
      <Text variant="body">Body</Text>
      <Spacer size="large" />
      <Text>Default</Text>
      <Spacer size="xl" />
      <Text variant="caption">Caption</Text>
      <Spacer size="xxl" />
      <Text variant="hint">Hint</Text>
      <Spacer size="medium" />
      <Text variant="error">Error</Text>
      <Spacer size="large" />
      <Text variant="label">Label</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThemeScreen;
