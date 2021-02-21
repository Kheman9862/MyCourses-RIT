import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import HeaderButton from "../../UI/HeaderButton";
import * as authActions from "../../store/actions/auth";
const Logout = (props) => {
  const dispatch = useDispatch();
  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Cart"
        iconName="md-log-out"
        onPress={() => {
          dispatch(authActions.logoutUser());
        }}
      />
    </HeaderButtons>
  );
};

export default Logout;
