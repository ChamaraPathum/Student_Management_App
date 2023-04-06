import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const StdGet = () => {
  const [deta, setDeta] = useState([]);

  const onpress = () => {
    fetch("http://192.168.43.227:5000/student" +std_id)
      .then((response) => response.json())
      .then((json) => {
        json.map((val) => {
          console.log(json), console.log(val), setDeta(val);
        });
      });
   
  };

return(
    <View>
        
        <TextInput
              label="name:"
              value={std_name}
              onChangeText={(text) => setId(text)}
            />

    </View>
);


};
