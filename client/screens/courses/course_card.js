import React from "react";

import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Item = ({ name }) => (
  <View style={style.item}>
    <Text style={style.title}>{name}</Text>
  </View>
);

const CourseCard = (props) => {
  const users = props.users;

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Item title={item.name} />
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 0,
  },
  img: {
    opacity: 1,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 30,
    color: "black",
    textAlign: "left",
    marginRight: 15,
  },

  cardContainer: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "black",
    height: 150,
    borderRadius: 15,
  },
  title: {
    fontSize: 32,
  },
});
export default CourseCard;
