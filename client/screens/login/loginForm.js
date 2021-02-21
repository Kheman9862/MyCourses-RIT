import React from "react";
import { useState } from "react";
import { Dimensions } from "react-native";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    <View style={styles.container}>
      {error ? <Text>{error}</Text> : <Text></Text>}
      <View  style={{flex:1, justifyContent:"center", }}>
        

        <Text style={{textAlign:"left", fontSize: 32, marginBottom: 10, fontWeight:'700', color:"#777" }}>Login</Text>
        
        <View style={{}}>
        
          <MaterialCommunityIcons name="email" size={24} color="#777" 
            style={{position:"absolute", right:5, bottom:25}} />

          <TextInput
              style={styles.input}
              placeholder= "Enter Email"
              onChangeText={(email) => setEmail(email)}
              inlineImageLeft="username"
              inlineImagePadding={2}
              underlineColorAndroid="transparent"


            />

            
            
        </View>
         
        
       

        <View>
        <MaterialCommunityIcons name="form-textbox-password" size={24} color="#777" 
        style={{position:"absolute", right:5, bottom:25}}/>

        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          underlineColorAndroid="transparent"
          
        />

        </View>
        
        
       

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => loginHandler()}
          //   onPress={() => navigation.push("AppNavigation")}
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{color:"red"}}
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={{textAlign:"center", color:"#f76902"}}>Not a User ? Register here </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:"center",
      alignSelf:"center",
      width:Dimensions.get('window').width*0.85,
      
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",

    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: "transparent",
    marginBottom: 20,
    color: "#777",
    paddingHorizontal: 10,
    borderRadius: 0,
    shadowColor: "#000",
    borderBottomColor: "#777",
    borderBottomWidth: 2,
    fontSize:16

    
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

export default LoginForm;
