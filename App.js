import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { CredentialtScreen } from "./src/features/credentials/screen/credentials.screen";

export default function App() {
  return (
    <>
      <CredentialtScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
