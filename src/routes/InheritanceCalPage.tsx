{/* 1 stars = 5 points
    2 stars = 12 points
    3 stars = 21 points*/}

    /* ––
* –––– Imports
 * –––––––––––––––––––––––––––––––––– */

//Globals Imports
import { useState } from "react";



const InheritanceCalPage = () => {

  //Parent 1 stats
  const [p1Speed, setp1Speed] = useState("0");
  const [p1Stamina, setp1Stamina] = useState("0");
  const [p1Power, setp1Power] = useState("0");
  const [p1Guts, setp1Guts] = useState("0");
  const [p1Wit, setp1Wit] = useState("0");

  //Grandparent 1 stats
  const [gp1Speed, setgp1Speed] = useState("0");
  const [gp1Stamina, setgp1Stamina] = useState("0");
  const [gp1Power, setgp1Power] = useState("0");
  const [gp1Guts, setgp1Guts] = useState("0");
  const [gp1Wit, setgp1Wit] = useState("0");

  //Grandparent 2 stats
  const [gp2Speed, setgp2Speed] = useState("0");
  const [gp2Stamina, setgp2Stamina] = useState("0");
  const [gp2Power, setgp2Power] = useState("0");
  const [gp2Guts, setgp2Guts] = useState("0");
  const [gp2Wit, setgp2Wit] = useState("0");

  //Parent 2 stats
  const [p2Speed, setp2Speed] = useState("0");
  const [p2Stamina, setp2Stamina] = useState("0");
  const [p2Power, setp2Power] = useState("0");
  const [p2Guts, setp2Guts] = useState("0");
  const [p2Wit, setp2Wit] = useState("0");

  //Grandparent 3 stats
  const [gp3Speed, setgp3Speed] = useState("0");
  const [gp3Stamina, setgp3Stamina] = useState("0");
  const [gp3Power, setgp3Power] = useState("0");
  const [gp3Guts, setgp3Guts] = useState("0");
  const [gp3Wit, setgp3Wit] = useState("0");

  //Grandparent 4 stats
  const [gp4Speed, setgp4Speed] = useState("0");
  const [gp4Stamina, setgp4Stamina] = useState("0");
  const [gp4Power, setgp4Power] = useState("0");
  const [gp4Guts, setgp4Guts] = useState("0");
  const [gp4Wit, setgp4Wit] = useState("0");




  const getSparkPoints = (value: string): number => {
    const num = parseInt(value);
    if (num === 1) return 5;
    if (num === 2) return 12;
    if (num === 3) return 21;

    return 0;
  }

/*
 const rawP1Speed = getSparkPoints(p1Speed);
 const rawP1Stamina = getSparkPoints(p1Stamia);
 const rawP1Power = getSparkPoints(p1Power);
 const rawP1Guts = getSparkPoints(p1Guts);
 const rawP1Wit = getSparkPoints(p1Wit);

 console.log(`Raw speed: ${rawP1Speed}`);
  console.log(`Raw power: ${rawP1Power}`);

  const total = rawP1Speed + rawP1Power;

  console.log(`Raw total sum ${total}`);
  */

  return (
    <div className="relative min-h-screen w-full bg-[#000000] overflow-hidden justify-center">
  
        <div className="absolute top-[50%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[900px] bg-[#1393fb] rounded-full filter blur-[260px] opacity-20"></div>

        <div className="absolute top-[50%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[900px] bg-[#e316c8] rounded-full filter blur-[260px] opacity-15"></div>

        <div className="items-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-1 mt-50 pb-9 pt-4">
          <div className="grid grid-cols-4 grid-rows-[auto_1fr_auto] gap-x-6 gap-y-2">
          <div className="col-span-4 col-start-1 m-25 -mt-29">
            <div className="text-center">
              <h1 className="font-nunito text-4xl font-semibold mb-6 text-white">Legacy Inheritance Spark Calculator</h1>
              <p className="text-xl mb-2 font-semibold text-gray-500">Calculate the exact stats bonus from legacy for your Uma </p>
            </div>
          </div>
          <div className="col-span-2 row-span-2 col-start-1 row-start-2">

            <div className="relative z-10 w-full max-w-3xl bg-white/5 border border-[#1393fb]/90 rounded-2xl p-8 backdrop-blur-xl shadow-2xl mb-3">
              <h1 className="text-white text-3xl font-bold tracking-wide border-b border-white/10 pb-4 mb-6">
                Parent 1 Sparks
              </h1>
              <p className="text-white mb-6">1 = 5 points, 2 = 12 points, 3 = 21 points</p>
               <div className="grid grid-cols-5 gap-2">
                <div className="text-center">
                   <label className="text-xs text-white block mb-1 capitalize">Speed</label>
                   <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p1Speed} onChange={(e) => setp1Speed(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(p1Speed)}
                   </h1>
                </div>

                <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Stamina</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p1Stamina} onChange={(e) => setp1Stamina(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(p1Stamina)}
                  </h1>
              </div>

               <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Power</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p1Power} onChange={(e) => setp1Power(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                    <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(p1Power)}
                    </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Guts</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p1Guts} onChange={(e) => setp1Guts(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(p1Guts)}
                  </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Wit</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p1Wit} onChange={(e) => setp1Wit(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(p1Wit)}
                  </h1>
              </div>



               </div>


               
              
            </div>      

            <div className="relative z-10 w-full max-w-3xl bg-white/5 border border-[#1162a5]/40 rounded-2xl p-8 backdrop-blur-xl shadow-2xl mb-3">
              <h1 className="text-white text-3xl font-bold tracking-wide border-b border-white/10 pb-4 mb-6">
                Grandarent 1 Sparks
              </h1>
              <p className="text-white mb-6">1 = 5 points, 2 = 12 points, 3 = 21 points</p>
               <div className="grid grid-cols-5 gap-2">
                <div className="text-center">
                   <label className="text-xs text-white block mb-1 capitalize">Speed</label>
                   <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp1Speed} onChange={(e) => setgp1Speed(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp1Speed)}
                </h1>
                </div>

                <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Stamina</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp1Stamina} onChange={(e) => setgp1Stamina(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp1Stamina)}
                  </h1>
              </div>

               <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Power</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp1Power} onChange={(e) => setgp1Power(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                    <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                      +{getSparkPoints(gp1Power)}
                    </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Guts</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp1Guts} onChange={(e) => setgp1Guts(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp1Guts)}
                  </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Wit</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp1Wit} onChange={(e) => setgp1Wit(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp1Wit)}
                  </h1>
              </div>



               </div>


               
              
            </div>  

            <div className="relative z-10 w-full max-w-3xl bg-white/5 border border-[#1393fb]/40 rounded-2xl p-8 backdrop-blur-xl shadow-2xl mb-3">
              <h1 className="text-white text-3xl font-bold tracking-wide border-b border-white/10 pb-4 mb-6">
                Grandarent 2 Sparks
              </h1>
              <p className="text-white mb-6">1 = 5 points, 2 = 12 points, 3 = 21 points</p>
               <div className="grid grid-cols-5 gap-2">
                <div className="text-center">
                   <label className="text-xs text-white block mb-1 capitalize">Speed</label>
                   <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp2Speed} onChange={(e) => setgp2Speed(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp2Speed)}
                </h1>
                </div>

                <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Stamina</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp2Stamina} onChange={(e) => setgp2Stamina(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp2Stamina)}
                  </h1>
              </div>

               <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Power</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp2Power} onChange={(e) => setgp2Power(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                    <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                      +{getSparkPoints(gp2Power)}
                    </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Guts</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp2Guts} onChange={(e) => setgp2Guts(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp2Guts)}
                  </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Wit</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-sky-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp2Wit} onChange={(e) => setgp2Wit(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp2Wit)}
                  </h1>
              </div>



               </div>


               
              
            </div>  
            




            <div className="relative z-10 w-full max-w-3xl bg-white/5 border border-[#e316c8]/90 rounded-2xl p-8 backdrop-blur-xl shadow-2xl mb-3">
              <h1 className="text-white text-3xl font-bold tracking-wide border-b border-white/10 pb-4 mb-6">
                Parent 2 Sparks
              </h1>
              <p className="text-white mb-6">1 = 5 points, 2 = 12 points, 3 = 21 points</p>
               <div className="grid grid-cols-5 gap-2">
                <div className="text-center">
                   <label className="text-xs text-white block mb-1 capitalize">Speed</label>
                   <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p2Speed} onChange={(e) => setp2Speed(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(p2Speed)}
                   </h1>
                </div>

                <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Stamina</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p2Stamina} onChange={(e) => setp2Stamina(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(p2Stamina)}
                  </h1>
              </div>

               <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Power</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p2Power} onChange={(e) => setp2Power(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                    <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(p2Power)}
                    </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Guts</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p2Guts} onChange={(e) => setp2Guts(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(p2Guts)}
                  </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Wit</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p2Wit} onChange={(e) => setp2Wit(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(p2Wit)}
                  </h1>
              </div>



               </div>


               
              
            </div>      



            <div className="relative z-10 w-full max-w-3xl bg-white/5 border border-[#e316c8]/40 rounded-2xl p-8 backdrop-blur-xl shadow-2xl mb-3">
              <h1 className="text-white text-3xl font-bold tracking-wide border-b border-white/10 pb-4 mb-6">
                Grandarent 3 Sparks
              </h1>
              <p className="text-white mb-6">1 = 5 points, 2 = 12 points, 3 = 21 points</p>
               <div className="grid grid-cols-5 gap-2">
                <div className="text-center">
                   <label className="text-xs text-white block mb-1 capitalize">Speed</label>
                   <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp3Speed} onChange={(e) => setgp3Speed(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp3Speed)}
                </h1>
                </div>

                <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Stamina</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp3Stamina} onChange={(e) => setgp3Stamina(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp3Stamina)}
                  </h1>
              </div>

               <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Power</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp3Power} onChange={(e) => setgp3Power(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                    <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                      +{getSparkPoints(gp3Power)}
                    </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Guts</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp3Guts} onChange={(e) => setgp3Guts(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp3Guts)}
                  </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Wit</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp3Wit} onChange={(e) => setgp3Wit(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp3Wit)}
                  </h1>
              </div>



               </div>


               
              
            </div>  

            <div className="relative z-10 w-full max-w-3xl bg-white/5 border border-[#e316c8]/40 rounded-2xl p-8 backdrop-blur-xl shadow-2xl mb-3">
              <h1 className="text-white text-3xl font-bold tracking-wide border-b border-white/10 pb-4 mb-6">
                Grandarent 4 Sparks
              </h1>
              <p className="text-white mb-6">1 = 5 points, 2 = 12 points, 3 = 21 points</p>
               <div className="grid grid-cols-5 gap-2">
                <div className="text-center">
                   <label className="text-xs text-white block mb-1 capitalize">Speed</label>
                   <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pinpink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp4Speed} onChange={(e) => setgp4Speed(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp4Speed)}
                </h1>
                </div>

                <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Stamina</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pinpink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp4Stamina} onChange={(e) => setgp4Stamina(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp4Stamina)}
                  </h1>
              </div>

               <div className="text-center">
                  <label className="text-xs text-white block mb-1 capitalize">Power</label>
                    <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pinpink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp4Power} onChange={(e) => setgp4Power(e.target.value)}>
                      <option value="0">-</option>
                      <option value="1">★</option>
                      <option value="2">★★</option>
                      <option value="3">★★★</option>
                    </select>
                    <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                      +{getSparkPoints(gp4Power)}
                    </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Guts</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pinpink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp4Guts} onChange={(e) => setgp4Guts(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp4Guts)}
                  </h1>
              </div>


              <div className="text-center">
                <label className="text-xs text-white block mb-1 capitalize">Wit</label>
                  <select id="parent1-speed" className="stat-selector w-full px-2 py-1 border border-pinpink-300 rounded text-sm text-white bg-gray-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp4Wit} onChange={(e) => setgp4Wit(e.target.value)}>
                    <option value="0">-</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                  </select>
                  <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-white stat-bonus">
                    +{getSparkPoints(gp4Wit)}
                  </h1>
              </div>



               </div>


               
              
            </div>  












          </div>
          <div className="col-span-2 col-start-3 row-start-2">3
            <div className="relative z-10 w-full max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
              <h1 className="text-white text-3xl font-bold tracking-wide border-b border-white/10 pb-4 mb-6">
                Total Stats Bonus
              </h1>
              <p className="text-gray-300 mb-6">1 = 5 points, 2 = 12 points, 3 = 21 points</p>
   
            </div>      

          </div>
          <div className="col-span-2 col-start-3 row-start-3">4</div>
        </div>
      </div>
        
    </div>
  );



};
export default InheritanceCalPage;