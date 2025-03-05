import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/ui/Home";
import Menu, { loader as loaderMenu } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as actionCreateOrder,
} from "./features/order/CreateOrder";
import Order, { loader as loaderOrder } from "./features/order/Order";
import AppLayout from "./features/ui/AppLayout";
import Error from "./features/ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: loaderMenu,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: actionCreateOrder,
      },
      {
        path: "/order/:OrderId",
        element: <Order />,
        loader: loaderOrder,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
