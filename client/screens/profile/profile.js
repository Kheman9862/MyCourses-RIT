import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Linking,
  View,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import * as profileActions from "../../store/actions/profileAction";
import Colors from "../../UI/Colors";
import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import Logout from "../login/logout";

const profile = function App(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.profile.loading);

  useEffect(() => {
    const userProfile = async () => {
      await dispatch(profileActions.getCurrentProfile());
    };
    userProfile();
  }, [dispatch]);

  const profile = useSelector((state) => state.profile.profile);

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
        <View style={{ position: "absolute", right: 0, top: 40 }}>
          <Logout />
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Back Arrow and question mark Icons can be removed if not needed  */}

              <View style={{ alignSelf: "center", marginTop: 30 }}>
                <View style={styles.profileImage}>
                  <Image
                    source={{ uri: profile.profile_pic }}
                    style={styles.image}
                  />
                </View>
              </View>

              <View style={styles.infoContainer}>
                <Text
                  style={[
                    styles.text,
                    { fontWeight: "700", fontSize: 24, color: "#777" },
                  ]}
                >
                  {profile.firstname} {profile.lastname}
                </Text>
                <Text
                  style={[
                    styles.text,
                    { color: "#777", fontWeight: "200", fontSize: 14 },
                  ]}
                >
                  {profile.user.username}
                </Text>
              </View>

              <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                  {profile.facebook ? (
                    <Text onPress={() => Linking.openURL(profile.facebook)}>
                      <Ionicons
                        name="logo-facebook"
                        size={36}
                        color="#1877f2"
                        style={{ marginBottom: 0, marginLeft: 0 }}
                      ></Ionicons>
                    </Text>
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
                  {profile.twitter ? (
                    <Text onPress={() => Linking.openURL(profile.twitter)}>
                      <Ionicons
                        name="logo-twitter"
                        size={36}
                        color="#00acee"
                        style={{ marginBottom: 0, marginLeft: 0 }}
                      ></Ionicons>
                    </Text>
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
                  {profile.linkedin ? (
                    <Text onPress={() => Linking.openURL(profile.linkedin)}>
                      <Ionicons
                        name="logo-linkedin"
                        size={36}
                        color="#0e76a8"
                        style={{ marginBottom: 0, marginLeft: 0 }}
                      ></Ionicons>
                    </Text>
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
                  {profile.personal_website ? (
                    <Text
                      onPress={() => Linking.openURL(profile.personal_website)}
                    >
                      <Ionicons
                        name="desktop"
                        size={36}
                        color="#1687a7"
                        style={{ marginBottom: 0, marginLeft: 0 }}
                      ></Ionicons>
                    </Text>
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

              {/* <Text style={[styles.subText, styles.recent]}>User Details</Text> */}
              <View
                style={{ alignSelf: "center", paddingLeft: 25, paddingTop: 20 }}
              >
                <View style={(styles.recentItem, { width: 350 })}>
                  <View style={[styles.text]}>
                    <Text style={{ fontWeight: "200" }}>NICKNAME</Text>
                    <Text
                      style={{
                        fontWeight: "100",
                        fontSize: 18,
                        color: "#AEB5BC",
                      }}
                    >
                      {profile.nickname}
                    </Text>
                  </View>
                </View>
                <View style={(styles.recentItem.alignItems, { width: 350 })}>
                  <View style={[styles.text]}>
                    <Text style={{ fontWeight: "200" }}>HOMETOWN</Text>
                    <Text
                      style={{
                        fontWeight: "100",
                        fontSize: 18,
                        color: "#AEB5BC",
                      }}
                    >
                      {profile.hometown}
                    </Text>
                  </View>
                </View>
                <View style={(styles.recentItem, { width: 350 })}>
                  <View style={[styles.text]}>
                    <Text style={{ fontWeight: "200" }}>EMAIL</Text>
                    <Text
                      style={{
                        fontWeight: "100",
                        fontSize: 18,
                        color: "#AEB5BC",
                      }}
                    >
                      {profile.user.email}
                    </Text>
                  </View>
                </View>
                <View style={(styles.recentItem, { width: 350 })}>
                  <View style={[styles.text]}>
                    <Text style={{ fontWeight: "200" }}>ADDRESS 1</Text>
                    <Text
                      style={{
                        fontWeight: "100",
                        fontSize: 18,
                        color: "#AEB5BC",
                      }}
                    >
                      {profile.address1}
                    </Text>
                  </View>
                </View>
                <View style={(styles.recentItem, { width: 350 })}>
                  <View style={[styles.text]}>
                    <Text style={{ fontWeight: "200" }}>ADDRESS 2</Text>
                    <Text
                      style={{
                        fontWeight: "100",
                        fontSize: 18,
                        color: "#AEB5BC",
                      }}
                    >
                      {profile.address2}
                    </Text>
                  </View>
                </View>
                <View style={(styles.recentItem, { width: 350 })}>
                  <View style={[styles.text]}>
                    <Text style={{ fontWeight: "200" }}>CITY</Text>
                    <Text
                      style={{
                        fontWeight: "100",
                        fontSize: 18,
                        color: "#AEB5BC",
                      }}
                    >
                      {profile.city}
                    </Text>
                  </View>
                </View>
                <View style={(styles.recentItem, { width: 350 })}>
                  <View style={[styles.text]}>
                    <Text style={{ fontWeight: "200" }}>STATE</Text>
                    <Text
                      style={{
                        fontWeight: "100",
                        fontSize: 18,
                        color: "#AEB5BC",
                      }}
                    >
                      {profile.state}
                    </Text>
                  </View>
                </View>
                <View style={(styles.recentItem, { width: 350 })}>
                  <View style={[styles.text]}>
                    <Text style={{ fontWeight: "200", color: "#000000" }}>
                      PINCODE
                    </Text>
                    <Text
                      style={{
                        fontWeight: "100",
                        fontSize: 18,
                        color: "#AEB5BC",
                      }}
                    >
                      {profile.pincode}
                    </Text>
                  </View>
                </View>
                <View style={(styles.recentItem, { width: 350 })}>
                  <View style={[styles.text]}>
                    <Text style={{ fontWeight: "200" }}>COUNTRY</Text>
                    <Text
                      style={{
                        fontWeight: "100",
                        fontSize: 18,
                        color: "#AEB5BC",
                      }}
                    >
                      {profile.country}
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    marginTop: Dimensions.get("screen").height * 0.03,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
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
