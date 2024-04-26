import { z } from "zod"
import { Header } from "../../components/Header"
import { Main } from "../../components/Home/main"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const searchSchema = z.object({
  data: z.string(),
})

export type searchData = z.infer<typeof searchSchema>

export const Home = () => {

  const methods = useForm<searchData>({
    resolver: zodResolver(searchSchema)
  })

  return (
    <FormProvider {...methods}>
      <Header />
      <Main />
    </FormProvider>
  )
}
