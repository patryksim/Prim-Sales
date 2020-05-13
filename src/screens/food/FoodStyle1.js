import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import MaterialButton from "../../components/MaterialButton";
import {storageImageUrl} from "../../tools/Helpers";

const screenWidth = Dimensions.get('window').width;

function FoodStyle1 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    return (
        <ImageBackground source={{uri: storageImageUrl('food', 'food_1_bg.jpg')}} style={{flex: 1, backgroundColor: '#f1f5f7', alignItems: 'center'}}>
            <TouchableOpacity style={{width: '100%', padding: 20, alignItems: 'flex-end'}} onPress={() => pageContext.pageDispatch({page: 'pop'})}>
                <Image source={require('../../assets/icon/ic_close.png')} style={{width: 17, height: 17}}/>
            </TouchableOpacity>
            <View style={{flex: 1}}/>
            <View style={{height: 200}}>
                <FlatList
                    ref={flatlistRef}
                    contentContainerStyle={{}}
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
            <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#ff3d00'/>
            <MaterialButton title='GET STARTED'
                            style={{width: screenWidth - 20, height: 50,marginTop: 24, marginBottom: 10, backgroundColor: '#ff3d00'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('Get Started clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

function PageItem({index}) {
    return (
        <View style={{
            width: (Dimensions.get('window').width) - 2,
            marginHorizontal: 1,
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'flex-end',
        }}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: '#263238', marginBottom: 10}}>Overview</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', textAlign: 'center', paddingHorizontal: 50, marginBottom: 30}}>Making friends is easy as waving your
                    hand back and forth in easy step.</Text>
            </View>
        </View>
    );
}

export default FoodStyle1;