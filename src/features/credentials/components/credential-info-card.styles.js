import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const CredentialCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.brand.secondary};
`;

export const CredentialIcon = styled(SvgXml)`
  padding: ${(props) => props.theme.space[3]};
  margin-left: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding-left: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;
