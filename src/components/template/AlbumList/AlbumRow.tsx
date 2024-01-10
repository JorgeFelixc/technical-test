import React from "react";
import { Album } from "../../../types/album";
import { Button, StyleSheet, TouchableHighlight, View } from "react-native";
import Typography from "../../common/Typography";

interface AlbumRowProps {
  album: Album;
}

export default function AlbumRow({ album }: AlbumRowProps) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert("prssed")}
    >
      <View style={styles.albumListContainer}>
        <Typography style={styles.textContainer} variant="sm">
          {album.title}
        </Typography>

        <Button title="remove" />
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  albumListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    maxWidth: "80%",
  },
});
