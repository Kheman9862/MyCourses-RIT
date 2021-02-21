import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import CourseCard from "./course_card";

import Constants from 'expo-constants';
import CourseContent from "../courseContent/courseContent";
import CourseNavigation from "../courseContent/courseNavigation";


import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import Logout from "../login/logout";


const users = [
  {
    id :1,
     name: 'brynn',
     
     img: 'https://al.nd.edu/assets/380450/1000x562/bacs_code.jpg',

     
  },

  {
    id:2,
    name: 'Vrishabh',
    img: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/09/bUcvrRc-1-796x398.jpg'
 },
  {
    id:3,
    name: 'kheman garg',
    img: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1215151032%2F960x0.jpg%3Ffit%3Dscale'
  },
  {
    id:4,
    name: 'Ayush',
    img: 'https://sciencefordemocracy.org/uploads/2020/09/project_world_science_day_gettyimages-1146644040.jpg'
  }
 ]


const Courses = ({navigation}) => {


  const name = "John"

  return (
    
          <>
          
          
          <View style={styles.container}>
            <CourseNavigation/>
          </View>
          </>
          
   
  );
};



const styles = StyleSheet.create({
  container: {
      flex: 1,
     
      
  }
  ,
  welcomeHeader : {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 20,
  },
  welcomeName : {
    fontSize: 42,
    marginLeft: 20
  }
})


export default Courses;
