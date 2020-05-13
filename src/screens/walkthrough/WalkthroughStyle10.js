import React, {useContext, useRef, useState} from 'react';
import {FlatList, Text, View, Dimensions, Image} from "react-native";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import SwipeBackView from "../../components/SwipeBack";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import {storageImageUrl} from "../../tools/Helpers";

const screenWidth = Dimensions.get('window').width;
const bgHeight = Dimensions.get('window').height * 0.52;
const contentHeight = Dimensions.get('window').height * 0.38;

function WalkthroughStyle10() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    return (
        <SwipeBackView style={{flex: 1, alignItems: 'center', backgroundColor: '#f1f5f7', justifyContent: 'flex-start'}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{flex: 1}}>
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
            </View>
            <View style={{
                height: contentHeight,
                padding: 10,
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20, marginTop: 20, marginBottom: 10}}>Welcome!</Text>
                    <Text style={{
                        fontSize: 14,
                        color: '#9e9e9e',
                        textAlign: 'center',
                        paddingHorizontal: 30,
                        marginBottom: 30
                    }}>Making friends is easy as waving your
                        hand back and forth in easy step.</Text>
                    <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#e91e63'/>
                </View>
                <MaterialButton title='GET STARTED'
                                style={{width: screenWidth - 20, height: 50, backgroundColor: '#e91e63'}}
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
            height: bgHeight,
            marginHorizontal: 1,
            alignItems: 'center',
            justifyContent: 'flex-start'
        }}>
            <Image source={{uri: storageImageUrl('walkthrough', 'walkthrough_10_960.jpg')}}
                   style={{height: bgHeight, width: screenWidth, resizeMode: 'cover'}}/>
        </View>
    );
}

export default WalkthroughStyle10;