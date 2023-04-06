import { TextInput, Button } from "react-native-paper";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "./DatePicker";

const SaddTxtinput = () => {
    const Navigation = useNavigation("");
    const [std_id, setStd_id] = useState("");
    const [std_name, setStd_name] = useState("");
    const [std_address, setStd_address] = useState("");
    const [std_reg_date, setStd_reg_date] = useState("");
    const [std_course, setStd_course] = useState("");
    const [std_image, setStd_image] = useState("");


  return (
    <View>
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
          marginTop: "5%",
          width: "70%",
          marginLeft: "15%",
          backgroundColor: "#fff",
          fontWeight: "bold",
          fontSize: 17,
        }}
        label="Course:"
        value={std_course}
        onChangeText={(text) => setStd_course(text)}
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
        label="Image:"
        value={std_image}
        onChangeText={(text) => setStd_image(text)}
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
    </View>
  );
};

export default SaddTxtinput;
