import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";

export default function Navbar() {
  const navigation = useNavigation();

  const { themeHandler, currentMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        width: "100vw",
        height: "8vh",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center',
        padding: 8,
        paddingRight:15,
        backgroundColor: `${currentMode==='false'?'dodgerblue':'black'}`,
        borderBottomColor: "gray",
        borderWidth: 1,
        boxShadow: "5px 5px 5px gray",
      }}
    >
      <Text style={{ color: "white", fontWeight: "900" }}>TODO</Text>

      <View>
        <Pressable onPress={() => themeHandler()}>
          <Text style={{color:'white', userSelect:'none'}}>{currentMode === "false" ? "Dark Mode" : "Light Mode"}</Text>
        </Pressable>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          gap: 5,
          margin: 12,
        }}
      >
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text style={{ color: "white", fontWeight: "600" }}>Home</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("About")}>
          <Text style={{ color: "white", fontWeight: "600" }}>About</Text>
        </Pressable>
      </View>
    </View>
  );
}
