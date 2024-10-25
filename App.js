import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);
  const screenWidth = Dimensions.get('window').width;

  // URL de la API con un parámetro de búsqueda de videojuegos populares
  const API_KEY = '3b9a6a1898fb45d18c8234314380388d'; // Reemplaza con tu propia API Key si es necesario
  const url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=10`;

  // Realizar la solicitud fetch a la API
  const fetchingGames = async () => {
    try {
      const response = await fetch(url);
      const res = await response.json();
      setData(res.results); // Actualizamos el estado con los resultados de los juegos
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  // Usamos useEffect para llamar a fetchingGames solo una vez al montar el componente
  useEffect(() => {
    fetchingGames();
  }, []);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar style="light" />
        
        {/* Renderizamos los juegos obtenidos */}
        {data.length > 0 ? (
          data.map((game) => (
            <View key={game.id} style={[styles.card, { width: screenWidth / 2 - 20 }]}>
              <Image source={{ uri: game.background_image }} style={styles.image} />
              <Text style={styles.text}>{game.name}</Text>
              <Text style={styles.text}>Release Date: {game.released}</Text>
            </View>
          ))
        ) : (
          <Text style={{ color: '#fff' }}>Loading games...</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    flexDirection: 'row', // Para que los elementos estén en fila
    flexWrap: 'wrap', // Permitir que los elementos salten a la siguiente fila
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    margin: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%', // Ocupar todo el ancho del contenedor
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover', // Mantener la proporción de la imagen
  },
  
  text: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
});
