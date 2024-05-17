import { Header } from "@/components/Header";
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
    .refine((e) => e === "abcd@fg.com", "This email is not in our database"),
  password: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export function Signup() {
  const { register, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const { mutateAsync: autenticateFn } = useMutation({
    mutationFn: ({ email, password }: FormSchema) =>
      api.post("/auth", {
        email,
        password,
      }),
  });

  async function handleSignIn({ email, password }: FormSchema) {
    await autenticateFn({ email, password });
  }

  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <div className="w-96 h-96 flex flex-col items-center justify-center rounded-xl py-12 px-16 bg-gradient from-green-oliver-700 to-green-oliver-100">
          <form onSubmit={() => handleSubmit(handleSignIn)} className="w-80">
            <input
              {...register("email")}
              className="w-full mb-1 rounded-[8px] h-12"
              placeholder="Email"
            />
            <input
              {...register("password")}
              className="w-full rounded-[8px] h-12"
              placeholder="Password"
            />
          </form>
        </div>
      </main>
    </>
  );
}
