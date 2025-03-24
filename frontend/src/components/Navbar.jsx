const Navbar = () => {
  return (
  <>
  <div className="navbar bg-base-100 py-6 px-8 border-b-[1px] z-999 border-[#FFFFFF60] gap-10">
    <div className="navbar-start w-full gap-10">
      <h1 className="text-2xl font-black font-serif">Lane2k</h1>
      <div className="form-control w-full">
          <input type="text" placeholder="Search" className="input w-full input-bordered md:w-auto focus:outline-none bg-[#FFFFFF15] " />
        </div>
    </div>

    <div className="navbar-end w-[30%] gap-8">
      <div>
        <ul className="flex gap-3 text-[18px] font-semibold">
          <li><a href="#" className="">Home</a></li>
          <li><a href="#" className="">About</a></li>
          <li><a href="#" className="">Contact</a></li>
        </ul>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-primary bg-black border-white">Login</button>
        <button className="btn btn-primary bg-white border-black text-black">SignUp</button>
      </div>
    </div>
  </div>
  <div className="bg-[#FFFFFF15] py-4 text-center flex justify-center">
    <ul className="flex text-[16px] font-semibold gap-6">
      <li className="cursor-pointer">Brands</li>
      <li className="cursor-pointer">Mans</li>
      <li className="cursor-pointer">Womens</li>
      <li className="cursor-pointer">Kids</li>
      <li className="cursor-pointer">New</li>
      <li className="cursor-pointer">Sneakers</li>
      <li className="cursor-pointer">Shoes</li>
      <li className="cursor-pointer">Sale</li>
      <li className="cursor-pointer">Deadstock</li>
      <li className="cursor-pointer">Used</li>
    </ul>
  </div>
  <div className="hidden bg-[linear-gradient(to_bottom,_#ffffff15,_#000000)] py-[200px]"></div>
  </>
  )
}

export default Navbar
