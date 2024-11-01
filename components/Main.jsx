import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { fetchingGames } from "../lib/rawpGames";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";


export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    fetchingGames().then((gamesList) => {
      setGames(gamesList); // Guardamos la lista de juegos
    });
  }, []);

  return (
 
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>
      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.id.toString()} // Usamos `id` como clave
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>

  );
}
