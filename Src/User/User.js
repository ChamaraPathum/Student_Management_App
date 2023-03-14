import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,Alert
} from "react-native";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const User = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const Loaddate = () => {
    fetch("http://192.168.1.100:5000/users")
      .then((response) => response.json())

      .then((json) => setData(json));
  };

  useEffect(() => {
    Loaddate();
  }, [data]);

  const click = (user_id) => {
    fetch("http://192.168.1.100:5000/users/" + user_id, {
      method: "DELETE",
      
    })
    .then((res) =>
    res.json(Alert.alert(" USER DELETED!")) )
 
  .catch((err) => console.log(err));
    
  };

  return (
    <View>
      <ImageBackground
        source={require("../images/background.jpg")}
        style={{ height: "100%" }}
      >
        <Searchbar
          style={{ marginLeft: "5%", width: "70%", marginTop: "2%" }}
          placeholder="Search By ID"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Add User");
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontWeight: "normal",
                backgroundColor: "#90fcee",
                width: 55,
                height: 55,
                borderRadius: 20,
                marginLeft: "80%",
                marginTop: "-14%",
                textAlign: "center",
              }}
            >
              {" "}
              +{" "}
            </Text>
          </TouchableOpacity>
        </View>

{/* /////////////////////Flat List///////////////////////////////////// */}

        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginBottom: "2%",
                  marginTop: "1%",
                  marginLeft: "3%",
                  backgroundColor: "#fff",
                  marginRight: "5%",
                  borderRadius: 30,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{flex:3}}>
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: "4%",
                    marginTop: "3%",
                    marginBottom:'3%',
                    fontWeight: "bold",
                  }}
                >
                  {item.user_id + ":" + item.user_name}
                </Text>
                </View>

                
                  <View style={{flex:1}}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Edit User", {
                          id: item.user_id,
                          name: item.user_name,
                          email: item.user_email,
                          password: item.user_password,
                        });
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          marginBottom: "2%",
                          color: "green",
                          marginLeft:'36%',
                          marginTop:'12%'
                        }}
                      >
                        Details
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{flex:1}}>
                    <TouchableOpacity
                      onPress={() => {
                        click(item.user_id);
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          marginBottom: "2%",
                          color: "red",
                          marginLeft:"30%",
                          marginTop:'12%'
                        }}
                      >
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.user_id}
        />
      </ImageBackground>
    </View>
  );
};

export default User;
