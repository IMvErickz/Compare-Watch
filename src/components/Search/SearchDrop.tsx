import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { useFormContext } from "react-hook-form"
import { searchData } from "../Home/SeactSection"
import { useQuery } from "react-query"
import { api } from "@/lib/axios"
import { Link } from "react-router-dom"

interface Brand {
    id: string;
    name: string;
    description: string;
}

interface WatchResponseProps {
    id: string;
    name: string;
    price: number;
    description: string;
    link: string;
    boxMaterial: string;
    boxSize: string;
    braceletMaterial: string;
    dialColor: string;
    movimentType: string;
    picture: string[];
    releaseYear: number;
    extras: string;
    originCountry: string;
    brandId: string;
    createdAt: string;
    Brand?: Brand;
}

export function SearchDrop() {

    const { watch, register } = useFormContext<searchData>()

    const searchDataInput = watch('data')

    const { data } = useQuery({
        queryKey: 'watches',
        queryFn: async () => {
            const response = await api.get<WatchResponseProps[]>('/watch')
            return response
        }
    })

    const filter = data?.data.filter(watch => watch.name.toLowerCase().includes(searchDataInput.toLowerCase())
        || watch.Brand?.name.toLowerCase().includes(searchDataInput.toLowerCase()))
    return (
        <Command className={
            searchDataInput
                ? `w-[520px] bg-white/70 border border-gray-compare-600 rounded-3xl`
                : `w-[520px] bg-white/70 rounded-3xl`}>
            <input
                className="w-[520px] h-[3.25rem] outline-none border border-gray-compare-500 rounded-[40px] bg-gray-compare text-center placeholder:text-center placeholder:text-green-oliver-700 placeholder:text-xl"
                {...register('data')}
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
                                        <Link to='/compare'>
                                            <span>{watch.Brand?.name}</span>
                                            <span>{watch.name}</span>
                                        </Link>
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