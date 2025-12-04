# API de Outfits - Documentación

## Información General

**URL Base:** `https://umapyoi.net/api/v1/character/images/{id}`

**Método:** GET

**Descripción:** Esta API devuelve todas las imágenes de outfits (vestimentas) de un personaje de Umamusume, organizadas por categorías.

---

## Parámetros

| Parámetro | Tipo   | Ubicación | Requerido | Descripción                                  |
| --------- | ------ | --------- | --------- | -------------------------------------------- |
| `id`      | string | URL Path  | Sí        | ID único del personaje (ej: "1032", "10372") |

---

## Ejemplo de Solicitud

```bash
GET https://umapyoi.net/api/v1/character/images/1032
```

---

## Estructura de la Respuesta

La API devuelve un **array de objetos**, donde cada objeto representa una **categoría de outfit** (uniforme, ropa de carrera, arte conceptual, etc.).

### Ejemplo de Respuesta (JSON)

```json
[
  {
    "images": [
      {
        "image": "https://images.microcms-assets.io/.../agnestachyon_01.png",
        "uploaded": "2024-02-24"
      },
      {
        "image": "https://web.archive.org/.../20e8ff07adc47f19e321785e2087b04a.png",
        "uploaded": "2021-01-01"
      }
    ],
    "label": "制服",
    "label_en": "Uniform"
  },
  {
    "images": [
      {
        "image": "https://images.microcms-assets.io/.../agnestachyon_02.png",
        "uploaded": "2024-02-24"
      }
    ],
    "label": "勝負服",
    "label_en": "Racewear"
  }
]
```

---

## Descripción de Campos

### Objeto Principal (Categoría de Outfit)

| Campo      | Tipo   | Descripción                                       |
| ---------- | ------ | ------------------------------------------------- |
| `images`   | Array  | Lista de imágenes pertenecientes a esta categoría |
| `label`    | string | Nombre de la categoría en japonés                 |
| `label_en` | string | Nombre de la categoría en inglés                  |

### Objeto de Imagen (dentro de `images`)

| Campo      | Tipo   | Descripción                             |
| ---------- | ------ | --------------------------------------- |
| `image`    | string | URL completa de la imagen               |
| `uploaded` | string | Fecha de subida en formato "YYYY-MM-DD" |

---

## Categorías Comunes

Las categorías más comunes que encontrarás son:

| Label (JP) | Label (EN)  | Descripción                            |
| ---------- | ----------- | -------------------------------------- |
| 制服       | Uniform     | Uniforme escolar del personaje         |
| 勝負服     | Racewear    | Ropa de competición/carrera            |
| 原案       | Concept Art | Arte conceptual original del personaje |
| 私服       | Casual Wear | Ropa casual/de diario                  |
| その他     | Other       | Otras vestimentas especiales           |

---

## Orden de las Imágenes

Dentro de cada categoría, las imágenes están ordenadas **de más reciente a más antigua** según el campo `uploaded`.

```
images[0] → Imagen más reciente (recomendada para mostrar)
images[1] → Segunda más reciente
images[n] → Imagen más antigua
```

---

## Implementación en TypeScript

### Interfaces

```typescript
interface OutfitImage {
  image: string; // URL de la imagen
  uploaded: string; // Fecha de subida
}

interface OutfitCategory {
  images: OutfitImage[]; // Array de imágenes
  label: string; // Nombre en japonés
  label_en: string; // Nombre en inglés
}
```

### Función para Obtener Outfits

```typescript
export const getCharacterOutfits = (
  umaId: string
): Promise<OutfitCategory[]> => {
  return fetch(`https://umapyoi.net/api/v1/character/images/${umaId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("API outfits response:", data);
      return data;
    })
    .catch((error) => {
      console.log("Error al obtener outfits:", error);
      throw error;
    });
};
```

---

## Uso Práctico

### Ejemplo 1: Obtener las primeras 3 imágenes (una por categoría)

```typescript
getCharacterOutfits("1032").then((outfits) => {
  // Tomar las primeras 3 categorías
  const first3Categories = outfits.slice(0, 3);

  first3Categories.forEach((category, index) => {
    // Usar la imagen más reciente de cada categoría
    const latestImage = category.images[0].image;
    console.log(`${category.label_en}: ${latestImage}`);
  });
});
```

### Ejemplo 2: Obtener todas las imágenes de una categoría específica

```typescript
getCharacterOutfits("1032").then((outfits) => {
  // Buscar la categoría "Uniform"
  const uniformCategory = outfits.find((cat) => cat.label_en === "Uniform");

  if (uniformCategory) {
    uniformCategory.images.forEach((img) => {
      console.log(`Imagen: ${img.image}, Subida: ${img.uploaded}`);
    });
  }
});
```

### Ejemplo 3: Mostrar en HTML

```typescript
getCharacterOutfits("1032").then((outfits) => {
  const container = document.getElementById("outfits-container");

  outfits.forEach((category) => {
    // Crear elementos
    const div = document.createElement("div");
    const title = document.createElement("h3");
    const img = document.createElement("img");

    // Configurar
    title.textContent = category.label_en;
    img.src = category.images[0].image; // Imagen más reciente
    img.alt = category.label_en;

    // Agregar al DOM
    div.appendChild(title);
    div.appendChild(img);
    container.appendChild(div);
  });
});
```

---

## Manejo de Errores

### Posibles errores:

1. **ID no válido (404)**: El personaje no existe
2. **Sin imágenes**: Algunos personajes pueden no tener outfits
3. **Conexión fallida**: Error de red

### Ejemplo de manejo:

```typescript
getCharacterOutfits(umaId)
  .then((outfits) => {
    if (outfits.length === 0) {
      console.log("Este personaje no tiene outfits disponibles");
      return;
    }

    // Procesar outfits...
  })
  .catch((error) => {
    if (error.message.includes("404")) {
      console.log("Personaje no encontrado");
    } else {
      console.log("Error de conexión:", error);
    }
  });
```

---

## Notas Importantes

1. ✅ Las imágenes pueden provenir de diferentes fuentes (microcms, web.archive.org, etc.)
2. ✅ Algunas URLs pueden ser muy largas o incluir parámetros
3. ✅ No todos los personajes tienen la misma cantidad de categorías
4. ✅ Algunas categorías pueden tener solo 1 imagen, otras pueden tener 5+
5. ⚠️ Las imágenes de web.archive.org pueden tardar más en cargar
6. ⚠️ Siempre verifica que `images.length > 0` antes de acceder a `images[0]`

---

## Ejemplos de IDs Comunes

| ID    | Personaje      |
| ----- | -------------- |
| 1032  | Agnes Tachyon  |
| 10372 | Special Week   |
| 1001  | Silence Suzuka |
| 1002  | Tokai Teio     |
| 1003  | Maruzensky     |

---

## Recursos Adicionales

- **API Base**: https://umapyoi.net/api/v1/
- **Documentación completa**: Consultar la documentación oficial de Umapyoi
- **Repositorio**: https://github.com/OnboardingCode/Umamusume-Calculator

---

## Resumen Rápido

```typescript
// 1. Llamar la API
const outfits = await getCharacterOutfits("1032");

// 2. Acceder a datos
console.log(outfits[0].label_en); // "Uniform"
console.log(outfits[0].images[0].image); // URL de la imagen
console.log(outfits[0].images[0].uploaded); // "2024-02-24"

// 3. Mostrar imagen más reciente de cada categoría
outfits.forEach((category) => {
  const latestImg = category.images[0].image;
  // Mostrar latestImg en tu UI
});
```

---

**Última actualización:** Diciembre 2025
