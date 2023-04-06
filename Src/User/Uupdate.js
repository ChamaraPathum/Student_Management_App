import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Uupdate = ({ route }) => {
  const id = route.params.id;
  const name = route.params.name;
  const email = route.params.email;
  const password = route.params.password;

  const [user_name, setUser_name] = useState(name);
  const [user_email, setUser_email] = useState(email);
  const [user_password, setUser_password] = useState(password);

  const Navigation = useNavigation("");

  const onPress = () => {
    fetch("http://192.168.43.227:5000/users/" + id, {
      method: "PUT",
      body: JSON.stringify({
        user_id: id,
        user_name: user_name,
        user_email: user_email,
        user_password: user_password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) =>
        response.json(Alert.alert("Succussfull", "User Saved Succussfully"))
      )
      .then((json) => console.log(json));
  };

  return (
    <View>
      <ImageBackground
        source={require("../images/greenbackground.png")}
        style={{ height: "100%" }}
      >
        {/* //////////////////////////Headr ID/////////////////////////////////////////         */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "gray",
            marginTop: "3.5%",
            borderColor: "gray",
            borderWidth: 2,
            width: 150,
            marginLeft: "32%",
          }}
        >
          User ID: {id}
        </Text>

        <Text
          style={{
            fontStyle: "italic",
            textAlign: "center",
            marginTop: "3%",
            fontSize: 18,
            color: "gray",
          }}
        >
          You can change the details
        </Text>
        {/* ///////////////////////txt input add/////////////////////////////////////////// */}
        <TextInput
          style={{
            marginTop: "5%",
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight: "bold",
            fontSize: 17,
          }}
          label="New User Name:"
          value={user_name}
          onChangeText={(text) => setUser_name(text)}
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
          label="New User email:"
          value={user_email}
          onChangeText={(text) => setUser_email(text)}
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
          label="New User Password:"
          value={user_password}
          onChangeText={(text) => setUser_password(text)}
          mode="flat"
        />

        <Button
          style={{ width: "30%", marginTop: "5%", marginLeft: "15%" }}
          mode="contained-tonal"
          onPress={onPress}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Save</Text>
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

export default Uupdate;
