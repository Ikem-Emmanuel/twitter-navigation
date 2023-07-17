// import { signOut } from "firebase/auth";
import { Text, View } from "react-native";
// import { auth } from "../../firebaseConfig";

const Settings =()=> {
	return (
		<View>
			<Text>Settings</Text>
			{/* <Button
				title="Sign Out"
				onPress={async () => {
					await signOut(auth);
					await AsyncStorage.removeItem("@user");
				}}
			/> */}
		</View>
	);
}

export default Settings
