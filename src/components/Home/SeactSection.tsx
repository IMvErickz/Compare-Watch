import {Search, Plus} from 'lucide-react'

export function SearchSection() {
    return (
        <div className='size-full flex flex-col items-center justify-center gap-y-4'>
            <div className='w-full flex items-center justify-center gap-x-5'>
            <div className='bg-white/80 w-[32.5rem] h-14 flex items-center justify-between rounded-[2.5rem] p-3'>
                <Search/>
            <input placeholder="Pesquisar"
                className="size-full outline-none bg-transparent text-center placeholder:text-center placeholder:text-green-oliver-700 placeholder:text-xl" />
            </div>
            
            <button className='size-12 rounded-full bg-gray-compare-200 flex items-center justify-center'>
                <Plus className='w-6' />
            </button>
            </div>
            <span className='text-white text-lg leading-5'>Pesquise aqui seu relógio. </span>
        </div>
    )
}