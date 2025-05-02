import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Statistics from "./Pages/Statistics";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import ProductDetails from "./Pages/ProductDetails";
import PhoneProvider from "./context/PhoneProvider";


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        { index: true, element: <Home /> },
        { path: "statistics", element: <Statistics /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "product-details/:productId", element: <ProductDetails /> },
      ],
    },
  ]);

  return (
    <PhoneProvider>
      <RouterProvider router={router} />
    </PhoneProvider>
  );
}

export default App;
