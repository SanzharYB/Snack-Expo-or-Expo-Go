import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/sampleData";

export default function Favorites({ navigation }) {
  const favoriteRecipes = recipes.filter((recipe) => recipe.isFavorite);

  return (
    <View style={styles.container}>
      {favoriteRecipes.length === 0 ? (
        <Text style={styles.noFavorites}>No favorite recipes yet!</Text>
      ) : (
        <FlatList
          data={favoriteRecipes}
          renderItem={({ item }) => (
            <RecipeCard
              recipe={item}
              onPress={() => navigation.navigate("RecipeDetails", { recipe: item })}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  noFavorites: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});
