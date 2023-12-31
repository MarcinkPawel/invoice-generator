import { useDispatch } from "react-redux";
import { addCustomer } from "./customerSlice";
import { Wrapper } from "./styled";
import { Fieldset, Label, LabelText, FormInput } from "../../common/Form";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Heading } from "../../common/Heading";
import { Button } from "../../common/Button";

export const CustomerFrom = () => {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    postCode: "",
    nip: "",
    pesel: "",
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
    <Wrapper>
      <Heading>Add/Edit Customer</Heading>
      <form onSubmit={onFormSubmit}>
        <Fieldset>
          <Heading>Personal Info</Heading>
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
        <Button type="submit">Add/Edit Customer</Button>
      </form>
    </Wrapper>
  );
};
