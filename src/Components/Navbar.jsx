const Navbar = () => {
  const menuItems = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"];
  
  return (
    <nav className="bg-[#333333] text-white flex justify-center items-center py-3">
      <ul className="flex gap-8 text-sm">
        <li><img src="/apple-logo.svg" alt="Apple" className="w-4" /></li>
        {menuItems.map(item => <li key={item} className="hover:text-gray-300 cursor-pointer">{item}</li>)}
        <li><i className="fa fa-search"></i></li>
        <li><i className="fa fa-shopping-bag"></i></li>
      </ul>
    </nav>
  );
};

export default Navbar;
