import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Logo } from "./components/Logo";
import { Main } from "./components/Main";
import { ScrollView } from "react-native-web";


export default function App() {
  return (
    <ScrollView>
    <SafeAreaProvider>
      
      <View style={styles.container}>
 
        <StatusBar style="light" />
        <Main />
      </View>
  
    </SafeAreaProvider>
    </ScrollView>
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