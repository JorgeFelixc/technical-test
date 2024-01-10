import React from "react";
import { Album } from "../../../types/album";
import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import Typography from "../../common/Typography";
import { useDispatch } from "react-redux";
import { deleteAlbum } from "../../../store/slices/albumSlice";
import { router } from "expo-router";

interface AlbumRowProps {
  album: Album;
}

export default function AlbumRow({ album }: AlbumRowProps) {
  const dispatch = useDispatch();

  const handleOnPress = (event: GestureResponderEvent) => {
    router.push(`/album/${album.id}`);
    event.stopPropagation();
  };

  const handleOnRemove = () => {
    dispatch(deleteAlbum(album));
  };

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={handleOnPress}
    >
      <View style={styles.albumListContainer}>
        <Typography style={styles.textContainer} variant="sm">
          {album.title}
        </Typography>

        <Button title="remove" onPress={handleOnRemove} />
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
