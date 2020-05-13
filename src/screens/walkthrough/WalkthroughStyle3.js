import React, {useContext, useRef, useState} from 'react';
import {FlatList, Text, View, Dimensions, Image} from "react-native";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import SwipeBackView from "../../components/SwipeBack";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";

function WalkthroughStyle3() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    return (
        <SwipeBackView style={{flex: 1, alignItems: 'center', backgroundColor: '#f1f5f7'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <FlatList
                ref={flatlistRef}
                contentContainerStyle={{paddingTop: 100}}
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={[{id: '1', name: 'satu'}, {id: '2', name: 'dua'}, {id: '3', name: 'tiga'}, {id: '4',name: 'empat'}]}
                keyExtractor={item => item.id}
                renderItem={({item}) => <PageItem/>}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#e91e63'/>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingTop: 25, paddingBottom: 10}}>
                <MaterialButton title='SIGN UP' style={{flex: 1, height: 50, backgroundColor: 'white', marginRight: 10}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign Up clicked')}/>
                <MaterialButton title='SIGN IN' style={{flex: 1, height: 50, backgroundColor: '#e91e63'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function PageItem() {
    return (
        <View style={{
            width: (Dimensions.get('window').width) - 2,
            height: (Dimensions.get('window').height) - 300,
            marginHorizontal: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{
                width: 224,
                height: 224,
                marginVertical: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 112,
            }}>
                <Image source={require('../../assets/icon/ic_diamond2.png')}
                       style={{height: 100, width: 100, resizeMode: 'contain'}}/>
            </View>
            <Text style={{fontSize: 20, marginBottom: 10}}>Welcome!</Text>
            <Text style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', paddingHorizontal: 30}}>Making friends is easy as waving your
                hand back and forth in easy step.</Text>
        </View>
    );
}

export default WalkthroughStyle3;