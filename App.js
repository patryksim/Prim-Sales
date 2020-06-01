/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useReducer} from 'react';
import {Dimensions, SafeAreaView, StatusBar, View} from 'react-native';
import Navigation from "./src/navigation/Navigation";
import useBackButton from "./src/hooks/UseBackButton";

import LoginStyle13 from './src/screens/login/LoginStyle13';

import OrdersList from './src/screens/prim/OrdersList';

import HomeScreen from './src/screens/HomeScreen';

export const PageContext = React.createContext();

const initialState = {
    page: 'login13',
    category: 'login',
    pageStack: ['login13', 'activity1', 'menu14', 'ecommerce8', 'ecommerce14','home', 'customerlist', 'orderslist'], 
    info: {} //screens que voy a utilizar en mi app
};

const reducer = (state, action) => {
    let newStack = state.pageStack;
    if (action.page === 'pop'){
        if (newStack.length > 2){
            let lastpage = newStack[newStack.length - 2];
            newStack.pop();
            return {...state, page: lastpage, pageStack: newStack};
        } else if (newStack.length === 2) {
            let lastpage = newStack[newStack.length - 2];
            newStack.pop();
            return {...state, page: lastpage, category: 'none', pageStack: newStack};
        } else {
            return initialState
        }
    } else {
        newStack.push(action.page);
        return {...state, page: action.page, category: action.category, pageStack: newStack, info: action.info};
    }
};

const screenWidth = Dimensions.get('window').width;

const App: () => React$Node = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function backButtonHandler () {
        if (state.category !== 'none'){
            dispatch({page: 'pop'});
            return true;
        } else {
            return false;
        }
    }

    useBackButton(backButtonHandler);

    return (
        <PageContext.Provider value={{pageState: state, pageDispatch: dispatch}}>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: screenWidth, backgroundColor: '#434244'}}>
                        <LoginStyle13/>
                    </View>
                    <Navigation page={state.page}/>
                </View>
            </SafeAreaView>
        </PageContext.Provider>
    );
};

export default App;
