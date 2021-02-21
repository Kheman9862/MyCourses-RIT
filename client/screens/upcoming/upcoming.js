import React from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { data } from "./upcomingData";

import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import Logout from "../login/logout";

const upcoming = (props) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    marginBottom: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    flex: 1,
                    height: 120,
                    width: "100%",
                    backgroundColor: "#eee",
                  }}
                >
                  <Text
                    style={{
                      marginTop: 20,
                      fontWeight: "bold",
                      color: "#666",
                      fontSize: 15,
                      marginLeft: 20,
                    }}
                  >
                    {item.assignmentName}
                  </Text>
                  <Text style={{ marginLeft: 15 }}>{item.submissionDate}</Text>
                  <Text
                    style={{ fontWeight: "700", fontSize: 15, marginLeft: 15 }}
                  >
                    {item.coursename}
                  </Text>
                </View>
              );
            }}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

export default upcoming;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    width: "100%",
  },

  bold: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
