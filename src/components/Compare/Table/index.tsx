import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useParams } from "react-router-dom";

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
    name,
    price,
    boxMaterial,
    boxSize,
    braceletMaterial,
    dialColor,
    movimentType,
    extras,
    originCountry,
    releaseYear,
    Brand }: WatchTableProps) {

    const param = useParams()
    const { watchId } = param

    function formatPrice(price: number) {
        const priceFormated = Intl.NumberFormat('PT-br', { style: 'currency', currency: 'BRL' })
            .format(price)

        return priceFormated
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            {watchId ? (
                <div className="bg-green-oliver-110 w-full h-max flex items-center justify-start font-l rounded-t-[4.2px]">
                    <h2 className="text-white text-xl pl-4 leading-8">{name}</h2>
                </div>
            ) : (
                <div className="bg-green-oliver-110 w-full h-6 flex items-center justify-center font-l rounded-t-[4.2px]">
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