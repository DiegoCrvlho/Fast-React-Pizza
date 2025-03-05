function CartOverview() {
  return (
    <div className="bg-stone-800 p-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-3">
        <span className="font-semibold text-stone-300">23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;
