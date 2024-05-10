import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { useFormContext } from "react-hook-form"
import { WatchTable } from "../Compare/Table"
import { searchData } from "@/router"
import { useSearchParams } from "react-router-dom"
import { WatchContainer } from "../Compare/watch-container"

export function SearchDropMany() {

    const [params, setSearchParams] = useSearchParams()

    function handleChosseSecondWatch() {
        params.set('second', 'er')
        setSearchParams(params)

    }

    const firstWatchId = params.get('first')
    const secondWatchId = params.get('second')

    const { register, watch } = useFormContext<searchData>()

    const searchDataInput = watch('watches')

    return (
        <>
            {firstWatchId && (<WatchContainer />)}
            {secondWatchId && (<WatchTable />)}
            {searchDataInput?.map((input, index) => {
                return (
                    <Command key={input} className={
                        searchDataInput
                            ? `w-[520px] bg-white/70 border border-gray-compare-600 rounded-3xl`
                            : `w-[520px] bg-white/70 rounded-3xl`}>
                        <input
                            className="w-[520px] h-[3.25rem] outline-none border border-gray-compare-500 rounded-[40px] bg-gray-compare text-center placeholder:text-center placeholder:text-green-oliver-700 placeholder:text-xl"
                            {...register(`watches.${index}`)}
                            placeholder="Pesquisar"
                        />
                        {searchDataInput && (
                            <CommandList>
                                <CommandEmpty>Nada foi encontrado</CommandEmpty>
                                <CommandGroup className='text-2xl' heading="Sugestões">
                                    <CommandList>
                                        <CommandItem><button onClick={handleChosseSecondWatch}>foi</button></CommandItem>
                                        <CommandItem>Search Emoji</CommandItem>
                                        <CommandItem>Calculator</CommandItem>
                                    </CommandList>
                                </CommandGroup>
                            </CommandList>
                        )}
                    </Command>
                )
            })}


        </>
    )
}