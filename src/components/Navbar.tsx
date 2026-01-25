/* ––
* –––– Imports
 * –––––––––––––––––––––––––––––––––– */

//Globals Imports
import { Link } from "react-router-dom"

// Icons Imports
import { LuDatabase } from "react-icons/lu";
import { GiFamilyTree } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";




const Navbar = () => {
  return (
    <nav className='bg-black border-b-[0.5px] border-white/30 shadow-lg flex items-center justify-between py-3 px-32 fixed top-0 left-0 w-full z-50'>
      <Link to="/">
        <span className='font-nunito text-4xl font-semibold text-gray-300 hover:text-white rounded-2xl'>
          Umapyoi Calculator
        </span>
      </Link>

      <div className='flex items-center gap-5'>
        <Link to="/characters" className='py-1 px-3 font-nunito text-xl font-semibold text-gray-300 hover:text-white rounded-2xl hover:bg-slate-700 transition duration-300 flex items-center gap-2'>
          <LuDatabase /> Umas Database
        </Link>

        <Link to="/inheritance" className='py-1 px-3 font-nunito text-xl font-semibold text-gray-300 hover:text-white rounded-2xl hover:bg-slate-700 transition duration-300 flex items-center gap-2'>
          <GiFamilyTree /> Inheritance Calculator
        </Link>

        <Link to="/support" className='py-1 px-3 font-nunito text-xl font-semibold text-gray-300 hover:text-white rounded-2xl hover:bg-slate-700 transition duration-300 flex items-center gap-2'>
          <FaHandsHelping /> Support Cards
        </Link>
      </div>
    </nav>
  )
}

export default Navbar