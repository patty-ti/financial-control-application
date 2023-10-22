import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"

import * as Styled from "./styles"

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Styled.Overlay />

      <Styled.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Styled.CloseButton>
          <X size={24} />
        </Styled.CloseButton>

        <form>
          <input type='text' placeholder='Descrição' required />
          <input type='number' placeholder='Preço' required />
          <input type='text' placeholder='Categoria' required />

          <Styled.TransactionType>
            <Styled.TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Entrada
            </Styled.TransactionTypeButton>

            <Styled.TransactionTypeButton variant='expense' value='expense'>
              <ArrowCircleDown size={24} />
              Saída
            </Styled.TransactionTypeButton>
          </Styled.TransactionType>

          <button type='submit'>Cadastrar</button>
        </form>
      </Styled.Content>
    </Dialog.Portal>
  )
}
