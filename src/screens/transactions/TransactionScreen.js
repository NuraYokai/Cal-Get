import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "../../components/atoms/typography/text.component";
import { FabGroup } from "../../components/molecules/FabGroup/fab-group.component";

const TransactionScreen = () => {
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
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TransactionScreen;
