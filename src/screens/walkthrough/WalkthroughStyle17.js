import React, {useContext, useRef, useState} from 'react';
import {FlatList, Text, View, Dimensions, Image, ImageBackground} from "react-native";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import SwipeBackView from "../../components/SwipeBack";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import {storageImageUrl} from "../../tools/Helpers";

const screenWidth = Dimensions.get('window').width;
const pageItemWidth = (Dimensions.get('window').width - 2);

function WalkthroughStyle17() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    return (
        <ImageBackground source={{uri: storageImageUrl('walkthrough', 'walkthrough_14_960.jpg')}}
                         style={{flex: 1, alignItems: 'center', backgroundColor: '#606466'}}>
            <SwipeBackView style={{padding: 10, alignItems: 'center'}}
                           onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
                <FlatList
                    ref={flatlistRef}
                    horizontal
                    pagingEnabled={true}
                    snapToAlignment={'start'}
                    snapToInterval={pageItemWidth}
                    decelerationRate={"fast"}
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
                <Text style={{fontSize: 20, marginBottom: 10, color: 'white'}}>Welcome!</Text>
                <Text style={{
                    fontSize: 14,
                    color: '#9e9e9e',
                    textAlign: 'center',
                    paddingHorizontal: 30,
                    marginBottom: 30
                }}>Making friends is easy as waving your
                    hand back and forth in easy step.</Text>
                <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#e91e63'/>
                <MaterialButton title='GET STARTED'
                                style={{width: screenWidth - 20, height: 50, backgroundColor: '#e91e63', marginTop: 25}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Get Started clicked')}/>
                <MaterialSnackbar ref={snackbarRef}/>
            </SwipeBackView>
        </ImageBackground>
    );
};

function PageItem() {
    return (
        <View style={{
            width: pageItemWidth,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image source={{uri: storageImageUrl('walkthrough', 'walkthrough_15.png')}}
                   style={{height: 372, width: pageItemWidth, resizeMode: 'contain'}}/>
        </View>
    );
}

export default WalkthroughStyle17;