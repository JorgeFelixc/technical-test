import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useGetAlbumByUserQuery } from "../../../services/albums";
import AlbumRow from "./AlbumRow";

interface AlbumListProps {
  userId: number;
}

export default function AlbumList({ userId }: AlbumListProps) {
  const { data } = useGetAlbumByUserQuery(userId.toString());

  return (
    <View>
      <FlatList
        data={data}
        renderItem={(item) => <AlbumRow key={item.item.id} album={item.item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
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
  separator: {
    borderBottomColor: "rgba(120,120,120, 0.1)",
    borderBottomWidth: 1,
  },
});
