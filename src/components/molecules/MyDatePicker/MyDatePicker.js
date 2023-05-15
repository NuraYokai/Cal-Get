import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PropTypes from "prop-types";

export const MyDatePicker = ({ onDateSelected, initialDate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleConfirm = (date) => {
    setSelectedDate(date);
    setIsVisible(false);
    onDateSelected(date);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handlePress = () => {
    setIsVisible(true);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.datePickerContainer}
        onPress={handlePress}
      >
        <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        date={selectedDate}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

MyDatePicker.propTypes = {
  onDateSelected: PropTypes.func.isRequired,
  initialDate: PropTypes.instanceOf(Date).isRequired,
};

const styles = StyleSheet.create({
  datePickerContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: "80%",
    padding: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
  },
});
