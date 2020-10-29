import { Entypo, Octicons } from "@expo/vector-icons";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, TouchableOpacity } from "react-native";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.light.tint,
                    shadowOpacity: 0,
                    elevation: 0,
                },
                headerTitleStyle: {
                    color: Colors.light.background,
                    fontWeight: "bold",
                    textAlign: "left",
                },
            }}
        >
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{
                    title: "WhatsApp",

                    headerRight: () => (
                        <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: Colors.light.tint,
                                width: 80,
                                justifyContent: "space-around",
                            }}
                        >
                            <TouchableOpacity activeOpacity={0.8}>
                                <Octicons
                                    name="search"
                                    size={22}
                                    color={Colors.light.background}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Entypo
                                    name="dots-three-vertical"
                                    size={22}
                                    color={Colors.light.background}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
        </Stack.Navigator>
    );
}
