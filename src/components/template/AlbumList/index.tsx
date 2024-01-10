import React, { useMemo } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useGetAlbumByUserQuery } from "../../../services/albums";
import AlbumRow from "./AlbumRow";
import { useSelector } from "react-redux";
import { selectDeletedAlbumsByUserId } from "../../../store/slices/albumSlice";
import Container from "../../common/Container";
import AlbumRowSkeleton from "./AlbumRowSkeleton";

interface AlbumListProps {
  userId: number;
}

export default function AlbumList({ userId }: AlbumListProps) {
  const { data, ...other } = useGetAlbumByUserQuery(userId.toString());

  const deletedAlbums = useSelector((state: any) =>
    selectDeletedAlbumsByUserId(state, userId)
  );

  /**
   * Removing the deleted data from the original data.
   */
  const dataWithoutDeleted = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.filter((album) => !deletedAlbums?.includes(album.id));
  }, [data, deletedAlbums]);

  return (
    <Container uiState={other} loadingFallback={<AlbumRowSkeleton />}>
      <FlatList
        data={dataWithoutDeleted}
        renderItem={(item) => <AlbumRow key={item.item.id} album={item.item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </Container>
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
