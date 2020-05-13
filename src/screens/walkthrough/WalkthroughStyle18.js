import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import SwipeBackView from "../../components/SwipeBack";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import {storageImageUrl} from "../../tools/Helpers";
import PageSwiper from "../../components/PageSwiper";

const screenWidth = (Dimensions.get('window').width);
const pageItemWidth = screenWidth - 120;
const pageItemHeight = 434;

function PageItem() {
    return (
        <View style={{
            width: pageItemWidth,
            paddingTop: 20,
            alignItems: 'center',
            justifyContent: 'flex-start'
        }}>
            <Image source={{uri: storageImageUrl('walkthrough', 'walkthrough_15.png')}}
                   style={{height: pageItemHeight, width: pageItemWidth - 20, resizeMode: 'contain'}}/>
        </View>
    );
}

function WalkthroughStyle18() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    return (
        <SwipeBackView style={{flex: 1, alignItems: 'center', backgroundColor: '#263238'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <PageSwiper
                    containerStyle={{height: pageItemHeight}}
                    data={[{id: '1', name: '1'}, {id: '2', name: '2'}, {id: '3', name: '3'}, { id: '4', name: '4' }]}
                    itemWidth={pageItemWidth}
                    itemHeight={pageItemHeight}
                    renderItem={(data, isActive, page) => <PageItem>{setPage(page)}</PageItem>}
                />
            </View>
            <View style={{width: '100%', alignItems: 'center', paddingTop: 50, backgroundColor: 'white'}}>
                <Text style={{fontSize: 20, marginBottom: 10}}>Overview</Text>
                <Text style={{
                    fontSize: 14,
                    color: '#9e9e9e',
                    textAlign: 'center',
                    paddingHorizontal: 40,
                }}>Making friends is easy as waving your hand back and forth.</Text>
                <View style={{flexDirection: 'row', padding: 10, marginTop: 20, alignItems: 'center'}}>
                    <MaterialButton title='SKIP'
                                    style={{flex: 1, height: 44, backgroundColor: 'transparent'}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Skip clicked')}/>
                    <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#e91e63'/>
                    <MaterialButton title='SIGN IN'
                                    style={{flex: 1, height: 44, backgroundColor: 'transparent'}}
                                    titleStyle={{color: '#e91e63'}}
                                    buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

export default WalkthroughStyle18;