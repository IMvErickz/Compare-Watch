import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { formCompareData } from "@/pages/Compare"
import { useFormContext, useFieldArray } from "react-hook-form"
import { WatchTable } from "../Compare/Table"

export function SearchDropMany() {

    const { watch, register, control } = useFormContext<formCompareData>()

    const searchDataInput = watch('watches')
    const { fields } = useFieldArray({
        control,
        name: 'watches',
    })

    return (
        <>
            {fields.map((input, index) => {
                return (
                    <Command key={input.id} className={
                        searchDataInput
                            ? `w-[520px] bg-white/70 border border-gray-compare-600 rounded-3xl`
                            : `w-[520px] bg-white/70 rounded-3xl`}>
                        <input
                            className="w-[520px] h-[3.25rem] outline-none border border-gray-compare-500 rounded-[40px] bg-gray-compare text-center placeholder:text-center placeholder:text-green-oliver-700 placeholder:text-xl"
                            {...register(`watches.${index}.model`)}
                            placeholder="Pesquisar"
                        />
                        {searchDataInput && (
                            <CommandList>
                                <CommandEmpty>Nada foi encontrado</CommandEmpty>
                                <CommandGroup className='text-2xl' heading="Sugestões">
                                    <CommandList>
                                        <CommandItem>Watch</CommandItem>
                                        <CommandItem>Search Emoji</CommandItem>
                                        <CommandItem>Calculator</CommandItem>
                                    </CommandList>
                                </CommandGroup>
                            </CommandList>
                        )}
                    </Command>
                )
            })}
            <WatchTable />

        </>
    )
}