import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Lists from "./components/Lists";
import Layout from "./components/Layout";
import Main from "./components/Main";

const routesFromElements = createRoutesFromElements(
  <>
    <Route element={<Layout />}>
      <Route index path="/" element={<Main />} />
      <Route path="/listor" element={<Lists />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  </>
);

const router = createBrowserRouter(routesFromElements);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
