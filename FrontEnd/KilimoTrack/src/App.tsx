import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Shop from "./pages/shopping/Shop";
import RegForm from "./pages/registration/RegForm";
import Layout from "./components/Layout";
import FeatureSection from "./pages/home/FeatureSection";
import BenefitsSection from "./pages/home/BenefitsSection";

const router = createBrowserRouter([
  {
    path: "/", //root path
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "shop", element: <Shop /> },
    ],
  },
      
  {
    path: "/register",
    element: <RegForm />
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
