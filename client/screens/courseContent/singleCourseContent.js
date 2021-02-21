import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import TabViewExample from "./tabView";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const SingleCourseContent = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View>
      <View style={styles.bg}>
        <View style={{ flex: 1 }}>
          <TabViewExample navigation={navigation} data={item} />
        </View>
      </View>
    </View>
  );
};

export default SingleCourseContent;

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    width,
    height,
    backgroundColor: "lightgrey",

    borderRadius: 32,
  },
});
