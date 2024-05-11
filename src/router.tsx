import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Compare } from "./pages/Compare";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Details } from "./pages/Details";

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
