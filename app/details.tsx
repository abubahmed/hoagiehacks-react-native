import { SafeAreaView, ScrollView, Text, StyleSheet, Button } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: "My Screen",
          headerRight: () => <Button onPress={() => alert("Right button pressed")} title="Right" color="#007AFF" />,
        }}
      />

      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", padding: 24 }}>
        <Text style={styles.title}>Details Page</Text>
        <Text style={styles.bullet}>- This is a details page</Text>
        <Text style={styles.bullet}>- Full of details</Text>
        <Text style={styles.bullet}>- And more details</Text>
        <Text style={styles.bullet}>- You can add more details here</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  bullet: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: "center",
  },
});
