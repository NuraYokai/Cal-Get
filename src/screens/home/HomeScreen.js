import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components/atoms/typography/text.component";
import { FabGroup } from "../../components/molecules/FabGroup/fab-group.component";
import MyModal from "../../components/molecules/MyModal/MyModal";
import { MyDatePicker } from "../../components/molecules/MyDatePicker/MyDatePicker";
import { Spacer } from "../../components/atoms/spacer/spacer.component";
import CalculatorModal from "../../components/CalculatorModal/CalculatorModal";

const HomeScreen = () => {
  const [fabOpen, setFabOpen] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleFabStateChange = ({ open }) => {
    setFabOpen(open);
  };

  const handleAddPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleDateSelected = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <View style={styles.container}>
        <Text variant="title">Home Screen</Text>
      </View>
      <FabGroup
        open={fabOpen}
        icon={fabOpen ? "close" : "plus"}
        actions={[
          {
            icon: "qrcode-scan",
            label: "QR Scan",
            onPress: () => console.log("QR Scan pressed"),
          },
          { icon: "plus", label: "Add Expense", onPress: handleAddPress },
        ]}
        onStateChange={handleFabStateChange}
      />
      <MyModal visible={modalVisible} onClose={handleModalClose}>
        <Text variant="title">Add Expense</Text>
        <MyDatePicker
          onDateSelected={handleDateSelected}
          initialDate={selectedDate}
        />
        <Spacer position="top" size="large">
          <CalculatorModal />
        </Spacer>
        {/* Add form or any content for adding expense here */}
      </MyModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
