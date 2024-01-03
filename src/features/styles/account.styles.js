import { ImageBackground, Platform, ScrollView, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const AccountScrollView = styled(ScrollView)`
  flex: 1;
  scroll-behavior: smooth;
`;

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../assets/home_bg.jpg"),
})`
  flex: auto;
  width: auto;
  height: ${({ height }) => height + 48}px;
  align-items: center;
  justify-content: flex-start;
`;

export const AccountCard = styled(View)`
  background-color: wheat;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width * 0.9}px;
  max-width: 500px;
  height: auto;
  margin-top: ${Platform.OS === "web"
    ? ({ marginTop }) => marginTop * 0.05
    : ({ marginTop }) => marginTop * 0.125}px;
`;

export const AccountDivider = styled(View)`
  height: 2px;
  width: 80%;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const AccountTextInput = styled(TextInput).attrs({
  mode: "flat",
})`
  margin: 12px;
  background-color: transparent;
  font-size: ${({ width }) => (width < 500 ? 14 : 16)}px;
  width: ${({ width }) => (width < 500 ? 250 : 400)}px;
`;

export const AccountButton = styled(Button).attrs({
  mode: "outlined",
})`
  margin: 15px;
  margin-bottom: 30px;
`;

export const AccountButtonView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;