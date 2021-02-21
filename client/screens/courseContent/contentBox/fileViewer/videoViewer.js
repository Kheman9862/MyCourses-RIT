import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

const VideoViewer = ({ navigation, route }) => {
  data = route.params.action;

  return (
    <View>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: data,
          },
        }}
        inFullscreen={false}
      />
    </View>
  );
};

export default VideoViewer;

const styles = StyleSheet.create({});
