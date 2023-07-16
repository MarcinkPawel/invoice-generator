import { useState } from "react";
import { Wrapper } from "./styled";
import { useDispatch } from "react-redux";
import { addProduct } from "./productsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Heading } from "../../common/Heading";
import { FormInput, Label, LabelText } from "../../common/Form";
import { Button } from "../../common/Button";

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

    const newProduct = {
      productName: products.productName,
      net: products.net,
      gross: products.gross,
      vat: products.vat,
      amount: products.amount,
      id: nanoid(),
    };

    dispatch(addProduct(newProduct));

    setProducts({
      productName: "",
      net: "",
      gross: "",
      vat: "",
      amount: "",
      id: "",
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
    <Wrapper>
      <Heading>Products</Heading>
      <form onSubmit={onFormSubmit}>
        <Label>
          <LabelText>Product name</LabelText>
          <FormInput
            type="text"
            name="productName"
            value={products.productName}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <LabelText>Net price</LabelText>
          <FormInput
            type="value"
            name="net"
            value={products.net}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <LabelText>Gross price</LabelText>
          <FormInput
            type="number"
            name="gross"
            value={products.gross}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <LabelText>Vat rate ()</LabelText>
          <FormInput
            type="number"
            name="vat"
            value={products.vat}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <LabelText>Amount</LabelText>
          <FormInput
            type="number"
            name="amount"
            value={products.amount}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Add product</Button>
      </form>
    </Wrapper>
  );
};
