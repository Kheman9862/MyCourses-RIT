import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import profileScreen from "../screens/profile/profile";
import courseScreen from "../screens/courses/courses";
import courseDetailScreen from "../screens/courses/course/course";
import { CoursesScreenOptions } from "../screens/courses/courses";
import { Messaging } from "../screens/messaging/messaging";

import LoginScreen, { LoginScreenOptions } from "../screens/login/login";
import RegisterScreen, {
  RegisterScreenOptions,
} from "../screens/register/register";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultNavOptions = {
  headerShown: false,
};

const CourseStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Course"
        component={courseScreen}
        options={CoursesScreenOptions}
      />
      <Stack.Screen name="CourseDetail" component={courseDetailScreen} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen name="Profile" component={profileScreen} />
    </Stack.Navigator>
  );
};

const MessagingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen name="Message" component={Messaging} />
    </Stack.Navigator>
  );
};

//BottomTabNavigator
const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Course") {
            iconName = "book";
          } else if (route.name === "Profile") {
            iconName = "person";
          } else if (route.name === "Message") {
            iconName = "chatbubbles";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#F76902",
        inactiveTintColor: "gray",
      }}
      initialRouteName={"Course"}
    >
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      <Tab.Screen
        options={{ title: "Courses" }}
        name="Course"
        component={CourseStackNavigator}
      />
      <Tab.Screen name="Message" component={MessagingStackNavigator} />
    </Tab.Navigator>
  );
};

// function CustomHeader() {  Will introduce Drawer component later...... If needed
//   return (
//     // <DrawerContentScrollView {...props}>
//     //   <DrawerItemList {...props} />
//     //   <DrawerItem
//     //     label="Close drawer"
//     //     onPress={() => props.navigation.closeDrawer()}
//     //   />
//     //   <DrawerItem
//     //     label="Toggle drawer"
//     //     onPress={() => props.navigation.toggleDrawer()}
//     //   />
//     // </DrawerContentScrollView>
//     <View style={{flexDirection:'row',height:50,borderWidth:1,borderColor:'red'}}>
//       <View style={{flex:1,borderWidth:1,borderColor:'red'}}>

//       </View>
//       <View style={{flex:1.5,justifyContent:"center",borderWidth:1,borderColor:'red'}}></View>
//       <Text style={{textAlign:"center"}}>RIT</Text>
//       <View style={{flex:1,borderWidth:1,borderColor:'red'}}></View>
//     </View>
//   );
// }

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={LoginScreenOptions}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={RegisterScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
