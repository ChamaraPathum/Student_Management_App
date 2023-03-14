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

const Supdate = ({ route }) => {
  const sid = route.params.id;
  const name = route.params.name;
  const address = route.params.address;
  const date = route.params.date;
  const course = route.params.course;
  const image = route.params.image;

  const [std_name, setStd_name] = useState(name);
  const [std_address, setStd_address] = useState(address);
  const [std_reg_date, setStd_reg_date] = useState(date);
  const [std_course, setStd_course] = useState(course);
  const [std_image, setStd_image] = useState(image);

  const Navigation = useNavigation("");

  console.log(name);
  console.log(sid);
  console.log(address);
  console.log(date);
  console.log(course);

  const onPress = async () => {
    fetch("http://192.168.1.100:5000/students/" + sid, {
      method: "PUT",
      body: JSON.stringify({
        std_id: sid,
        std_name: std_name,
        std_address: std_address,
        std_reg_date: std_reg_date,
        std_course: std_course,
        std_image: std_image,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) =>
        res.json(Alert.alert("Succusfull!", "Student update succusfully"))
      )
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <ImageBackground
        source={require("../images/background.jpg")}
        style={{ height: "100%" }}
      >
 {/* ////////////////////Header ID///////////////////////    */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: "3.5%",
            borderColor: "white",
            borderWidth: 2,
            width: 150,
            marginLeft: "32%",
          }}
        >
          Student ID: {sid}
        </Text>

        <Text style={{fontStyle:'italic',textAlign:'center',marginTop:'3%',fontSize:18,color:"#a5b6c4"}}>You can change the details</Text>
{/* ///////////////////////////////////////////////////////// */}

{/* //////////////////////Txt Input///////////////////////////////// */}
        <TextInput
          style={{
            marginTop: "5%",
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight:'bold',
            fontSize:17
          }}
          label="Student Name:"
          value={std_name}
          onChangeText={(text) => setStd_name(text)}
          mode="flat"
        />

        <TextInput
          style={{
            marginTop: "5%",
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight:'bold',
            fontSize:17
          }}
          label="New Student address:"
          value={std_address}
          onChangeText={(text) => setStd_address(text)}
          mode="flat"
        />

        <TextInput
          style={{
            marginTop: "5%",
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight:'bold',
            fontSize:17
          }}
          label="Register date:"
          value={std_reg_date}
          onChangeText={(text) => setStd_reg_date(text)}
          mode="flat"
        />

        <TextInput
          style={{
            marginTop: "5%",
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight:'bold',
            fontSize:17
          }}
          label="Course:"
          value={std_course}
          onChangeText={(text) => setStd_course(text)}
          mode="flat"
        />

        <TextInput
          style={{
            marginTop: "5%",
            width: "70%",
            marginLeft: "15%",
            backgroundColor: "#fff",
            fontWeight:'bold',
            fontSize:17
          }}
          label="Image:"
          value={std_image}
          onChangeText={(text) => setStd_image(text)}
          mode="flat"
        />

{/* /////////////////Btn Add//////////////////////////////////////////// */}
        <Button
          style={{ width: "30%", marginTop: "5%", marginLeft: "15%" }}
          mode="contained-tonal"
          onPress={onPress}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Save</Text>
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

export default Supdate;
