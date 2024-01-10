import React from "react";
import { StyleSheet, View } from "react-native";

export default function AlbumRowSkeleton() {
  return (
    <View style={styles.skeletonContainer}>
      {new Array(3).fill(" ").map((i, index) => (
        <View key={`skeleton-${index}`} style={styles.skeleton}></View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  skeletonContainer: {
    width: "100%",
    display: "flex",
    paddingVertical: 8,
  },
  skeleton: {
    margin: 4,
    borderRadius: 4,
    height: 25,
    backgroundColor: "#B6B6B6",
  },
});
