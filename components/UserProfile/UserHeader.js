import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const UserHeader = (props) => {
  return (
    <View style={styles.header}>
        <View style={styles.topHeader}>
            <View style={styles.imageContainer}>
                <Image
                    // source={{ uri: "https://spoonacular.com/recipeImages/534573-312x231.jpg" }}
                    source={require("../../assets/imgs/headshot.jpg")}
                    style={styles.profileImg}
                />
            </View>
            <View style={styles.userInfoContainer}>
                <Text>50 Recipes</Text>
                <Text>1000 Stars</Text>
                <Text>150 Food Critics</Text>
            </View>
        </View>
        <View>
            <Text>kitakoj18</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "blue",
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "red",
  },
  imageContainer: {
    height: "100%",
    width: 50,
    borderRadius: 40,
    overflow: "hidden",
  },
  userInfoContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImg: {
    height: "100%",
    width: "100%",
  },
  screenNameContainer: {
    justifyContent: "flex-end",
  },
});

export default UserHeader;
