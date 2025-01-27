import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";

export default function RecipeForm({ navigation, route }) {
  const { addRecipe } = route.params;

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [servings, setServings] = useState("");
  const [calories, setCalories] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleSave = () => {
    const newRecipe = {
      name,
      category,
      ingredients: ingredients.split(","),
      instructions,
      prepTime,
      servings,
      calories,
      difficulty,
      image: null,
    };
    addRecipe(newRecipe);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Recipe Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter recipe name"
      />
      <Text style={styles.label}>Category:</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Enter category"
      />
      <Text style={styles.label}>Ingredients (comma-separated):</Text>
      <TextInput
        style={styles.input}
        value={ingredients}
        onChangeText={setIngredients}
        placeholder="Enter ingredients"
      />
      <Text style={styles.label}>Instructions:</Text>
      <TextInput
        style={styles.input}
        value={instructions}
        onChangeText={setInstructions}
        placeholder="Enter instructions"
        multiline
      />
      <Text style={styles.label}>Preparation Time:</Text>
      <TextInput
        style={styles.input}
        value={prepTime}
        onChangeText={setPrepTime}
        placeholder="Enter preparation time"
      />
      <Text style={styles.label}>Servings:</Text>
      <TextInput
        style={styles.input}
        value={servings}
        onChangeText={setServings}
        placeholder="Enter servings"
      />
      <Text style={styles.label}>Calories:</Text>
      <TextInput
        style={styles.input}
        value={calories}
        onChangeText={setCalories}
        placeholder="Enter calories"
      />
      <Text style={styles.label}>Difficulty:</Text>
      <TextInput
        style={styles.input}
        value={difficulty}
        onChangeText={setDifficulty}
        placeholder="Enter difficulty level"
      />
      <Button title="Save Recipe" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});
