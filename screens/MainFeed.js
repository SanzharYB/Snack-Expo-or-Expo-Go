import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { categories, recipes } from "../data/sampleData";
import RecipeCard from "../components/RecipeCard";

export default function MainFeed({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredRecipes = selectedCategory
    ? recipes.filter((recipe) => recipe.category === selectedCategory)
    : recipes;

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === item && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
      <FlatList
        data={filteredRecipes}
        renderItem={({ item }) => (
          <RecipeCard recipe={item} onPress={() => navigation.navigate("RecipeDetails", { recipe: item })} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoryButton: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },
  selectedCategory: {
    backgroundColor: "#ffa726",
  },
  categoryText: {
    fontSize: 16,
  },
});
