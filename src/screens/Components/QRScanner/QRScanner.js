import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import PropTypes from "prop-types";

const QRScanner = ({ onScan }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    onScan(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <View style={styles.scanAgainButton}>
          <Text style={styles.scanAgainText} onPress={() => setScanned(false)}>
            Tap to Scan Again
          </Text>
        </View>
      )}
    </View>
  );
};

QRScanner.propTypes = {
  onScan: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  scanAgainButton: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  scanAgainText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default QRScanner;
