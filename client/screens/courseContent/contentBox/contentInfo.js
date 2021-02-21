import React,{useEffect} from "react";
import PdfViewer from "./fileViewer/pdfViewer";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import * as courseContentActions from "../../../store/actions/courseContentAction";
import Colors from "../../../UI/Colors";
import { compose } from "redux";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Week 1",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Week 2",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Week 3",
  },
];

const ContentInfo = (props) => {
console.log("xyz")
console.log(props.contentItem)
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.course.loading);
  const courses = useSelector((state) => state.course.courses);
  const contentID = useSelector((state) => state.content.contentID);
  const dispatch = useDispatch();
  useEffect(() => {
    const userCourseContent = async () => {
      await dispatch(courseContentActions.getContent(user.user,courses.courseList.filter((x)=>x._id==contentID)[0]._id));
    };
    userCourseContent();
  }, [dispatch]);
  const content = useSelector((state) => state.content.content);
  
  // console.log("contentgf");
  // console.log(content.week[0].weekname);
  return (
    <View>
   {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : (
      <FlatList
        style={{ marginTop: 20 }}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => props.navigation.navigate("WeekContent")}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />)}
    </View>
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
  },
  title: {
    fontSize: 16,
    color: "grey",
  },
});
