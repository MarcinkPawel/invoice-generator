import { Container } from "../../common/Section";
import { Fieldset, Label, LabelText, FormInput } from "./styled";

export const CustomerFrom = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <legend>Add/Edit Customer</legend>
      <form onSubmit={onFormSubmit}>
        <Fieldset>
          <legend>Personal Info</legend>
          <Label htmlFor="fmane">
            <LabelText>First name</LabelText>
            <FormInput type="text" name="fname" required />
          </Label>
          <Label htmlFor="lname">
          <LabelText>Last name</LabelText>
            <FormInput type="text" name="lname" required />
          </Label>
          <Label htmlFor="company">
          <LabelText>Company's name</LabelText>
            <FormInput type="text" name="company" />
          </Label>
          <Label htmlFor="address">
          <LabelText>Address</LabelText>
            <FormInput type="text" name="address" required />
          </Label>
          <Label htmlFor="pcode">
          <LabelText>Post code</LabelText>
            <FormInput
              type="text"
              name="pcode"
              pattern="[0-9]{2}-[0-9]{3}"
              required
            />
          </Label>
          <Label htmlFor="nip">
          <LabelText>NIP number</LabelText>
            <FormInput type="number" name="nip" pattern="[0-9]{10}}" required />
          </Label>
          <Label htmlFor="pesel">
          <LabelText>PESEL number</LabelText>
            <FormInput type="number" name="pesel" pattern="[0-9]{11}}" required />
          </Label>
        </Fieldset>
        <Fieldset>
          <legend>Bank info</legend>
          <Label htmlFor="bank">
          <LabelText>Bank</LabelText>
            <FormInput type="text" name="bank" />
          </Label>
          <Label htmlFor="anumber">
          <LabelText>Account number</LabelText>
            <FormInput type="number" name="anumber" />
          </Label>
        </Fieldset>
        <button type="submit">Add/Edit Customer</button>
      </form>
    </Container>
  );
};
