import { StatusBar, SafeAreaView, Platform, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { CredentialInfoCard } from "../components/credential-info-card.component";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { ActivityIndicator, Colors } from "react-native-paper";

const SearchBar = styled(Searchbar).attrs({
  inputStyle: { fontFamily: "Lato_400Regular" },
})`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const CredentialList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const CredentialtScreen = () => {
  const os = Platform.OS;

  return (
    <SafeArea os={os}>
      {}
      <SearchContainer>
        <SearchBar
          placeholder="Search for a credential"
          elevation={5}
          iconColor="#171719"
        />
      </SearchContainer>

      <CredentialList
        data={[
          { key: 1, value: "test" },
          { key: 2 },
          { key: 3 },
          { key: 4 },
          { key: 5 },
          { key: 6 },
          { key: 7 },
          { key: 8 },
          { key: 9 },
          { key: 10 },
          { key: 11 },
          { key: 12 },
          { key: 13 },
          { key: 14 },
        ]}
        renderItem={() => <CredentialInfoCard />}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{}}
      ></CredentialList>
    </SafeArea>
  );
};
