import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../../common/Typography";
import { User } from "../../../types/users";
import AlbumList from "../AlbumList";

interface UserListProps {
  user: User;
}

export default function UserList({ user }: UserListProps) {
  return (
    <View style={style.userListContainer}>
      <Typography style={style.userName} variant="md">
        {user.name}
      </Typography>
      <AlbumList userId={user.id} />
    </View>
  );
}

const style = StyleSheet.create({
  userListContainer: {
    margin: 8,
    marginVertical: 16,
    borderRadius: 4,
    backgroundColor: "#ffffff",
  },
  userName: {
    // paddingVertical: 12,
    padding: 12,
  },
});
