import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

export const Fab = ({ icon, onPress }) => {
  return (
    <FAB
      style={styles1.fab}
      icon={icon}
      onPress={onPress}
    />
  );
};

export const FabGroup = ({ open, onStateChange, actions }) => {
  return (
    <FAB.Group
      style={styles.fab}
      open={open}
      icon={open ? "close" : "plus"}
      actions={actions}
      onStateChange={onStateChange}
      backdropColor="transparent"
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

const styles1 = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 32,
    right: 0,
    bottom: 0,
  },
});
