import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");

  return (
    <View>
      <ImageBackground
        source={require("../Src/images/first.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <Image
          source={require("./images/computer.png")}
          style={{
            width: "80%",
            height: "35%",
            marginTop: "15%",
            marginLeft: "9%",
          }}
        />

        <TextInput
          style={styles.txtIn1}
          label="User Name:"
          secureTextEntry
          right={<TextInput.Icon icon="face-man-shimmer" />}
        />

        <TextInput
          style={styles.txtIn2}
          label="Password:"
          secureTextEntry
          right={<TextInput.Icon icon="account-eye" />}
        />

        <Button
          style={{
            width: "30%",
            marginLeft: "35%",
            marginTop: "5%",
            backgroundColor: "#f7a45c",
          }}
          mode="contained-tonal"
          onPress={() => {
            navigation.navigate("DrawerNav");
          }}
        >
          <Text
            style={{ fontSize: 18, fontStyle: "italic", fontWeight: "bold" }}
          >
            Login
          </Text>
        </Button>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  txtIn1: {
    width: "60%",
    marginLeft: "20%",
    marginTop: "10%",
  },

  txtIn2: {
    width: "60%",
    marginLeft: "20%",
    marginTop: "8%",
  },
});
