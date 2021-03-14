import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, ScrollView, Image, View } from "react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";

let text;
fetch("https://loripsum.net/api/2/plaintext/long/") // had to duplicate here otherwise it doesn't show the first time this screen loads
  .then((r) => r.text())
  .then((t) => {
    text = t;
  });

function TrombinoscopeDetails({ route }) {
  const navigation = useNavigation();
  const member = route.params.member;
  fetch("https://loripsum.net/api/2/plaintext/long/")
    .then((r) => r.text())
    .then((t) => {
      text = t;
    });
  return (
    <ScrollView>
      <Screen style={styles.container}>
        <Image borderRadius={80} source={{ width: 250, height: 250, uri: member.photo }} />
        <View style={styles.details}>
          <AppText>{member.name}</AppText>
          <AppText>{member.email}</AppText>
          <AppText>ID : {member.id}</AppText>
          <AppText style={{ paddingHorizontal: 10 }}>{text}</AppText>
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  details: {
    textAlign: "center",
  },
});

export default TrombinoscopeDetails;
