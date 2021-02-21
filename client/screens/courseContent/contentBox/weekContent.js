import React from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
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

// ^.*\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Lecture Slides",
    link: "",
    type: "ppt",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Online Lecture Video",
    link:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    type: "mp4",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Lab 1",
    link:
      "https://vrishabhparmar.netlify.app/resume/Vrishabh_Parmar_Resume.pdf",
    type: "pdf",
  },
];

const viewer = (action, data, navigation) => {
  if (data == "mp4") {
    navigation.navigate("Video", { action });
  } else if (data == "pdf") {
    navigation.navigate("Pdf", { action });
  }
};

const WeekContent = ({ navigation }) => {
  return (
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
      <Text
        style={{
          fontSize: 28,
          marginVertical: Dimensions.get("screen").height * 0.08,
          marginLeft: 15,
          textAlign: "center",
          color: "orange",
        }}
      >
        Week 1
      </Text>
      <FlatList
        style={{ marginTop: 0 }}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => viewer(item.link, item.type, navigation)}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
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
  },
  title: {
    fontSize: 16,
    color: "grey",
  },
});
