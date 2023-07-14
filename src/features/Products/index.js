import { useState } from "react";
import { Container } from "../../common/Section";
import { useDispatch } from "react-redux";
import { addProduct } from "./productsSlice";
import { LabelText } from "../CustomerForm/styled";

export const Products = () => {
  const [products, setProducts] = useState({
    productName: "",
    net: "",
    gross: "",
    vat: "",
    amount: "",
  });
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addProduct(products));

    setProducts({
      productName: "",
      net: "",
      gross: "",
      vat: "",
      amount: "",
    });
  };

  function handleChange(event) {
    const value = event.target.value;
    setProducts({
      ...products,
      [event.target.name]: value,
    });
  }

  return (
    <Container>
      <legend>Products</legend>
      <form onSubmit={onFormSubmit}>
        <label>
          <LabelText>Product name</LabelText>
          <input
            type="text"
            name="productName"
            value={products.productName}
            onChange={handleChange}
          />
        </label>
        <label>
          <LabelText>Net price</LabelText>
          <input
            type="value"
            name="net"
            value={products.net}
            onChange={handleChange}
          />
        </label>
        <label>
          <LabelText>Gross price</LabelText>
          <input
            type="number"
            name="gross"
            value={products.gross}
            onChange={handleChange}
          />
        </label>
        <label>
          <LabelText>Vat rate ()</LabelText>
          <input
            type="number"
            name="vat"
            value={products.vat}
            onChange={handleChange}
          />
        </label>
        <label>
          <LabelText>Amount</LabelText>
          <input
            type="number"
            name="amount"
            value={products.amount}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add product</button>
      </form>
    </Container>
  );
};
