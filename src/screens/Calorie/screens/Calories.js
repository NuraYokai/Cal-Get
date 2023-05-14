import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import { Text } from "../../../components/typography/text.component";
import { Fab } from "../../Components/FabGroup/fab-group.component";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: transparent;
`;

export default function Calories() {
  const handleAddPress = () => {
    console.log("Add pressed");
  };

  

  return (
    <Container>
      <View style={styles.container}>
        <Text variant="title">Calories</Text>
      </View>
      <Fab
        icon="plus"
        title="Add"
        onPress={handleAddPress}
      />
    </Container>
  );
}

Calories.propTypes = {
  open: PropTypes.bool,
  actions: PropTypes.array,
  onStateChange: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
