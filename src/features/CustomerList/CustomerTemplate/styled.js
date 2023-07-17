import styled from "styled-components";

export const Customer = styled.li`

display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: auto;
grid-column-gap: 10px;
grid-row-gap: 5px;
  text-decoration: none;
  border-bottom: 1px solid black;
  margin-bottom: 16px;
`;

export const Data = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const DataLabel = styled.p`
font-size: 10px;
color: #b7b9cc;
font-weight: 800;
text-transform: uppercase;
padding-right: 8px;
`;

export const DataEntry = styled.span`
  color: #757575;
  font-size: 12px;

`;
