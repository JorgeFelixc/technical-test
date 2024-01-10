import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import Typography from "../../common/Typography";
import { useGetAlbumByUserQuery } from "../../../services/albums";
import { TouchableHighlight } from "react-native-gesture-handler";

interface AlbumListProps {
  userId: number;
}

export default function AlbumList({ userId }: AlbumListProps) {
  const { data } = useGetAlbumByUserQuery(userId.toString());

  return (
    <View>
      <FlatList
        data={data}
        renderItem={(item) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert("prssed")}
          >
            <View key={item.item.id} style={styles.albumListContainer}>
              <Typography style={styles.textContainer} variant="sm">
                {item.item.title}
              </Typography>

              <Button title="remove" />
            </View>
          </TouchableHighlight>
        )}
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
