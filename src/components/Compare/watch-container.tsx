import { Plus, ShoppingBag } from "lucide-react";
import { WatchTable } from "./Table";
import { useQuery } from "react-query";
import { api } from "@/lib/axios";

interface WatchContainerProps {
    watchId: string
}

export function WatchContainer({ watchId }: WatchContainerProps) {

    async function handleGetWatch(id: string): Promise<WatchProps> {
        return await api.get(`/watch/${id}`)
    }

    const { data: watch } = useQuery({
        queryKey: ['watch', watchId],
        queryFn: () => handleGetWatch(watchId)
    })

    const properties = watch && watch.data

    return (
        <div className="flex flex-col flex-1 items-center justify-center gap-4">
            <div>
                <img src={properties?.picture[0]} alt="" className="w-52 h-56" />
            </div>
            {properties && <WatchTable {...properties} />}
            <div className="flex w-full items-center justify-between px-7">
                <button className="bg-[#488B7F] text-white text-base leading-5 flex items-center justify-center gap-2 w-32 p-2 rounded border border-solid border-white">
                    Saber
                    <Plus color="#fff" />
                </button>
                <button className="bg-[#488B7F] text-white text-base leading-5 flex items-center justify-center gap-2 w-32 p-2 rounded border border-solid border-white">
                    Comprar
                    <ShoppingBag color="#fff" />
                </button>
            </div>
        </div>
    )
}