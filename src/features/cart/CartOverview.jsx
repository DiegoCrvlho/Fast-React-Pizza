import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-3">
        <span className="font-semibold text-stone-300">23 pizzas</span>
        <span>$23.45</span>
      </p>
      {/* <a href="#">Open cart &rarr;</a> */}
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
