import { View, Text, StyleSheet } from "react-native";

export function ItemCard({ userId, title, id }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.userIdContainer}>
        <Text style={styles.userIdText}>{`Created by ${userId}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#ABD9FF",
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  userIdContainer: {
    position: "absolute",
    right: 15,
    bottom: 15,
  },
  userIdText: {
    fontSize: 10,
  },
});
