import { useDispatch } from "react-redux";
import { addInvoice } from "../invoiceSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Wrapper } from "./styled";
import { Heading } from "../../../common/Heading";
import { Fieldset, FormInput, Label, LabelText } from "../../../common/Form";
import { Button } from "../../../common/Button";

export const InvoiceSettings = () => {
  const [invoiceSettings, setInvoiceSettings] = useState({
    invoiceNumber: "",
    date: "",
    paymentMethod: "",
    paymentPeriod: "",
    comment: "",
  });

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newInvoiceSetting = {
      id: nanoid(),
      invoiceNumber: invoiceSettings.invoiceNumber,
      date: invoiceSettings.date,
      paymentMethod: invoiceSettings.paymentMethod,
      paymentPeriod: invoiceSettings.paymentPeriod,
      comment: invoiceSettings.comment,
    };
    dispatch(addInvoice(newInvoiceSetting));

    setInvoiceSettings({
      id: "",
      invoiceNumber: "",
      date: "",
      paymentMethod: "",
      paymentPeriod: "",
      comment: "",
    });
  };

  function handleChange(event) {
    const value = event.target.value;
    setInvoiceSettings({
      ...invoiceSettings,
      [event.target.name]: value,
    });
  }

  return (
    <Wrapper>
      <Heading>Invoice settings</Heading>
      <form onSubmit={onFormSubmit}>
        <Fieldset>
          <Label>
            <LabelText>Invoice number</LabelText>
            <FormInput
              type="text"
              name="invoiceNumber"
              value={invoiceSettings.invoiceNumber}
              onChange={handleChange}
            />
          </Label>
          <Label>
            <LabelText>Date</LabelText>
            <FormInput
              type="date"
              name="date"
              value={invoiceSettings.date}
              onChange={handleChange}
            />
          </Label>
          <Label>
            <LabelText>Payment method</LabelText>
            <select
              name="paymentMethod"
              value={invoiceSettings.paymentMethod}
              onChange={handleChange}
            >
              <option value="cash">Cash</option>
              <option value="bankTransfer">Bank transfer</option>
            </select>
          </Label>
          <Label>
            <LabelText>Payment period (days)</LabelText>
            <FormInput
              type="number"
              name="paymentPeriod"
              value={invoiceSettings.paymentPeriod}
              onChange={handleChange}
            />
          </Label>
          <Label>
            <LabelText>Comment</LabelText>
            <FormInput
              type="textarea"
              rows="4"
              cols="50"
              name="comment"
              value={invoiceSettings.comment}
              onChange={handleChange}
            />
          </Label>
        </Fieldset>
        <Button type="submit">Accept settings</Button>
      </form>
    </Wrapper>
  );
};
