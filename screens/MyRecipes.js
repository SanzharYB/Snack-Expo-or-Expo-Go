import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/RecipeForm";
import { recipes } from "../data/sampleData";

export default function MyRecipes({ navigation }) {
  const [myRecipes, setMyRecipes] = useState(recipes);

  const addRecipe = (newRecipe) => {
    setMyRecipes([...myRecipes, { ...newRecipe, id: myRecipes.length + 1 }]);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add New Recipe"
        onPress={() =>
          navigation.navigate("RecipeForm", { addRecipe })
        }
      />
      {myRecipes.length === 0 ? (
        <Text style={styles.noRecipes}>No recipes added yet!</Text>
      ) : (
        <FlatList
          data={myRecipes}
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
  noRecipes: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});
