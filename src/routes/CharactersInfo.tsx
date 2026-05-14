import { useNavigate } from 'react-router';
import characterData from '../data/character_data.json';

interface Character {
  id: number;
  nameEN: string;
  nameJP: string;
  images: {
    banner: string;
    main: string;
    racewear: string;
  };
  stats: {
    speed: number;
    stamina: number;
    power: number;
    guts: number;
    wit: number;
  };
  Track: { Turf: string; Dirt: string };
  Distance: { sprint: string; mile: string; medium: string; long: string };
  Style: { front: string; pace: string; late: string; end: string };
  'Growth Rate': {
    'growth-speed': string;
    'growth-stamina': string;
    'growth-power': string;
    'growth-guts': string;
    'growth-wit': string;
  };
  Details: {
    intro: string
    birthday: string;
    height: string;
    measurement1: string;
    measurement2: string;
    measurement3: string;
    weight: string;
    grade: string;
    residence: string;
    likes: string;
    dislikes: string;
    earsFact: string;
    tailFact: string;
    shoeSizeL: string;
    shoeSizeR: string;
    familyFact: string;
  };
}

const CharactersInfo = () => {
  // Hook para navegación de vuelta
  const navigate = useNavigate();

  // Obtener el personaje directamente desde el JSON local
  const urlParams = new URLSearchParams(window.location.search);
  const umaId = urlParams.get('id') || '1001';
  const character = (characterData as Character[]).find(c => c.id === Number(umaId)) ?? null;

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
          <h2 className="text-xl mb-2 text-black-600">{character?.nameJP}</h2>
          <h2 className="text-xl mb-2 text-black-600">{character?.nameEN}</h2>
          <h2 className="text-xl mb-4 text-black-600">ID: {character?.id}</h2>
          <h2 className="text-xl mb-4 text-black-600">Details:</h2>
          <h2 className="text-xl mb-4 text-black-600">Birthday: {character?.Details.birthday}</h2>

          <img
            src={character?.images.main.replace('public/', '/')}
            className="max-w-xs rounded-lg shadow-md"
            alt="Uma Character"
          />

          {/* Stats */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Stats:</h2>
            <div className="flex gap-8 flex-wrap">
              <div><span className="font-semibold">Speed:</span> {character?.stats.speed}</div>
              <div><span className="font-semibold">Stamina:</span> {character?.stats.stamina}</div>
              <div><span className="font-semibold">Power:</span> {character?.stats.power}</div>
              <div><span className="font-semibold">Guts:</span> {character?.stats.guts}</div>
              <div><span className="font-semibold">Wit:</span> {character?.stats.wit}</div>
            </div>
          </div>

          {/* Track */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Track:</h2>
            <div className="flex gap-8 flex-wrap">
              <div><span className="font-semibold">Turf:</span> {character?.Track.Turf}</div>
              <div><span className="font-semibold">Dirt:</span> {character?.Track.Dirt}</div>
            </div>
          </div>

          {/* Distance */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Distance:</h2>
            <div className="flex gap-8 flex-wrap">
              <div><span className="font-semibold">Sprint:</span> {character?.Distance.sprint}</div>
              <div><span className="font-semibold">Mile:</span> {character?.Distance.mile}</div>
              <div><span className="font-semibold">Medium:</span> {character?.Distance.medium}</div>
              <div><span className="font-semibold">Long:</span> {character?.Distance.long}</div>
            </div>
          </div>

          {/* Style */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Style:</h2>
            <div className="flex gap-8 flex-wrap">
              <div><span className="font-semibold">Front:</span> {character?.Style.front}</div>
              <div><span className="font-semibold">Pace:</span> {character?.Style.pace}</div>
              <div><span className="font-semibold">Late:</span> {character?.Style.late}</div>
              <div><span className="font-semibold">End:</span> {character?.Style.end}</div>
            </div>
          </div>

          {/* Growth Rate */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Growth Rate:</h2>
            <div className="flex gap-8 flex-wrap">
              <div><span className="font-semibold">Speed:</span> {character?.['Growth Rate']['growth-speed']}</div>
              <div><span className="font-semibold">Stamina:</span> {character?.['Growth Rate']['growth-stamina']}</div>
              <div><span className="font-semibold">Power:</span> {character?.['Growth Rate']['growth-power']}</div>
              <div><span className="font-semibold">Guts:</span> {character?.['Growth Rate']['growth-guts']}</div>
              <div><span className="font-semibold">Wit:</span> {character?.['Growth Rate']['growth-wit']}</div>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Galery:</h2>
            <div className="flex gap-4 flex-wrap">
              <img
                src={character?.images.banner.replace('public/', '/')}
                className="rounded-lg shadow-md"
                width="150"
                height="150"
                loading="lazy"
                style={{ imageRendering: "crisp-edges" }}
              />
              <img
                src={character?.images.racewear.replace('public/', '/')}
                className="rounded-lg shadow-md"
                width="150"
                height="150"
                loading="lazy"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersInfo;