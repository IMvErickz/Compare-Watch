import { Header } from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();

  const { mutateAsync: autenticateFn } = useMutation({
    mutationFn: async ({ email, password }: FormSchema) => {
      const response = await api.post("/auth", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    },
  });

  async function handleSignIn({ email, password }: FormSchema) {
    await autenticateFn({ email, password });
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
            </div>
            {isValid && (
              <span className="text-red-400 text-base">
                Email or Password invalid!
              </span>
            )}
            <button
              disabled={isSubmitting}
              className="w-full h-12 relative rounded-[8px] hover:brightness-95 transition-all bg-compare-color-100 text-green-oliver-300"
              type="submit"
            >
              {isSubmitting ? "Loading..." : "Sign In"}
            </button>
            <span className="text-white text-base">
              Don’t have an account?{" "}
              <Link
                to={"/signup"}
                className="hover:text-compare-color-100 transition-all"
              >
                Sign up now!
              </Link>
            </span>
          </form>
        </div>
      </main>
    </>
  );
}
