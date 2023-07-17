import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, useColorScheme } from "react-native";
import Payments from "./Screens/drawerStack.js/payment";
import TweetDetailScreen from "./Screens/homeStack/TweetDetails";
import Feeds from "./Screens/tabScreens/Feeds";
import Notifications from "./Screens/tabScreens/Notification";
import Settings from "./Screens/tabScreens/Settings";

//TOP TABS
const TopTabs = createMaterialTopTabNavigator();

const TopTapsGroup = () => {
	return (
		<TopTabs.Navigator
			screenOptions={{
				tabBarLabelStyle: {
					textTransform: "capitalize",
					fontWeight: "bold",
				},
				tabBarIndicatorStyle: {
					height: 5,
					borderRadius: 5,
					backgroundColor: "#1DA1F2",
				},
			}}
		>
			<TopTabs.Screen name="Overview" component={Feeds} />
			<TopTabs.Screen name="Following" component={Payments} />
			<TopTabs.Screen name="Not Following" component={Payments} />
		</TopTabs.Navigator>
	);
};

//Stack Navigation
const HomeStack = createNativeStackNavigator();
const HomeStackGroup = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="TabGroup"
				component={TabGroup}
				options={{ headerShown: false }}
			/>
			<HomeStack.Screen
				name="details"
				component={TweetDetailScreen}
				options={{ presentation: "modal" }}
			/>
		</HomeStack.Navigator>
	);
};

// Tab Navigation
const TabNavigation = createBottomTabNavigator();

const TabGroup = ({ navigation }) => {
	return (
		<TabNavigation.Navigator
			screenOptions={({ route, navigation }) => ({
				tabBarIcon: ({ color, focused, size }) => {
					let iconName;
					if (route.name === "Feed") {
						iconName = focused ? "home" : "home-outline";
					} else if (route.name === "notification") {
						iconName = focused ? "notifications" : "notifications-outline";
					} else if (route.name === "setting") {
						iconName = focused ? "settings" : "settings-outline";
					}
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: "#1DA1f2",
				tabBarInactiveTintColor: "gray",
			})}
		>
			<TabNavigation.Screen
				name="Feed"
				options={{
					tabBarLabel: "Feeds",
					headerLeft: () => (
						<Pressable onPress={() => navigation.openDrawer()}>
							<Image
								source={require("./assets/ikem-emmanuel.jpeg")}
								style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
							/>
						</Pressable>
					),
				}}
				component={TopTapsGroup}
			/>
			<TabNavigation.Screen name="notification" component={Notifications} />
			<TabNavigation.Screen name="setting" component={Settings} />
		</TabNavigation.Navigator>
	);
};

//Drawer Navigation
const Drawer = createDrawerNavigator();
const DrawerGroup = () => {
	return (
		<Drawer.Navigator screenOptions={{ headerShown: false }}>
			<Drawer.Screen
				name="HomeStackGroup"
				component={HomeStackGroup}
				options={{
					drawerLabel: "Feeds",
				}}
			/>
			<Drawer.Screen name="Payments" component={Payments} options={{ headerShown: true }} />
		</Drawer.Navigator>
	);
};

const Navigation = () => {
	const currentTheme = useColorScheme();
	return (
		<NavigationContainer theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}>
			<StatusBar style="auto" />
			<DrawerGroup />
		</NavigationContainer>
	);
};

export default Navigation;
