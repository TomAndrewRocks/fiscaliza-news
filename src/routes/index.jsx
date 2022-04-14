import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';
import StackRoutes from "./pages.routes";

export default function Routes() {

    const { user } = useAuth();

    console.log(user)

    return(
        <NavigationContainer>
         <StackRoutes />
        </NavigationContainer>
    )
}
