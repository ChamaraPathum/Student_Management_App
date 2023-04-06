import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Searchbar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";

const User = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const Loaddate = () => {
    fetch("http://192.168.43.227:5000/users")
      .then((response) => response.json())

      .then((json) => setData(json));
  };

  useEffect(() => {
    Loaddate();
  }, [data]);

  const click = (user_id) => {
    fetch("http://192.168.43.227:5000/users/" + user_id, {
      method: "DELETE",
    })
      .then((res) => res.json(Alert.alert(" USER DELETED!")))

      .catch((err) => console.log(err));
  };

  return (
    <View>
      <ImageBackground
        source={require("../images/greenbackground.png")}
        style={{ height: "100%" }}
      >
        <Searchbar
          style={{
            marginLeft: "5%",
            width: "70%",
            marginTop: "2%",
            backgroundColor: "#f1fac0",
          }}
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
          style={{ marginTop: "5%" }}
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginTop: "7%", marginLeft: "4%" }}>
                  <Icon
                    name="user"
                    size={30}
                    color="#029c20"
                    backgroundColor="#fff"
                  />
                </View>

                <View
                  style={{
                    flex: 11,
                    marginBottom: "2%",
                    marginTop: "0%",
                    marginLeft: "5%",
                    backgroundColor: "#cffad8",
                    marginRight: "5%",
                    borderRadius: 15,
                    borderColor: "#fff",
                    borderWidth: 2.5,
                    borderEndWidth: 7,
                    borderEndColor: "#babab8",
                    borderStartColor: "#babab8",
                    borderStartWidth: 7,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        marginLeft: "4%",
                        marginTop: "0%",
                        marginBottom: "0%",
                        fontWeight: "bold",
                      }}
                    >
                      {"User ID : " + item.user_id}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        marginLeft: "4%",
                        marginTop: "0%",
                        marginBottom: "-1%",
                        fontWeight: "bold",
                      }}
                    >
                      {"User Name : " + item.user_name}
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 10 }}>
                      <TouchableOpacity>
                        <Button
                          style={{ marginLeft: "85%" }}
                          icon="notebook-edit-outline"
                          mode="text"
                          textColor="#16ab48"
                          onPress={() => {
                            navigation.navigate("Edit User", {
                              id: item.user_id,
                              name: item.user_name,
                              email: item.user_email,
                              password: item.user_password,
                            });
                          }}
                        ></Button>
                      </TouchableOpacity>
                    </View>

                    <View style={{ flex: 2 }}>
                      <TouchableOpacity>
                        <Button
                          style={{ marginLeft: "10%" }}
                          icon="delete-forever"
                          marginLeft="10%"
                          fontSize="50"
                          mode="text"
                          textColor="red"
                          onPress={() => {
                            click(item.user_id);
                          }}
                        ></Button>
                      </TouchableOpacity>
                    </View>
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
