import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderShopping from "../../components/HeaderShopping";
import ViewPagerIndicator from "../../components/ViewPagerIndicator";

const screenWidth = (Dimensions.get('window').width);

function EcommerceStyle16() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [imageHeight, setImageHeight] = useState(0);
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderShopping
                title='Ecommerce'
                isHome={false}
                searchAction={true}
                moreAction={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                cartPress={() => snackbarRef.current.ShowSnackBarFunction('cart clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff9800'
                shadow={false}
            />
            <View style={{flex: 1}} onLayout={(event) => {
                let {x, y, width, height} = event.nativeEvent.layout;
                setImageHeight(height)
            }}>
                <FlatList
                    ref={flatlistRef}
                    pagingEnabled={true}
                    snapToAlignment={'start'}
                    snapToInterval={imageHeight}
                    decelerationRate={"fast"}
                    showsVerticalScrollIndicator={false}
                    legacyImplementation={false}
                    data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}]}
                    renderItem={({item}) => <ImageItem data={item} height={imageHeight}/>}
                    keyExtractor={(item) => item.id}
                    onViewableItemsChanged={onViewRef.current}
                    viewabilityConfig={viewConfigRef.current}
                />
                <View style={{position: 'absolute', right: 20, top: (imageHeight/2) - 40}}>
                    <ViewPagerIndicator numPages={4} activeIndex={page} defaultColor='#e0e0e0' activeColor='#ff9800' horizontal={false}/>
                </View>
            </View>
            <BottomButton snackbarRef={snackbarRef}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ImageItem({height}) {
    return (
        <View style={{width: screenWidth, height: height}}>
            <Image source={{uri: storageImageUrl('ecommerce', 'ecommerce_16.jpg')}} style={{width: '100%', height: '100%'}}/>
        </View>
    );
}

function BottomButton({snackbarRef}) {
    return (
        <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#263238'}}>Black Faux Leather</Text>
                    <Text style={{fontSize: 14, color: '#9e9e9e', marginTop: 5}}>Women, Dress, Summer</Text>
                </View>
                <Text style={{fontSize: 20, color: '#ff9800'}}>$225</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderTopWidth: 1,
                borderTopColor: '#eaeef0',
                borderBottomWidth: 1,
                borderBottomColor: '#eaeef0'
            }}>
                <ButtonSelector title='SIZE' onPress={() => snackbarRef.current.ShowSnackBarFunction('size clicked')}/>
                <View style={{width: 1, height: '100%', backgroundColor: '#eaeef0'}}/>
                <ButtonSelector title='QUANTITY'
                                onPress={() => snackbarRef.current.ShowSnackBarFunction('quantity clicked')}/>
            </View>
            <ButtonAddToCart onPress={() => snackbarRef.current.ShowSnackBarFunction('add to cart clicked')}/>
        </View>
    );
}

function ButtonSelector({title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 20
        }}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>{title}</Text>
            <Image source={require('../../assets/icon/ic_chevron_right.png')}
                   style={{height: 16, width: 12, tintColor: '#bdbdbd', resizeMode: 'contain'}}/>
        </TouchableOpacity>
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
            <Text style={{color: 'white'}}>Add to Cart</Text>
        </TouchableOpacity>
    );
}

export default EcommerceStyle16;