import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

// Define the SafeArea component using styled-components
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  /* Use the StatusBar.currentHeight property to set the top margin.
     This ensures that the component is positioned below the status bar. */
  margin-top: ${StatusBar.currentHeight}px;
`;
