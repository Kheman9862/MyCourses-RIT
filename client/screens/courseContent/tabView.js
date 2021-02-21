import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBar from "react-native-underline-tabbar";
import AssignmentInfo from "./contentBox/assignmentInfo";
import ContentInfo from "./contentBox/contentInfo";
import UpComingEvents from "./contentBox/upcomingEvents";
import ClassList from "./contentBox/classList";

const Assignment = ({ label, navigation }) => (
  <View style={styles.container}>
    <AssignmentInfo navigation={navigation} />
  </View>
);

const Content = ({ label, navigation,contentItem }) => (
  <View style={styles.container}>
    <ContentInfo navigation={navigation} contentItem={contentItem} />
  </View>
);

const Class = ({ label, navigation }) => (
  <View style={styles.container}>
    <ClassList navigation={navigation} />
  </View>
);

const Calender = ({ label, navigation }) => (
  <View style={styles.container}>
    <UpComingEvents navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 32,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontSize: 32,
  },
});

export default class TabViewExample extends Component {
  render() {
    return (
      <View style={[styles.container, { paddingTop: 20 }]}>
        <ScrollableTabView
          tabBarActiveTextColor="#53ac49"
          tabBarTextStyle={{ fontSize: 10 }}
          renderTabBar={() => <TabBar underlineColor="#53ac49" />}
        >
          <Content
            navigation={this.props.navigation}
            contentItem={this.props.data._id}
            tabLabel={{ label: "Content" }}
            label="Page #2 aka Long!"
          />
          <Assignment
            navigation={this.props.navigation}
            tabLabel={{ label: "Assignment" }}
            label="Assignment"
          />

          <Class
            navigation={this.props.navigation}
            tabLabel={{ label: "ClassList" }}
            label="Page #3"
          />
          <Calender
            navigation={this.props.navigation}
            tabLabel={{ label: "Up Coming Events" }}
            label="Page #4 aka Page"
          />
        </ScrollableTabView>
      </View>
    );
  }
}
