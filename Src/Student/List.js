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

const List = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const [data, setData] = useState([]);

  const Loaddate = () => {
    fetch("http://192.168.1.100:5000/students")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    Loaddate();
  }, [data]);

  const click = (std_id) => {
    fetch("http://192.168.1.100:5000/students/" + std_id, {
      method: "DELETE",
    })
      .then((res) => res.json(Alert.alert(" STUDENT DELETED!")))
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
              navigation.navigate("Add Student");
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

        {/* ////////////Flat lis add////////////////////////////////// */}
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 4,
                    marginBottom: "2%",
                    marginTop: "0%",
                    marginLeft: "3%",
                    backgroundColor: "#fff",
                    marginRight: "5%",
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      marginLeft: "1.5%",
                      marginTop: "3%",
                      marginBottom: "3%",
                      fontWeight: "bold",
                    }}
                  >
                    {item.std_id + " : " + item.std_name}
                  </Text>
                </View>

                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Edit Student", {
                        id: item.std_id,
                        name: item.std_name,
                        address: item.std_address,
                        date: item.std_reg_date,
                        course: item.std_course,
                        image: item.std_image,
                      });
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        marginLeft: "0%",
                        fontWeight: "bold",
                        marginTop: "18%",
                        color: "green",
                      }}
                    >
                      Details
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={() => {
                      click(item.std_id);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        marginRight: "0%",
                        fontWeight: "bold",
                        marginTop: "18%",
                        color: "red",
                      }}
                    >
                      Delete
                    </Text>
                  </TouchableOpacity>
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
