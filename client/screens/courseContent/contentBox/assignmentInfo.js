import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Assignment 1",
    submit: true,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Assignment 2",
    submit: false,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Assignment 3",
    submit: true,
  },
  {
    id: "58694ajf-3da1-471f-bd96-145571e29d72",
    title: "Assignment 4",
    submit: true,
  },
];

const AssignmentInfo = ({ navigation, route }) => {

  const data = route.params;

  console.log(data)
    return (
    <View>

    
    <View
            style={[
              StyleSheet.absoluteFillObject,
              { marginTop: 0, height: height * 0.5 },
            ]}
          >
            <Image
              style={{ flex: 1 }}
              source={{
                uri: data.uri,
              }}
            />
          </View>
          <Text style={styles.name}>{data.courseId}</Text>
          <Text style={styles.name}>{data.courseName}</Text>
          <Text style={styles.term}>{data.term}</Text>

      <FlatList
        style={{transform: [{ translateY: height*0.3 }]}}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AssignmentInfo;

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
  name: {
    
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
