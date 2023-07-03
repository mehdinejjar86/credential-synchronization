import { useContext, useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../../account/components/account.style";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { addDoc, collection } from "firebase/firestore";
import { FIRESTRORE_DB } from "../../../../firebaseConfig";

export const Add = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [key, onChangeKey] = useState("");
  const [value, onChangeValue] = useState("");

  const onSubmit = async () => {
    await addDoc(collection(FIRESTRORE_DB, "credentials"), {
      key,
      value,
      userId: user.uid,
    });

    onChangeKey("");
    onChangeValue("");
    navigation.navigate("Credentials");
  };

  return (
    <AccountBackground>
      <AccountContainer>
        <AuthInput label="Key" value={key} onChangeText={onChangeKey} />
        <Spacer size="large">
          <AuthInput label="Value" value={value} onChangeText={onChangeValue} />
        </Spacer>
        <Spacer size="large">
          <AuthButton mode="contained" onPress={onSubmit}>
            Add
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
