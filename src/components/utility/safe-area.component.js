import styled from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";

const StatusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBarHeight}px;
`;
