import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import TabViewExample from "./tabView";
import * as courseContentActions from "../../store/actions/courseContentAction";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const weeks = [1, 2, 3];

const tabs = [
  {
    id: "1",
    name: "content",
  },
  {
    id: "2",
    name: "assignement",
  },
];

const SingleCourseContent = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item._id);
  const dispatch = useDispatch();
  useEffect(() => {
    const addContentID = async () => {
      await dispatch(courseContentActions.addContentID(item._id));
    };
    addContentID();
  }, [dispatch]);
  return (
    <View>
      <View style={{ flex: 1 }}>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: item.color, marginTop: 0, height: height * 0.3 },
          ]}
        />
        <Text style={styles.name}>{item.coursename}</Text>
        <Text style={styles.term}></Text>
      </View>

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
    transform: [{ translateY: height * 0.26 }],
    borderRadius: 32,
  },
  name: {
    position: "absolute",
    fontSize: 42,

    textAlign: "center",

    top: height * 0.18,

    fontWeight: "700",
    marginLeft: 10,

    color: "#FFF",
  },
  term: {
    fontSize: 22,
    marginTop: 50,
    textAlign: "center",
  },
});
