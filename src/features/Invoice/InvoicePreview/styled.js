import styled from "styled-components";
import { Heading } from "../../../common/Heading";
import { Container } from "../../../common/Section";
import { Label } from "../../../common/Form";
import { DataEntry, DataLabel } from "../../CustomerList/CustomerTemplate/styled";


export const Wrapper = styled(Container)`
    padding: 50px;
    display: flex;
    flex-direction: column;
`;

export const SubHeading = styled(Heading)`
margin-bottom: 10px;
`;

export const Options = styled.p`
    color: black;
    font-size: 14px;
`;

export const Section = styled.section`
    padding: 10px;
    margin-bottom: 20px;
`;
export const Header = styled.header`
text-align: center;
`;
export const Title = styled(Heading)`
    color: black;
    font-size: 24px;
    margin-bottom: 10px;
`;

export const InfoLabel = styled(Label)`
display: flex;
flex-direction: row;
`;

export const DataInfo = styled(DataLabel)`
    font-size: 14px;
    font-weight: 400;
    color: black;
`;

export const CustomerData = styled(DataEntry)`
    font-size: 14px;
    color: black;
    font-weight: 700;
`;

export const Table = styled.table`
    border: 1px solid black ;
    border-collapse: collapse;
    align-self: flex-end;
    color: black;
`;

export const TableData = styled.td`
    border: 1px solid black;
    padding: 5px;
`;
export const TableHeader = styled.th`
    font-weight: 700;
    border: 1px solid black;
    padding: 5px;
`;

export const SummaryContainer = styled.div`
    margin-top: 40px;
    align-self: flex-end;
    display: flex;
`;

export const Text = styled.p`
    color: black;
    margin-right: 10px;
    line-height: 2;
    font-weight: 700;
`;

export const Sum = styled(Text)`
    margin-top: 30px;
`;

export const Signs = styled.article`
    display: flex;
    justify-content: space-between;
    padding: 60px 40px
`;

export const Signature = styled(Text)`
    font-size: 12px;
    border-top: 1px solid black;
    max-width: 200px;
    padding-top: 10px;
    line-height: normal;
    font-weight: 400;
`;
