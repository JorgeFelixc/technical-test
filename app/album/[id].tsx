import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  View,
  VirtualizedList,
} from "react-native";
import Typography from "../../src/components/common/Typography";
import { useGetPhotoByAlbumIdQuery } from "../../src/services/photos";
import { Photo } from "../../src/types/photo";
import { getItemGrid } from "../../src/utils";

export default function Page() {
  const { id } = useLocalSearchParams();
  const fallbackId = Array.isArray(id) ? id[0] : id;
  const [toggleAllPhotos, setToggleAllPothos] = useState(fallbackId);

  const { data, isError, isLoading, isFetching } = useGetPhotoByAlbumIdQuery(
    toggleAllPhotos,
    {
      skip: typeof id !== "string",
    }
  );

  const handleOnPressAll = () => {
    if (toggleAllPhotos) {
      setToggleAllPothos("");
      return;
    }
    setToggleAllPothos(fallbackId);
  };

  if (isLoading || isFetching) {
    return (
      <View>
        <Stack.Screen options={{ title: "Title" }} />
        <Typography>Loading..</Typography>
      </View>
    );
  }

  return (
    <View>
      <Stack.Screen
        options={{
          title: "Title",
          headerRight: () => (
            <Button
              title={toggleAllPhotos ? "all" : "single"}
              onPress={handleOnPressAll}
            />
          ),
        }}
      />
      <VirtualizedList
        data={data}
        getItem={(data, index) => getItemGrid<Photo>(data, index)}
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
