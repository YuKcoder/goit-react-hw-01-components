import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  HeadRow,
  HeadData,
  BodyRow,
  BodyColumn,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TableHead>
        <HeadRow>
          <HeadData>Type</HeadData>
          <HeadData>Amount</HeadData>
          <HeadData>Currency</HeadData>
        </HeadRow>
      </TableHead>

      <tbody>
        {items.map((item, i) => {
          return (
            <BodyRow key={item.id} even={(i + 1) % 2 !== 1}>
              <BodyColumn>{item.type}</BodyColumn>
              <BodyColumn>{item.amount}</BodyColumn>
              <BodyColumn>{item.currency}</BodyColumn>
            </BodyRow>
          );
        })}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired,
  ),
};
