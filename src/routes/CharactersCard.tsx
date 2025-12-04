import { useNavigate } from 'react-router';

//NOTA: Los IDs de las Umas, son los game_id en la API

const CharactersCard = () => {
  // Hook para navegación programática entre rutas
  const navigate = useNavigate();

  // Función para manejar la navegación al personaje A (ID: 10372)
  const uma1 = () => {
    navigate('/character?id=1120');
  };

  // Función para manejar la navegación al personaje B (ID: 1032)
  const uma2 = () => {
    navigate('/character?id=1032');
  };

  const uma3 = () => {
    navigate('/character?id=1019')
  }

  return (
    <div className='min-h-screen bg-slate-50 w-full flex items-center justify-center'>
      <div className='flex flex-col items-center max-w-3xl gap-8'>
        <h1 className='text-6xl font-bold text-black text-center mt-20'>Characters</h1>
        
        {/* Contenedor de botones para seleccionar personajes */}
        <div className='flex gap-4 mt-8 grid-cols-6 grid-rows-27 '>

          <button 
            onClick={uma1}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg'
          >
           Calstone Light O (game ID: 1120)
          </button>
          
          <button 
            onClick={uma2}
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg'
          >
            Agnes Tachyon (game ID: 1032)
          </button>

          <button 
            onClick={uma3}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg'
          >
            Agnes Digital (game ID: 1019)
          </button>

          
        </div>
      </div>
    </div>
  )
}

export default CharactersCard