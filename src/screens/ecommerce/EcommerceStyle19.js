import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderShopping from "../../components/HeaderShopping";
import {storageImageUrl} from "../../tools/Helpers";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";
import SizeSelector from "../../components/SizeSelector";

const screenWidth = (Dimensions.get('window').width);

function EcommerceStyle19() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderShopping
                title='Black Faux Dress'
                isHome={false}
                moreAction={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                cartPress={() => snackbarRef.current.ShowSnackBarFunction('cart clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
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
                        renderItem={({item}) => <Image
                            source={{uri: storageImageUrl('ecommerce', 'ecommerce_19.jpg')}}
                            style={{width: screenWidth, height: 400}}/>}
                        onViewableItemsChanged={onViewRef.current}
                        viewabilityConfig={viewConfigRef.current}
                    />
                    <View style={{alignItems: 'center', position: 'absolute', bottom: 15, left: 0, right: 0}}>
                        <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0'
                                            activeColor='#ff9800'/>
                    </View>
                </View>
                <View style={{borderTopWidth: 1, borderTopColor: '#eaeef0'}}>
                    <SizeSelector style={{margin: 20}}/>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderTopWidth: 1,
                    borderTopColor: '#eaeef0',
                    borderBottomWidth: 1,
                    borderBottomColor: '#eaeef0'
                }}>
                    <ButtonSelectorColor onPress={() => snackbarRef.current.ShowSnackBarFunction('color clicked')}/>
                    <View style={{width: 1, height: '100%', backgroundColor: '#eaeef0'}}/>
                    <ButtonSelectorQuantity
                        onPress={() => snackbarRef.current.ShowSnackBarFunction('quantity clicked')}/>
                </View>
            </ScrollView>
            <ButtonAddToCart onPress={() => snackbarRef.current.ShowSnackBarFunction('add to cart clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ButtonSelectorColor({onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
        }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>COLOR</Text>
            <View style={{width: 36, height: 36, backgroundColor: '#bde2da', borderRadius: 5}}/>
        </TouchableOpacity>
    );
}

function ButtonSelectorQuantity({onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 20
        }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>QUANTITY</Text>
            <Image source={require('../../assets/icon/ic_chevron_right.png')}
                   style={{height: 16, width: 12, tintColor: '#bdbdbd', resizeMode: 'contain'}}/>
        </TouchableOpacity>
    );
}

function ButtonAddToCart({onPress}) {
    return (
        <TouchableOpacity style={{
            height: 52,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            backgroundColor: '#ff9800',
        }} onPress={onPress}>
            <Text style={{color: 'white'}}>
                <Text>Add to Cart</Text>
                <Text style={{fontSize: 20}}> $255</Text>
            </Text>
        </TouchableOpacity>
    );
}

export default EcommerceStyle19;