import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import PDFReader from "rn-pdf-reader-js";

const PdfViewer = ({ navigation, route }) => {
  data = route.params.action;
  return (
    <View style={{ flex: 1 }}>
      <PDFReader
        style={{
          height: Dimensions.get("screen").height,
          width: Dimensions.get("screen").width,
        }}
        source={{
          uri: data,
        }}
      />
    </View>
  );
};

export default PdfViewer;

const styles = StyleSheet.create({});
