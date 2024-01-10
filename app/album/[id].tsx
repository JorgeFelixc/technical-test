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
import {
  useGetPhotoByAlbumIdQuery,
  useGetPhotosBuilderQuery,
} from "../../src/services/photos";
import { Photo } from "../../src/types/photo";
import { getItemGrid } from "../../src/utils";
import { AntDesign } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import PhotosMosaic from "../../src/components/template/PhotosMosaic";
import Container from "../../src/components/common/Container";

export default function Page() {
  const { id } = useLocalSearchParams();
  const fallbackId = Array.isArray(id) ? id[0] : id;
  const [toggleAllPhotos, setToggleAllPothos] = useState(fallbackId);

  const { data, ...others } = useGetPhotosBuilderQuery(toggleAllPhotos);

  const handleOnPressAll = () => {
    if (toggleAllPhotos) {
      setToggleAllPothos("");
      return;
    }
    setToggleAllPothos(fallbackId);
  };

  return (
    <Container uiState={others}>
      <Stack.Screen
        options={{
          title: "Title",
          headerRight: () => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="transparent"
              onPress={handleOnPressAll}
            >
              <AntDesign
                style={styles.iconBox}
                name={toggleAllPhotos ? "staro" : "star"}
                size={24}
                color="black"
              />
            </TouchableHighlight>
          ),
        }}
      />
      <VirtualizedList
        data={data}
        getItem={(data, index) => getItemGrid<Photo>(data, index)}
        getItemCount={(data) => data?.length}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={11}
        updateCellsBatchingPeriod={100}
        keyExtractor={(data, index) => `gridalbum-${index}`}
        renderItem={(item) => (
          <PhotosMosaic photos={item.item} key={item.index} />
        )}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    padding: 4,
    borderRadius: 4,
  },
});
