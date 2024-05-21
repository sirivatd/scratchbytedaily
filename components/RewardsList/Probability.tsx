import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Probability({ probability }) {
  return (
    <View style={styles.genres}>
          <View style={styles.genre}>
            <Text style={styles.genreText}>{probability}</Text>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  genres: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 4,
  },
  genre: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "#ccc",
    marginRight: 4,
    marginBottom: 4,
  },
  genreText: {
    fontSize: 9,
    opacity: 0.8,
    color: "white",
  },
});
