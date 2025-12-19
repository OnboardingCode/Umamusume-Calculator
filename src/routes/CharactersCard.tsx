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
            <span className='border-2 border-[#FFDEF9] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma2}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1002)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#29BD70] rounded-lg bg-white'
            />
            <span className='border-2 border-[#FFCE48] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma3}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1003)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#3376D2] rounded-lg bg-white'
            />
            <span className='border-2 border-[#FF99D0] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma4}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1004)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EA504A] rounded-lg bg-white'
            />
            <span className='border-2 border-[#FFCD00] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma5}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1005)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#444745] rounded-lg bg-white'
            />
            <span className='border-2 border-[#33B839] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma6}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1006)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#3A7AD2] rounded-lg bg-white'
            />
            <span className='border-2 border-[#ECE7E7] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma7}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1007)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#DA3C57] rounded-lg bg-white'
            />
            <span className='border-2 border-[#E9DA36] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma8}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1008)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#D4C200] rounded-lg bg-white'
            />
            <span className='border-2 border-[#3DD1D7] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma9}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1009)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#4F64D8] rounded-lg bg-white'
            />
            <span className='border-2 border-[#E73472] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma10}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1010)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#73C032] rounded-lg bg-white'
            />
            <span className='border-2 border-[#FFAC42] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>




          <button 
            onClick={uma11}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1011)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#3A34AC] rounded-lg bg-white'
            />
            <span className='border-2 border-[#E3493F] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma12}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1012)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#2185D0] rounded-lg bg-white'
            />
            <span className='border-2 border-[#E6453A] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma13}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1013)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#00B5BE] rounded-lg bg-white'
            />
            <span className='border-2 border-[#DFC8E7] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma14}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1014)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#DD4E31] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EFDB28] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma15}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1015)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#F271C4] rounded-lg bg-white'
            />
            <span className='border-2 border-[#FBE415] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma16}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1016)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#75358C] rounded-lg bg-white'
            />
            <span className='border-2 border-[#D638A3] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma17}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1017)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#1C7763] rounded-lg bg-white'
            />
            <span className='border-2 border-[#C6314B] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma18}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1018)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#0092CB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#FAE053] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma19}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1019)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#F37F96] rounded-lg bg-white'
            />
            <span className='border-2 border-[#F9F189] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma20}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1020)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#65D283] rounded-lg bg-white'
            />
            <span className='border-2 border-[#F4DA40] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



          <button 
            onClick={uma21}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1021)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#3290D6] rounded-lg bg-white'
            />
            <span className='border-2 border-[#C6DAE7] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma22}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1022)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#20A95C] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EE5340] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma23}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1023)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#B03D81] rounded-lg bg-white'
            />
            <span className='border-2 border-[#E776B6] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma24}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1024)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#F57D38] rounded-lg bg-white'
            />
            <span className='border-2 border-[#FFC845] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma25}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1025)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#494541] rounded-lg bg-white'
            />
            <span className='border-2 border-[#E8DD4C] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma26}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1026)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE60A1] rounded-lg bg-white'
            />
            <span className='border-2 border-[#F0ED41] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma27}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1027)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#14BAAE] rounded-lg bg-white'
            />
            <span className='border-2 border-[#7C4D3A] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma28}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1028)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#208BCD] rounded-lg bg-white'
            />
            <span className='border-2 border-[#FA6F8B] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma29}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1029)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#AF7E51] rounded-lg bg-white'
            />
            <span className='border-2 border-[#C8D8EB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma30}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1030)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#384A86] rounded-lg bg-white'
            />
            <span className='border-2 border-[#CA3E6D] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>




          <button 
            onClick={uma31}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1031)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#F078C5] rounded-lg bg-white'
            />
            <span className='border-2 border-[#54AE1B] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma32}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1032)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#35B2B6] rounded-lg bg-white'
            />
            <span className='border-2 border-[#E2E868] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma33}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1033)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#3865A1] rounded-lg bg-white'
            />
            <span className='border-2 border-[#78D5E1] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma34}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1034)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#AE419E] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EC86D0] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma35}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1035)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#DD3D5B] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EDE233] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma36}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1036)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#2459B4] rounded-lg bg-white'
            />
            <span className='border-2 border-[#E1E000] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma37}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1037)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#3D3B3A] rounded-lg bg-white'
            />
            <span className='border-2 border-[#E33067] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma38}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1038)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#F86669] rounded-lg bg-white'
            />
            <span className='border-2 border-[#47423E] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma39}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1039)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#E146A7] rounded-lg bg-white'
            />
            <span className='border-2 border-[#00C7B1] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma40}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1040)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#245099] rounded-lg bg-white'
            />
            <span className='border-2 border-[#E63C5C] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



          <button 
            onClick={uma41}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1041)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#EE6FAB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#F2D4D7] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma42}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1042)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#B02D40] rounded-lg bg-white'
            />
            <span className='border-2 border-[#1690D4] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma43}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1043)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#63666A] rounded-lg bg-white'
            />
            <span className='border-2 border-[#6F2678] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma44}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1044)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#926DDA] rounded-lg bg-white'
            />
            <span className='border-2 border-[#BC204B] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma45}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1045)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#5693DA] rounded-lg bg-white'
            />
            <span className='border-2 border-[#C8C9C7] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma46}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1046)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#F8587B] rounded-lg bg-white'
            />
            <span className='border-2 border-[#403A35] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma47}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1047)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#5F9B26] rounded-lg bg-white'
            />
            <span className='border-2 border-[#F3EA5D] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma48}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1048)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#25B8AE] rounded-lg bg-white'
            />
            <span className='border-2 border-[#1C57B9] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma9}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1049)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#C0453F] rounded-lg bg-white'
            />
            <span className='border-2 border-[#236192] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma50}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1050)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#E575CE] rounded-lg bg-white'
            />
            <span className='border-2 border-[#F3DD6D] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



          <button 
            onClick={uma51}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1051)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#E26ECB] rounded-lg bg-white'
            />
            <span className='border-2 border-[#F6EB61] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma52}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1052)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#FA7395] rounded-lg bg-white'
            />
            <span className='border-2 border-[#EDE04B] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma53}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1053)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#366965] rounded-lg bg-white'
            />
            <span className='border-2 border-[#2D2926] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma54}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1054)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#E7396F] rounded-lg bg-white'
            />
            <span className='border-2 border-[#D162B8] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma55}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1055)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#CA46B0] rounded-lg bg-white'
            />
            <span className='border-2 border-[#B52542] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma56}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1056)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#3D89E9] rounded-lg bg-white'
            />
            <span className='border-2 border-[#F8A717] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma57}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1057)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#6FC346] rounded-lg bg-white'
            />
            <span className='border-2 border-[#FBE122] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma58}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1058)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#46449B] rounded-lg bg-white'
            />
            <span className='border-2 border-[#D64388] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma59}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1059)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#19B49E] rounded-lg bg-white'
            />
            <span className='border-2 border-[#6F3B42] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma60}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1060)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#28A959] rounded-lg bg-white'
            />
            <span className='border-2 border-[#B82720] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



          <button 
            onClick={uma61}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1061)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#0E9451] rounded-lg bg-white'
            />
            <span className='border-2 border-[#1C57A5] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma62}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1062)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#0f8dce] rounded-lg bg-white'
            />
            <span className='border-2 border-[#ee5b56] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma63}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1063)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#49b73f] rounded-lg bg-white'
            />
            <span className='border-2 border-[#c6d1d5] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma64}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1064)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#27c79c] rounded-lg bg-white'
            />
            <span className='border-2 border-[#865432] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma65}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1065)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#5b64d5] rounded-lg bg-white'
            />
            <span className='border-2 border-[#fbe247] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma66}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1066)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#1985d2] rounded-lg bg-white'
            />
            <span className='border-2 border-[#27b784] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma67}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1067)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#94bf01] rounded-lg bg-white'
            />
            <span className='border-2 border-[#f9eb39] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma68}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1068)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#5a6065] rounded-lg bg-white'
            />
            <span className='border-2 border-[#fc6d31] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma69}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1069)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#f9879d] rounded-lg bg-white'
            />
            <span className='border-2 border-[#f7dde2] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma70}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1070)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#248379] rounded-lg bg-white'
            />
            <span className='border-2 border-[#e3628c] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



          <button 
            onClick={uma71}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1071)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#28baa5] rounded-lg bg-white'
            />
            <span className='border-2 border-[#bfe4eb] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma72}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1072)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#da483a] rounded-lg bg-white'
            />
            <span className='border-2 border-[#ffda93] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma73}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1073)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#8F4DAC] rounded-lg bg-white'
            />
            <span className='border-2 border-[#F5CD47] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma74}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1074)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#45C5C1] rounded-lg bg-white'
            />
            <span className='border-2 border-[#9F5F54] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma75}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1075)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#79c6db] rounded-lg bg-white'
            />
            <span className='border-2 border-[#6c5953] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma76}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1076)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#f0638a] rounded-lg bg-white'
            />
            <span className='border-2 border-[#fecdc9] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma77}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1077)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#ea5bc0] rounded-lg bg-white'
            />
            <span className='border-2 border-[#8f3d7d] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma78}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1078)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#5192C1] rounded-lg bg-white'
            />
            <span className='border-2 border-[#AE4544] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma79}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1079)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#3f54bf] rounded-lg bg-white'
            />
            <span className='border-2 border-[#dd3543] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma80}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1080)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#13a9b0] rounded-lg bg-white'
            />
            <span className='border-2 border-[#f8475f] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>



            <button 
            onClick={uma81}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1081)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#d93842] rounded-lg bg-white'
            />
            <span className='border-2 border-[#293aab] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma82}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1082)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#ca3b61] rounded-lg bg-white'
            />
            <span className='border-2 border-[#32b5d6] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma83}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1083)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#12762f] rounded-lg bg-white'
            />
            <span className='border-2 border-[#292d45] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma84}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1084)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#dab610] rounded-lg bg-white'
            />
            <span className='border-2 border-[#173061] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma85}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1085)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#d2445d] rounded-lg bg-white'
            />
            <span className='border-2 border-[#6946a9] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma86}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1086)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#4bb6af] rounded-lg bg-white'
            />
            <span className='border-2 border-[#3c5161] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma87}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1087)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#CF4436] rounded-lg bg-white'
            />
            <span className='border-2 border-[#E1DCCB] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma88}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1088)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#21713A] rounded-lg bg-white'
            />
            <span className='border-2 border-[#F3F19D] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma89}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1089)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#64C3C1] rounded-lg bg-white'
            />
            <span className='border-2 border-[#1E3872] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma90}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1090)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#4747cc] rounded-lg bg-white'
            />
            <span className='border-2 border-[#84c6e7] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

            <button 
            onClick={uma91}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1091)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#404fb1] rounded-lg bg-white'
            />
            <span className='border-2 border-[#84d4e3] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma92}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1092)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#e97d97] rounded-lg bg-white'
            />
            <span className='border-2 border-[#119d76] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma93}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1093)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#85aae1] rounded-lg bg-white'
            />
            <span className='border-2 border-[#ebd64a] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

         <button 
            onClick={uma94}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1094)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#6ac43c] rounded-lg bg-white'
            />
            <span className='border-2 border-[#e6d734] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          
          <button 
            onClick={uma95}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1095)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#4baece] rounded-lg bg-white'
            />
            <span className='border-2 border-[#c63663] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma96}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1096)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#cb243e] rounded-lg bg-white'
            />
            <span className='border-2 border-[#9ad2f5] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma97}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1097)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#d83a43] rounded-lg bg-white'
            />
            <span className='border-2 border-[#6fbbf1] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
          <button 
            onClick={uma98}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1098)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#eeb42a] rounded-lg bg-white'
            />
            <span className='border-2 border-[#d93c49] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma99}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1099)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#d94149] rounded-lg bg-white'
            />
            <span className='border-2 border-[#cddee0] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>

          <button 
            onClick={uma100}
            className='relative w-[181px] h-[238px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'
          >
            <img 
              src={cardImages.find(card => card.id === 1100)?.banner.replace('public/', '/')} 
              alt="Special Week" 
              className='absolute inset-0 w-full h-full object-cover border-4 border-[#d85081] rounded-lg bg-white'
            />
            <span className='border-2 border-[#d8d2d9] bg-white rounded-lg  absolute bottom-2 left-2 right-2 text-black font-bold text-m text-center'>Special Week</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharactersCard