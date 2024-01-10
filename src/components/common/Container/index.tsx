import { Stack } from "expo-router";
import React from "react";
import { ActivityIndicator, StyleSheet, View, ViewProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Typography from "../Typography";

interface ContainerProps extends ViewProps {
  errorFallback?: React.ReactNode;
  loadingFallback?: React.ReactNode;
  emptyFallback?: React.ReactNode;
  isEmptyFallback?: React.ReactNode;
  uiState: {
    isError?: boolean;
    isLoading?: boolean;
    isFetching?: boolean;
    isEmpty?: boolean;
  };
  children: React.ReactNode;
}

export default function Container({
  errorFallback,
  loadingFallback,
  emptyFallback,
  uiState,
  children,
  ...others
}: ContainerProps) {
  const { isError, isFetching, isLoading, isEmpty } = uiState;

  if (isLoading || isFetching) {
    return loadingFallback || <LoaderContainer />;
  }

  if (isEmpty) {
    return emptyFallback || <EmptyContainer />;
  }

  if (isError) {
    return errorFallback || <ErrorContainer />;
  }

  return <View {...others}>{children}</View>;
}

function EmptyContainer() {
  return (
    <View style={styles.center}>
      <AntDesign name="frowno" size={24} color="black" />
      <Typography variant="sm"> No Data </Typography>
    </View>
  );
}

function LoaderContainer() {
  return (
    <View style={styles.center}>
      <Stack.Screen
        options={{
          title: "",
        }}
      />
      <ActivityIndicator size="large" />
    </View>
  );
}

function ErrorContainer() {
  return (
    <View style={styles.center}>
      <MaterialIcons name="error" size={24} color="black" />
      <Typography variant="sm"> Error Loading </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {},
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
