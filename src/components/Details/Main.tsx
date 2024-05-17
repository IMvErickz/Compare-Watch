import { api } from "@/lib/axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { WatchTable } from "../Compare/Table";
import { ShoppingBag, Scale } from "lucide-react";

export function MainDetails() {
  const { watchId } = useParams();

  async function handleGetWatch(id: string): Promise<WatchProps> {
    return await api.get(`/watch/${id}`);
  }

  const { data: watch } = useQuery({
    queryKey: ["watch", watchId],
    queryFn: () => {
      if (watchId) return handleGetWatch(watchId);
    },
    staleTime: Infinity
  });

  const properties = watch && watch.data;

  return (
    <main className="flex-1 w-full">
      <section className="size-full flex flex-col items-center">
        <div className="size-full flex items-center px-32">
          <div className="w-full flex items-center justify-center">
            <img src={properties?.picture[0]} className="w-64" alt={properties?.name} />
          </div>
          <div className="w-full flex items-center justify-center gap-10 mt-8">
            <div className="w-[59.5rem]">
              {properties && <WatchTable {...properties} />}
              <div className="w-full flex items-center justify-center gap-6 mt-4">
                <Link
                  target="_blank"
                  to={`/details/${watchId}`}
                  className="bg-green-oliver-105 hover:bg-green-oliver-110 transition-colors text-white hover text-base leading-5 flex items-center justify-center gap-2 w-32 p-2 rounded border border-solid border-white"
                >
                  Comprar
                  <ShoppingBag color="#fff" />

                </Link>
                <Link to={''} className="bg-green-oliver-105 hover:bg-green-oliver-110 transition-colors text-white text-base leading-5 flex items-center justify-center gap-2 w-32 p-2 rounded border border-solid border-white">
                  Comparar
                  <Scale color="#fff" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-start px-32 mb-6">
          {properties?.picture.map(picture => {
            return (
              <img src={picture} className="w-32" alt="" />
            )
          })}
        </div>
      </section>
    </main>
  );
}
