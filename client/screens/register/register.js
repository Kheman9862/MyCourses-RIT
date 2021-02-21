import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";

const Register = (props) => {
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState();

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (error) {
  //       Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
  //     }
  //   }, [error]);

  const registerHandler = async () => {
    try {
      await dispatch(
        authActions.registerUser({
          email,
          password,
          username,
          mobile,
        })
      );
      props.navigation.navigate("Login");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View style={style.container}>
      <View style={{ height: "20%", backgroundColor: "#5000ca" }}>
        <Svg
          height="70%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: 130 }}
        >
          <Path
            fill="#5000ca"
            d="M0,96L48,112C96,128,192,160,288,186.7C384
                ,213,480,235,576,213.3C672,192,768,128,864,
                128C960,128,1056,192,1152,208C1248,224,1344,192,
                1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
                1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
                384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>
      {error ? <Text>{error}</Text> : <Text></Text>}
      <View style={style.formContiner}>
        <View style={style.container}>
          {/* <Text style={style.welcome}>Register </Text> */}

          <TextInput
            style={style.input}
            onChangeText={(username) => setUsername(username)}
            placeholder="Username"
          />

          <TextInput
            style={style.input}
            placeholder="Mobile"
            onChangeText={(mobile) => setMobile(mobile)}
          />
          <TextInput
            style={style.input}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={style.input}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={style.buttonContainer}
            onPress={() => registerHandler()}
          >
            <Text style={style.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const RegisterScreenOptions = (navData) => {
  return {
    headerTitle: "Register",
    headerTitleStyle: {
      textAlign: "center",
    },
    headerLeft: null,
  };
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 100,
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: "lightgrey",
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: "#f76902",
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    color: "#FFF",
  },
});

export default Register;
