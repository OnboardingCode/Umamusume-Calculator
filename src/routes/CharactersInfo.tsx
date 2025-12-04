import { useEffect } from 'react';
import { useNavigate } from 'react-router'; 
//llamado de los datos de la API
import { getCharacterData, updateCharacterDOM, getCharacterOutfits, updateOutfitsDOM } from '../services/info_api';



const CharactersInfo = () => {
  // Hook para navegación de vuelta
  const navigate = useNavigate();

  // useEffect para cargar los datos cuando el componente se monta
  useEffect(() => {
    // Obtener el ID de la URL usando URLSearchParams
    const urlParams = new URLSearchParams(window.location.search);
    const umaId = urlParams.get('id') || '10372'; // Por defecto 10372

    // Usar la función importada de api.ts para obtener datos del personaje
    getCharacterData(umaId)
      .then(data => {
        // Usar la función importada para actualizar el DOM
        updateCharacterDOM(data);
      })
      .catch(error => console.log('Error en CharactersInfo:', error));

    // Obtener y mostrar las imágenes de outfits
    getCharacterOutfits(umaId)
      .then(outfits => {
        updateOutfitsDOM(outfits);
      })
      .catch(error => console.log('Error al cargar outfits:', error));
  }, []); // Array vacío para que solo se ejecute una vez

  // Función para volver a la página de selección de personajes
  const goBack = () => {
    navigate('/characters');
  };

  return (
    
    <div className=" min-h-screen bg-slate-50 w-full p-8">
      <div className="max-w-4xl mx-auto">
        {/* Botón para volver */}
        <button
          onClick={goBack}
          className="mb-6 mt-9 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors ">
          Back to characters</button>

        {/* Información del personaje */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Uma Profile
          </h1>
          
          <h1 className="text-2xl font-semibold mb-4">General Information:</h1>
          <h2 id="enUmaDiplayName" className="text-lg mb-2 text-blue-600"></h2>
          <h2 id="jpUmaDiplayName" className="text-lg mb-4 text-green-600"></h2>
          <h2 id= "UmaFacts" className='text-lg mb-6 text-black-600'></h2>

          <img id="umaImg" className="max-w-xs rounded-lg shadow-md" alt="Uma Character" />

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Galery:</h2>
            <div className="flex gap-4 flex-wrap">
              
              <img id='umaOutfit_1' className="rounded-lg shadow-md" width="150" height="150" loading="lazy" style={{ imageRendering: "crisp-edges" }}/>
              <img id='umaOutfit_2' className="rounded-lg shadow-md" width="150" height="150" loading="lazy" style={{ imageRendering: "crisp-edges" }}/>
              <img id='umaOutfit_3' className="rounded-lg shadow-md" width="150" height="150" loading="lazy" style={{ imageRendering: "crisp-edges" }}/>
            </div>
            <br /> <h3>Uniform</h3>
             <h3>Uniform</h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CharactersInfo;