import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.rooutes";

export function Routes(){
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}