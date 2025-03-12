import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import UserName from "../user/UserName";

function Header() {
  return (
    //TODO

    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-4 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      //REVIEW
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
