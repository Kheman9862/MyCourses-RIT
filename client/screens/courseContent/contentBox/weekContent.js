import React, { useEffect } from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  Image,
} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import PdfViewer from "./fileViewer/pdfViewer";
import VideoViewer from "./fileViewer/videoViewer";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import * as weekActions from "../../../store/actions/weekAction";
import Colors from "../../../UI/Colors";

// ^.*\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const viewer = (action, data, navigation) => {
  if (data == "mp4") {
    navigation.navigate("Video", { action });
  } else if (data == "pdf") {
    navigation.navigate("Pdf", { action });
  }
};

const WeekContent = ({ navigation, route }) => {
  const { item, WeekCourseID, imageURI } = route.params;
  // :user_id/courses/:id/:weekId
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.week.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const userCourseContent = async () => {
      await dispatch(weekActions.getWeek(user.user, WeekCourseID, item.weekId));
    };
    userCourseContent();
  }, [dispatch]);

  const week = useSelector((state) => state.week.week);
  return (
    <>
      <View style={{ flex: 1 }}>
        <View>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            color="grey"
            style={{
              position: "absolute",
              top: Dimensions.get("screen").height * 0.08,
              left: 15,
            }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={[
              StyleSheet.absoluteFillObject,
              { marginTop: 0, height: height * 0.5 },
            ]}
          >
            <Image
              style={{ flex: 1 }}
              source={{
                uri: imageURI,
              }}
            />
          </View>
          <Text style={styles.name}>{route.params.courseId}</Text>
          <Text style={styles.term}>Course term</Text>
        </View>

        <Text
          style={{
            fontSize: 20,
            marginVertical: Dimensions.get("screen").height * 0.02,
            marginLeft: 15,
            marginTop: 30,
            fontWeight: "700",
            color: "#fff",
          }}
        >
          {item.weekname}
        </Text>
        <FlatList
          style={{ transform: [{ translateY: height * 0.01 }] }}
          data={week.files}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => viewer(item.uri, item.type, navigation)}
            >
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default WeekContent;

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

    top: height * 0.25,

    fontWeight: "700",
    marginLeft: 10,

    color: "#FFF",
    letterSpacing: 2,
  },
  term: {
    fontSize: 22,
    marginTop: 50,
    textAlign: "center",
  },
});
