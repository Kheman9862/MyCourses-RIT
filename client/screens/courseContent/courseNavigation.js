import React from "react";
import { View, Text } from "react-native";

import CourseContent from "./courseContent";
import SingleCourseContent from "./singleCourseContent";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AssignmentInfo from "./contentBox/assignmentInfo";
import ContentInfo from "./contentBox/contentInfo";
import ClassList from "./classList/classList";
import UpComingEvents from "./contentBox/upcomingEvents";
import WeekContent from "./contentBox/weekContent";
import VideoViewer from "./contentBox/fileViewer/videoViewer";
import PdfViewer from "./contentBox/fileViewer/pdfViewer";
import ProfileClassList from "./classList/profile";

enableScreens();

const Stack = createStackNavigator();

export default function CourseNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="CourseContent"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="CourseContent" component={CourseContent} />

        <Stack.Screen
          name="SingleCourseContent"
          component={SingleCourseContent}
        />

        <Stack.Screen name="Content" component={ContentInfo} />
        <Stack.Screen name="Assignment" component={AssignmentInfo} />
        <Stack.Screen name="ClassList" component={ClassList} />
        <Stack.Screen name="UpComing Events" component={UpComingEvents} />
        <Stack.Screen name="WeekContent" component={WeekContent} />
        <Stack.Screen name="Video" component={VideoViewer} />
        <Stack.Screen name="Pdf" component={PdfViewer} />
        <Stack.Screen name="ProfileClassList" component={ProfileClassList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
