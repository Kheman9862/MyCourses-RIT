import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import PDFReader from "rn-pdf-reader-js";

const PdfViewer = ({ navigation, route }) => {
  //data = route.params.action
  return (
    <View style={{ flex: 1 }}>
      <PDFReader
        style={{
          height: Dimensions.get("screen").height,
          width: Dimensions.get("screen").width,
        }}
        source={{
          uri:
            "https://vrishabhparmar.netlify.app/resume/Vrishabh_Parmar_Resume.pdf",
        }}
      />
    </View>
  );
};

export default PdfViewer;

const styles = StyleSheet.create({});
