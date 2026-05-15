import { useNavigate } from 'react-router';
import characterData from '../data/character_data.json';

interface Character {
  gameId: number;
  category: string;
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
    intro: string;
    description: string;
    voiceActor: string;
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
  const umaId = urlParams.get('gameId') || '1001';
  const character = (characterData as Character[]).find(c => c.gameId === Number(umaId)) ?? null;
  console.log(umaId);

  // Función para volver a la página de selección de personajes
  const goBack = () => {
    navigate('/characters');
  };

  return (
    
    <div className="relative min-h-screen w-full bg-[#000000] overflow-hidden justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="absolute top-[50%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-300 h-225 bg-[#1393fb] rounded-full filter blur-[260px] opacity-20"></div>
        <div className="absolute top-[50%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-300 h-225 bg-[#e316c8] rounded-full filter blur-[260px] opacity-15"></div>
        
         <div className="items-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-1 mt-20 pb-25 pt-4">
           <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl shadow-2xl">
            <div className="text-center">
              <h1 className="font-nunito text-4xl font-semibold mb-6 text-white">{character?.nameEN}</h1>
              <p className="text-xl mb-2 font-semibold text-gray-500">{character?.nameJP}</p>
            </div>
           </div>
         </div>
          {/*Col 1 main IMG and Stats
            Col 2 Character Data*/}
         <div className="grid grid-cols-2 grid-rows-1">
          <div className="col-start-1">
            <div className="relative w-full min-w-150 right-100 bg-white/5 border border-[#1393fb]/90 rounded-2xl p-6 min-h-200 backdrop-blur-xl shadow-2xl mb-3 ">
              <div>
                <h1 className=" text-center font-nunito text-4xl font-semibold mb-6 text-white">Charapter Images</h1>
                <img src={character?.images.main.replace('public/', '/')} className="relative max-w-75 rounded-lg  left-33" alt="Uma Character"/></div>
                <div className="h-1 rounded-2xl bg-blue-500 w-full my-6"></div>
                 <h1 className=" text-center font-nunito text-4xl font-semibold mb-6 text-white">Profile</h1>
                <div>
                  <div className="flex gap-13 flex-wrap">
                    <p className='font-semibold text-white'>"{character?.Details.intro}"</p>



                  </div>
                </div>

            </div>
          </div>




          <div className="col-start-2">
            <div className="relative w-full min-w-250 right-45 bg-white/5 border border-[#1393fb]/90 rounded-2xl p-6 min-h-200 backdrop-blur-xl shadow-2xl mb-3 ">
            <h1 className=" text-center font-nunito text-4xl font-semibold mb-6 text-white">Stats</h1>
                <div>
                  <div className="flex gap-13 flex-wrap">
                    <p className='font-semibold text-xl text-white'>Speed: {character?.stats.speed}</p>
                    <p className='font-semibold text-xl text-white'>Stamina: {character?.stats.stamina}</p>
                    <p className='font-semibold text-xl text-white'>Power: {character?.stats.power}</p>
                    <p className='font-semibold text-xl text-white'>Guts: {character?.stats.guts}</p>
                    <p className='font-semibold text-xl text-white'>Wit: {character?.stats.wit}</p>

                  </div>
                </div>
            </div>
            
          </div>
         </div>
        
       



      </div>
    </div>
  );
};

export default CharactersInfo;