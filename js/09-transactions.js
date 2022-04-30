import transactionsHistory from './data/transactions.js';

console.log(transactionsHistory);

{
  /* <tr>
  <th>ID транзакции</th>
  <th>Сумма</th>
  <th>Дата</th>
  <th>Кто</th>
  <th>Тип транзации</th>
  <th>Имя счёта</th>
  <th>Номер счёта</th>
</tr>; */
}

const makeTransactionRowTableMarkup = ({
  id,
  amount,
  date,
  business,
  name,
  type,
  account,
}) => {
  return ` <tr>
          <th>${id}</th>
          <th>${amount}</th>
          <th>${date}</th>
          <th>${business}</th>
          <th>${type}</th>
          <th>${name}</th>
          <th>${account}</th>
        </tr>`;
};

const tableEl = document.querySelector('.js-transaction-table');
const tableBodyEl = document.createElement('tbody');

tableEl.appendChild(tableBodyEl);

const makeTransactionTableRows = transactionsHistory
  .map(makeTransactionRowTableMarkup)
  .join('');

tableBodyEl.insertAdjacentHTML('afterbegin', makeTransactionTableRows);
