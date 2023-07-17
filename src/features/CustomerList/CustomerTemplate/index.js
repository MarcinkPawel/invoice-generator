import { Customer, Data, DataLabel, DataEntry } from "./styled";

export const CustomerTemplate = ({
  nameFirst,
  nameLast,
  nameCompany,
  address,
  codePost,
  nip,
  pesel,
}) => (
  <Customer>
    <Data>
      <DataLabel>First name</DataLabel>
      <DataEntry>{nameFirst}</DataEntry>
    </Data>
    <Data>
      <DataLabel>Last name</DataLabel>
      <DataEntry>{nameLast}</DataEntry>
    </Data>
    <Data>
      <DataLabel>Company's name</DataLabel>
      <DataEntry>{nameCompany}</DataEntry>
    </Data>
    <Data>
      <DataLabel>Address</DataLabel>
      <DataEntry>{address}</DataEntry>
    </Data>
    <Data>
      <DataLabel>Post code</DataLabel>
      <DataEntry>{codePost}</DataEntry>
    </Data>
    <Data>
      <DataLabel>NIP</DataLabel>
      <DataEntry>{nip}</DataEntry>
    </Data>
    <Data>
      <DataLabel>PESEL</DataLabel>
      <DataEntry>{pesel}</DataEntry>
    </Data>
  </Customer>
);
