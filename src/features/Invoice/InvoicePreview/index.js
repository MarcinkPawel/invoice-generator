import {
  SubHeading,
  Options,
  Section,
  Title,
  Header,
  Wrapper,
  InfoLabel,
  DataInfo,
  CustomerData,
  Table,
  TableData,
  TableHeader,
  SummaryContainer,
  Text,
  Sum,
  Signature,
  Signs
} from "./styled";

export const InvoicePreview = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Invoice VAT number</Title>
        <SubHeading></SubHeading>
        <Options>Original | Copy | Duplicate</Options>
      </Header>
      <Section>
        <InfoLabel>
          <DataInfo>Seller:</DataInfo>
          <CustomerData>Paweł Marcinkowski</CustomerData>
        </InfoLabel>
        <InfoLabel>
          <DataInfo>Address:</DataInfo>
          <CustomerData></CustomerData>
        </InfoLabel>
        <InfoLabel>
          <DataInfo>NIP number:</DataInfo>
          <CustomerData></CustomerData>
        </InfoLabel>
      </Section>
      <hr />
      <Section>
        <InfoLabel>
          <DataInfo>Buyer:</DataInfo>
          <CustomerData></CustomerData>
        </InfoLabel>
        <InfoLabel>
          <DataInfo>Address:</DataInfo>
          <CustomerData></CustomerData>
        </InfoLabel>
        <InfoLabel>
          <DataInfo>NIP number:</DataInfo>
          <CustomerData></CustomerData>
        </InfoLabel>
      </Section>

      <Table>
        <thead>
          <tr>
            <TableHeader>Product/Service name</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Net price</TableHeader>
            <TableHeader>VAT rate</TableHeader>
            <TableHeader>Gross price</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData></TableData>
            <TableData></TableData>
            <TableData></TableData>
            <TableData></TableData>
            <TableData></TableData>
          </tr>
        </tbody>
      </Table>
      <SummaryContainer>
        <Text>VAT summary</Text>
        <Table>
          <thead>
            <tr>
              <TableHeader>VAT rate</TableHeader>
              <TableHeader>Net</TableHeader>
              <TableHeader>TAX</TableHeader>
              <TableHeader>Gross</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData></TableData>
              <TableData></TableData>
              <TableData></TableData>
              <TableData></TableData>
            </tr>
          </tbody>
        </Table>
      </SummaryContainer>

      <Sum>Sum to pay:</Sum>

      <Signs>
        <Signature>Signature of the person authorized to receive the VAT invoice</Signature>
        <Signature>Signature of the person authorized to issue the VAT invoice</Signature>
      </Signs>
    </Wrapper>
  );
};
