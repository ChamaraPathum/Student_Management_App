import React, { useState } from "react";
import { View, Text, TouchableOpacity,StyleSheet} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Udelete = () => {
  const onPress = () => {
    fetch("http://192.168.1.100:5000/users/" + user_id, {
      method: "DELETE",
    });
  };

  const navigation = useNavigation();
  const [user_id, setUser_id] = useState("");

  return (
    <View>
      <TextInput
        style={styles.Uid}
        label="Enter User ID:"
        value={user_id}
        onChangeText={(text) => setUser_id(text)}
      />

      <Button style={styles.Ubtn} mode="contained-tonal" onPress={onPress}>
        <Text style={{ fontWeight: "bold" }}>DELETE</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
    Uid: {
      width: "60%",
      marginLeft: "20%",
      marginTop: "10%",
      fontWeight: "bold",
      backgroundColor:"#ff3d74",
    },
  
    Ubtn: {
      width: "24%",
      marginLeft: "38%",
      marginTop: "5%",
      backgroundColor: "red",
      fontWeight: "bold",
    },
  });

export default Udelete;
