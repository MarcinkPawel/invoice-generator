import styled from "styled-components";

export const Fieldset = styled.fieldset`
  margin-bottom: 10px;
  padding: 10px;
  border: none;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const LabelText = styled.span`
font-size: 14px;
  width: 150px;
`;

export const FormInput = styled.input`
border: 1px solid #d1d3e2;
border-radius: 3px;
padding: 5px;
  width: auto;

&:focus {
    outline: 1px solid #6777ef;
}
`;
