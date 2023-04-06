import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import { TextInput, Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Uadd = () => {
  const Navigation = useNavigation("");
  const [user_id, setUser_id] = useState("");
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_password, setUser_password] = useState("");

  const onPress = () => {
    fetch("http://192.168.43.227:5000/users", {
      method: "POST",
      body: JSON.stringify({
        user_id: user_id,
        user_name: user_name,
        user_email: user_email,
        user_password: user_password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) =>
        response.json(Alert.alert("Succussfull", "User Saved Successfully"))
      )
      .then((json) => console.log(json));
  };

  return (
    <View>
      <ImageBackground
        source={require("../images/Nback.png")}
        style={{ height: "100%" }}
      >
        <Image
          source={require("../images/user.png")}
          style={{
            width: "20%",
            height: "20%",
            marginLeft: "40%",
            marginTop: "5%",
          }}
        />

        {/* //////////////////txt input////////////////////////////     */}
        <TextInput
          style={{
            marginTop: "5%",
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight: "bold",
            fontSize: 17,
          }}
          label="User ID:"
          value={user_id}
          onChangeText={(text) => setUser_id(text)}
          mode="flat"
        />

        <TextInput
          style={{
            marginTop: "5%",
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight: "bold",
            fontSize: 17,
          }}
          label="User Name:"
          value={user_name}
          onChangeText={(text) => setUser_name(text)}
        />

        <TextInput
          style={{
            marginTop: "5%",
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight: "bold",
            fontSize: 17,
          }}
          label="User email:"
          value={user_email}
          onChangeText={(text) => setUser_email(text)}
        />

        <TextInput
          style={{
            marginTop: "5%",
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight: "bold",
            fontSize: 17,
          }}
          label="Password:"
          value={user_password}
          onChangeText={(text) => setUser_password(text)}
        />

        <Button
          style={{ width: "30%", marginTop: "5%", marginLeft: "15%" }}
          mode="contained-tonal"
          onPress={onPress}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Register</Text>
        </Button>

        <TouchableOpacity
          onPress={() => {
            Navigation.navigate("User");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: "-8%",
              fontSize: 18,
              fontWeight: "bold",
              fontStyle: "italic",
              marginLeft: "45%",
            }}
          >
            Back to User...
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Uadd;
