import React, {useContext, useRef, useState} from 'react';
import {FlatList, Text, View, Dimensions, Image} from "react-native";
import MaterialButton from "../../components/MaterialButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import SwipeBackView from "../../components/SwipeBack";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import {storageImageUrl} from "../../tools/Helpers";

function WalkthroughStyle9() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    return (
        <SwipeBackView style={{flex: 1, alignItems: 'center', backgroundColor: '#e91e63'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <View style={{height: 50, width: '100%'}}/>
            <FlatList
                ref={flatlistRef}
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={[{id: '1', name: 'satu'}, {id: '2', name: 'dua'}, {id: '3', name: 'tiga'}, {id: '4',name: 'empat'}]}
                keyExtractor={item => item.id}
                renderItem={({item}) => <PageItem/>}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <ViewPagerIndicator
                numPages={4}
                activeIndex={page}
                defaultColor='#a7a7a7'
                activeColor='white'/>
            <View style={{flexDirection: 'row', padding: 10, marginTop: 24}}>
                <MaterialButton title='SIGN UP' style={{flex: 1, height: 50, backgroundColor: 'white', marginRight: 10}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign Up clicked')}/>
                <MaterialButton title='SIGN IN' style={{flex: 1, height: 50, backgroundColor: 'white'}}
                                buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Sign In clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function PageItem() {
    return (
        <View style={{
            width: (Dimensions.get('window').width) - 2,
            marginHorizontal: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image source={{uri: storageImageUrl('walkthrough', 'walkthrough_9_960.jpg')}}
                   style={{height: 360, width: 200, resizeMode: 'center', marginBottom: 20}}/>
            <Text style={{fontSize: 20, marginBottom: 10, color: 'white'}}>Welcome!</Text>
            <Text style={{fontSize: 14, color: 'white', textAlign: 'center', paddingHorizontal: 30, marginBottom: 20}}>Making friends is easy as waving your
                hand back and forth in easy step.</Text>
        </View>
    );
}

export default WalkthroughStyle9;