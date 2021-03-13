import React from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Screen from "../components/Screen";
import members from "../members.json";

function Trombinoscope(props) {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Screen style={styles.container}>
        {members.map((member) => (
          <View style={{ width: "45%", margin: "2.5%" }} key={member.id}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => navigation.navigate("TrombinoscopeDetails", { member })}
            >
              <Image borderRadius={50} source={{ width: 150, height: 150, uri: member.photo }} />
              <Text style={{ fontSize: 20, textAlign: "center", marginTop: 7 }}>{member.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
});

export default Trombinoscope;
