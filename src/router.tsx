import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from "react-router-dom";
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />
      </ReactDomRoutes>
    </BrowserRouter>
  );
}
