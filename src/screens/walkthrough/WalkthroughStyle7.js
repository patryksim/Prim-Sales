import React, {useContext, useRef, useState} from 'react';
import {FlatList, Text, View, Dimensions, Image} from "react-native";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import SwipeBackView from "../../components/SwipeBack";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import {storageImageUrl} from "../../tools/Helpers";

const screenWidth = Dimensions.get('window').width;
const pageItemHeight = (Dimensions.get('window').height) - 250;

function WalkthroughStyle7() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    return (
        <SwipeBackView style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
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
                renderItem={({item}) => <PageItem/>}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#e91e63'/>
            <View style={{paddingBottom: 20, paddingTop: 24}}>
                <MaterialButton
                    title='Sign In'
                    style={{width: screenWidth - 40, height: 50, backgroundColor: '#e91e63'}}
                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}
                />
                <MaterialButton
                    title='Skip'
                    style={{width: screenWidth - 40, height: 50, backgroundColor: 'transparent'}}
                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Skip clicked')}
                />
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function PageItem() {
    return (
        <View style={{
            width: (Dimensions.get('window').width) - 2,
            height: pageItemHeight,
            paddingTop: 30,
            marginHorizontal: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{
                width: 225,
                height: 225,
                marginVertical: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 112,
                overflow: 'hidden'
            }}>
                <Image source={{uri: storageImageUrl('walkthrough', 'walkthrough_7_960.jpg')}}
                       style={{height: 225, width: 225, resizeMode: 'contain'}}/>
            </View>
            <Text style={{fontSize: 20, marginBottom: 10}}>Welcome!</Text>
            <Text
                style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', paddingHorizontal: 30, paddingBottom: 20}}>Making
                friends is easy as waving your
                hand back and forth in easy step.</Text>
        </View>
    );
}

export default WalkthroughStyle7;