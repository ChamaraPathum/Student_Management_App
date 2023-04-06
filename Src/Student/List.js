import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Item,
  ImageBackground,
  Alert,
} from "react-native";
import { Searchbar, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import TabNavigation from "../navigation/TabNavigation";
import Icon from "react-native-vector-icons/Entypo";

const List = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const [data, setData] = useState([]);

  const Loaddate = () => {
    fetch("http://192.168.43.227:5000/students")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    Loaddate();
  }, [data]);

  const click = (std_id) => {
    fetch("http://192.168.43.227:5000/students/" + std_id, {
      method: "DELETE",
    })
      .then((res) => res.json(Alert.alert(" STUDENT DELETED!")))
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
              navigation.navigate("Add Student");
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontWeight: "normal",
                backgroundColor: "#90fcee",
                width: 50,
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

        {/* ////////////Flat lis add////////////////////////////////// */}
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
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 8 }}>
                      <Text
                        style={{
                          fontSize: 20,
                          marginLeft: "4%",
                          marginTop: "-1%",
                          marginBottom: "0%",
                          fontWeight: "bold",
                        }}
                      >
                        {"Std ID : " + item.std_id}
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          marginLeft: "4%",
                          marginTop: "-1%",
                          marginBottom: "0%",
                          fontWeight: "bold",
                        }}
                      >
                        {"Name : " + item.std_name}
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 10 }}>
                          <TouchableOpacity>
                            <Button
                              icon="notebook-edit-outline"
                              mode="text"
                              marginLeft="85%"
                              textColor="#16ab48"
                              onPress={() => {
                                navigation.navigate("Edit Student", {
                                  id: item.std_id,
                                  name: item.std_name,
                                  address: item.std_address,
                                  course: item.std_course,
                                  date: item.std_reg_date,
                                });
                              }}
                            ></Button>
                          </TouchableOpacity>
                        </View>
                        <View style={{ flex: 2 }}>
                          <TouchableOpacity>
                            <Button
                              icon="delete-forever"
                              marginLeft="10%"
                              fontSize="50"
                              mode="text"
                              textColor="red"
                              onPress={() => {
                                click(item.std_id);
                              }}
                            ></Button>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.std_id}
        />
      </ImageBackground>
    </View>
  );
};

export default List;
