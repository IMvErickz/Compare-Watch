import { api } from "@/lib/axios";
import { searchData } from "@/router";
import { Plus, Search } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { useQuery } from "react-query";
import { SearchDrop } from "../Search/SearchDrop";
import { Link } from "react-router-dom";
import { Command } from "../ui/command";

export function SearchSection() {
  const { watch, register } = useFormContext<searchData>();

  const searchDataInput = watch("firstWatch");

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

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-y-4">
      <div className="w-full flex flex-col items-center justify-center gap-x-5">
        <div className="w-full flex items-center justify-center gap-x-5">
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
              id="firstWatch"
            />
            {filter && searchDataInput && (
              <SearchDrop.List>
                {filter.map((watch) => {
                  return (
                    <SearchDrop.Item watch={watch}>
                      <Link to={`/compare?firstWatch=${watch.id}`}>
                        <span>{watch.Brand?.name}</span>
                        <span>{watch.name}</span>
                      </Link>
                    </SearchDrop.Item>
                  );
                })}
              </SearchDrop.List>
            )}
          </Command>
          <button className="size-12 rounded-full bg-gray-compare-200 flex items-center justify-center">
            <Plus className="w-6" />
          </button>
        </div>
      </div>
      <span className="text-white text-lg leading-5">
        Pesquise aqui seu relógio.{" "}
      </span>
    </div>
  );
}
