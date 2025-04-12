import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Switch,
} from "react-native";
import { useRouter, Stack } from "expo-router";

export default function Index() {
  const [name, setName] = useState("");
  const [switchToggle, setSwitchToggle] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <Stack.Screen
        options={{
          title: "My Screen",
          headerLeft: () => (
            <Button onPress={() => alert("Left button pressed")} title="Left" color="#007AFF" />
          ),
          headerRight: () => (
            <Button onPress={() => alert("Right button pressed")} title="Right" color="#007AFF" />
          ),
        }}
      />

      <ScrollView contentContainerStyle={{ alignItems: "center", padding: 24 }}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={styles.image}
        />

        <Text style={styles.heading}>Welcome to React Native!</Text>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
          <Text style={{ marginRight: 10, fontSize: 16 }}>
            {switchToggle ? "On" : "Off"}
          </Text>
          <Switch value={switchToggle} onValueChange={setSwitchToggle} />
        </View>

        <Text style={{ marginBottom: 8, fontSize: 16 }}>Enter your name:</Text>

        <TextInput
          style={styles.input}
          placeholder="Type here"
          placeholderTextColor={"#aaa"}
          value={name}
          onChangeText={setName}
        />

        <Button title="Press Me" onPress={() => alert(`Hello, ${name || "stranger"}!`)} />

        <TouchableOpacity
          style={styles.buttonAlt}
          onPress={() => alert("TouchableOpacity tapped!")}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Tap Me Too</Text>
        </TouchableOpacity>

        <ActivityIndicator size="large" color="#6200ee" style={{ marginVertical: 20 }} />

        <Button title="Go to Details" onPress={() => router.push("/details")} />
        <Button title="Go to API" onPress={() => router.push("/api")} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 16,
    borderRadius: 4,
    fontSize: 16,
  },
  buttonAlt: {
    backgroundColor: "#6200ee",
    padding: 10,
    marginTop: 10,
    borderRadius: 4,
  },
});