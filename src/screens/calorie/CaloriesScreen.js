import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "../../components/atoms/typography/text.component";
import { Fab } from "../../components/molecules/FabGroup/fab-group.component";

function CaloriesScreen() {
  const handleAddPress = useCallback(() => {
    console.log("Add pressed");
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text variant="title">Calories</Text>
      </View>
      <Fab icon="plus" title="Add" onPress={handleAddPress} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default React.memo(CaloriesScreen);
