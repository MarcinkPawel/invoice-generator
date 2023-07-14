import { useDispatch } from "react-redux";
import { addInvoice } from "../invoiceSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Wrapper } from "./styled";

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
      <legend>Invoice settings</legend>
      <form onSubmit={onFormSubmit}>
        <fieldset>
          <label>
            <span>Invoice number</span>
            <input
              type="text"
              name="invoiceNumber"
              value={invoiceSettings.invoiceNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Date</span>
            <input
              type="date"
              name="date"
              value={invoiceSettings.date}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Payment method</span>
            <select
              name="paymentMethod"
              value={invoiceSettings.paymentMethod}
              onChange={handleChange}
            >
              <option value="cash">Cash</option>
              <option value="bankTransfer">Bank transfer</option>
            </select>
          </label>
          <label>
            <span>Payment period (days)</span>
            <input
              type="number"
              name="paymentPeriod"
              value={invoiceSettings.paymentPeriod}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Comment</span>
            <input
              type="textarea"
              rows="4"
              cols="50"
              name="comment"
              value={invoiceSettings.comment}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button type="submit">Accept settings</button>
      </form>
    </Wrapper>
  );
};
