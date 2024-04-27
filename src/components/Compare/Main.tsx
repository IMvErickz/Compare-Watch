import { SearchDropMany } from "../Search/SearchDropMany";

export function MainCompare() {
    return (
        <main className="flex-1">
            <section className="size full flex items-center">
                <div className="flex items-center gap-10 mt-8">
                    <SearchDropMany />
                </div>
            </section>
        </main>
    )
}