import { useEffect } from 'react';
import { useNavigate } from 'react-router'; 
//llamado de los datos de la API
import { getCharacterData, updateCharacterDOM } from '../services/api';



const CharactersInfo = () => {
  // Hook para navegación de vuelta
  const navigate = useNavigate();

  // useEffect para cargar los datos cuando el componente se monta
  useEffect(() => {
    // Obtener el ID de la URL usando URLSearchParams
    const urlParams = new URLSearchParams(window.location.search);
    const umaId = urlParams.get('id') || '10372'; // Por defecto 10372

    // Usar la función importada de api.ts
    getCharacterData(umaId)
      .then(data => {
        // Usar la función importada para actualizar el DOM
        updateCharacterDOM(data);
      })
      .catch(error => console.log('Error en CharactersInfo:', error));
  }, []); // Array vacío para que solo se ejecute una vez

  // Función para volver a la página de selección de personajes
  const goBack = () => {
    navigate('/characters');
  };

  return (
    
    <div className="min-h-screen bg-slate-50 w-full p-8">
      <div className="max-w-4xl mx-auto">
        {/* Botón para volver */}
        <button
          onClick={goBack}
          className="mb-6 mt-9 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors ">
          Volver a Personajes</button>

        {/* Información del personaje */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Información del Personaje
          </h1>
          
          <h1 className="text-2xl font-semibold mb-4">Uma:</h1>
          <h2 id="enUmaDiplayName" className="text-lg mb-2 text-blue-600"></h2>
          <h2 id="jpUmaDiplayName" className="text-lg mb-4 text-green-600"></h2>
          <h2 id= "UmaFacts" className='text-lg mb-6 text-black-600'></h2>
          <img id="umaImg" className="max-w-xs rounded-lg shadow-md" alt="Uma Character" />
        </div>
      </div>
    </div>
  );
};

export default CharactersInfo;