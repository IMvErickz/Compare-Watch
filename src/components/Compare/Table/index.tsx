import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useUser } from "@/hooks/useUser";
import { api } from "@/lib/axios";
import { Heart } from "lucide-react";
import { useMutation } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "sonner";

interface Brand {
    id: string;
    name: string;
    description: string;
}

interface WatchTableProps {
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
    Brand: Brand
}


export function WatchTable({
    id,
    name,
    price,
    boxMaterial,
    boxSize,
    picture,
    braceletMaterial,
    dialColor,
    movimentType,
    extras,
    originCountry,
    releaseYear,
    Brand }: WatchTableProps) {
    const user = useUser()
    const param = useParams()
    const location = useLocation()
    const pathname = location.pathname.split('/')[1]
    const { watchId } = param

    function formatPrice(price: number) {
        const priceFormated = Intl.NumberFormat('PT-br', { style: 'currency', currency: 'BRL' })
            .format(price)

        return priceFormated
    }

    async function handleSetFavoriteWatch(watchId: string) {
        await api.put('/fav', {
            fav: watchId
        })
    }

    async function handleDeleteFavoriteWatch(watchId: string) {
        await api.delete(`/favs/delete/${watchId}`)
    }

    const findWatchId = user?.favs.find(fav => fav.id === id)

    const { mutateAsync: setFavoriteFn } = useMutation({
        mutationFn: findWatchId?.id ? handleDeleteFavoriteWatch : handleSetFavoriteWatch,
        onMutate() {
            const userFavorites = user?.favs
            if (userFavorites) {
                const favId = userFavorites.find(fav => fav.id === id)
                if (favId) {
                    const removeId = userFavorites.filter(fav => fav.id != id)
                    const userData = { ...user, favs: removeId }
                    localStorage.setItem('user', JSON.stringify(userData))
                    toast.warning('Relógio removido dos favoritos')
                } else {
                    const userData = { ...user, favs: userFavorites && [...userFavorites, { id: id }] }
                    localStorage.setItem('user', JSON.stringify(userData))
                    toast.success('Relógio adicionado dos favoritos')
                }
            }
        },
    })

    return (
        <div className="flex flex-col items-center justify-center w-full">
            {pathname != 'details' && (
                <div className="flex items-start justify-center gap-2">
                    <img src={picture[0]} alt="" className="w-52 h-56" />
                    <button onClick={() => setFavoriteFn(id)}>
                        {user?.favs.find(fav => fav.id === id)
                            ?
                            (
                                <Heart className="size-4" fill="#6C6C6C" />
                            )
                            :
                            (
                                <Heart className="size-4" color="#6C6C6C" />
                            )
                        }
                    </button>
                </div>
            )}
            {watchId ? (
                <div className="bg-green-oliver-110 w-full h-max flex items-center justify-start font-l rounded-t-[4.2px] mt-4">
                    <h2 className="text-white text-xl pl-4 leading-8">{name}</h2>
                </div>
            ) : (
                <div className="bg-green-oliver-110 w-full h-6 flex items-center justify-center font-l rounded-t-[4.2px] mt-4">
                    <h2 className="text-white text-sm">{name}</h2>
                </div>
            )}

            <Table className="flex w-full border-b-solid border-gray-compare-700 border-[1px] rounded-b">
                <TableHeader className="border-none w-full">
                    <TableRow className="flex flex-col items-center border-none pl-4">
                        <TableHead className="text-gray-compare-900 w-full h-6 border-b-solid border border-b-[1px] border-t-0 border-r-0 border-l-0 border-b-gray-compare-700  flex flex-col items-start justify-center text-start p-0">
                            Marca
                        </TableHead>
                        <TableHead className="text-gray-compare-900 w-full h-6 border-b-solid border border-b-[1px] border-t-0 border-r-0 border-l-0 border-b-gray-compare-700  flex flex-col items-start justify-center text-start p-0">
                            Tamanho da Caixa
                        </TableHead>
                        <TableHead className="text-gray-compare-900 w-full h-6 border-b-solid border border-b-[1px] border-t-0 border-r-0 border-l-0 border-b-gray-compare-700  flex flex-col items-start justify-center text-start p-0">
                            Material Caixa
                        </TableHead>
                        <TableHead className="text-gray-compare-900 w-full h-6 border-b-solid border border-b-[1px] border-t-0 border-r-0 border-l-0 border-b-gray-compare-700  flex flex-col items-start justify-center text-start p-0">
                            Material Pulseira
                        </TableHead>
                        <TableHead className="text-gray-compare-900 w-full h-6 border-b-solid border border-b-[1px] border-t-0 border-r-0 border-l-0 border-b-gray-compare-700  flex flex-col items-start justify-center text-start p-0">
                            Cor mostrador
                        </TableHead>
                        <TableHead className="text-gray-compare-900 w-full h-6 border-b-solid border border-b-[1px] border-t-0 border-r-0 border-l-0 border-b-gray-compare-700  flex flex-col items-start justify-center text-start p-0">
                            Tipo Movimento
                        </TableHead>
                        <TableHead className="text-gray-compare-900 w-full h-6 border-b-solid border border-b-[1px] border-t-0 border-r-0 border-l-0 border-b-gray-compare-700  flex flex-col items-start justify-center text-start p-0">
                            Preço sugerido
                        </TableHead>
                        {watchId && (
                            <>
                                <TableHead className="text-gray-compare-900 w-full h-6 border-b-solid border border-b-[1px] border-t-0 border-r-0 border-l-0 border-b-gray-compare-700  flex flex-col items-start justify-center text-start p-0">
                                    Extras
                                </TableHead>
                                <TableHead className="text-gray-compare-900 w-full h-6 border-b-solid border border-b-[1px] border-t-0 border-r-0 border-l-0 border-b-gray-compare-700  flex flex-col items-start justify-center text-start p-0">
                                    Laçamento
                                </TableHead>
                                <TableHead className="text-gray-compare-900 w-full h-6 border-b-solid border border-b-[1px] border-t-0 border-r-0 border-l-0 border-b-gray-compare-700  flex flex-col items-start justify-center text-start p-0">
                                    País de origem
                                </TableHead>
                            </>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody className="w-full">
                    <TableRow className="flex flex-col items-center border-none pr-4">
                        <TableCell className="text-gray-compare-900 w-full h-6 border-b-solid border-b-[1px] border-t-0 border-r-0 border-l-0 border-gray-compare-700 flex flex-col items-end justify-center text-start p-0">
                            {Brand.name}
                        </TableCell>
                        <TableCell className="text-gray-compare-900 w-full h-6 border-b-solid border-b-[1px] border-t-0 border-r-0 border-l-0 border-gray-compare-700 flex flex-col items-end justify-center text-start p-0">
                            {boxSize}
                        </TableCell>
                        <TableCell className="text-gray-compare-900 w-full h-6 border-b-solid border-b-[1px] border-t-0 border-r-0 border-l-0 border-gray-compare-700 flex flex-col items-end justify-center text-start p-0">
                            {boxMaterial}
                        </TableCell>
                        <TableCell className="text-gray-compare-900 w-full h-6 border-b-solid border-b-[1px] border-t-0 border-r-0 border-l-0 border-gray-compare-700 flex flex-col items-end justify-center text-start p-0">
                            {braceletMaterial}
                        </TableCell>
                        <TableCell className="text-gray-compare-900 w-full h-6 border-b-solid border-b-[1px] border-t-0 border-r-0 border-l-0 border-gray-compare-700 flex flex-col items-end justify-center text-start p-0">
                            {dialColor}
                        </TableCell>
                        <TableCell className="text-gray-compare-900 w-full h-6 border-b-solid border-b-[1px] border-t-0 border-r-0 border-l-0 border-gray-compare-700 flex flex-col items-end justify-center text-start p-0">
                            {movimentType}
                        </TableCell>
                        <TableCell className="text-gray-compare-900 w-full h-6 border-b-solid border-b-[1px] border-t-0 border-r-0 border-l-0 border-gray-compare-700 flex flex-col items-end justify-center text-start p-0">
                            {formatPrice(price)}
                        </TableCell>
                        {watchId && (
                            <>
                                <TableCell className="text-gray-compare-900 w-full h-6 border-b-solid border-b-[1px] border-t-0 border-r-0 border-l-0 border-gray-compare-700 flex flex-col items-end justify-center text-start p-0">
                                    {extras}
                                </TableCell>
                                <TableCell className="text-gray-compare-900 w-full h-6 border-b-solid border-b-[1px] border-t-0 border-r-0 border-l-0 border-gray-compare-700 flex flex-col items-end justify-center text-start p-0">
                                    {releaseYear}
                                </TableCell>
                                <TableCell className="text-gray-compare-900 w-full h-6 border-b-solid border-b-[1px] border-t-0 border-r-0 border-l-0 border-gray-compare-700 flex flex-col items-end justify-center text-start p-0">
                                    {originCountry}
                                </TableCell>
                            </>
                        )}
                    </TableRow>
                </TableBody>
            </Table>
        </div>

    )
}