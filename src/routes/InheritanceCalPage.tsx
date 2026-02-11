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


 const rawP1Speed = getSparkPoints(p1Speed);
 const rawP1Power = getSparkPoints(p1Power);

 console.log(`Raw speed: ${rawP1Speed}`);
  console.log(`Raw power: ${rawP1Power}`);

  const total = rawP1Speed + rawP1Power;

  console.log(`Raw total sum ${total}`);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"> 
    {/* Contenido*/}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mt-25">
          <h1 className="font-nunito text-4xl font-semibold mb-4">Inheritance Calculator</h1>
          <p className="text-xl mb-4 font-semibold text-gray-500"> Legacy inheritance stats </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">Legacy Sources</h2>
          <div className="bg-white rounded-lg shadow-md p-4 border-2 border-[#25b3f2]">
            <h3 className="font-medium mb-3 flex items-center justify-between">Parent 1
              <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-2xl bg-sky-400 text-black"> Primary</span>
            </h3>
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Speed</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p1Speed} onChange={(e) => setp1Speed(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(p1Speed)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Stamina</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p1Stamina} onChange={(e) => setp1Stamina(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(p1Stamina)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Power</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p1Power} onChange={(e) => setp1Power(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(p1Power)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Guts</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p1Guts} onChange={(e) => setp1Guts(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(p1Guts)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Wit</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={p1Wit} onChange={(e) => setp1Wit(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(p1Wit)}
            </h1>
              </div>
            </div>
          </div>




          <div className="bg-white rounded-lg shadow-md p-4 border-2 border-[#9fd2e7]">
            <h3 className="font-medium mb-3 flex items-center justify-between">Grandarent 1
              <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-2xl bg-sky-400 text-black">Secundary</span>
            </h3>
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Speed</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp1Speed} onChange={(e) => setgp1Speed(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp1Speed)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Stamina</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp1Stamina} onChange={(e) => setgp1Stamina(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp1Stamina)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Power</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp1Power} onChange={(e) => setgp1Power(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp1Power)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Guts</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp1Guts} onChange={(e) => setgp1Guts(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp1Guts)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Wit</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp1Wit} onChange={(e) => setgp1Wit(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp1Wit)}
            </h1>
              </div>
            </div>
          </div>



          <div className="bg-white rounded-lg shadow-md p-4 border-2 border-[#9fd2e7]">
            <h3 className="font-medium mb-3 flex items-center justify-between">Grandparent 2
              <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-2xl bg-sky-400 text-black">Secundary</span>
            </h3>
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Speed</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp2Speed} onChange={(e) => setgp2Speed(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp2Speed)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Stamina</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp2Stamina} onChange={(e) => setgp2Stamina(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp2Stamina)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Power</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp2Power} onChange={(e) => setgp2Power(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp2Power)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Guts</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp2Guts} onChange={(e) => setgp2Guts(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp2Guts)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Wit</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp2Wit} onChange={(e) => setgp2Wit(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp2Wit)}
            </h1>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-md p-4 border-2 border-[#ff66a2]">
            <h3 className="font-medium mb-3 flex items-center justify-between">Parent 2
              <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-2xl bg-sky-400 text-black"> Primary</span>
            </h3>
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Speed</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#ff66a2] rounded text-sm focus:ring-2 focus:ring-[#ff66a2] focus:border-transparent" value={p2Speed} onChange={(e) => setp2Speed(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(p2Speed)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Stamina</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#ff66a2] rounded text-sm focus:ring-2 focus:ring--[#ff66a2] focus:border-transparent" value={p2Stamina} onChange={(e) => setp2Stamina(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(p2Stamina)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Power</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#ff66a2] rounded text-sm focus:ring-2 focus:ring-[#ff66a2] focus:border-transparent" value={p2Power} onChange={(e) => setp2Power(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(p2Power)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Guts</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#ff66a2] rounded text-sm focus:ring-2 focus:ring-[#ff66a2] focus:border-transparent" value={p2Guts} onChange={(e) => setp2Guts(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(p2Guts)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Wit</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#ff66a2] rounded text-sm focus:ring-2 focus:ring-[#ff66a2] focus:border-transparent" value={p2Wit} onChange={(e) => setp2Wit(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(p2Wit)}
            </h1>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-md p-4 border-2 border-[#f1a1c1]">
            <h3 className="font-medium mb-3 flex items-center justify-between">Parent 1
              <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-2xl bg-sky-400 text-black">Secundary</span>
            </h3>
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Speed</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#f1a1c1] rounded text-sm focus:ring-2 focus:ring-[#f1a1c1] focus:border-transparent" value={gp3Speed} onChange={(e) => setgp3Speed(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp3Speed)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Stamina</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#f1a1c1] rounded text-sm focus:ring-2 focus:ring-[#f1a1c1]focus:border-transparent" value={gp3Stamina} onChange={(e) => setgp3Stamina(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp3Stamina)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Power</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#f1a1c1] rounded text-sm focus:ring-2 focus:ring-[#f1a1c1] focus:border-transparent" value={gp3Power} onChange={(e) => setgp3Power(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp3Power)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Guts</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#f1a1c1] rounded text-sm focus:ring-2 focus:ring-[#f1a1c1]focus:border-transparent" value={gp3Guts} onChange={(e) => setgp3Guts(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp3Guts)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Wit</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#f1a1c1] rounded text-sm focus:ring-2 focus:ring-[#f1a1c1] focus:border-transparent" value={gp3Wit} onChange={(e) => setgp3Wit(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp3Wit)}
            </h1>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-md p-4 border-2 border-[#f1a1c1]">
            <h3 className="font-medium mb-3 flex items-center justify-between">Parent 1
              <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-2xl bg-sky-400 text-black">Secundary</span>
            </h3>
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Speed</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#f1a1c1] rounded text-sm focus:ring-2 focus:ring-[#f1a1c1] focus:border-transparent" value={gp4Speed} onChange={(e) => setgp4Speed(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp4Speed)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Stamina</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#f1a1c1] rounded text-sm focus:ring-2 focus:ring-[#f1a1c1] focus:border-transparent" value={gp4Stamina} onChange={(e) => setgp4Stamina(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp4Stamina)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Power</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent" value={gp4Power} onChange={(e) => setgp4Power(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp4Power)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Guts</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#f1a1c1] rounded text-sm focus:ring-2 focus:ring-[#f1a1c1] focus:border-transparent" value={gp4Guts} onChange={(e) => setgp4Guts(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp4Guts)}
            </h1>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Wit</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-[#f1a1c1] rounded text-sm focus:ring-2 focus:ring-[#f1a1c1] focus:border-transparent" value={gp4Wit} onChange={(e) => setgp4Wit(e.target.value)}>
                <option value="0">Sparks</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
              </select>
            <h1 id="parent1-speedBox" className="text-xs mt-1 font-medium text-black stat-bonus">
              +{getSparkPoints(gp4Wit)}
            </h1>
              </div>
            </div>
          </div>







        </div>
      </div>
    </div>
    
  );

};

export default InheritanceCalPage;