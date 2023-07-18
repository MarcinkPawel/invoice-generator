import { Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectCustomer } from "../CustomerForm/customerSlice";
import { CustomerTemplate } from "./CustomerTemplate";
import { List } from "./styled";
import { Heading } from "../../common/Heading";

export const CustomerList = () => {
  
  const customers = useSelector(selectCustomer);



  return (
    <Wrapper>
      <Heading>Customers list</Heading>
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
          />
        ))}
      </List>
    </Wrapper>
  );
};
