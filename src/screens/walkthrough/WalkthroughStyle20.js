import React, {useContext, useRef, useState} from 'react';
import {FlatList, Text, View, Dimensions, Image, TouchableOpacity} from "react-native";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import SwipeBackView from "../../components/SwipeBack";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import {storageImageUrl} from "../../tools/Helpers";

const screenWidth = Dimensions.get('window').width;

function WalkthroughStyle20() {
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
            <TouchableOpacity style={{width: '100%', padding: 20, alignItems: 'flex-end'}} onPress={() => pageContext.pageDispatch({page: 'pop'})}>
                <Image source={require('../../assets/icon/ic_close.png')} style={{width: 17, height: 17}}/>
            </TouchableOpacity>
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
            <View style={{padding: 10, alignItems: 'center'}}>
                <Text style={{fontSize: 20, marginBottom: 10}}>Overview</Text>
                <Text style={{
                    fontSize: 14,
                    color: '#9e9e9e',
                    textAlign: 'center',
                    paddingHorizontal: 30,
                    marginBottom: 30
                }}>Making friends is easy as waving your hand back and forth.</Text>
                <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#e91e63'/>
                <MaterialButton title='GET STARTED'
                                style={{width: screenWidth - 20, height: 50, backgroundColor: '#e91e63', marginTop: 25}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Get Started clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function PageItem() {
    return (
        <View style={{
            width: (Dimensions.get('window').width) - 2,
            flex: 1,
            marginHorizontal: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
        }}>
            <Image source={{uri: storageImageUrl('walkthrough', 'walkthrough_20_960.jpg')}}
                   style={{flex: 1, width: screenWidth, resizeMode: 'contain'}}/>
        </View>
    );
}

export default WalkthroughStyle20;