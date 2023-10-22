import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"

import { SummaryCard, SummaryContainer, TransactionTypeIcon } from "./styles"

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <TransactionTypeIcon variant='income'>
            <ArrowCircleUp size={32} />
          </TransactionTypeIcon>
        </header>

        <strong>R$ 17.900,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <TransactionTypeIcon variant='expense'>
            <ArrowCircleDown size={32} />
          </TransactionTypeIcon>
        </header>

        <strong>R$ 11.400,00</strong>
      </SummaryCard>

      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <TransactionTypeIcon variant='total'>
            <CurrencyDollar size={32} />
          </TransactionTypeIcon>
        </header>

        <strong>R$ 1.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
