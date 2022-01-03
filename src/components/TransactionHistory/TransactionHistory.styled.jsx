import styled from 'styled-components';

export const TransactionTable = styled.table`
  overflow: hidden;
  width: 30vw;
  margin-bottom: 2rem;
  border-collapse: collapse;
  border: 1px solid #757f9a;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 2px 1px rgba(34, 60, 80, 0.2);
`;

export const TableHead = styled.thead`
  background: #d7dde8;
  color: #285cbd;
  text-transform: uppercase;
`;

export const HeadRow = styled.tr`
  height: 2rem;
`;

export const HeadData = styled.th`
  border: 1px solid #757f9a;
  width: calc(90% / 3);
`;

export const BodyRow = styled(HeadRow)`
  background: ${props => (props.even ? '#d7dde8' : '#fff')};
`;

export const BodyColumn = styled.td`
  text-align: center;
  padding-left: 0.5rem;
  border: 1px solid #757f9a;
`;
