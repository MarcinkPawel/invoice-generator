import { Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectCustomer } from "../CustomerForm/customerSlice";
import { CustomerTemplate } from "./CustomerTemplate";
import { List } from "./styled";

export const CustomerList = () => {
  const customers = useSelector(selectCustomer);

  console.log(customers.map((customer) => customer.firstName));

  return (
    <Wrapper>
      <legend>Customers list</legend>
      <List>
        {customers.map((customer) => (
          <CustomerTemplate
            key={customer.id}
            nameFirst={customer.firstName}
            nameLast={customer.lastName}
            nameCompany={customer.company}
            address={customer.address}
            codePost={customer.postCode}
            nip={customer.nip}
            pesel={customer.pesel}
            bank={customer.bank}
            numberAccount={customer.accountNumber}
          />
        ))}
      </List>
    </Wrapper>
  );
};
