import { useDispatch } from "react-redux";
import { addCustomer } from "./customerSlice";
import { Container } from "../../common/Section";
import { Fieldset, Label, LabelText, FormInput } from "./styled";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

export const CustomerFrom = () => {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    postCode: "",
    nip: "",
    pesel: "",
    bank: "",
    accountNumber: "",
  });

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newCustomer = {
      id: nanoid(),
      firstName: customer.firstName,
      lastName: customer.lastName,
      company: customer.company,
      address: customer.address,
      postCode: customer.postCode,
      nip: customer.nip,
      pesel: customer.pesel,
      bank: customer.bank,
      accountNumber: customer.accountNumber,
    };

    dispatch(addCustomer(newCustomer));

    setCustomer({
      firstName: "",
      lastName: "",
      company: "",
      address: "",
      postCode: "",
      nip: "",
      pesel: "",
      bank: "",
      accountNumber: "",
      id: "",
    });
  };

  function handleChange(event) {
    const value = event.target.value;
    setCustomer({
      ...customer,
      [event.target.name]: value,
    });
  }

  return (
    <Container>
      <legend>Add/Edit Customer</legend>
      <form onSubmit={onFormSubmit}>
        <Fieldset>
          <legend>Personal Info</legend>
          <Label htmlFor="firstName">
            <LabelText>First name</LabelText>
            <FormInput
              type="text"
              name="firstName"
              value={customer.firstName}
              onChange={handleChange}
              required
            />
          </Label>
          <Label htmlFor="lastName">
            <LabelText>Last name</LabelText>
            <FormInput
              type="text"
              name="lastName"
              value={customer.lastName}
              onChange={handleChange}
              required
            />
          </Label>
          <Label htmlFor="company">
            <LabelText>Company's name</LabelText>
            <FormInput
              type="text"
              name="company"
              value={customer.company}
              onChange={handleChange}
            />
          </Label>
          <Label htmlFor="address">
            <LabelText>Address</LabelText>
            <FormInput
              type="text"
              name="address"
              value={customer.address}
              onChange={handleChange}
              required
            />
          </Label>
          <Label htmlFor="postCode">
            <LabelText>Post code</LabelText>
            <FormInput
              type="text"
              name="postCode"
              pattern="[0-9]{2}-[0-9]{3}"
              value={customer.postCode}
              onChange={handleChange}
              required
            />
          </Label>
          <Label htmlFor="nip">
            <LabelText>NIP number</LabelText>
            <FormInput
              type="number"
              name="nip"
              pattern="[0-9]{10}}"
              value={customer.nip}
              onChange={handleChange}
              required
            />
          </Label>
          <Label htmlFor="pesel">
            <LabelText>PESEL number</LabelText>
            <FormInput
              type="number"
              name="pesel"
              pattern="[0-9]{11}}"
              value={customer.pesel}
              onChange={handleChange}
              required
            />
          </Label>
        </Fieldset>
        <Fieldset>
          <legend>Bank info</legend>
          <Label htmlFor="bank">
            <LabelText>Bank</LabelText>
            <FormInput
              type="text"
              name="bank"
              value={customer.bank}
              onChange={handleChange}
            />
          </Label>
          <Label htmlFor="accountNumber">
            <LabelText>Account number</LabelText>
            <FormInput
              type="number"
              name="accountNumber"
              value={customer.accountNumber}
              onChange={handleChange}
            />
          </Label>
        </Fieldset>
        <button type="submit">Add/Edit Customer</button>
      </form>
    </Container>
  );
};
