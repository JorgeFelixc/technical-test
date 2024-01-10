import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Typography from "../src/components/common/Typography";
import { useGetUsersQuery } from "../src/services/users";
import UserList from "../src/components/template/UserList";

export default function index() {
  const { isLoading, data, isError, error } = useGetUsersQuery();

  console.log(error);
  if (isLoading) {
    return (
      <View>
        <Typography>Loading..</Typography>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Typography>Error</Typography>
      </View>
    );
  }

  if (!data) {
    return (
      <View>
        <Typography>Empty</Typography>
      </View>
    );
  }

  return (
    <View style={styles.indexContainer}>
      <FlatList
        data={data}
        renderItem={(item) => <UserList user={item.item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  indexContainer: {
    // margin: 8,
    // padding: 8,
    // shadowOpacity: 0.3,
    // backgroundColor: "#fff",
    // borderRadius: 4,
  },
});
