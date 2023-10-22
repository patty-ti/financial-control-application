import * as Dialog from "@radix-ui/react-dialog"

import { NewTransactionModal } from "../NewTransactionModal"

import * as Styled from "./styles"

import logoImg from "../../assets/logoFinancialControl.png"

export function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContent>
        <Styled.LogoImg src={logoImg} alt='Logo da aplicação, representado por dois triângulos' />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Styled.NewTransactionButton>Nova transação</Styled.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  )
}
