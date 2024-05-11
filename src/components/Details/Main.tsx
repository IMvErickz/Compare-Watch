import { api } from "@/lib/axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { WatchTable } from "../Compare/Table";

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
  });

  const properties = watch && watch.data;

  return (
    <main className="flex-1">
      <section className="size full flex items-center">
        <div className="flex items-center gap-10 mt-8">
          {properties && <WatchTable {...properties} />}
        </div>
      </section>
    </main>
  );
}
