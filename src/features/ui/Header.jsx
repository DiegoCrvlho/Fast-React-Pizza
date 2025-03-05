import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <SearchOrder />
      <p>Diego</p>
    </header>
  );
}

export default Header;
