import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



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
      
     
      {error ? <Text>{error}</Text> : <Text></Text>}
      <View style={style.formContiner}>
        <View >

        <Text style={{textAlign:"left", fontSize: 32, marginBottom: 10, fontWeight:'700', color:"#777" }}>
          Register
          </Text>


          {/* username */}

          <View>

          <AntDesign name="user" size={24} color="#777" 
          style={{position:"absolute", right:5, bottom:30}}/>
          <TextInput
            style={style.input}
            onChangeText={(username) => setUsername(username)}
            placeholder="Username"
          />
          </View>

         
          {/* mobile */}
          <View>
          <AntDesign name="mobile1" size={24} color="#777" style={{position:"absolute", right:5, bottom:30}} />
          <TextInput
            style={style.input}
            placeholder="Mobile"
            onChangeText={(mobile) => setMobile(mobile)}
          />
          </View>
         

          {/* email */}

          <View>

          <MaterialIcons name="email" size={24} color="#777" style={{position:"absolute", right:5, bottom:30}} />          
          <TextInput
            style={style.input}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          />
          </View>


          {/* password */}

          <View>
          <MaterialCommunityIcons name="form-textbox-password" size={24} color="#777"
          style={{position:"absolute", right:5, bottom:30}} />

          <TextInput
            style={style.input}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
          </View>
         
          

          <TouchableOpacity
            style={style.buttonContainer}
            onPress={() => registerHandler()}
          >
            <Text style={style.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity
           
            onPress={() => props.navigation.navigate("Login") }
          >
            <Text  style={{color: "#f76902", textAlign:"center"}}>Already a User? Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </>
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
   flex: 1,
   justifyContent: "center",
   alignSelf:"center",
   width:Dimensions.get('window').width*0.85,
   
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: "transparent",
    marginBottom: 20,
    color: "#777",
    paddingLeft: 20,
    borderRadius: 0,
    shadowColor: "#000",
    borderBottomColor: "#777",
    borderBottomWidth: 1.5,
    fontSize: 16,
    
    
  },
  buttonContainer: {
    width:Dimensions.get('screen').width*0.7,
    backgroundColor: "#f76902",
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 15,
    alignSelf:"center",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    color: "#FFF",
    
    
    
  },
});

export default Register;
