import { useContext } from "react"
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"

import { priceFormatter } from "../../utils/formatter"

import { TransactionsContext } from "../../contexts/TransactionsContext"

import * as Styled from "./styles"

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  )

  return (
    <Styled.SummaryContainer>
      <Styled.SummaryCard>
        <header>
          <span>Entradas</span>
          <Styled.TransactionTypeIcon variant='income'>
            <ArrowCircleUp size={32} />
          </Styled.TransactionTypeIcon>
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard>
        <header>
          <span>Saídas</span>
          <Styled.TransactionTypeIcon variant='expense'>
            <ArrowCircleDown size={32} />
          </Styled.TransactionTypeIcon>
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <Styled.TransactionTypeIcon variant='total'>
            <CurrencyDollar size={32} />
          </Styled.TransactionTypeIcon>
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </Styled.SummaryCard>
    </Styled.SummaryContainer>
  )
}
