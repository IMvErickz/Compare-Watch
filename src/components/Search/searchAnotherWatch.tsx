import { Command } from "@/components/ui/command";
import { api } from "@/lib/axios";
import { searchData } from "@/router";
import { useFormContext } from "react-hook-form";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { SearchDrop } from "../Search/SearchDrop";
import { Search } from "lucide-react";

export function SearchAnotherDrop() {
  const [params, setSearchParams] = useSearchParams();

  function handleChooseSecondWatch(id: string) {
    params.set("secondWatch", id);
    setSearchParams(params);
  }

  const { watch, register } = useFormContext<searchData>();

  const searchDataInput = watch("secondWatch");

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
    <Command
      className={
        searchDataInput
          ? `w-[520px] bg-white/70 border border-gray-compare-600 rounded-3xl`
          : `w-[520px] bg-white/70 rounded-3xl`
      }
    >
      <Search
        className="absolute translate-y-[15px] translate-x-[22px]"
        color="#5D6C69"
      />
      <SearchDrop.Input
        className="w-[520px] h-[3.25rem] outline-none border border-gray-compare-500 rounded-[40px] bg-gray-compare text-center placeholder:text-center placeholder:text-green-oliver-700 placeholder:text-xl"
        placeholder="Pesquisar"
        register={register}
        id="secondWatch"
      />
      {filter && searchDataInput && (
        <SearchDrop.List>
          {filter.map((watch) => {
            return (
              <SearchDrop.Item watch={watch}>
                <button
                  className="flex w-full items-center justify-between"
                  onClick={() => handleChooseSecondWatch(watch.id)}
                >
                  <span>{watch.Brand?.name}</span>
                  <span>{watch.name}</span>
                </button>
              </SearchDrop.Item>
            );
          })}
        </SearchDrop.List>
      )}
    </Command>
  );
}
