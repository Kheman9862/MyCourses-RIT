import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const tabs = [
  {
    id: "1",
    name: "Content",
  },
  {
    id: "2",
    name: "Assignment",
  },
  {
    id: "3",
    name: "ClassList",
  },
  {
    id: "4",
    name: "Upcoming Events",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#F5FCFF",
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
    fontSize: 42,

    textAlign: "center",

    top: height * 0.3,

    fontWeight: "700",
    marginLeft: 10,

    color: "#FFF",
    letterSpacing: 2,
  },
  term: {
    fontSize: 22,
    marginTop: 30,
    marginLeft: 20,
    textAlign: "center",
    color: "#777",
  },
});

export default class TabViewExample extends Component {
  render() {
    const data = this.props.data;

    return (
      <View style={[styles.container]}>
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
                uri: data.uri,
              }}
            />
          </View>
          <Text style={styles.name}>{data.courseId}</Text>
          <Text style={styles.name}>{data.courseName}</Text>
          <Text style={styles.term}>{data.term}</Text>

          <SafeAreaView>
            <FlatList
              data={tabs}
              keyExtractor={(item) => item.id}
              style={{ transform: [{ translateY: height * 0.3 }] }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() =>
                    this.props.navigation.navigate(item.name, data)
                  }
                >
                  <Text style={styles.title}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
        </View>
      </View>
    );
  }
}
