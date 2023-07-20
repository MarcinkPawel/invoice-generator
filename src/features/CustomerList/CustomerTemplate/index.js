import { toggleCustomerSelected } from "../../CustomerForm/customerSlice";
import { Customer, Data, DataLabel, DataEntry, Select } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../../CustomerForm/customerSlice";

export const CustomerTemplate = ({
  nameFirst,
  nameLast,
  nameCompany,
  address,
  codePost,
  nip,
  pesel,
}) => {

  const { id } = useParams();
  const customer = useSelector((state) => getCustomerById(state, id));


  const dispatch = useDispatch();
  return (
    <Customer>
      <Select onClick={() => dispatch(toggleCustomerSelected(customer.id))}>
      {customer.customerSelected ? "✓" : ""}
      </Select>
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
};
