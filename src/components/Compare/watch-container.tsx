import { api } from "@/lib/axios";
import { Plus, Search, ShoppingBag } from "lucide-react";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import { SearchDrop } from "../Search/SearchDrop/";
import { WatchTable } from "./Table";
import { Command } from "../ui/command";
import { useFormContext } from "react-hook-form";
import { searchData } from "@/router";

interface WatchContainerProps {
  watchId: string;
  watchSequel: "firstWatch" | "secondWatch";
}

export function WatchContainer({ watchId, watchSequel }: WatchContainerProps) {
  const [params, setSearchParams] = useSearchParams()

  const { watch, register } = useFormContext<searchData>();

  const searchDataInput = watch(watchSequel);

  function handleChooseWatch(id: string) {
    params.set(watchSequel, id);
    setSearchParams(params);
  }

  async function handleGetWatch(id: string): Promise<WatchProps> {
    return await api.get(`/watch/${id}`);
  }

  const { data: watchData } = useQuery({
    queryKey: ["watch", watchId],
    queryFn: () => handleGetWatch(watchId),
  });

  const { data } = useQuery({
    queryKey: "watches",
    queryFn: async () => {
      const response = await api.get<WatchResponseProps[]>("/watch");
      return response;
    },
  });

  const filter = data?.data.filter(
    (watch) =>
      (searchDataInput &&
        watch.name.toLowerCase().includes(searchDataInput.toLowerCase())) ||
      (searchDataInput &&
        watch.Brand?.name.toLowerCase().includes(searchDataInput.toLowerCase()))
  );

  const properties = watchData && watchData.data;

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 mb-8">
      <div>
        <Command
          className={
            searchDataInput
              ? `w-[520px] bg-white/70 border border-gray-compare-600 rounded-3xl relative`
              : `w-[520px] bg-white/70 rounded-3xl`
          }
        >
          <Search
            className="absolute translate-y-[15px] translate-x-[22px]"
            color="#5D6C69"
          />
          <SearchDrop.Input
            className="w-[520px] h-[3.25rem] outline-none border border-gray-compare-500 rounded-[40px] bg-gray-compare text-center placeholder:text-center placeholder:text-green-oliver-700 placeholder:text-xl"
            register={register}
            placeholder="Pesquisar"
            id={watchSequel}
          />
          {filter && searchDataInput && (
            <SearchDrop.List>
              {filter.map((watch) => {
                return (
                  <SearchDrop.Item watch={watch}>
                    <button onClick={() => handleChooseWatch(watch.id)}>
                      <span>{watch.Brand?.name}</span>
                      <span>{watch.name}</span>
                    </button>
                  </SearchDrop.Item>
                );
              })}
            </SearchDrop.List>
          )}
        </Command>
      </div>
      {properties && <WatchTable {...properties} />}
      <div className="flex w-full items-center justify-between px-7">
        <Link
          to={`/details/${watchId}`}
          className="bg-[#488B7F] text-white text-base leading-5 flex items-center justify-center gap-2 w-32 p-2 rounded border border-solid border-white"
        >
          Saber
          <Plus color="#fff" />
        </Link>
        <button className="bg-[#488B7F] text-white text-base leading-5 flex items-center justify-center gap-2 w-32 p-2 rounded border border-solid border-white">
          Comprar
          <ShoppingBag color="#fff" />
        </button>
      </div>
    </div>
  );
}
