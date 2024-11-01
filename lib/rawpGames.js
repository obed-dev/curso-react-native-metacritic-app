// URL de la API con un parámetro de búsqueda de videojuegos populares
const API_KEY = '3b9a6a1898fb45d18c8234314380388d'; // Reemplaza con tu propia API Key si es necesario
const url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=10`;

export const FetchingGames = async () => {
  try {
    const games = await fetch(url);
    const res = await games.json();
    console.log(res);
    
    return res.results; // Retornamos solo la lista de juegos
  } catch (error) {
    console.error("Error fetching data", error);
    return []; // Retornamos un array vacío en caso de error
  }
};
