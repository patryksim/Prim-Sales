import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import SizeSelector from "../../components/SizeSelector";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";

const screenWidth = Dimensions.get('window').width;

function EcommerceStyle12() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderShopping
                title='Black Faux Leather'
                isHome={false}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                cartPress={() => snackbarRef.current.ShowSnackBarFunction('cart clicked')}
                bgColor='#ff9800'
                shadow={false}
            />
            <ScrollView>
                <View>
                    <FlatList
                        ref={flatlistRef}
                        horizontal
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        legacyImplementation={false}
                        data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}]}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) => <MainItem/>}
                        onViewableItemsChanged={onViewRef.current}
                        viewabilityConfig={viewConfigRef.current}
                    />
                    <View style={{alignItems: 'center', position: 'absolute', bottom: 20, left: 0, right: 0}}>
                        <ViewPagerIndicator size={6} numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#ff9800'/>
                    </View>
                </View>
                <DescriptionItem/>
                <SizeSelectorItem/>
            </ScrollView>
            <ButtonAddToCart onPress={() => snackbarRef.current.ShowSnackBarFunction('add to cart clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function MainItem() {
    let cardMargin = 10;
    let cardWidth = screenWidth - 20;

    return (
        <View style={{
            width: cardWidth,
            margin: cardMargin,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
            backgroundColor: 'white'
        }}>
            <Image style={{height: 300, width: cardWidth}}
                   source={{uri: storageImageUrl('ecommerce', 'ecommerce_12.jpg')}}/>
        </View>
    )
}

function DescriptionItem() {
    let cardMargin = 10;
    let cardWidth = screenWidth - 20;

    return (
        <View style={{
            width: cardWidth,
            marginHorizontal: cardMargin,
            marginBottom: cardMargin,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
            backgroundColor: 'white'
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
                borderBottomWidth: 0.5,
                borderBottomColor: '#e0e0e0',
                marginBottom: 10
            }}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238', marginBottom: 3}}>DESCRIPTION</Text>
            </View>
            <Text style={{fontSize: 14, color: '#9e9e9e', marginHorizontal: 15, marginBottom: 15, lineHeight: 22}}>Weasel the jeeper
                goodness inconsiderately spelled
                so ubiquitous amused knitted and altruistic amiable
                far much toward.</Text>
        </View>
    )
}

function SizeSelectorItem() {
    return (
        <View style={{
            width: screenWidth - 20,
            marginBottom: 10,
            marginHorizontal: 10,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
            backgroundColor: 'white'
        }}>
            <View style={{padding: 15, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0', marginBottom: 10}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238', marginBottom: 3}}>SIZE</Text>
            </View>
            <SizeSelector style={{marginTop: 10, marginBottom: 20}}/>
        </View>
    );
}

function ButtonAddToCart({onPress}) {
    return (
        <TouchableOpacity style={{
            height: 44,
            flexDirection: 'row',
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            backgroundColor: '#ff9800',
        }} onPress={onPress}>
            <Image source={require('../../assets/icon/ic_shoppig_cart.png')}
                   style={{height: 36, width: 36, resizeMode: 'contain'}}/>
            <Text style={{color: 'white'}}>Add to Cart - $225</Text>
        </TouchableOpacity>
    );
}

export default EcommerceStyle12;