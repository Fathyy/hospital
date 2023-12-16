import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center justify-between py-12">
    <div className="flex items-center gap-2">
      <p className="text-2xl font-bold flex items-center justify-center
      p-4 w-5 h-5 bg-accent rounded-full">T</p>
      <p className="text-2xl font-bold">Hospital</p>
    </div>
    <ul className="space-x-4 hidden sm:flex items-center ">
      <li className="uppercase text-black">Home</li>
      <li className="uppercase text-black">About</li>
      <li className="uppercase text-black">Find a doctor</li>
      <li className="uppercase text-black">Testimonials</li>
      <li className="uppercase text-black">Contact</li>
    </ul>

    {/* hamburger menu */}
    <div className="flex flex-1 justify-end items-center sm:hidden">
      <i className={`fa-solid ${toggle ? 'fa-x' : 'fa-bars'} h-[32px] object-contain text-2xl`}
      onClick={()=> setToggle((prev)=> !prev)}></i>
      
      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-accent
      absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className="space-y-4 sm:flex flex-col justify-end items-center">
          <li className="uppercase text-black">Home</li>
          <li className="uppercase text-black">About</li>
          <li className="uppercase text-black">Find a doctor</li>
          <li className="uppercase text-black">Testimonials</li>
          <li className="uppercase text-black">Contact</li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar