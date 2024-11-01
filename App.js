import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native"; 
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar style="light" />
          <Main />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
