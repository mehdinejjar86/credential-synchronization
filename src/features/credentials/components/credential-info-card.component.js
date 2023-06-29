import styled from "styled-components/native";
import { StyleSheet, Text, Image } from "react-native";
import { Card } from "react-native-paper";

const CredentialCard = styled(Card)`
  background-color: #dd9933;
`;

const Title = styled.Text`
  padding: 5%;
  font-size: 30px;
`;

const Credential = styled.Text`
  padding: 5%;
`;

export const CredentialInfoCard = ({ credential = {} }) => {
  const { key = "name", value = "myname" } = credential;
  return (
    <CredentialCard elevation={5}>
      <Title>{key}</Title>
      <Credential>{value}</Credential>
    </CredentialCard>
  );
};
