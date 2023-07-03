import { StatusBar, SafeAreaView, Platform, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { CredentialInfoCard } from "../components/credential-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTRORE_DB } from "../../../../firebaseConfig";

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

export const CredentialtScreen = ({ navigation }) => {
  const os = Platform.OS;
  const [credentials, setCredentials] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCredentials = async () => {
    try {
      const res = [];
      const querySnapshot = await getDocs(
        collection(FIRESTRORE_DB, "credentials")
      );
      querySnapshot.forEach((doc) => {
        res.push(doc.data());
      });
      setCredentials(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getCredentials();
    });

    return unsubscribe;
  }, [navigation]);

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
        data={credentials}
        renderItem={({ item }) => <CredentialInfoCard credential={item} />}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{}}
      ></CredentialList>
    </SafeArea>
  );
};
