import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const fb = "www.fb.com";
const twit = "www.twitter.com";
const link = "www.linkedin.com";
const personal = "www.google.com";

const profile = function App(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Back Arrow and question mark Icons can be removed if not needed  */}
        <View style={{ alignSelf: "center", marginTop: 25 }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../../assets/avatar.jpeg")}
              style={styles.image}
            />
          </View>
          {/* Chat Icon to use for mailing if intended */}
          <View style={styles.dm}>
            <MaterialIcons
              name="chat"
              size={18}
              color="#D0D3D4"
            ></MaterialIcons>
          </View>
          {/* Active Icon to show if a user is active or not can be just placed here without functionality */}
          <View style={styles.active}></View>
          {/* Camera-Reverse Icon can be used to change*/}
          <View style={styles.add}>
            <Ionicons
              name="camera-reverse"
              size={36}
              color="#D0D3D4"
              style={{ marginTop: 0, marginLeft: 1 }}
            ></Ionicons>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.text,
              { fontWeight: "200", fontSize: 24, color: "#F76902" },
            ]}
          >
            First Name Last Name
          </Text>
          <Text
            style={[
              styles.text,
              { color: "#AEB5BC", fontWeight: "200", fontSize: 14 },
            ]}
          >
            @Username
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            {fb.length > 1 ? (
              <Ionicons
                name="logo-facebook"
                size={36}
                color="#1877f2"
                style={{ marginBottom: 0, marginLeft: 0 }}
              ></Ionicons>
            ) : (
              <Ionicons
                name="logo-facebook"
                size={36}
                color="#AEB5BC"
                style={{ marginBottom: 0, marginLeft: 0 }}
              ></Ionicons>
            )}
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            {twit.length > 1 ? (
              <Ionicons
                name="logo-twitter"
                size={36}
                color="#00acee"
                style={{ marginBottom: 0, marginLeft: 0 }}
              ></Ionicons>
            ) : (
              <Ionicons
                name="logo-twitter"
                size={36}
                color="#AEB5BC"
                style={{ marginBottom: 0, marginLeft: 0 }}
              ></Ionicons>
            )}
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            {link.length > 1 ? (
              <Ionicons
                name="logo-linkedin"
                size={36}
                color="#0e76a8"
                style={{ marginBottom: 0, marginLeft: 0 }}
              ></Ionicons>
            ) : (
              <Ionicons
                name="logo-linkedin"
                size={36}
                color="#AEB5BC"
                style={{ marginBottom: 0, marginLeft: 0 }}
              ></Ionicons>
            )}
          </View>
          <View style={styles.statsBox}>
            {personal.length > 1 ? (
              <Ionicons
                name="desktop"
                size={36}
                color="#1687a7"
                style={{ marginBottom: 0, marginLeft: 0 }}
              ></Ionicons>
            ) : (
              <Ionicons
                name="desktop"
                size={36}
                color="#AEB5BC"
                style={{ marginBottom: 0, marginLeft: 0 }}
              ></Ionicons>
            )}
          </View>
        </View>

        <Text style={[styles.subText, styles.recent]}>User Details</Text>
        <View style={{ alignItems: "center" }}>
          <View style={(styles.recentItem, { width: 350 })}>
            <View style={[styles.text]}>
              <Text style={{ fontWeight: "200", color: "#AEB5BC" }}>
                NICKNAME
              </Text>
              <Text style={{ fontWeight: "100", fontSize: 18, color: "#000" }}>
                Student
              </Text>
            </View>
          </View>
          <View style={(styles.recentItem.alignItems, { width: 350 })}>
            <View style={[styles.text]}>
              <Text style={{ fontWeight: "200" }}>HOMETOWN</Text>
              <Text
                style={{ fontWeight: "100", fontSize: 18, color: "#F76902" }}
              >
                Bhilai
              </Text>
            </View>
          </View>
          <View style={(styles.recentItem, { width: 350 })}>
            <View style={[styles.text]}>
              <Text style={{ fontWeight: "200" }}>EMAIL</Text>
              <Text
                style={{ fontWeight: "100", fontSize: 18, color: "#F76902" }}
              >
                aa7120@rit.edu
              </Text>
            </View>
          </View>
          <View style={(styles.recentItem, { width: 350 })}>
            <View style={[styles.text]}>
              <Text style={{ fontWeight: "200" }}>ADDRESS 1</Text>
              <Text
                style={{ fontWeight: "100", fontSize: 18, color: "#F76902" }}
              >
                250 East Squire Dr.
              </Text>
            </View>
          </View>
          <View style={(styles.recentItem, { width: 350 })}>
            <View style={[styles.text]}>
              <Text style={{ fontWeight: "200" }}>ADDRESS 2</Text>
              <Text
                style={{ fontWeight: "100", fontSize: 18, color: "#F76902" }}
              >
                APT 5
              </Text>
            </View>
          </View>
          <View style={(styles.recentItem, { width: 350 })}>
            <View style={[styles.text]}>
              <Text style={{ fontWeight: "200" }}>CITY</Text>
              <Text
                style={{ fontWeight: "100", fontSize: 18, color: "#F76902" }}
              >
                Rochester
              </Text>
            </View>
          </View>
          <View style={(styles.recentItem, { width: 350 })}>
            <View style={[styles.text]}>
              <Text style={{ fontWeight: "200" }}>STATE</Text>
              <Text
                style={{ fontWeight: "100", fontSize: 18, color: "#F76902" }}
              >
                NY
              </Text>
            </View>
          </View>
          <View style={(styles.recentItem, { width: 350 })}>
            <View style={[styles.text]}>
              <Text style={{ fontWeight: "200", color: "#000000" }}>
                PINCODE
              </Text>
              <Text
                style={{ fontWeight: "100", fontSize: 18, color: "#F76902" }}
              >
                14623
              </Text>
            </View>
          </View>
          <View style={(styles.recentItem, { width: 350 })}>
            <View style={[styles.text]}>
              <Text style={{ fontWeight: "200" }}>COUNTRY</Text>
              <Text
                style={{ fontWeight: "100", fontSize: 18, color: "#F76902" }}
              >
                USA
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  text: {
    fontFamily: "Roboto",
    color: "#52575D",
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#DA291C",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 30,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
export default profile;
