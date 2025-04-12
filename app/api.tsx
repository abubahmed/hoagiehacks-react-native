import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";

export default function ApiDemo() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const IPV4_ADDRESS = process.env.EXPO_PUBLIC_IPV4_ADDRESS;
  const API_URL = `http://${IPV4_ADDRESS}:3000`;

  const handleGetMessage = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/message`);
      const data = await res.json();
      setResult(data.message);
    } catch (err) {
      setResult("Error fetching message");
    }
    setLoading(false);
  };

  const handlePostEcho = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/echo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Expo User" }),
      });
      const data = await res.json();
      setResult(data.reply);
    } catch (err) {
      setResult("Error posting data");
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <Stack.Screen
        options={{
          title: "API Demo",
          headerRight: () => <Button title="Reset" onPress={() => setResult(null)} color="#007AFF" />,
        }}
      />
      <ScrollView contentContainerStyle={{ alignItems: "center", padding: 24 }}>
        <Text style={styles.heading}>API Request Demo</Text>

        <TouchableOpacity onPress={handleGetMessage} style={styles.button}>
          <Text style={{ color: "#fff", fontSize: 16 }}>GET /message</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePostEcho} style={styles.button}>
          <Text style={{ color: "#fff", fontSize: 16 }}>POST /echo</Text>
        </TouchableOpacity>

        {loading && <ActivityIndicator size="large" color="#6200ee" style={{ marginVertical: 20 }} />}

        {result && (
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", textAlign: "center" }}>Response:</Text>
            <Text style={{ fontSize: 16, marginTop: 8, textAlign: "center" }}>{result}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  button: {
    marginTop: 12,
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 4,
  },
});
