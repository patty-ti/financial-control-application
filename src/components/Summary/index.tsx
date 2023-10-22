import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"

import * as Styled from "./styles"

export function Summary() {
  return (
    <Styled.SummaryContainer>
      <Styled.SummaryCard>
        <header>
          <span>Entradas</span>
          <Styled.TransactionTypeIcon variant='income'>
            <ArrowCircleUp size={32} />
          </Styled.TransactionTypeIcon>
        </header>

        <strong>R$ 17.900,00</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard>
        <header>
          <span>Saídas</span>
          <Styled.TransactionTypeIcon variant='expense'>
            <ArrowCircleDown size={32} />
          </Styled.TransactionTypeIcon>
        </header>

        <strong>R$ 11.400,00</strong>
      </Styled.SummaryCard>

      <Styled.SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <Styled.TransactionTypeIcon variant='total'>
            <CurrencyDollar size={32} />
          </Styled.TransactionTypeIcon>
        </header>

        <strong>R$ 1.400,00</strong>
      </Styled.SummaryCard>
    </Styled.SummaryContainer>
  )
}
