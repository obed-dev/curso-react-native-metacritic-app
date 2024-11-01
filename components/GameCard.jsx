import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";

export function GameCard({ game }) {
  return (
    <View  key={game.slug} style={styles.card}>
      <Image source={{ uri: game.background_image }} style={styles.image} />
      <Text style={styles.title}>{game.name}</Text>
      <Text style={styles.score}>Score: {game.rating}</Text>
      <Text style={styles.info}>Released: {game.released || "No description available"}</Text>
      <Text style={styles.info}>Platforms: {game.platforms?.map(p => p.platform.name).join(', ') || "No description available"}</Text>

    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },


  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: "#eee",
    marginBottom: 10,
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
