import { Wrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectCustomer, toggleCustomerSelected } from "../CustomerForm/customerSlice";
import { Customer, Select, Data, DataLabel, DataEntry } from "./CustomerTemplate/styled";
import { List } from "./styled";
import { Heading } from "../../common/Heading";


export const CustomerList = () => {
  
  const customers = useSelector((state) => selectCustomer(state));
  const dispatch = useDispatch();
  console.log(customers.map((customer) => customer.id));
  return (
    <Wrapper>
      <Heading>Customers list</Heading>
      <List>
        {customers.map(customer => (
          <Customer key={customer.id}>
            <Select
              onClick={() => dispatch(toggleCustomerSelected(customer.id))}
            >
              {customer.customerSelected ? "✓" : ""}
            </Select>
            <Data>
              <DataLabel>First name</DataLabel>
              <DataEntry>{customer.nameFirst}</DataEntry>
            </Data>
            <Data>
              <DataLabel>Last name</DataLabel>
              <DataEntry>{customer.nameLast}</DataEntry>
            </Data>
            <Data>
              <DataLabel>Company's name</DataLabel>
              <DataEntry>{customer.nameCompany}</DataEntry>
            </Data>
            <Data>
              <DataLabel>Address</DataLabel>
              <DataEntry>{customer.address}</DataEntry>
            </Data>
            <Data>
              <DataLabel>Post code</DataLabel>
              <DataEntry>{customer.codePost}</DataEntry>
            </Data>
            <Data>
              <DataLabel>NIP</DataLabel>
              <DataEntry>{customer.nip}</DataEntry>
            </Data>
            <Data>
              <DataLabel>PESEL</DataLabel>
              <DataEntry>{customer.pesel}</DataEntry>
            </Data>
          </Customer>
        ))}
      </List>
    </Wrapper>
  );
};
