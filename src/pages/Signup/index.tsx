import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z.string(),
  name: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export function SignUp() {
  
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();

  const { mutateAsync: autenticateFn } = useMutation({
    mutationFn: async ({ email, password, name }: FormSchema) =>
      await api.post("/user", {
        email,
        password,
        name,
      }),
  });

  async function handleSignIn({ email, password, name }: FormSchema) {
    await autenticateFn({ email, password, name });
    navigate("/signin");
  }

  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <div className="w-96 h-96 flex flex-col items-center justify-center rounded-xl py-12 px-16 bg-gradient from-green-oliver-700 to-green-oliver-100">
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="w-80 flex flex-col justify-between items-center h-full"
          >
            <div className="w-full">
              <Label htmlFor="email" className="text-compare-color-100">
                Email
              </Label>
              <Input
                {...register("email")}
                className="w-full mb-1 rounded-[8px] h-12 bg-white border-compare-color-100"
                placeholder="Email"
                type="email"
              />
              <Label htmlFor="email" className="text-compare-color-100">
                Password
              </Label>
              <Input
                type="password"
                {...register("password")}
                className="w-full rounded-[8px] h-12 bg-white border-compare-color-100"
                placeholder="Password"
              />
              <Label htmlFor="email" className="text-compare-color-100">
                Name
              </Label>
              <Input
                type="text"
                {...register("name")}
                className="w-full rounded-[8px] h-12 bg-white border-compare-color-100"
                placeholder="Nome"
              />
            </div>
            <button
              disabled={isSubmitting}
              className="w-full h-12 relative rounded-[8px] hover:brightness-95 transition-colors bg-compare-color-100 text-green-oliver-300"
              type="submit"
            >
              {isSubmitting ? "Loading..." : "Sign In"}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
