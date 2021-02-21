import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
// import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

import { data } from "./contentData";
import { FlatList, ActivityIndicator } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as courseActions from "../../store/actions/courseAction";
import Colors from "../../UI/Colors";

const CourseContent = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.course.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    const userCourse = async () => {
      await dispatch(courseActions.getCourses(user.user));
    };
    userCourse();
  }, [dispatch]);

  const courses = useSelector((state) => state.course.courses);


  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
        <FlatList
          data={courses.courseList}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("SingleCourseContent", { item })
                }
              >
                <View
                  style={{
                    flex: 1,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 30,
                  }}
                >
                  <Card
                    style={
                      (styles.card,
                      {
                        flex: 1,
                        borderRadius: 10,
                        borderColor: "#ddd",
                        borderBottomWidth: 3,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                        elevation: 1,
                      })
                    }
                  >
                    <Card.Cover
                      source={{
                        uri: item.uri,
                      }}
                      style={(styles.cover, { flex: 1 })}
                    />
                    <View
                      style={{
                        borderBottomColor: item.primarycolor,
                        borderBottomWidth: 5,
                      }}
                    ></View>
                    <View style={styles.cardBottom}>
                      <Text style={styles.bold}>
                        {item.courseId} : {item.courseName}
                      </Text>
                      <Text>{item.term}</Text>
                    </View>
                  </Card>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default CourseContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  bg: {
    position: "absolute",
    width,
    height,
    backgroundColor: "red",
    transform: [{ translateY: height }],
    borderRadius: 32,
  },
  card: {
    backgroundColor: "green",
  },
  cover: { width: "100%", height: "100%" },
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
