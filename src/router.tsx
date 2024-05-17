import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import { z } from "zod";
import { Compare } from "./pages/Compare";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/Signup";

// eslint-disable-next-line react-refresh/only-export-components
export const searchSchema = z.object({
  firstWatch: z.string().optional(),
  secondWatch: z.string().optional(),
});

export type searchData = z.infer<typeof searchSchema>;

export function Routes() {
  const methods = useForm<searchData>({
    resolver: zodResolver(searchSchema),
  });
  return (
    <FormProvider {...methods}>
      <BrowserRouter>
        <ReactDomRoutes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/details">
            <Route path=":watchId" element={<Details />} />
          </Route>
        </ReactDomRoutes>
      </BrowserRouter>
    </FormProvider>
  );
}
