import { useContext } from "react"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import { Controller, useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { TransactionsContext } from "../../contexts/TransactionsContext"

import * as Styled from "./styles"

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "expense"]),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income",
    },
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data

    await createTransaction({
      description,
      price,
      category,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Styled.Overlay />

      <Styled.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Styled.CloseButton>
          <X size={24} />
        </Styled.CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input type='text' placeholder='Descrição' required {...register("description")} />

          <input
            type='number'
            placeholder='Preço'
            required
            {...register("price", { valueAsNumber: true })}
          />

          <input type='text' placeholder='Categoria' required {...register("category")} />

          <Controller
            control={control}
            name='type'
            render={({ field }) => {
              return (
                <Styled.TransactionType onValueChange={field.onChange} value={field.value}>
                  <Styled.TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp size={24} />
                    Entrada
                  </Styled.TransactionTypeButton>

                  <Styled.TransactionTypeButton variant='expense' value='expense'>
                    <ArrowCircleDown size={24} />
                    Saída
                  </Styled.TransactionTypeButton>
                </Styled.TransactionType>
              )
            }}
          />

          <button type='submit' disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Styled.Content>
    </Dialog.Portal>
  )
}
