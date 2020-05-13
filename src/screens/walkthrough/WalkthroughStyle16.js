import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, View} from "react-native";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import SwipeBackView from "../../components/SwipeBack";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";

function WalkthroughStyle16() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    return (
        <SwipeBackView style={{flex: 1, alignItems: 'center', backgroundColor: '#263238'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{height: 70, width: '100%'}}/>
            <FlatList
                ref={flatlistRef}
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={[{id: '1', name: 'satu'}, {id: '2', name: 'dua'}, {id: '3', name: 'tiga'}, {
                    id: '4',
                    name: 'empat'
                }]}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => <PageItem index={index} buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Get Started clicked')}/>}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

const screenWidth = (Dimensions.get('window').width);

function PageItem({index, buttonPress}) {
    return (
        <View style={{
            width: screenWidth - 2,
            marginHorizontal: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 50,
        }}>
            <View style={{
                width: screenWidth - 80,
                backgroundColor: 'white',
                marginHorizontal: 0,
                alignItems: 'center',
                borderRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 3,
                paddingBottom: 10,
            }}>
                <Image source={require('../../assets/icon/ic_headphone_red.png')}
                       style={{height: 100, width: 100, resizeMode: 'contain', marginVertical: 90}}/>
                <Text style={{fontSize: 20, marginBottom: 10}}>Overview</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', paddingHorizontal: 30, paddingBottom: 30}}>Making
                    friends is easy as waving your hand back and forth.</Text>
                <ViewPagerIndicator numPages={4} activeIndex={index} defaultColor='#e0e0e0' activeColor='#e91e63'/>
                <MaterialButton title='GET STARTED' style={{width: screenWidth - 100, height: 50, backgroundColor: '#e91e63', marginTop: 25}}
                                buttonPress={buttonPress}/>
            </View>
        </View>
    );
}

export default WalkthroughStyle16;