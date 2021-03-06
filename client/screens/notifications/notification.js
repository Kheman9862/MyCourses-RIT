import React from "react";
import { View, Text } from "react-native";


import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import Logout from "../login/logout";

const notification = (props) => {
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
        <View style={{position:"absolute", right:0, top:40,}}>
            <Logout/>
      </View>
      </View>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is notification</Text>
    </View>
    </>
  );
};

export default notification;
