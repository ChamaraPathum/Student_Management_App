import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { DatePickerInput } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { en, registerTranslation } from "react-native-paper-dates";
registerTranslation("en", en);

const Sadd = () => {
  const Navigation = useNavigation("");
  const [std_id, setStd_id] = useState("");
  const [std_name, setStd_name] = useState("");
  const [std_address, setStd_address] = useState("");
  const [std_course, setStd_course] = useState("");
  const [std_reg_date, setStd_reg_date] = useState("");


  const onPress = () => {
    fetch("http://192.168.43.227:5000/students", {
      method: "POST",
      body: JSON.stringify({
        std_id: std_id,
        std_name: std_name,
        std_address: std_address,
        std_course: std_course,
        std_reg_date: std_reg_date,
     
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) =>
        response.json(Alert.alert("Succussfull", "Student Saved Successfully"))
      )
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <ImageBackground
        source={require("../images/greenbackground.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <TextInput
          style={{
            marginTop: "10%",
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight: "bold",
            fontSize: 17,
          }}
          label="Student ID:"
          value={std_id}
          onChangeText={(text) => setStd_id(text)}
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
          label="Student Name:"
          value={std_name}
          onChangeText={(text) => setStd_name(text)}
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
          label="Student address:"
          value={std_address}
          onChangeText={(text) => setStd_address(text)}
        />

        <TextInput
          style={{
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight: "bold",
            fontSize: 17,
            marginTop: "6%",
          }}
          label="Course:"
          value={std_course}
          onChangeText={(text) => setStd_course(text)}
        />

        {/* ////DatePicker add///////////////////// */}
        <SafeAreaProvider>
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              alignItems: "center",
              marginTop: "-30%",
            }}
          >
            <DatePickerInput
              mode="date"
              locale="en"
              label="Registerd Date"
              value={std_reg_date}
              onChange={(d) => setStd_reg_date(d)}
              inputMode="start"
              format="YYYY/MM/DD"
              style={{ backgroundColor: "#fff", width: "70%" }}
            />
          </View>
        </SafeAreaProvider>

        <Button
          style={{ width: "30%", marginTop: "5%", marginLeft: "15%" }}
          mode="contained-tonal"
          onPress={onPress}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Register</Text>
        </Button>

        <TouchableOpacity
          onPress={() => {
            Navigation.navigate("DrawerNav");
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
            Back to Home...
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Sadd;
