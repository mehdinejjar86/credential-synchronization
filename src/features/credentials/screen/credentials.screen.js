import { StatusBar, SafeAreaView, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { CredentialInfoCard } from "../components/credential-info-card.component";
import styled from "styled-components/native";

const StatusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBarHeight}px;
`;

const SearchBar = styled(Searchbar)`
  background-color: #ffffff;
`;

const SearchContainer = styled.View`
  padding: 5%;
`;

const CredentialListContainer = styled.View`
  flex: 1;
  padding: 5%;
  background-color: #cccccc;
`;

export const CredentialtScreen = () => {
  const os = Platform.OS;

  return (
    <SafeArea os={os}>
      <SearchContainer>
        <SearchBar
          placeholder="Search for a credential"
          elevation={5}
          iconColor="#171719"
        />
      </SearchContainer>
      <CredentialListContainer>
        <CredentialInfoCard />
      </CredentialListContainer>
    </SafeArea>
  );
};
