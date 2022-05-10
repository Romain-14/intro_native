import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.mainCtn}>
            <StatusBar style="auto" />
            
            <View style={[styles.ctn, styles.ctn1]}>
                <Text>Home Screen</Text>
                <Text>container 1</Text>
            </View>

            <View style={[styles.ctn, styles.ctn2]}>
                <Button title="Go to Blog" onPress={() => navigation.navigate('Blog')}/>
            </View>

            <View style={[styles.ctn, styles.ctn3]}>
                <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')}/>
            </View>

        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    mainCtn: {
        flex: 1,
        backgroundColor: "#333",
    },
	ctn: {
		alignItems: "center",
        justifyContent: "center",
	},
    ctn1: {
        flex: 2,
        backgroundColor: "blue",
    },
    ctn2: {
        flex: 2,
        backgroundColor: "#fff",
    },
    ctn3: {
        flex: 2,
        backgroundColor: "red",
    },
});
