import { Plus, ShoppingBag } from "lucide-react";
import { WatchTable } from "./Table";

export function WatchContainer() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center gap-4">
            <div>
                <img src="https://thumbs2.imgbox.com/67/39/OJyfmB3U_t.png" alt="" className="w-52 h-56" />
            </div>
            <WatchTable />
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