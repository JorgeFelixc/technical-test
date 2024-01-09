import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          header: () => <View style={styles.container}></View>,
          contentStyle: {
            paddingHorizontal: 8,
            backgroundColor: "#fff",
          },
        }}
      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: "#fff",
  },
});
