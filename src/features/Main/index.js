import { CustomerFrom } from "../CustomerForm";
import { CustomerList } from "../CustomerList";
import { Products } from "../Products";
import { ProductsList } from "../Products/ProductsList";

export const Main = () => {
  return (
    <div>
      <CustomerFrom />
      <Products />
      <ProductsList />
      <CustomerList />
    </div>
  );
};
