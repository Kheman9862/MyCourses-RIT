import React from "react";
import { Pressable, Dimensions } from "react-native";
import { Text, View, StyleSheet, Image } from "react-native";
import LoginForm from "./loginForm";
import Svg, { Path } from "react-native-svg";

function Login({ navigation }) {
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
      </View>
      <View style={style.container}>
        <View style={style.formContainer}>
          <View style={style.logoContainer}>
            {/* <Image
                        source={require('../../assets/login-icon.png')}
                        style={style.logo}
                    /> */}
          </View>

          <LoginForm navigation={navigation} />
        </View>
      </View>
    </>
  );
}

export const LoginScreenOptions = (navData) => {
  return {
    headerTitle: "Login",
    headerTitleStyle: {
      textAlign: "center",
    },
  };
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    marginTop: -50,
  },
  formContainer: {
    marginVertical: 200,
  },

  logo: {
    width: 100,
    height: 100,
  },
});

export default Login;
