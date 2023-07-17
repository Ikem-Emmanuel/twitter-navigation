import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import TweetContent from "../../components/TweetContents";

const TweetDetailScreen = () => {
	const navigation = useNavigation();

	const route = useRoute();
	const { tweet } = route.params;

	useLayoutEffect(effect => {
		navigation.setOptions({
			headerTitle:  tweet.author.name,
		});
	}, []);
	return (
		<View testID="TweetDetailScreen" style={styles.container}>
			<StatusBar barStyle={"light-content"} />
			<TweetContent tweet={tweet} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default TweetDetailScreen;
