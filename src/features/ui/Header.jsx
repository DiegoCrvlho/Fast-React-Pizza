import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import UserName from "../user/UserName";

function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-500 px-4 py-3 tracking-widest uppercase sm:px-6">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
