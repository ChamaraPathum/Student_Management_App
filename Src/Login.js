import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";

const Login = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");

  return (
    <View>
      <ImageBackground
        source={require("../Src/images/display2.png")}
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
        <Text
          style={{
            marginTop: 10,
            marginLeft: 30,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
        <View style={{ flexDirection: "row", marginTop: -30 }}>
          <Feather
            name="user"
            style={{ fontSize: 20, marginTop: 43.5, marginLeft: 70 }}
          />
          <TextInput style={styles.txtIn1} label="User Name:" secureTextEntry />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Feather
            name="key"
            style={{ fontSize: 20, marginTop: 16, marginLeft: 70 }}
          />
          <TextInput style={styles.txtIn2} label="Password:" secureTextEntry />
        </View>

        <Button
          style={{
            width: "60%",
            marginLeft: "22%",
            marginTop: "5%",
            backgroundColor: "#6dfc74",
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

        <Text
          style={{
            marginLeft: "52%",
            fontSize: 18,
            marginTop: "1%",
            fontWeight: "bold",
            fontStyle: "italic",
            marginBottom: "1%",
          }}
        >
          or
        </Text>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity>
            <View style={{ flex: 1, marginLeft: "19%" }}>
              <Image
                source={require("./images/icons8-facebook-48.png")}
                style={{ width: 30, height: 30, marginLeft: "47%" }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flex: 2, marginLeft: "-12%" }}>
              <Image
                source={require("./images/icons8-google-48.png")}
                style={{ width: 30, height: 30, marginLeft: -58 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flex: 1, marginLeft: "-8%" }}>
              <Image
                source={require("./images/icons8-github-64.png")}
                style={{ width: 30, height: 30, marginLeft: "0%" }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  txtIn1: {
    width: "60%",
    marginLeft: "0%",
    marginTop: "6%",
    backgroundColor: null,
    fontSize: 15,
    fontWeight: "bold",
  },

  txtIn2: {
    width: "60%",
    marginLeft: "0%",
    marginTop: "-1%",
    backgroundColor: null,
    fontSize: 15,
    fontWeight: "bold",
    borderBottomColor: "red",
  },
});
