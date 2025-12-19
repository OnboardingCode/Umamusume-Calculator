import cardImages from '../card-imgs.json';
import { useUmaNavigation } from '../services/character_navigation';
//NOTA: Los IDs de las Umas, son los game_id en la API

const CharactersCard = () => {
  // Hook para navegación programática entre rutas
  
  const {
    uma1, uma2, uma3, uma4, uma5, uma6, uma7, uma8, uma9, uma10,
    uma11, uma12, uma13, uma14, uma15, uma16, uma17, uma18, uma19, uma20,
    uma21, uma22, uma23, uma24, uma25, uma26, uma27, uma28, uma29, uma30,
    uma31, uma32, uma33, uma34, uma35, uma36, uma37, uma38, uma39, uma40,
    uma41, uma42, uma43, uma44, uma45, uma46, uma47, uma48, uma49, uma50,
    uma51, uma52, uma53, uma54, uma55, uma56, uma57, uma58, uma59, uma60,
    uma61, uma62, uma63, uma64, uma65, uma66, uma67, uma68, uma69, uma70,
    uma71, uma72, uma73, uma74, uma75, uma76, uma77, uma78, uma79, uma80,
    uma81, uma82, uma83, uma84, uma85, uma86, uma87, uma88, uma89, uma90,
    uma91, uma92, uma93, uma94, uma95, uma96, uma97, uma98, uma99, uma100

  } = useUmaNavigation();

  // Función para manejar la navegación al personaje A (ID: 10372)
  
  return (
    <div className='min-h-screen bg-slate-50 w-full flex items-center justify-center'>
      <div className='flex flex-col items-center max-w-6xl gap-8'>
        <h1 className='text-6xl font-bold text-black text-center mt-20'>Characters</h1>
        
        {/* Contenedor de botones para seleccionar personajes */}
        <div className=' gap-8 mt-3 grid grid-cols-6 p-4 '>

          <button 
            onClick={uma1}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1001)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma2}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1002)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Silence Suzuka</span>
          </button>

          <button 
            onClick={uma3}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1003)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma4}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1004)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma5}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1005)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma6}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1006)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma7}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1007)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma8}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1008)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma9}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1009)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma10}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1010)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>




          <button 
            onClick={uma11}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1011)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma12}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1012)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma13}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1013)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma14}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1014)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma15}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1015)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma16}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1016)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma17}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1017)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma18}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1018)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma19}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1019)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma20}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1020)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



          <button 
            onClick={uma21}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1021)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma22}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1022)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma23}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1023)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma24}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1024)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma25}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1025)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma26}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1026)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma27}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1027)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma28}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1028)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma29}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1029)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma30}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1030)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>




          <button 
            onClick={uma31}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1031)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma32}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1032)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma33}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1033)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma34}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1034)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma35}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1035)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma36}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1036)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma37}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1037)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma38}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1038)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma39}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1039)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma40}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1040)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



          <button 
            onClick={uma41}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1041)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma42}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1042)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma43}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1043)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma44}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1044)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma45}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1045)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma46}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1046)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma47}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1047)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma48}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1048)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma9}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1049)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma50}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1050)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



          <button 
            onClick={uma51}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1051)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma52}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1052)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma53}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1053)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma54}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1054)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma55}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1055)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma56}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1056)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma57}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1057)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma58}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1058)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma59}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1059)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma60}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1060)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



          <button 
            onClick={uma61}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1061)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma62}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1062)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma63}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1063)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma64}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1064)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma65}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1065)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma66}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1066)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma67}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1067)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma68}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1068)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma69}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1069)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma70}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1070)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



          <button 
            onClick={uma71}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1071)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma72}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1072)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma73}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1073)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma74}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1074)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma75}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1075)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma76}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1076)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma77}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1077)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma78}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1078)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma79}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1079)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma80}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1080)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



            <button 
            onClick={uma81}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1081)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma82}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1082)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma83}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1083)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma84}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1084)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma85}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1085)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma86}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1086)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma87}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1087)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma88}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1088)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma89}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1089)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma90}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1090)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

            <button 
            onClick={uma91}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1091)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma92}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1092)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma93}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1093)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma94}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1094)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma95}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1095)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma96}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1096)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma97}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1097)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma98}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1098)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma99}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1099)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma100}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1100)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6DCB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE6DCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharactersCard