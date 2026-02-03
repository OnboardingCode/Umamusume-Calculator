



const InheritanceCalPage = () => {



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
          <div className="bg-white rounded-lg shadow-md p-4 border-2 border-sky-500">
            <h3 className="font-medium mb-3 flex items-center justify-between">Parent 1
              <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-2xl bg-sky-400 text-black"> Primary</span>
            </h3>
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Speed</label>
                <select id="parent1-speed" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                  <option value="0">-</option>
                  <option value="1">★</option>
                  <option value="2">★★</option>
                  <option value="3">★★★</option>
                </select>
                <div className="text-xs mt-1 font-medium text-black stat-bonus" data-source="parent1" data-stat="speed">+0</div>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Stamina</label>
                <select id="parent1-stamina" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                  <option value="0">-</option>
                  <option value="1">★</option>
                  <option value="2">★★</option>
                  <option value="3">★★★</option>
                </select>
                <div className="text-xs mt-1 font-medium text-black stat-bonus" data-source="parent1" data-stat="speed">+0</div>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Power</label>
                <select id="parent1-power" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                  <option value="0">-</option>
                  <option value="1">★</option>
                  <option value="2">★★</option>
                  <option value="3">★★★</option>
                </select>
                <div className="text-xs mt-1 font-medium text-black stat-bonus" data-source="parent1" data-stat="speed">+0</div>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Guts</label>
                <select id="parent1-guts" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                  <option value="0">-</option>
                  <option value="1">★</option>
                  <option value="2">★★</option>
                  <option value="3">★★★</option>
                </select>
                <div className="text-xs mt-1 font-medium text-black stat-bonus" data-source="parent1" data-stat="speed">+0</div>
              </div>

              <div className="text-center">
                <label className="text-xs text-gray-600 block mb-1 capitalize">Wit</label>
                <select id="parent1-wit" className="stat-selector w-full px-9 py-1 border border-sky-300 rounded text-sm focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                  <option value="0">-</option>
                  <option value="1">★</option>
                  <option value="2">★★</option>
                  <option value="3">★★★</option>
                </select>
                <div className="text-xs mt-1 font-medium text-black stat-bonus" data-source="parent1" data-stat="speed">+0</div>
              </div>


              
              
            </div>
          </div>

         

          

        </div>
      </div>
    </div>
    
  );

};

export default InheritanceCalPage;