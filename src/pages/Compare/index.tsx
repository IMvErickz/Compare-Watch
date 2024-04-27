import { MainCompare } from "@/components/Compare/Main";
import { Header } from "@/components/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";

const formCompareSchema = z.object({
    watches: z.array(z.object({
        model: z.string(),
    }))
})

export type formCompareData = z.infer<typeof formCompareSchema>

export function Compare() {
    const methods = useForm<formCompareData>({
        resolver: zodResolver(formCompareSchema),
        defaultValues: {
            watches: [{
                model: 'zon'
            },
            {
                model: 'en'
            }]
        }
    })
    return (
        <>
            <Header />
            <FormProvider {...methods}>
                <MainCompare />
            </FormProvider>
        </>
    )
}