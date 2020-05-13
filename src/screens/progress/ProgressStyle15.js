import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeBackView from "../../components/SwipeBack";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";

function ProgressStyle15() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: '#131a4b', alignItems: 'center', paddingBottom: 42}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <FlatList
                ref={flatlistRef}
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}]}
                keyExtractor={item => item.id}
                renderItem={({item}) => <PageItem page={item.id}/>}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <ViewPagerIndicator size={6} space={5} numPages={4} activeIndex={page} defaultColor='#2e3774' activeColor='white'/>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function PageItem({page}) {
    return (
        <View style={{
            flex: 1,
            width: (Dimensions.get('window').width),
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30
        }}>
            <Image source={require('../../assets/icon/surf.png')}
                   style={{height: 110, width: 152, marginVertical: 80, resizeMode: 'contain'}}/>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>ENJOY HOLIDAY</Text>
            <Text style={{fontSize: 14, color: 'white', opacity: 0.54, textAlign: 'center', marginTop: 20, paddingHorizontal: 50}}>Select the day, pick your ticket. We give
                you the best prices. Guaranteed!</Text>
        </View>
    );
}

export default ProgressStyle15;