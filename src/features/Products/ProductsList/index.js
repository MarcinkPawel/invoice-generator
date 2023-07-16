import { useSelector } from "react-redux";
import { Wrapper } from "./styled";
import { selectProducts } from "../productsSlice";
import { Heading } from "../../../common/Heading";

export const ProductsList = () => {
  const products = useSelector(selectProducts);

  return (
    <Wrapper>
      <Heading>Products list</Heading>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Net price</th>
            <th>Gross price</th>
            <th>Vat rate</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.net}</td>
              <td>{product.gross}</td>
              <td>{product.vat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};
