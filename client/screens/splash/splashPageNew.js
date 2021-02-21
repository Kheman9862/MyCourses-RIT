import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch } from "react-redux";
import * as splashAction from "../../store/actions/splashAction";

function SplashPageNew() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(splashAction.splashFlag(false));
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.text}
        iterationDelay={1000}
        animation="zoomIn"
        iterationCount={1}
        direction="alternate"
      >
        R I T
      </Animatable.Text>

      <Animatable.View
        style={styles.dot}
        animation="bounceInDown"
        iterationCount={1}
        iterationDelay={2000}
        direction="alternate"
      ></Animatable.View>

      <Animatable.Text
        style={styles.box}
        animation="fadeInRight"
        iterationCount={2}
        direction="alternate"
      ></Animatable.Text>

      <Animatable.Text
        style={styles.mycourseText}
        iterationDelay={1500}
        animation="zoomIn"
        iterationCount={1}
        direction="alternate"
      >
        MY COURSES
      </Animatable.Text>

      <Animatable.Text
        style={styles.mycoursebox}
        iterationDelay={1000}
        animation="fadeInRight"
        iterationCount={2}
        direction="alternate"
      ></Animatable.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f76902",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    width: 200,
    fontFamily: "sans-serif-condensed",
  },
  box: {
    fontSize: 32,
    backgroundColor: "red",
    width: 200,

    marginTop: -28,
  },

  mycourseText: {
    marginTop: 15,
    color: "black",
    fontSize: 14,

    width: 200,
    letterSpacing: 8,
  },
  mycoursebox: {
    fontSize: 30,
    backgroundColor: "black",
    width: 200,

    marginTop: -30,
  },

  dot: {
    width: 10,
    height: 10,
    backgroundColor: "#009CBD",
    marginTop: -20,
    marginLeft: -50,
    borderRadius: 5,
  },
});

export default SplashPageNew;
