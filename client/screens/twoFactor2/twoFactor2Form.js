import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const TwoFactor2Form = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcome}>Enter the OTP</Text>
        <TextInput style={styles.input} placeholder="otp" />

        {/* <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.push("AppNavigation")}
        > */}
        {/* <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 60,
  },
  input: {
    height: 40,
    backgroundColor: "lightgrey",
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 10,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  buttonContainer: {
    backgroundColor: "#f76902",
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    color: "#FFF",
  },
});

export default TwoFactor2Form;
