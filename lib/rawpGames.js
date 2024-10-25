// URL de la API con un parámetro de búsqueda de videojuegos populares
const API_KEY = '3b9a6a1898fb45d18c8234314380388d'; // Regístrate y reemplaza con tu propia API Key si es necesario
const url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=10`;


// Realizar la solicitud fetch a la API
export const fetchingGames = async() => { 

  try {
      const games = await fetch(url);
      const res = await games.json();
      console.log(res);
      
    } 
    
    
    catch (error) {
      console.log("Error fetching data");
      
    }
  
}