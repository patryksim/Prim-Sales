import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, View} from "react-native";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import HeaderOneButton from "../../components/HeaderOneButton";

function WalkthroughStyle13() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#263238'}}>
            <HeaderOneButton title='Welcome' bgColor='#e91e63' titleStyle={{textAlign: 'center', paddingRight: 50}}
                             navPress={() => pageContext.pageDispatch({page: 'pop'})} isHome={true}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{height: 290}}>
                    <FlatList
                        ref={flatlistRef}
                        horizontal
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        legacyImplementation={false}
                        data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}]}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) => <PageItem index={index}/>}
                        onViewableItemsChanged={onViewRef.current}
                        viewabilityConfig={viewConfigRef.current}
                    />
                </View>
                <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#e91e63'/>
            </View>
            <View style={{flexDirection: 'row'}}>
                <MaterialButton title='Sign Up' style={{flex: 1, height: 52, backgroundColor: 'white'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign Up clicked')}/>
                <MaterialButton title='Sign In' style={{flex: 1, height: 52, backgroundColor: '#e91e63'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function PageItem({index}) {
    return (
        <View style={{
            width: (Dimensions.get('window').width) - 2,
            marginHorizontal: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image source={require('../../assets/icon/ic_headphone_white.png')}
                   style={{height: 100, width: 100, resizeMode: 'contain', marginVertical: 60}}/>
            <Text style={{fontSize: 20, marginBottom: 10, color: 'white'}}>Welcome!</Text>
            <Text style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', paddingHorizontal: 30, marginBottom: 60}}>Making friends is easy as waving your
                hand back and forth in easy step.</Text>
        </View>
    );
}

export default WalkthroughStyle13;