import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../views/Home";
import InfoCard from "../views/InfoCard";
import Header from "../components/Header";

const { Screen, Navigator } = createNativeStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Home">
                <Screen
                    name="Home"
                    component={Home}
                    options={{
                        header: () => <Header />,
                    }}
                />
                <Screen
                    name="InfoCard"
                    component={InfoCard}
                    options={{
                        headerStyle: {
                            backgroundColor: "#023047",
                        },
                        headerShadowVisible: false,
                        headerTitle: "",
                        headerTintColor: "#FFF",
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};
