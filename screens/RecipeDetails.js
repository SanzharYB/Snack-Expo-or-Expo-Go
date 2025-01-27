import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";

export default function RecipeDetails({ route }) {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={recipe.image || require("../assets/placeholder.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.detail}>Category: {recipe.category}</Text>
      <Text style={styles.detail}>Preparation Time: {recipe.prepTime}</Text>
      <Text style={styles.detail}>Servings: {recipe.servings}</Text>
      <Text style={styles.detail}>Calories: {recipe.calories}</Text>
      <Text style={styles.detail}>Difficulty: {recipe.difficulty}</Text>
      <Text style={styles.subtitle}>Ingredients:</Text>
      {recipe.ingredients.map((item, index) => (
        <Text key={index} style={styles.listItem}>
          - {item}
        </Text>
      ))}
      <Text style={styles.subtitle}>Instructions:</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  detail: {
    fontSize: 16,
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
  },
  instructions: {
    fontSize: 16,
    marginTop: 10,
  },
});
