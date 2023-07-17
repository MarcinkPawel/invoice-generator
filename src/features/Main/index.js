import { CustomerFrom } from "../CustomerForm";
import { CustomerList } from "../CustomerList";
import { InvoicePreview } from "../Invoice/InvoicePreview";
import { InvoiceSettings } from "../Invoice/InvoiceSettings";
import { Products } from "../Products";
import { ProductsList } from "../Products/ProductsList";
import { Wrapper, SideBar, MainPreview } from "./styled";

export const Main = () => {
  return (
    <Wrapper>
      <SideBar>
        <CustomerFrom />
        <Products />
        <ProductsList />
        <CustomerList />
      </SideBar>
      <MainPreview>
        <InvoiceSettings />
        <InvoicePreview />
      </MainPreview>
    </Wrapper>
  );
};
