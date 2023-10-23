import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import { Controller, useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import * as Styled from "./styles"

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income",
    },
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
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
