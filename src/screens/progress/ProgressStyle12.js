import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeBackView from "../../components/SwipeBack";
import MaterialButton from "../../components/MaterialButton";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";

const screenWidth = Dimensions.get('window').width;

function ProgressStyle12() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: '#f8f9fb', alignItems: 'center'}}
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
            <ViewPagerIndicator size={6} space={5} numPages={4} activeIndex={page} defaultColor='#ccd2da' activeColor='#ffaf1d'/>
            <MaterialButton title='Continue'
                            style={{width: screenWidth - 40, height: 50, marginTop: 60, marginBottom: 20, backgroundColor: '#2640e8'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Continue clicked')}/>
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
            <Image source={require('../../assets/icon/sun_umbrella_blue.png')}
                   style={{height: 130, width: 145, marginVertical: 50, resizeMode: 'contain'}}/>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>PICK THE TICKET</Text>
            <Text style={{fontSize: 14, color: 'gray', textAlign: 'center', marginTop: 20, paddingHorizontal: 50}}>Select the day, pick your ticket. We give
                you the best prices. Guaranteed!</Text>
        </View>
    );
}

export default ProgressStyle12;