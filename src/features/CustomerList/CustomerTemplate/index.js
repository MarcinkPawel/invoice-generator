import { Customer, Data, DataLable, DataEntry } from "./styled";

export const CustomerTemplate = ({
  nameFirst,
  nameLast,
  nameCompany,
  address,
  codePost,
  nip,
  pesel,
  bank,
  numberAccount,
}) => (
  <Customer>
    <Data>
      <DataLable>First name:</DataLable>
      <DataEntry>{nameFirst}</DataEntry>
    </Data>
    <Data>
      <DataLable>Last name:</DataLable>
      <DataEntry>{nameLast}</DataEntry>
    </Data>
    <Data>
      <DataLable>Company's name:</DataLable>
      <DataEntry>{nameCompany}</DataEntry>
    </Data>
    <Data>
      <DataLable>Address:</DataLable>
      <DataEntry>{address}</DataEntry>
    </Data>
    <Data>
      <DataLable>Post code:</DataLable>
      <DataEntry>{codePost}</DataEntry>
    </Data>
    <Data>
      <DataLable>NIP:</DataLable>
      <DataEntry>{nip}</DataEntry>
    </Data>
    <Data>
      <DataLable>PESEL:</DataLable>
      <DataEntry>{pesel}</DataEntry>
    </Data>
    <Data>
      <DataLable>Bank:</DataLable>
      <DataEntry>{bank}</DataEntry>
    </Data>
    <Data>
      <DataLable>Account number:</DataLable>
      <DataEntry>{numberAccount}</DataEntry>
    </Data>
  </Customer>
);
