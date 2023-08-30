import React from "react";
import { View, Text } from "react-native";

const PostDetailScreen = ({ route }) => {
  const { post } = route.params;

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{post.title}</Text>
      <Text style={{ marginTop: 10 }}>{post.body}</Text>
    </View>
  );
};

export default PostDetailScreen;
