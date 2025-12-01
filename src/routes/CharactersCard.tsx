import { useNavigate } from 'react-router';

const CharactersCard = () => {
  // Hook para navegación programática entre rutas
  const navigate = useNavigate();

  // Función para manejar la navegación al personaje A (ID: 10372)
  const uma1 = () => {
    navigate('/character?id=10372');
  };

  // Función para manejar la navegación al personaje B (ID: 5179)
  const uma2 = () => {
    navigate('/character?id=5179');
  };

  return (
    <div className='min-h-screen bg-slate-50 w-full flex items-center justify-center'>
      <div className='flex flex-col items-center max-w-3xl gap-8'>
        <h1 className='text-6xl font-bold text-black text-center mt-20'>Characters</h1>
        
        {/* Contenedor de botones para seleccionar personajes */}
        <div className='flex gap-6 mt-8'>
          {/* Botón A - Navega al personaje ID 10372 */}
          <button 
            onClick={uma1}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg'
          >
           Calstone Light O (ID: 10372)
          </button>
          
          {/* Botón B - Navega al personaje ID 5179 */}
          <button 
            onClick={uma2}
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg'
          >
            Agnes Tachyon (ID: 5179)
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharactersCard