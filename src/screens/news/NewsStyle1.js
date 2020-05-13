import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialButton from "../../components/MaterialButton";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import SwipeBackView from "../../components/SwipeBack";
import {storageImageUrl} from "../../tools/Helpers";

const screenWidth = Dimensions.get('window').width;

function NewsStyle1 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    return (
        <SwipeBackView style={{flex: 1}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <ImageBackground source={{uri: storageImageUrl('news', 'news_1_bg.jpg')}}
                             style={{flex: 1, backgroundColor: 'gray', alignItems: 'center'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{height: 400}}>
                        <FlatList
                            ref={flatlistRef}
                            horizontal
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            legacyImplementation={false}
                            data={[{id: '1', name: 'satu'}, {id: '2', name: 'dua'}, {id: '3', name: 'tiga'}, {id: '4',name: 'empat'}]}
                            keyExtractor={item => item.id}
                            renderItem={({item, index}) => <PageItem index={index}/>}
                            onViewableItemsChanged={onViewRef.current}
                            viewabilityConfig={viewConfigRef.current}
                        />
                    </View>
                    <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#cc0001'/>
                </View>
                <MaterialButton title='GET STARTED'
                                style={{width: screenWidth - 20, height: 50, marginBottom: 10, backgroundColor: '#cc0001'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Get Started clicked')}/>
                <MaterialSnackbar ref={snackbarRef}/>
            </ImageBackground>
        </SwipeBackView>
    );
}

function PageItem({index}) {
    return (
        <View style={{
            width: (Dimensions.get('window').width) - 2,
            marginHorizontal: 1,
            paddingTop: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Image source={require('../../assets/icon/ic_diamond_white.png')}
                   style={{height: 100, width: 100, resizeMode: 'contain'}}/>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: 'white', marginBottom: 10}}>Welcome!</Text>
                <Text style={{fontSize: 14, color: 'white', textAlign: 'center', paddingHorizontal: 50, marginBottom: 30}}>Making friends is easy as waving your
                    hand back and forth in easy step.</Text>
            </View>
        </View>
    );
}

export default NewsStyle1;