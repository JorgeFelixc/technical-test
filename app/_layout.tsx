import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "#EFEFEF",
          },
          headerStyle: styles.container,
          title: "Users",
          headerShadowVisible: false,
        }}
      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFEF",
  },
});
