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

import Svg, { Path } from "react-native-svg";
import Logout from "../login/logout";

const CourseContent = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const profile = useSelector((state) => state.profile.profile);
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
    <>
      <View
        style={{
          height: 100,
          width: "100%",
          borderColor: "#f76902",
          backgroundColor: "#f76902",
          marginVertical: 0,
          borderBottomWidth: 10,
        }}
      >
        <Svg
          height={Dimensions.get("screen").height}
          width="100%"
          viewBox="50 70 1340 185"
          style={{ position: "absolute", top: 0, margin: 0 }}
        >
          <Path
            fill="#f76902"
            d="M0,96L48,112C96,128,192,160,288,186.7C384
                    ,213,480,235,576,213.3C672,192,768,128,864,
                    128C960,128,1056,192,1152,208C1248,224,1344,192,
                    1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
                    1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
                    384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            textAlign: "left",
            fontSize: 32,
            marginBottom: 15,
            fontWeight: "700",
            color: "#777",
            paddingLeft: 20,
          }}
        >
          Hello {profile.firstname}!
        </Text>

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
                        <Text style={{ color: "#777" }}>{item.term}</Text>
                      </View>
                    </Card>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default CourseContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Dimensions.get("screen").height * 0.06,
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
    color: "#777",
  },
});
