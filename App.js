/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useReducer} from 'react';
import {Dimensions, SafeAreaView, StatusBar, View} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import Navigation from "./src/navigation/Navigation";
import useBackButton from "./src/hooks/UseBackButton";

export const PageContext = React.createContext();

const initialState = {
    page: 'home',
    category: 'none',
    pageStack: ['home']
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
        return {...state, page: action.page, category: action.category, pageStack: newStack};
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
                        <HomeScreen/>
                    </View>
                    <Navigation page={state.page}/>
                </View>
            </SafeAreaView>
        </PageContext.Provider>
    );
};

export default App;
