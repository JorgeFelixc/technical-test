import React from "react";
import { FlatList, View } from "react-native";
import Typography from "../src/components/common/Typography";
import { useGetUsersQuery } from "../src/services/users";
import UserList from "../src/components/template/UserList";
import { Stack } from "expo-router";
import Container from "../src/components/common/Container";

export default function index() {
  const { data, ...others } = useGetUsersQuery();

  return (
    <Container uiState={others}>
      <Stack.Screen
        options={{
          title: "Users",
        }}
      />
      <FlatList
        data={data}
        renderItem={(item) => <UserList user={item.item} />}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
}
