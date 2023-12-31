import styled from "styled-components";
import { Container } from "../../common/Section";

export const Wrapper = styled(Container)`
  grid-area: 1 / 1 / 2 / 2;
  border: none;
`;

export const Fieldset = styled.fieldset`
  margin-bottom: 10px;
  padding: 10px;
  border: none
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;
export const LabelText = styled.span`
  display: inline-block;
  width: 150px;
`;
export const FormInput = styled.input`
  display: inline-block;
  width: auto;
`;
