import { Outlet, useNavigation } from "react-router-dom";
import Cart from "../cart/Cart";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />

      <main>
        <Outlet />
      </main>

      <Cart />
    </div>
  );
}

export default AppLayout;
