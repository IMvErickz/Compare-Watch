import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Compare } from "./pages/Compare";

export function Routes() {
  return (
    <BrowserRouter>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
      </ReactDomRoutes>
    </BrowserRouter>
  );
}
