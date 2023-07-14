import { useSelector } from "react-redux";
import { Container } from "../../../common/Section";
import { selectProducts } from "../productsSlice";

export const ProductsList = () => {
  const products = useSelector(selectProducts);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th colSpan="4" scope="row">
              Products list
            </th>
          </tr>
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
    </Container>
  );
};
