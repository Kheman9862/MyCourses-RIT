import React, { useEffect } from "react";
import PdfViewer from "./fileViewer/pdfViewer";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import * as courseContentActions from "../../../store/actions/courseContentAction";
import Colors from "../../../UI/Colors";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const ContentInfo = (props) => {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.course.loading);
  const courses = useSelector((state) => state.course.courses);
  const data = props.route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    const userCourseContent = async () => {
      await dispatch(
        courseContentActions.getContent(
          user.user,
          courses.courseList.filter((x) => x._id == data._id)[0]._id
        )
      );
    };
    userCourseContent();
  }, [dispatch]);

  const content = useSelector((state) => state.content.content);
  const imageURI = data.uri;
  const WeekCourseID = data._id;
  return (
    <>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { marginTop: 0, height: height * 0.5 },
        ]}
      >
        <Image
          style={{ flex: 1 }}
          source={{
            uri: props.route.params.uri,
          }}
        />
      </View>
      <Text style={styles.name}>{props.route.params.courseId}</Text>
      <Text style={styles.term}>{props.route.params.term}</Text>
      <View style={{ flex: 1, transform: [{ translateY: height * 0.25 }] }}>
        <FlatList
          style={{ transform: [{ translateY: height * 0.135 }] }}
          data={content.week}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                props.navigation.navigate("WeekContent", {
                  item,
                  WeekCourseID,
                  imageURI,
                })
              }
            >
              <Text style={styles.title}>{item.weekname}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default ContentInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F5FCFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    color: "grey",
  },
  name: {
    position: "absolute",
    fontSize: 42,

    textAlign: "center",

    top: height * 0.27,

    fontWeight: "700",
    marginLeft: 10,

    color: "#FFF",
  },
  term: {
    fontSize: 22,
    marginTop: 50,
    marginLeft: 20,
    color: "grey",
  },
});
