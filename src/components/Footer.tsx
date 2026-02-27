//Se hacen los imports de los íconos utilizados para el footer
import { FiHash, FiMessageSquare, FiMessageCircle} from "react-icons/fi";
import { MdPrivacyTip } from "react-icons/md";

const Footer = () => {
  return (

    <footer className="relative w-full mt-auto bg-black pt-10 overflow-hidden border-t-[0.5px] border-white/30">

      {/*Contenedor del contenido*/}
      <div className="bg-transparent flex flex-col items-center justify-center gap-6 py-10 relative z-10 w-full">
        
        {/*Adición de íconos */}
        <div className="flex flex-row items-center justify-center gap-8 md:gap-12 text-sm font-medium text-white -mt-10">
          
          <div className="flex items-center gap-2 cursor-pointer hover:text-pink-300 transition-colors duration-300">
            <FiHash className="text-xl" />
            <span className="hidden sm:inline">About Us</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-pink-300 transition-colors duration-300">
            <FiMessageSquare className="text-xl" />
            <span className="hidden sm:inline">Guides</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-pink-300 transition-colors duration-300">
            <FiMessageCircle className="text-xl" />
            <span className="hidden sm:inline">example</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-pink-300 transition-colors duration-300">
            <MdPrivacyTip className="text-xl" />
            <span className="hidden sm:inline">Privacy Policy</span>
          </div>

        </div>

        {/*Texto de la parte inferior*/}
        <p className="text-xs text-gray-100 mt-2 text-center px-4">
          &copy; {new Date().getFullYear()} UmapyoiDB - Unofficial fan site for Umamusume: Pretty Derby - Built for the Umamusume community.
        </p>
        <p className="text-xs text-gray-100 text-center px-4">
          Umamusume: Pretty Derby is © Cygames, Inc. This site is not affiliated with or endorsed by Cygames.
        </p>
      </div>
    </footer>
  );
};

export default Footer;