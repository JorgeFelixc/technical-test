import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  VirtualizedList,
} from "react-native";
import Typography from "../../src/components/common/Typography";
import { useGetPhotoByAlbumIdQuery } from "../../src/services/photos";
import { Photo } from "../../src/types/photo";

export default function Page() {
  const { id } = useLocalSearchParams();
  const fallbackId = Array.isArray(id) ? id[0] : id;

  const { data, isError, isLoading } = useGetPhotoByAlbumIdQuery(
    fallbackId || "",
    {
      skip: typeof id !== "string",
    }
  );

  const getItem = (_data: Photo[], index: number) => {
    let items = [];
    for (let i = 0; i < 3; i++) {
      const item = _data[index * 3 + i];
      item && items.push(item);
    }
    return items;
  };

  if (isLoading) {
    return (
      <View>
        <Typography>Loading..</Typography>
      </View>
    );
  }

  return (
    <View>
      <Stack.Screen
        options={{
          title: "Title",
        }}
      />
      <VirtualizedList
        data={data}
        getItem={getItem}
        getItemCount={(data) => data?.length || 20}
        keyExtractor={(data, index) => `gridalbum-${index}`}
        renderItem={(item) => (
          <View style={styles.albumContainer}>
            {item.item.map((s) => (
              <View key={s.id} style={styles.albumBox}>
                <Image
                  style={styles.albumThumbnailImage}
                  source={{ uri: s.thumbnailUrl }}
                />
              </View>
            ))}
          </View>
        )}
      />
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
