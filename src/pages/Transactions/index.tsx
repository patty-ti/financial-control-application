import { useContext } from "react"

import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"

import { dateFormatter, priceFormatter } from "../../utils/formatter"

import { TransactionsContext } from "../../contexts/TransactionsContext"

import * as Styled from "./styles"

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <Styled.TransactionsContainer>
        <SearchForm />

        <Styled.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <Styled.PriceHighlight variant={transaction.type}>
                      {transaction.type === "expense" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </Styled.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </Styled.TransactionsTable>
      </Styled.TransactionsContainer>
    </div>
  )
}
