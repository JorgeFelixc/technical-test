import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Photo } from "../../../types/photo";

interface PhotosMosaicProps {
  photos: Photo[];
}

export default function PhotosMosaic({ photos }: PhotosMosaicProps) {
  return (
    <View style={styles.albumContainer}>
      {photos.map((photo) => (
        <View key={photo.id} style={styles.albumBox}>
          <Image
            style={styles.albumThumbnailImage}
            source={{ uri: photo.thumbnailUrl }}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  albumContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  albumThumbnailImage: {
    height: "100%",
    width: "100%",
    alignSelf: "flex-start",
  },
  albumBox: {
    alignSelf: "flex-start",
    minWidth: "33.33%",
    height: 255,
    textAlign: "center",
  },
});
