import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { useFormContext } from "react-hook-form"
import { useQuery } from "react-query"
import { api } from "@/lib/axios"
import { useSearchParams } from "react-router-dom"
import { searchData } from "@/router"

export function SearchAnotherDrop() {

    const [params, setSearchParams] = useSearchParams()

    function handleChosseSecondWatch(id: string) {
        params.set('second', id)
        setSearchParams(params)

    }

    const { watch, register } = useFormContext<searchData>()

    const searchDataInput = watch('secondWatch')

    const { data } = useQuery({
        queryKey: 'watches',
        queryFn: async () => {
            const response = await api.get<WatchResponseProps[]>('/watch')
            return response
        }
    })

    const filter = data?.data.filter(watch => searchDataInput && watch.name.toLowerCase().includes(searchDataInput.toLowerCase())
        || searchDataInput && watch.Brand?.name.toLowerCase().includes(searchDataInput.toLowerCase()))
    return (
        <Command className={
            searchDataInput
                ? `w-[520px] bg-white/70 border border-gray-compare-600 rounded-3xl`
                : `w-[520px] bg-white/70 rounded-3xl`}>
            <input
                className="w-[520px] h-[3.25rem] outline-none border border-gray-compare-500 rounded-[40px] bg-gray-compare text-center placeholder:text-center placeholder:text-green-oliver-700 placeholder:text-xl"
                {...register('secondWatch')}
                placeholder="Pesquisar"
            />
            {filter && searchDataInput && (
                <CommandList>
                    <CommandEmpty>Nada foi encontrado</CommandEmpty>
                    <CommandGroup className='text-2xl' heading="Sugestões">
                        <CommandList>
                            {filter.map(watch => {
                                return (
                                    <CommandItem key={watch.id} className="flex items-center justify-between" asChild>
                                        <button className="flex w-full items-center justify-between" onClick={() => handleChosseSecondWatch(watch.id)} >
                                            <span>{watch.Brand?.name}</span>
                                            <span>{watch.name}</span>
                                        </button>
                                    </CommandItem>
                                )
                            })}
                        </CommandList>
                    </CommandGroup>
                </CommandList>
            )}
        </Command>
    )
}