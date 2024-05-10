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

// eslint-disable-next-line react-refresh/only-export-components
export const searchSchema = z.object({
  data: z.string().optional(),
  watches: z.array(z.string()).optional()
})

export type searchData = z.infer<typeof searchSchema>

export function Routes() {
  const methods = useForm<searchData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      watches: ['asdasd']
    }
  })
  return (
    <FormProvider {...methods}>
      <BrowserRouter>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
        </ReactDomRoutes>
      </BrowserRouter>
    </FormProvider>
  );
}
