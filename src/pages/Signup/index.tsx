import { Header } from "@/components/Header";

export function Signup() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <div className="w-96 h-96 flex flex-col items-center justify-center rounded-xl py-12 px-16 bg-gradient from-green-oliver-700 to-green-oliver-100">
          <div className="w-80">
            <input className="w-full mb-1 rounded-[8px] h-12" placeholder="Email" />
            <input className="w-full rounded-[8px] h-12" placeholder="Password" />
          </div>
        </div>
      </main>
    </>
  );
}
