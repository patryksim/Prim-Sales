import React, {useContext, useRef, useState} from 'react';
import {FlatList, Text, View, Dimensions, Image} from "react-native";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import SwipeBackView from "../../components/SwipeBack";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import HeaderOneButton from "../../components/HeaderOneButton";

function WalkthroughStyle4() {
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
            <HeaderOneButton title='Welcome' bgColor='#e91e63' titleStyle={{textAlign: 'center', paddingRight: 50}}
                             navPress={() => pageContext.pageDispatch({page: 'pop'})} isHome={true}/>
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
                renderItem={({item, index}) => <PageItem index={index}/>}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <View style={{flexDirection: 'row'}}>
                <MaterialButton title='Sign Up' style={{width: '50%', height: 50, backgroundColor: 'white'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign Up clicked')}/>
                <MaterialButton title='Sign In' style={{width: '50%', height: 50, backgroundColor: '#e91e63'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function PageItem({index}) {
    return (
        <View style={{
            width: (Dimensions.get('window').width) - 2,
            marginHorizontal: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={{
                backgroundColor: 'white',
                marginHorizontal: 40,
                alignItems: 'center',
                borderRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 3,
                paddingBottom: 40,
            }}>
                <View style={{
                    width: 224,
                    height: 224,
                    marginVertical: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius: 112,
                }}>
                    <Image source={require('../../assets/icon/ic_diamond2.png')}
                           style={{height: 100, width: 100, resizeMode: 'contain'}}/>
                </View>
                <Text style={{fontSize: 20, marginBottom: 10}}>Overview</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', paddingHorizontal: 30, paddingBottom: 30}}>Making
                    friends is easy as waving your hand back and forth.</Text>
                <ViewPagerIndicator numPages={4} activeIndex={index} defaultColor='#e0e0e0' activeColor='#e91e63'/>
            </View>
        </View>
    );
}

export default WalkthroughStyle4;