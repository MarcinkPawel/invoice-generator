import { useDispatch } from "react-redux";
import { addCustomer } from "./customerSlice";
import { Container } from "../../common/Section";
import { Fieldset, Label, LabelText, FormInput } from "./styled";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

export const CustomerFrom = () => {
  const [firstNameField, setFirstNameField] = useState("");
  const [lastNameField, setLastNameField] = useState("");
  const [companyField, setCompanyField] = useState("");
  const [addressField, setAddressField] = useState("");
  const [postCodeField, setPostCodeField] = useState("");
  const [nipField, setNipField] = useState("");
  const [peselField, setPeselField] = useState("");
  const [bankField, setBankField] = useState("");
  const [accountNumberField, setAccountNumberField] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addCustomer([{
        id: nanoid(),
        firstName: firstNameField,
        lastName: lastNameField,
        company: companyField,
        address: addressField,
        postCode: postCodeField,
        nip: nipField,
        pesel: peselField,
        bank: bankField,
        accountNumber: accountNumberField,
  }])
    );

    setFirstNameField("");
    setLastNameField("");
    setCompanyField("");
    setAddressField("");
    setPostCodeField("");
    setNipField("");
    setPeselField("");
    setBankField("");
    setAccountNumberField("");
  };
  

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
              value={firstNameField}
              onChange={(event) => setFirstNameField(event.target.value)}
              required
            />
          </Label>
          <Label htmlFor="lastName">
            <LabelText>Last name</LabelText>
            <FormInput
              type="text"
              name="lastName"
              value={lastNameField}
              onChange={(event) => setLastNameField(event.target.value)}
              required
            />
          </Label>
          <Label htmlFor="company">
            <LabelText>Company's name</LabelText>
            <FormInput
              type="text"
              name="company"
              value={companyField}
              onChange={(event) => setCompanyField(event.target.value)}
            />
          </Label>
          <Label htmlFor="address">
            <LabelText>Address</LabelText>
            <FormInput
              type="text"
              name="address"
              value={addressField}
              onChange={(event) => setAddressField(event.target.value)}
              required
            />
          </Label>
          <Label htmlFor="postCode">
            <LabelText>Post code</LabelText>
            <FormInput
              type="text"
              name="postCode"
              pattern="[0-9]{2}-[0-9]{3}"
              value={postCodeField}
              onChange={(event) => setPostCodeField(event.target.value)}
              required
            />
          </Label>
          <Label htmlFor="nip">
            <LabelText>NIP number</LabelText>
            <FormInput
              type="number"
              name="nip"
              pattern="[0-9]{10}}"
              value={nipField}
              onChange={(event) => setNipField(event.target.value)}
              required
            />
          </Label>
          <Label htmlFor="pesel">
            <LabelText>PESEL number</LabelText>
            <FormInput
              type="number"
              name="pesel"
              pattern="[0-9]{11}}"
              value={peselField}
              onChange={(event) => setPeselField(event.target.value)}
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
              value={bankField}
              onChange={(event) => setBankField(event.target.value)}
            />
          </Label>
          <Label htmlFor="accountNumber">
            <LabelText>Account number</LabelText>
            <FormInput
              type="number"
              name="accountNumber"
              value={accountNumberField}
              onChange={(event) => setAccountNumberField(event.target.value)}
            />
          </Label>
        </Fieldset>
        <button type="submit">Add/Edit Customer</button>
      </form>
    </Container>
  );
};
