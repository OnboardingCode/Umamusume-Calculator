// Función para obtener datos de un personaje desde la API de Umapyoi
export const getCharacterData = (umaId: string) => {
  return fetch(`https://umapyoi.net/api/v1/character/${umaId}`)
    //res = response
    //Función de flecha, el cual agarra todo lo que tenga res y lo cambia a un JSON, el cual puede ser un array o Objeto 
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log('API response (object):', data);
      return data; // Retornar los datos para que puedan ser usados en el componente
    })
    .catch(error => {
      console.log('Error al obtener datos del personaje:', error);
      throw error; // Re-lanzar el error para que pueda ser manejado en el componente
    });
};


//TODO El valor DATA da error porque el parametro de DATA queda como ANY, el cual no puede quedar asi, para solucionar el error, se tiene que crear el tipado de datos

//Interface funciona en Typescript para especificar que propiedades debe de tener los objetos, en este caso, que tipo de dato
interface CharacterData {
  name_en: string;
  name_jp: string;
  sns_icon: string;
  ears_fact: string
}

// Interfaces para los datos de outfits
interface OutfitImage {
  image: string;
  uploaded: string;
}

interface OutfitCategory {
  images: OutfitImage[];
  label: string;
  label_en: string;
}

// Función para obtener las imágenes de outfits de un personaje
export const getCharacterOutfits = (umaId: string): Promise<OutfitCategory[]> => {
  return fetch(`https://umapyoi.net/api/v1/character/images/${umaId}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      console.log('API outfits response:', data);
      return data;
    })
    .catch(error => {
      console.log('Error al obtener outfits del personaje:', error);
      throw error;
    });
};

// Función para actualizar el DOM con los datos del personaje
export const updateCharacterDOM = (data: CharacterData) => {
  // Obtener elementos del DOM
  const displayEnName = document.getElementById("enUmaDiplayName");
  const displayJpName = document.getElementById("jpUmaDiplayName");
  const frontImg = document.getElementById("umaImg");
  const UmaFacts = document.getElementById("UmaFacts")


  // Extraer datos del response
  const enName = data.name_en;
  const jpName = data.name_jp;
  const img_1 = data.sns_icon;
  const facts_1 = data.ears_fact;

  

  // Actualizar el DOM con los datos
  //Esto es una practica de programacion defenciva, el cual el IF se encarga de verificar que el valor retornado no sea NULL para poder evitar errores
  if (displayEnName) displayEnName.textContent = `EN Name: ${enName}`;
  if (displayJpName) displayJpName.textContent = `JP Name: ${jpName}`;
  if(UmaFacts) UmaFacts.textContent = `Facts: ${facts_1}`;
  //Es normal de que de error en el .src
  if (frontImg && frontImg instanceof HTMLImageElement) frontImg.src = img_1;
};

// Función para actualizar el DOM con las imágenes de outfits
export const updateOutfitsDOM = (outfits: OutfitCategory[]) => {
  // Obtener las primeras 3 categorías de outfits
  const outfitCategories = outfits.slice(0, 3);
  
  outfitCategories.forEach((category, index) => {
    const outfitImg = document.getElementById(`umaOutfit_${index + 1}`);
    
    // Usar la primera imagen de cada categoría (la más reciente)
    if (category.images && category.images.length > 0 && outfitImg instanceof HTMLImageElement) {
      outfitImg.src = category.images[0].image;
      outfitImg.alt = category.label_en || category.label;
      outfitImg.title = category.label_en || category.label;
    }
  });
};