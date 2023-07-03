import certificate from "../../../../assets/certificate";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  CredentialCard,
  CredentialIcon,
  Info,
} from "./credential-info-card.styles";

export const CredentialInfoCard = ({ credential = {} }) => {
  const { key, value } = credential;
  return (
    <Spacer position="bottom" size="large">
      <CredentialCard elevation={5}>
        <CredentialIcon xml={certificate} width={20} height={20} />
        <Info>
          <Text variant="label">{key}</Text>
          <Text variant="caption">{value}</Text>
        </Info>
      </CredentialCard>
    </Spacer>
  );
};
