import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";

const LoginForm = (props) => {
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = async () => {
    try {
      await dispatch(
        authActions.loginUser({
          email,
          password,
        })
      );
      //   props.navigation.navigate("Login");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View>
      {error ? <Text>{error}</Text> : <Text></Text>}
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Login</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => loginHandler()}
          //   onPress={() => navigation.push("AppNavigation")}
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
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

export default LoginForm;
