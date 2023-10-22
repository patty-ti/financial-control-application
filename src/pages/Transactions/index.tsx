import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"

import * as Styled from "./styles"

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <Styled.TransactionsContainer>
        <SearchForm />

        <Styled.TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <Styled.PriceHighlight variant='income'>R$ 8.000,00</Styled.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>21/10/2023</td>
            </tr>

            <tr>
              <td width='50%'>Sapato</td>
              <td>
                <Styled.PriceHighlight variant='outcome'>-R$ 159,00</Styled.PriceHighlight>
              </td>
              <td>Vestuário</td>
              <td>10/10/2023</td>
            </tr>
          </tbody>
        </Styled.TransactionsTable>
      </Styled.TransactionsContainer>
    </div>
  )
}
