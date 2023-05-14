import React, { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import { Text } from "../../../components/typography/text.component";
import { FabGroup } from "../../Components/FabGroup/fab-group.component";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: transparent;
`;

export default function Transactions() {
  const [fabOpen, setFabOpen] = useState(true);

  const handleFabStateChange = ({ open }) => {
    setFabOpen(open);
  };

  const handleQrScanPress = () => {
    console.log("QR Scan pressed");
  };

  const handleAddPress = () => {
    console.log("Add pressed");
  };

  return (
    <Container>
      <View style={styles.container}>
        <Text variant="title">Transactions</Text>
      </View>
      <FabGroup
        open={fabOpen}
        icon={fabOpen ? "close" : "plus"}
        actions={[
          {
            icon: "qrcode-scan",
            label: "QR Scan",
            onPress: handleQrScanPress,
          },
          { icon: "plus", label: "Add Expense", onPress: handleAddPress },
        ]}
        onStateChange={handleFabStateChange}
      />
    </Container>
  );
}

Transactions.propTypes = {
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
