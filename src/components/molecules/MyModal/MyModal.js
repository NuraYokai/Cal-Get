import React from "react";
import { StyleSheet, Modal, View } from "react-native";
import PropTypes from "prop-types";
import { useTheme } from "@react-navigation/native";
import { MyButton } from "../MyButton/MyButton";
import { Spacer } from "../../atoms/spacer/spacer.component";

const MyModal = ({ visible, onClose, children }) => {
  const { colors } = useTheme();

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Spacer position="bottom" size="large" />
        {children}
        <Spacer position="bottom" size="medium" />
        <MyButton onPress={onClose}>Cancel</MyButton>
      </View>
    </Modal>
  );
};

MyModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyModal;
