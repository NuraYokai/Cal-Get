import React, { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { withNavigation } from 'react-navigation';

import { Text } from "../../../components/typography/text.component";
import { FabGroup } from "../../Components/FabGroup/fab-group.component";

import QRScannerScreen from "../../QRScannerScreen/screen/QRScannerScreen";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: transparent;
`;

const Home = ({ navigation }) => {

  const [fabOpen, setFabOpen] = useState(true);

  const handleFabStateChange = ({ open }) => {
    setFabOpen(open);
  };

  const handleQrScanPress = () => {
     console.log("QR pressed");
  };

  const handleAddPress = () => {
    console.log("Add pressed");
  };

  return (
    <Container>
      <View style={styles.container}>
        <Text variant="title">Title</Text>
        <Text variant="body">Body</Text>
        <Text>Default</Text>
        <Text variant="caption">Caption</Text>
        <Text variant="hint">Hint</Text>
        <Text variant="error">Error</Text>
        <Text variant="label">Label</Text>
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
          { icon: "plus", label: "Add Food/Expense", onPress: handleAddPress },
        ]}
        onStateChange={handleFabStateChange}
      />
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withNavigation(Home);
