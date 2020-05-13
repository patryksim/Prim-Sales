import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import SwipeBackView from "../../components/SwipeBack";
import {PageContext} from "../../../App";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import PageSwiper from "../../components/PageSwiper";

const screenWidth = (Dimensions.get('window').width);
const pageItemWidth = screenWidth - 60;
const containerHeight = (Dimensions.get('window').height) - 300;
const pageItemHeight = 370;

function PageItem() {
    return (
        <View style={{
            width: pageItemWidth,
            height: containerHeight,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{
                width: pageItemWidth - 20,
                height: pageItemHeight,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'space-around',
                borderRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 3,
                paddingVertical: 20,
            }}>
                <Image source={require('../../assets/icon/ic_diamond2.png')}
                       style={{height: 100, width: 100, resizeMode: 'contain'}}/>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20, marginBottom: 10}}>Overview</Text>
                    <Text style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', paddingHorizontal: 30}}>Making
                        friends is easy as waving your hand back and forth.</Text>
                </View>
            </View>
        </View>
    );
}

function WalkthroughStyle1() {
    const pageContext = useContext(PageContext);
    const [page, setPage] = useState(0);
    const snackbarRef = useRef(null);

    return (
        <SwipeBackView style={{flex: 1, alignItems: 'center', paddingBottom: 10, backgroundColor: '#f1f5f7'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{height: 100, backgroundColor: '#f1f5f7', alignItems: 'center', paddingTop: 40}}>
                <Text style={{fontSize: 20}}>Welcome!</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
                <PageSwiper
                    containerStyle={{marginBottom: 20}}
                    data={[{id: '1', name: 'satu'}, {id: '2', name: 'dua'}, {id: '3', name: 'tiga'}, {id: '4', name: 'empat'}]}
                    itemWidth={pageItemWidth}
                    itemHeight={pageItemHeight}
                    renderItem={(data, isActive, page) => <PageItem>{setPage(page)}</PageItem>}
                />
                <View style={{position: 'absolute', bottom: 55}}>
                    <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#e91e63'/>
                </View>
            </View>
            <MaterialButton title='GET STARTED'
                            style={{width: screenWidth - 20, height: 50, backgroundColor: '#e91e63'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Get Started clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

export default WalkthroughStyle1;