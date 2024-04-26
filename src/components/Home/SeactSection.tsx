import { Plus } from 'lucide-react'
import { z } from 'zod'
import { SearchDrop } from '../Search/SearchDrop'


const searchSchema = z.object({
    data: z.string(),
})

export type searchData = z.infer<typeof searchSchema>

export function SearchSection() {

    return (
        <div className='flex-1 flex flex-col items-center justify-center gap-y-4'>
            <div className='w-full flex flex-col items-center justify-center gap-x-5'>
                <div className='w-full flex items-center justify-center gap-x-5'>
                    <SearchDrop />
                    <button className='size-12 rounded-full bg-gray-compare-200 flex items-center justify-center'>
                        <Plus className='w-6' />
                    </button>
                </div>
            </div>
            <span className='text-white text-lg leading-5'>Pesquise aqui seu relógio. </span>
        </div>
    )
}