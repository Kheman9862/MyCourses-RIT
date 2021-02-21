import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
// import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

import { data } from "./classListData";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import * as classListActions from "../../../store/actions/classListAction";
import Colors from "../../../UI/Colors";

const classList = (props) => {
  //api/:user_id/courses/:id/classlist

  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.classlist.loading);
  const courses = useSelector((state) => state.course.courses);
  const data = props.route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    const ClasslistContent = async () => {
      await dispatch(
        classListActions.getClasslist(
          user.user,
          courses.courseList.filter((x) => x._id == data._id)[0]._id
        )
      );
    };
    ClasslistContent();
  }, [dispatch]);

  const classlist = useSelector((state) => state.classlist.classlist);

  console.log(classlist);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={classlist}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                props.navigation.navigate("ProfileClassList", { item })
              }
            >
              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    flex: 1,
                    alignItems: "center",
                    height: 120,
                    width: "100%",
                    backgroundColor: "#eee",
                  }}
                >
                  <Image
                    source={{ uri: item.profile_pic }}
                    style={styles.image}
                  ></Image>
                  <View>
                    <Text style={styles.name}>
                      {item.firstname} {item.lastname}
                    </Text>
                    <Text style={styles.username}>{item.username}</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
      {/* <View style={styles.bg}></View> */}
    </SafeAreaView>
  );
};

export default classList;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginLeft: 10,
  },
  name: {
    fontSize: 25,
    marginLeft: 30,
  },
  username: {
    fontSize: 15,
    marginLeft: 30,
  },
  cardBottom: {
    width: "100%",
    height: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
