import React from "react";
import { Text, View } from "react-native";
import Typography from "../src/components/common/Typography";
import { useGetUsersQuery } from "../src/services/users";

export default function index() {
  const { isLoading, data } = useGetUsersQuery();
  return (
    <View>
      <Typography variant="title">Users</Typography>
    </View>
  );
}
