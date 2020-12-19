import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main/Index'
import {combineReducers, createStore} from 'redux';
import Contador from './pages/Contador/contador';
import contadorReducer from './components/contadorReducer';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();
const reducers = combineReducers({
    contadorReducerChave: contadorReducer
});

let store = createStore(reducers);

function Routes() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                {/*<Stack.Navigator initialRouteName="Home">*/}
                    {/*<Stack.Screen name={Main.navigationOptions.title} component={Main}/>*/}
                {/*</Stack.Navigator>*/}
                <Stack.Navigator initialRouteName="Contador">
                    <Stack.Screen name={Contador.navigationOptions.title} component={Contador}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default Routes;