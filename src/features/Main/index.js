import { CustomerFrom } from "../CustomerForm";
import { CustomerList } from "../CustomerList";
import { InvoiceSettings } from "../Invoice/InvoiceSettings";
import { Products } from "../Products";
import { ProductsList } from "../Products/ProductsList";
import { Wrapper } from "./styled";

export const Main = () => {
  return (
    <Wrapper>
      <CustomerFrom />
      <Products />
      <ProductsList />
      <CustomerList />
      <InvoiceSettings />
    </Wrapper>
  );
};
